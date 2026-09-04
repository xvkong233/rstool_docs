# rsProfileDirector · Profile Director

> Module: Section Management / Profile Director

[← Back to command index](/en/commands/)

**Function**: Generated section sweeps and component/span instances along path array (can be baked as blocks or independent geometries)

![Profile Director main interface: railing preview generated along the path array in the Rhino view on the left, section/component parameter panel on the right](../../assets/rsProfileDirector/image1.png)
*Profile Director main interface (array railing sections and vertical components along a curved path)*

> Screenshots and videos may show a Chinese-language interface. Labels and control positions can vary by Rhino or RSTool version.

**Run**: Enter `rsProfileDirector` in the Rhino command line (opens a settings window).

**Workflow**:

1. Command line input rsProfileDirector
2. Pop up the section path generator window (ProfileDirectorSession/Dialog)
3. Select/draw path curves, pick or define sections (including reference points), add components and spans (set size, spacing, rotation, etc.)
4. Click Preview/Generate to array and bake sections and components along the path

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Section scaling | Profile.Scale | double | 1.0 |  | Overall zoom of section |
| Section rotation | Profile.RotationDegrees | double | 0 |  | Unit: degree |
| Section Z offset (height) | Profile.ProfileHeight | double | 0 |  | Default 0 |
| Section width | Profile.ProfileWidth | double |  |  | Leave blank to use the original section |
| Section depth (height) | Profile.ProfileDepth | double |  |  | Leave blank to use the original section |
| Starting point extension | Profile.StartExtension | double | 0 |  |  |
| end extension | Profile.EndExtension | double | 0 |  |  |
| Component spacing | Component.Spacing | double |  |  | Leave blank to use quantity instead; spacing takes precedence |
| Number of components | Component.Count | integer | 5 | ≥0 |  |
| Component object width | Component.ObjectWidth | double |  |  |  |
| Component object length | Component.ObjectDepth | double |  |  |  |
| Component object height | Component.ObjectHeight | double |  |  |  |
| Component Z offset | Component.PlaneOffset | double | 0 |  |  |
| Component XY Rotation | Component.RotationDegrees | double | 0 |  | Unit: degree |
| span spacing | Span.Spacing | double |  |  | Leave blank to press quantity |
| Cross-piece quantity | Span.Count | integer | 1 | ≥1 |  |
| Cross piece end cutting | Span.EndTrim | double | 0 |  |  |
| span height | Span.Height | double |  |  |  |
| Spanning object width | Span.ObjectWidth | double |  |  |  |
| Spanning object length | Span.ObjectDepth | double |  |  |  |
| Cross-piece plane offset | Span.PlaneOffset | double | 0 |  |  |
| Across piece rotation value | Span.RotationValue | double | 0 |  |  |
| Random offset across pieces | Span.RandomPlaneOffset | double | 0 |  |  |

**Notes**: The window includes path picking/drawing, section library/component library browsing, reference point picking and other interactions; values are input in text boxes, and the default values are mostly 0 or empty; the distribution mode can be based on spacing or quantity

**Tutorial videos**:

<iframe class="rstool-video" src="https://player.bilibili.com/player.html?isOutside=true&aid=116918556236559&bvid=BV1HWNt6FEH5&cid=39940849872&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" loading="lazy" title="RsTool · Profile Director Section Path Array Operation Demonstration (Bilibili)"></iframe>
*RsTool · Profile Director Section Path Array Operation Demonstration (Bilibili)*
