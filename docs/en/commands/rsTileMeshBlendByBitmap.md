# rsTileMeshBlendByBitmap · Blend Mesh Panels by Bitmap

> Module: Paneling & Facades

[← Back to command index](/en/commands/)

**Function**: The mesh is mixed and laid between units A/B according to the grayscale of the reference object.

> Screenshots and videos may show a Chinese-language interface. Labels and control positions can vary by Rhino or RSTool version.

**Run**: Enter `rsTileMeshBlendByBitmap` in the Rhino command line (opens a settings window).

**Workflow**:

1. Open the mesh Cell Blend (by Map) window
2. Select target mesh, reference polygon, cell A, cell B
3. Select a reference object (Mesh or Brep with color map)
4. Mix according to the grayscale of the reference object
5. Apply/Cancel

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Hide target mesh | Hide target mesh | toggle | false |  |  |
| Rotate reference polygon 90° | Rotate ref polyline 90° | toggle | false |  |  |
| Sampling method | Sample mode | list | UnitA vertex after flow | UnitA vertex / target mesh surface center after flow |  |
| Invert grayscale mapping | Invert grayscale mapping | toggle | false |  |  |
| Combined results mesh | Join result meshes | toggle | false |  |  |
| Unify mesh UV direction | Unify mesh UV direction | toggle | false |  |  |

**Notes**: By default, white is close to TypeA and black is close to TypeB; the reference object must be Mesh or Brep with color map

**Tutorial videos**:

<iframe class="rstool-video" src="https://player.bilibili.com/player.html?isOutside=true&aid=116754609083797&bvid=BV1SqjN6gEDP&cid=39142819268&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" loading="lazy" title="rsTileMeshBlendByBitmap Tutorial video on generating gradient epidermis according to texture"></iframe>
*rsTileMeshBlendByBitmap Tutorial video on generating gradient epidermis according to texture*
