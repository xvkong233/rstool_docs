# rsTileMeshBlend · Blend Panels on Mesh

> Module: Paneling & Facades

[← Back to command index](/en/commands/)

**Function**: Lay unit meshes to target faces (one per face) according to PolyPrism space deformation, which can be merged into a single mesh

> Screenshots and videos may show a Chinese-language interface. Labels and control positions can vary by Rhino or RSTool version.

**Run**: Enter `rsTileMeshBlend` in the Rhino command line (opens a settings window).

**Workflow**:

1. Open the mesh Cell Blend window
2. Select the target mesh (can be multiple)
3. Select the reference polygon (polyline)
4. Select unit A
5. Select unit B (can be the same as A)
6. If A≠B: select interference curve + mapping curve
7. Live orange preview
8. Apply/Cancel

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Hide target mesh | Hide target mesh | toggle | false |  |  |
| Rotate reference polygon 90° | Rotate ref polyline 90° | toggle | false |  |  |
| Sampling method | Sample mode | list | UnitA vertex after flow | UnitA vertex / target mesh surface center after flow |  |
| Combined results mesh | Join result meshes | toggle | false |  |  |
| Unify mesh UV direction | Unify mesh UV direction | toggle | false |  |  |

**Notes**: No numerical stepper; when A=B, it is a single unit flow, and when A≠B, it is mixed according to curve mapping

**Tutorial videos**:

<iframe class="rstool-video" src="https://player.bilibili.com/player.html?isOutside=true&aid=116675823277532&bvid=BV1gTVf6SEWx&cid=38781780987&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" loading="lazy" title="rsTileMeshBlend mesh paving hybrid connection teaching video"></iframe>
*rsTileMeshBlend mesh paving hybrid connection teaching video*
