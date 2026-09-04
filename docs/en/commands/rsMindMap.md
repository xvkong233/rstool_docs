# rsMindMap · Mind Map

> Module: Productivity / Productivity

[← Back to command index](/en/commands/)

**Function**: Open the mind map window and support editing/saving/exporting mind maps. The file is .json (RsTool-mindmap v1: title/updatedAt/root tree/view{theme, style, direction, layout}); PNG/SVG export is performed by the back-end pop-up save dialog box.

![rsMindMap main interface (top toolbar + blue "Central Theme" root node of the central canvas + bottom status bar)](../../assets/rsMindMap/image1.png)

> Screenshots and videos may show a Chinese-language interface. Labels and control positions can vary by Rhino or RSTool version.

**Run**: Enter `rsMindMap` in the Rhino command line (opens a settings window).

**Workflow**:

1. Enter rsMindMap on the command line to open the mind map window
2. Double-click on the root node of "Central Topic" to rename; after selecting the node, press Enter to add siblings, Tab to add child nodes, F2 to rename, and Delete to delete.
3. Use the top toolbar to switch between structure (mind map/logical structure/organizational structure/timeline/fishbone diagram, etc.) and color matching (refreshing blue/late night blue, etc.)
4. Use the search box (Ctrl+F) to locate the node; use the scroll wheel to zoom and click "Adapt to Canvas" to view the full image; branches can be expanded/collapsed
5. Ctrl+S to save, Ctrl+Shift+S to save as a .json file; or click "Recent" to open the history file
6. Click PNG / SVG to export the current mind map
7. The status bar displays the saving status, document name and zoom ratio; press Esc or click on the blank space to close the recent/structure/color/search panel.

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| structure | Structure | list | Mind map (two-way) | Mind Map / Logical Structure / Leftward Logical Structure / Organizational Structure / Directory Structure / Timeline / Fishbone Diagram | Toolbar "Structure" drop-down: switch the overall layout direction |
| color matching | ColorTheme | list | refreshing blue | Refreshing blue / late night blue / black background with white nodes / warm sand brown / forest green / violet | Toolbar "Color Color" drop-down: switch node color scheme |

**Notes**: Based on the simple-mind-map engine (the version is displayed in the lower right corner of the status bar).

**Operation**: Left-click to select the node, right-click to drag the canvas; the scroll wheel zooms in reverse, the range is 20%–400%.

**Toolbar** (4 groups of 21 buttons):

| Grouping | Buttons and shortcut keys |
| --- | --- |
| File | New (Ctrl+N) · Open (Ctrl+O) · Recent ▾ · Save (Ctrl+S) · Save as (Ctrl+Shift+S) |
| Edit | Undo (↶ Ctrl+Z) · Redo (↷ Ctrl+Y) · Sibling node (Enter) · Child node (Tab) · Rename (F2) · Delete (Delete) |
| View | Expand · Collapse · Reduce (−) · Zoom in (+) · Fit to canvas · Structure ▾ · Search (Ctrl+F) · Color ▾ |
| Export | PNG · SVG |

**Structure** (6 types in total):

| Name | Direction / Form |
| --- | --- |
| Mind Map | Two-way (Default) |
| Logical structure | Right |
| Leftward logical structure | Leftward |
| Organizational Structure | Tree |
| Directory structure | Tree |
| Timeline | Vertical |
| Fishbone diagram | Horizontal |

**Color Color** (6 sets in total):

| Color | Remarks |
| --- | --- |
| Refreshing Blue | Default |
| Midnight blue | Dark color |
| White nodes on black background | For demonstration purposes |
| Warm sand brown | Warm colors |
| Forest Green | Natural |
| Violet | Purple series |

**Additional Details**:

- Added default text "New Topic" at the same level and "Subtopic" at the sub-level
- Keep up to 10 recent files
- Status bar dot prompts for saving status in real time
- Opening it again after abnormal exit will automatically restore unsaved content
