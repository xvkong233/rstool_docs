# rsImageStudio · Image Studio

> Module: Productivity / Productivity

[← Back to command index](/en/commands/)

**Function**: Open the RsTool image studio window for bitmap drawing/annotation/export and save

![RsTool Image Studio main interface](../../assets/rsImageStudio/image1.png)
*RsTool image studio main interface (top toolbar 14 items, left drawing toolbar, right property panel including layer editing/mirror measurement/ellipse mode/layer management/edit layer/preview/color/information 8 items, bottom including zoom 50% and canvas adaptation buttons)*

> Screenshots and videos may show a Chinese-language interface. Labels and control positions can vary by Rhino or RSTool version.

**Run**: Enter `rsImageStudio` in the Rhino command line (opens a settings window).

**Workflow**:

1. Enter rsImageStudio on the command line to open the image studio window (title "RsTool Image Studio")
2. Draw, annotate, crop, and color bitmaps in the window, or take a screenshot of the Rhino window and add annotations.
3. After processing, export to PNG/JPEG/WebP, or save as .RsTool-photo project file

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Export format | Format | list | png | png / jpeg / webp | Set when exporting: Image output format |
| Width | Width | int | source size | 1 – Maximum canvas side length | Set when exporting/taking screenshots |
| height | Height | int | source size | 1 – Maximum canvas side length | Set when exporting/taking screenshots |
| Zoom | Scale | double | 1.0 | > 0 | Set when exporting/taking screenshots |

**Notes**: Based on the miniPaint engine, several custom JS extensions are added for functions such as artboard layout, brushes, selections, and rulers.

**Top Toolbar** (14 items, simplify common PhotoShop workflows):

| Button | Function |
| --- | --- |
| Open image | Load bitmap from local file to canvas |
| Import image | Import new layer (does not replace current canvas) |
| Save image v | Export the current canvas as a local image with version number |
| Template | Select the built-in template to apply the artboard layout |
| Capture Rhino | Capture Rhino window screenshot and import (bidirectional with Rhino) |
| Artboard size | Adjustment board/paper size |
| Open project | Open .RsTool-photo project file |
| Save/Save As | Write the current entire image project to disk |
| PNG / JPEG / WebP | Export the current canvas to the corresponding format with one click |

**Drawing toolbar on the left**: MiniPaint’s own pencil/brush/pen/shape/selection/text/stamp and other tools.

**Properties panel on the right** (multiple foldable/independent panels):

| Panel | Purpose |
| --- | --- |
| Layer Editing | Path / Fill Color / Default Black / Stroke W (Capacity 32 px) / Dashed Line Check / Node |
| Mirror measurement | Currently locked visualization layer (including new group, drop-down that does not belong to group) |
| Ellipse blending mode | Composite mode of elliptical strokes (normal/multiply/screen, etc.)|
| Pen Opacity | Stroke Opacity Slider |
| Layer management | Layer list + Add button |
| Edit layer | Editing operations for the currently selected layer (add layer, merge, delete, etc.) |
| Preview | Current canvas window thumbnail; bottom 50% zoom + fit button |
| Color | Palette |
| Information | Mouse coordinates/selection size, etc. |

**Bottom status bar**: Canvas distance (e.g. distance -4096px / 8192px max) + zoom control + adapt button.

**Bi-directional with Rhino**: Use "Capture Rhino" to import Rhino window screenshots to the canvas with one click. It is suitable for exporting after AiRender/rendering with annotations/scale bars/text annotations in ImageStudio.
