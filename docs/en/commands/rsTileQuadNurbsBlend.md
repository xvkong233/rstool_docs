# rsTileQuadNurbsBlend · Blend Panels on Quad NURBS

> Module: Paneling & Facades

[← Back to command index](/en/commands/)

**Function**: Flow/blend unit objects to the Brep/Surface of each panel surface through Sporph space deformation (grouped after application)

> Screenshots and videos may show a Chinese-language interface. Labels and control positions can vary by Rhino or RSTool version.

**Run**: Enter `rsTileQuadNurbsBlend` in the Rhino command line (opens a settings window).

**Workflow**:

1. Open the Surface Element Blend window
2. Select Panel Surface (Brep, Single Sided)
3. Select flow base (Origin)
4. Select unit A
5. Select unit B (can be the same as A)
6. If A≠B: select interference curve + mapping curve
7. Live orange preview
8. Apply (Group)/Cancel

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Whether to rotate 90° | Rotate 90° | toggle | false |  | Rotate base UV |
| Whether to invert the Z axis | Reverse Z axis | toggle | false |  |  |
| Whether to hide panel surfaces | Hide panels | toggle | false |  |  |

**Notes**: UnitA and UnitB must both be Brep, Mesh or SubD; no value stepper

**Tutorial videos**:

<iframe class="rstool-video" src="https://player.bilibili.com/player.html?isOutside=true&aid=116084611026973&bvid=BV16aZCBYETP&cid=36119186485&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" loading="lazy" title="RsTool · NURBS Gradient Skin Generation (Tile Quad NURBS Blend) Demonstration Teaching (Bilibili)"></iframe>
*RsTool · NURBS Gradient Skin Generation (Tile Quad NURBS Blend) Demonstration Teaching (Bilibili)*
