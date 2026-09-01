"""Generate the Export Mesh Alembic (Mesh ABC) component icon (24x24 PNG).

Mirrors the C# CreateIcon() logic in
D:/GitHub/rstool/rstool/Grasshopper/Animation/Alembic/ExportMeshAlembicComponent.cs
so the docs site has a real icon for this new entry.
"""
from PIL import Image, ImageDraw, ImageFont
import os, math

SIZE = 24
ORANGE = (238, 119, 30)
PALE_ORANGE = (135, 238, 119, 30)   # alpha 135 on transparent
FILE_BG = (232, 255, 247, 238)      # alpha 232
TEXT_ORANGE = ORANGE

# Render on a transparent RGBA canvas
img = Image.new('RGBA', (SIZE, SIZE), (0, 0, 0, 0))
draw = ImageDraw.Draw(img, 'RGBA')


def _draw_mesh_frame(x: float, y: float, color: tuple, width: float = 1.4):
    """Replicates DrawMeshFrame: 4-point quad + 2 cross diagonals."""
    p0 = (x, y + 3)
    p1 = (x + 7, y)
    p2 = (x + 9, y + 6)
    p3 = (x + 2, y + 8)
    pts = [p0, p1, p2, p3]
    # Polygon outline
    draw.polygon(pts, outline=color)
    # Diagonals: p0-p2, p1-p3
    draw.line([p0, p2], fill=color, width=1)
    draw.line([p1, p3], fill=color, width=1)


# Background mesh frames
_draw_mesh_frame(2.0, 3.0, PALE_ORANGE, width=1.05)
_draw_mesh_frame(5.0, 6.0, ORANGE, width=1.45)

# File-shape polygon: (12,9), (18,9), (22,13), (22,22), (12,22)
file_pts = [(12.0, 9.0), (18.0, 9.0), (22.0, 13.0), (22.0, 22.0), (12.0, 22.0)]
draw.polygon(file_pts, fill=FILE_BG)
draw.polygon(file_pts, outline=ORANGE)
draw.line([(18.0, 9.0), (18.0, 13.0)], fill=ORANGE, width=1)
draw.line([(18.0, 13.0), (22.0, 13.0)], fill=ORANGE, width=1)

# "ABC" text at (12.6, 15.1)
try:
    # Try Arial Bold at 5.2px equivalent
    font = ImageFont.truetype('arialbd.ttf', 6)
except Exception:
    font = ImageFont.load_default()
draw.text((12.6, 15.1), 'ABC', fill=TEXT_ORANGE, font=font)

# Save as PNG (transparent)
out = r'D:/GitHub/rstool_docs/docs/assets/gh-icons/ExportMeshAlembic_24.png'
os.makedirs(os.path.dirname(out), exist_ok=True)
img.save(out, 'PNG')
print('icon saved:', out, os.path.getsize(out), 'bytes', img.size)