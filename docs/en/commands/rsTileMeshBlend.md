# <span class="rstool-command-icon rstool-command-icon--heading" title="rsTileMeshBlend: toolbar icon" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/light/462c3c2a-68f2-5b33-9dac-ecc23935be39.png" alt="" width="48" height="48" loading="eager" decoding="async"><img class="rstool-command-icon__dark" src="/command-icons/dark/462c3c2a-68f2-5b33-9dac-ecc23935be39.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> rsTileMeshBlend · Mesh Tiling and Blending

> Module: Paneling & Facades

[← Back to command index](/en/commands/)

**Function**: Map units to target meshes, control blending with curves and GraphMapper, and create an editable mesh facade by default.

> Screenshots and videos may show a Chinese-language interface. Labels and control positions can vary by Rhino or RSTool version.

**Run**: Enter `rsTileMeshBlend` in the Rhino command line (opens a settings window).

**Workflow**:

1. Open Tile Mesh Blend and pick the target meshes, reference polygon, and Unit A.
2. B may match A. For A/B blending, provide B and attractor curves, then edit the transition in the panel or pick a mapping curve.
3. Adjust sampling, rotation, and unified UV while checking the live preview.
4. Keep Create Editable rsMeshFacade enabled and Apply. Disable it for the previous ordinary Mesh/SubD output.
5. Select the finished facade and use Properties or rsMeshFacade to edit its parameters, units, and targets.

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Create editable rsMeshFacade | Create editable rsMeshFacade | toggle | true | true / false | Enabled by default for continued editing in Properties. Disable for ordinary Mesh/SubD output. |
| Sample mode | Sample mode | list | Flowed A Unit Samples | Flowed A Unit Samples / Target Face Center | Compute blend weights from flowed-unit samples or target-face centers. |
| Rotate reference polygon 90° | Rotate reference polygon 90° | toggle | false | true / false | Changes the orientation of the mapped units. |
| Unify mesh UV direction | Unify mesh UV direction | toggle | false | true / false | Aligns mesh-face UV directions to reduce orientation changes between faces. |
| Hide target mesh | Hide target mesh | toggle | false | true / false | Controls visibility of the original target meshes during creation. |
| Merge meshes / Group faces by index | Merge meshes / Group faces by index | toggle | false | Either option, or both disabled | Ordinary-output or later Bake options. They cannot be enabled together. |

**Output**: Creates an rsMeshFacade by default. With parametric output disabled, produces ordinary Mesh/SubD geometry with the chosen merge or grouping options.

**Notes**: rsTileMeshBlend and rsTileMeshBlendByColor create the facade; rsMeshFacade edits it later. Bitmap-based rsTileMeshBlendByBitmap keeps its existing workflow and is not included in this parametric output. A mesh facade stores target meshes, vertex colors, the reference polygon, units, and mapping settings internally, so its original inputs may be deleted.

Edit Unit A/B extracts the internal prototype. Color-driven facades also provide Edit Color Mesh: extract the stored target mesh and modify it with rsMeshColorPaint or Rhino. Then select the facade again and use Pick and Update; extracted objects are not automatically linked. Local replacement accepts undeformed Mesh/SubD units. If a new target mesh no longer matches the existing topology or panel identities, explicitly confirm clearing the old overrides; canceling retains the original facade.

Bake retains the facade and adds ordinary geometry. Explode, including rsMeshFacadeExplode, removes it and outputs complete Mesh/SubD units; one Undo restores it. Use the dedicated explode tool instead of Rhino Explode. Merge Meshes and Group Faces by Index are mutually exclusive Bake options. Unsupported mixed-type grouping retains complete units and reports the limitation.

Read Geometry in Properties provides Make2D, Duplicate All Edges, Duplicate Borders, and other operations without baking or removing parameters. Mesh edges are topology line segments; SubD edges are limit-surface curves. Current-version 3dm files store parameters and exact results. Bake before copying to another document, using the result in a block, importing or inserting it elsewhere, or exchanging it with older versions or other software. Cached results remain available after unit changes; restore matching model units before rebuilding.

**Tutorial videos**:

<iframe class="rstool-video" src="https://player.bilibili.com/player.html?isOutside=true&aid=116675823277532&bvid=BV1gTVf6SEWx&cid=38781780987&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" loading="lazy" title="rsTileMeshBlend mesh paving hybrid connection teaching video"></iframe>
*rsTileMeshBlend mesh paving hybrid connection teaching video*
