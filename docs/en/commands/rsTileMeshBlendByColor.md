# <span class="rstool-command-icon rstool-command-icon--heading" title="rsTileMeshBlendByColor: toolbar icon" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/light/ff29ba89-dac7-5544-9c86-28be8aadc14f.png" alt="" width="48" height="48" loading="eager" decoding="async"><img class="rstool-command-icon__dark" src="/command-icons/dark/ff29ba89-dac7-5544-9c86-28be8aadc14f.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> rsTileMeshBlendByColor · Vertex-Color-Driven Facade Blending

> Module: Paneling & Facades

[← Back to command index](/en/commands/)

**Function**: Blend A/B units using target-mesh vertex colors and create an rsMeshFacade that supports later color and parameter edits.

> Screenshots and videos may show a Chinese-language interface. Labels and control positions can vary by Rhino or RSTool version.

**Run**: Enter `rsTileMeshBlendByColor` in the Rhino command line (opens a settings window).

**Workflow**:

1. Open Tile Mesh Blend by Color and pick the target meshes, reference polygon, and Units A/B.
2. Use existing vertex colors or start mesh-color painting with rsMeshColorPaint.
3. Adjust sampling, color inversion, rotation, and unified UV. Color mode does not require attractor curves.
4. Keep Create Editable rsMeshFacade enabled and Apply to store the colors, inputs, and result together.
5. Later, adjust sampling or black/white inversion in Properties. Use Edit Color Mesh to repaint the stored target, then Pick and Update.

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Create editable rsMeshFacade | Create editable rsMeshFacade | toggle | true | true / false | Enabled by default for continued editing in Properties. Disable for ordinary Mesh/SubD output. |
| Sample mode | Sample mode | list | Flowed A Unit Samples | Flowed A Unit Samples / Target Face Center | Compute blend weights from flowed-unit samples or target-face centers. |
| Rotate reference polygon 90° | Rotate reference polygon 90° | toggle | false | true / false | Changes the orientation of the mapped units. |
| Unify mesh UV direction | Unify mesh UV direction | toggle | false | true / false | Aligns mesh-face UV directions to reduce orientation changes between faces. |
| Hide target mesh | Hide target mesh | toggle | false | true / false | Controls visibility of the original target meshes during creation. |
| Merge meshes / Group faces by index | Merge meshes / Group faces by index | toggle | false | Either option, or both disabled | Ordinary-output or later Bake options. They cannot be enabled together. |
| Invert color mapping | Invert color mapping | toggle | false | true / false | By default, white approaches A and black approaches B. Inversion swaps them. Targets without vertex colors use A. |

**Output**: Creates an rsMeshFacade with the full target-mesh vertex colors by default, or ordinary Mesh/SubD output when parametric output is disabled.

**Notes**: rsTileMeshBlend and rsTileMeshBlendByColor create the facade; rsMeshFacade edits it later. Bitmap-based rsTileMeshBlendByBitmap keeps its existing workflow and is not included in this parametric output. A mesh facade stores target meshes, vertex colors, the reference polygon, units, and mapping settings internally, so its original inputs may be deleted.

Edit Unit A/B extracts the internal prototype. Color-driven facades also provide Edit Color Mesh: extract the stored target mesh and modify it with rsMeshColorPaint or Rhino. Then select the facade again and use Pick and Update; extracted objects are not automatically linked. Local replacement accepts undeformed Mesh/SubD units. If a new target mesh no longer matches the existing topology or panel identities, explicitly confirm clearing the old overrides; canceling retains the original facade.

Bake retains the facade and adds ordinary geometry. Explode, including rsMeshFacadeExplode, removes it and outputs complete Mesh/SubD units; one Undo restores it. Use the dedicated explode tool instead of Rhino Explode. Merge Meshes and Group Faces by Index are mutually exclusive Bake options. Unsupported mixed-type grouping retains complete units and reports the limitation.

Read Geometry in Properties provides Make2D, Duplicate All Edges, Duplicate Borders, and other operations without baking or removing parameters. Mesh edges are topology line segments; SubD edges are limit-surface curves. Current-version 3dm files store parameters and exact results. Bake before copying to another document, using the result in a block, importing or inserting it elsewhere, or exchanging it with older versions or other software. Cached results remain available after unit changes; restore matching model units before rebuilding.

**Tutorial videos**:

<iframe class="rstool-video" src="https://player.bilibili.com/player.html?isOutside=true&aid=116675823277532&bvid=BV1gTVf6SEWx&cid=38781780987&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" loading="lazy" title="RsTool · Generate gradient skin by color (Tile Mesh Blend By Color) demonstration tutorial (Bilibili)"></iframe>
*RsTool · Generate gradient skin by color (Tile Mesh Blend By Color) demonstration tutorial (Bilibili)*
