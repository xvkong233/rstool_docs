# rsVectorStudio · Vector Studio

> Module: Productivity / Productivity

[← Back to command index](/en/commands/)

**Function**: Open the Vector Studio window, edit SVG vector graphics, and synchronize with Rhino in two directions (curves/textures/window screenshots/artboard size synchronization)

![RsTool · Vector Studio vector editor main interface](../../assets/rsVectorStudio/image1.png)

> Screenshots and videos may show a Chinese-language interface. Labels and control positions can vary by Rhino or RSTool version.

**Run**: Enter `rsVectorStudio` in the Rhino command line (opens a settings window).

**Workflow**:

1. Enter rsVectorStudio on the command line to open the vector studio window
2. Use the drawing tools on the left (select/pencil/pen/rectangle/circle/text/picture, etc.) to draw on the artboard
3. Use the top toolbar to perform import/export, Boolean operations, path brushes/arrow brushes, capture Rhino windows, and two-way synchronization with Rhino
4. After selecting the element, adjust fill/stroke/gradient/layer in the properties panel on the right
5. Ctrl+S or automatically write back Rhino and local files before closing the window

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Export format | Format | list | png | png / jpeg / webp | Set when exporting: Image output format |
| Zoom | Scale | double | 1.0 | > 0 (Export Size = Source Size × Scale) | Set when exporting: overall scaling |
| Width | Width | int | source size | 1 – 8192 | Settings when exporting: Exactly output according to width and height when specified |
| height | Height | int | source size | 1 – 8192 | Settings when exporting: Exactly output according to width and height when specified |

**Notes**: Based on the svg-edit 7.4.2 engine, the custom function code is in vector-studio-app.js + vector-studio.css.

**Drawing tools on the left** (provided by vendor/Editor.js): Select (V) / pencil / pen / rectangle / rounded rectangle / ellipse / polygon / line / path / text / picture (click to select and drag on the artboard to draw, double-click the multi-segment path or press Enter to close).

**Top toolbar button grouping** (buttonLabels list):

| Category | Button |
| --- | --- |
| File | New · Open · Import · Save · Save As |
| Rhino Bidirectional | Capture viewport · Import view curves · Import from Rhino · Import textures · Send to Rhino · Sync artboard to Rhino |
| Analysis diagram | Path brush (thin end wide · thick end wide · Brush style: thin at both ends/thick starting point/thin starting point) · Arrow brush (straight arrow · two-way · curve · arrow style: triangle · concave · diamond · dot · none · arrow size) |
| Select Transform | Turn Arrow · Turn Double Arrow · Path Brush · Arrow Brush · Lock · Unlock |
| Geometry Boolean | Union · Minus Top · Intersection · Exclude (only closed paths/rectangles/circles/ellipses/polygons/only groups containing them) |
| Path | Path fillet (path consisting only of straight segments; paths containing Bezier are not modified) |
| View operations | Undo · Redo · Snap · Show grid · Align pixels · Scale · Align diagram · Scale diagram · Paper size · Font · Export image |
| Export | PNG · Original image · DPI selection |

**Properties panel on the right**:

| Panel | Field |
| --- | --- |
| Fill | Color · Transparency · Gradient direction (linear / radial) |
| Stroke | Color · Width · Opacity · Connection style · Dashed line type: solid line / dot / dashed line / dot-dash line (line type / phase is entered in "line width multiple", separated by commas, such as 8,4, saved as `data-RsTool-dash-*` attribute to ensure persistence of SVG files) |
| Gradient | Linear · Radial · Gradient type |
| Picture Adjustments | Brightness · Contrast · Saturation · Hue · Grayscale · Desaturate · Black and White · Reset |
| Layers | Switch between adding and deleting the current layer · Visible / locked · After locking, the layer object cannot be clicked on the artboard |

**Bidirectional with Rhino**:

- Import from Rhino — Grab curves or mapped surfaces of selected objects in the document to the artboard
- Send to Rhino — Convert selected curves (polyline/path) and images into Rhino objects
- Capture window - Capture the current view of Rhino according to the scale. You can enter a "width x height" custom resolution (1-8192), automatically center and scale the artboard to align with the screenshot.
- Import view curves - back-project the curve according to the current view window; when the view window changes, a prompt will appear that "may not be fully aligned"
- Synchronize artboards to Rhino - push the artboard outline back to Rhino to sync plane dimensions

**Save and Restore**:

- Ctrl+S writes as SVG text and exports to local (default `untitled.svg`, can be saved as)
- When closing the panel without saving, a confirmation message "Abandon changes?" will pop up.
- After exiting abnormally, the next time you open it, the pop-up "A vector file that was not saved last time was detected. Do you want to restore it?"

**Tutorial videos**:

<iframe class="rstool-video" src="https://player.bilibili.com/player.html?isOutside=true&aid=117089180325416&bvid=BV1yhgW6vEkV&cid=40884506417&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" loading="lazy" title="RsTool · Vector Studio Vector Studio Instruction Video (Bilibili)"></iframe>
*RsTool · Vector Studio Vector Studio Instruction Video (Bilibili)*
