# <span class="rstool-command-icon rstool-command-icon--heading" title="rsMeshFacade: toolbar icon" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/light/0990a32c-00d2-528d-9505-31928da21d44.png" alt="" width="48" height="48" loading="eager" decoding="async"><img class="rstool-command-icon__dark" src="/command-icons/dark/0990a32c-00d2-528d-9505-31928da21d44.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> rsMeshFacade · Edit a Parametric Mesh Facade

> Module: Paneling & Facades

[← Back to command index](/en/commands/)

::: info Version 2.0

Supports persistent editing of parametric objects in their Properties page. Use the dedicated conversion or explode entry described on the page when ordinary geometry is needed.

[View the 2.0 command changes](/en/commands/v2)

:::

**Function**: Edit distance-driven or vertex-color-driven mesh facades in Properties, including stored units and color-mesh updates.

**Run**: Enter `rsMeshFacade` in the Rhino command line (opens object properties for editing).

**Workflow**:

1. Create a facade with rsTileMeshBlend or rsTileMeshBlendByColor and keep Create Editable rsMeshFacade enabled.
2. Select the facade and run rsMeshFacade to open the Parametric Mesh Facade Properties page. There is no separate editor window.
3. Adjust the distance transition or color sampling and inversion, then preview and Apply Changes.
4. Extract internal units for editing and use Pick and Update to write them back. For a color facade, Edit Color Mesh extracts the stored target for painting and updating.
5. Use the same page for local replacement, geometry reading, and output. Bake retains parameters; Explode converts the result to ordinary units.

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Unit mode | Unit mode | list | Saved facade setting | Single Unit / A/B Blend | Blending requires Unit B. Distance-driven blending also requires attractor curves. |
| Blend sampling | Blend sampling | list | Saved facade setting | Flowed A Unit Samples / Target Face Center | Use samples on the flowed unit or one center weight for each target face. |
| Rotate 90° / Unify UV | Rotate 90° / Unify UV | toggle | Saved facade setting | On / Off | Adjust reference-polygon orientation and align target-face UV directions. |
| Distance / vertex-color controls | Distance / vertex-color controls | conditional | Determined by the creation command | Distance: attractor and mapping curves; Color: sampling and inversion | Distance facades show transition and curve tools. Color facades show Invert Black/White and Edit Color Mesh instead of distance-curve tools. |
| Inputs and prototypes | Inputs and prototypes | action | Stored internal inputs | Replace / Extract and edit / Pick and Update | Manage A/B, the reference polygon, target meshes, and curves. Write extracted edits back explicitly. |
| Local units | Local units | action | No additional override, or saved overrides | Local Replace / Restore Default | Replace a chosen position with an undeformed Mesh/SubD unit. Review override prompts when replacing target meshes. |
| Bake output options | Bake output options | toggle | Saved facade setting | Merge Meshes / Group Faces by Index (mutually exclusive) | These options are mutually exclusive and affect ordinary output. Dedicated Explode always preserves complete units. |

**Output**: Updates rsMeshFacade in place with its Mesh/SubD units and color settings, with optional ordinary output.

**Notes**: rsTileMeshBlend and rsTileMeshBlendByColor create the facade; rsMeshFacade edits it later. Bitmap-based rsTileMeshBlendByBitmap keeps its existing workflow and is not included in this parametric output. A mesh facade stores target meshes, vertex colors, the reference polygon, units, and mapping settings internally, so its original inputs may be deleted.

Edit Unit A/B extracts the internal prototype. Color-driven facades also provide Edit Color Mesh: extract the stored target mesh and modify it with rsMeshColorPaint or Rhino. Then select the facade again and use Pick and Update; extracted objects are not automatically linked. Local replacement accepts undeformed Mesh/SubD units. If a new target mesh no longer matches the existing topology or panel identities, explicitly confirm clearing the old overrides; canceling retains the original facade.

Bake retains the facade and adds ordinary geometry. Explode, including rsMeshFacadeExplode, removes it and outputs complete Mesh/SubD units; one Undo restores it. Use the dedicated explode tool instead of Rhino Explode. Merge Meshes and Group Faces by Index are mutually exclusive Bake options. Unsupported mixed-type grouping retains complete units and reports the limitation.

Read Geometry in Properties provides Make2D, Duplicate All Edges, Duplicate Borders, and other operations without baking or removing parameters. Mesh edges are topology line segments; SubD edges are limit-surface curves. Current-version 3dm files store parameters and exact results. Bake before copying to another document, using the result in a block, importing or inserting it elsewhere, or exchanging it with older versions or other software. Cached results remain available after unit changes; restore matching model units before rebuilding.
