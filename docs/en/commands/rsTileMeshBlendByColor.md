# rsTileMeshBlendByColor · Blend Mesh Panels by Color

> Module: Paneling & Facades

[← Back to command index](/en/commands/)

**Function**: Blended laid mesh between cells A/B by vertex color weights

> Screenshots and videos may show a Chinese-language interface. Labels and control positions can vary by Rhino or RSTool version.

**Run**: Enter `rsTileMeshBlendByColor` in the Rhino command line (opens a settings window).

**Workflow**:

1. Open the mesh Cell Blend by Color window
2. Select target mesh, reference polygon, cell A, cell B
3. After clicking "Start mesh Color Drawing", draw the blending weight by color on the target mesh.
4. Apply/Cancel

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Hide target mesh | Hide target mesh | toggle | false |  |  |
| Rotate reference polygon 90° | Rotate ref polyline 90° | toggle | false |  |  |
| Sampling method | Sample mode | list | UnitA vertex after flow | UnitA vertex / target mesh surface center after flow |  |
| Invert color map | Invert color mapping | toggle | false |  |  |
| Combined results mesh | Join result meshes | toggle | false |  |  |
| Unify mesh UV direction | Unify mesh UV direction | toggle | false |  |  |

**Notes**: By default, white is close to TypeA and black is close to TypeB; if not drawn, the default is white. Based on vertex color as blending weight

**Tutorial videos**:

<iframe class="rstool-video" src="https://player.bilibili.com/player.html?isOutside=true&aid=116675823277532&bvid=BV1gTVf6SEWx&cid=38781780987&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" loading="lazy" title="RsTool · Generate gradient skin by color (Tile Mesh Blend By Color) demonstration tutorial (Bilibili)"></iframe>
*RsTool · Generate gradient skin by color (Tile Mesh Blend By Color) demonstration tutorial (Bilibili)*
