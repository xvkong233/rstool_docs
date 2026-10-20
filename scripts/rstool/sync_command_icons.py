"""Export documented command icons from the authoritative Rhino toolbar files.

Usage: python sync_command_icons.py --toolbar-root PATH [--write]
Without --write this only audits bindings. Requires Pillow for PNG resizing.
The plugin repository is always read-only; exports go to the docs repository.
"""

import argparse
import base64
import io
import json
import re
import xml.etree.ElementTree as ET
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[2]
SVG = "{http://www.w3.org/2000/svg}"
COMMAND = re.compile(r"^\s*!?\s*(?:_?NoEcho\s+)?[_-]?([A-Za-z][A-Za-z0-9_]*)\b", re.I)


def macro_command(macro):
    match = COMMAND.match(macro.findtext("script") or "") if macro is not None else None
    return match.group(1) if match else None


def icon_bytes(icon, mode):
    image = icon.find(f"{mode}/{SVG}svg/{SVG}image")
    if image is None:
        return None
    href = image.get("href", "")
    if not href.startswith("data:image/png;base64,"):
        raise ValueError(f"Unsupported toolbar icon encoding: {icon.get('guid')}")
    return base64.b64decode(href.split(",", 1)[1])


def bindings(toolbar_root):
    result = {}
    for locale in ("CN", "EN"):
        rui = toolbar_root / "RUI" / f"RSTool_{locale}.rui"
        root = ET.parse(rui).getroot()
        macros = {m.get("guid"): m for m in root.find("macros")}
        icons = {i.get("guid"): i for i in root.find("icons")}
        for toolbar in root.find("tool_bars"):
            for button in toolbar.findall("tool_bar_item"):
                left = macros.get(button.findtext("left_macro_id"))
                # A right-click action uses the visible left-button icon, not an
                # unrelated bitmap on its macro. Preserve that actual UI mapping.
                icon = icons.get(left.get("bitmap_id")) if left is not None else None
                if icon is None or not icon_bytes(icon, "light"):
                    continue
                for side in ("left", "right"):
                    macro = macros.get(button.findtext(f"{side}_macro_id"))
                    name = macro_command(macro)
                    if not name:
                        continue
                    candidate = {
                        "kind": "toolbar" if side == "left" else "toolbar-right",
                        "source": f"RUI/RSTool_{locale}.rui",
                        "iconGuid": icon.get("guid"),
                        "macroGuid": macro.get("guid"),
                        "buttonGuid": button.get("guid"),
                        "buttonCommand": macro_command(left),
                        "image": icon,
                    }
                    # Prefer a dedicated left button, then Chinese toolbar order.
                    key = name.lower()
                    previous = result.get(key)
                    if previous is None or (previous["kind"] == "toolbar-right" and side == "left"):
                        result[key] = candidate
    return result


def save_png(data, target):
    target.parent.mkdir(parents=True, exist_ok=True)
    with Image.open(io.BytesIO(data)) as original:
        image = original.convert("RGBA")
        image.thumbnail((96, 96), Image.Resampling.LANCZOS)
        output = io.BytesIO()
        image.save(output, format="PNG", optimize=True)
    content = output.getvalue()
    if not target.exists() or target.read_bytes() != content:
        target.write_bytes(content)


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--toolbar-root", required=True, type=Path)
    parser.add_argument("--write", action="store_true")
    args = parser.parse_args()
    source = json.loads((ROOT / "scripts/rstool/commands.json").read_text(encoding="utf-8"))
    found = bindings(args.toolbar_root)
    manifest = {"commands": {}}
    counts = {}
    unavailable = []
    shared = []
    for item in source["data"]:
        name = item["name"]
        detail = source["details"][name]
        binding = found.get(name.lower())
        if detail.get("style") == "gh":
            if not detail.get("icon"):
                raise ValueError(f"Grasshopper icon missing: {name}")
            original = (ROOT / "docs" / detail["icon"]).resolve()
            filename = original.name
            entry = {"kind": "grasshopper", "light": f"/command-icons/gh/{filename}"}
            if args.write:
                save_png(original.read_bytes(), ROOT / "docs/public" / entry["light"].lstrip("/"))
        elif binding:
            entry = {key: value for key, value in binding.items() if key != "image"}
            for mode in ("light", "dark"):
                data = icon_bytes(binding["image"], mode)
                if not data:
                    continue
                # GUID filenames deduplicate actions sharing one toolbar button.
                entry[mode] = f"/command-icons/{mode}/{binding['iconGuid']}.png"
                if args.write:
                    save_png(data, ROOT / "docs/public" / entry[mode].lstrip("/"))
            if entry["kind"] == "toolbar-right":
                shared.append({"command": name, "button": entry["buttonCommand"]})
        else:
            # Do not invent associations for settings, logs, or retired commands.
            entry = {"kind": "unavailable"}
            unavailable.append(name)
        manifest["commands"][name] = entry
        counts[entry["kind"]] = counts.get(entry["kind"], 0) + 1

    if args.write:
        target = ROOT / "scripts/rstool/command-icons.json"
        target.write_text(json.dumps(manifest, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(json.dumps({"counts": counts, "rightClick": shared, "noToolbarIcon": unavailable}, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
