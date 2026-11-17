# <span class="rstool-command-icon rstool-command-icon--heading" title="rsNurbsFacade: toolbar icon" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/light/6eb9fb02-4dd4-5f7c-a0e4-a52310b67e97.png" alt="" width="48" height="48" loading="eager" decoding="async"><img class="rstool-command-icon__dark" src="/command-icons/dark/6eb9fb02-4dd4-5f7c-a0e4-a52310b67e97.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> rsNurbsFacade · Edit a Parametric NURBS Facade

> Module: Paneling & Facades

[← Back to command index](/en/commands/)

::: info Version 2.0

Supports persistent editing of parametric objects in their Properties page. Use the dedicated conversion or explode entry described on the page when ordinary geometry is needed.

[View the 2.0 command changes](/en/commands/v2)

:::

**Function**: Edit saved NURBS facade units, blend settings, and inputs, with local replacement, Bake, and Explode tools.

**Run**: Enter `rsNurbsFacade` in the Rhino command line (opens a settings window).

**Workflow**:

1. Create the facade with rsTileQuadNurbsBlend and keep Generate rsNurbsFacade Object enabled.
2. Select an existing facade and edit it in the Parametric Facade Properties page, or run rsNurbsFacade for the full editor window.
3. Adjust orientation, sampling, and transition settings. Preview, then Apply Changes; Cancel Changes restores the saved state.
4. Replace inputs directly, or extract internal prototypes, edit them, and use Pick and Update. Use Local Units for individual replacements.
5. Use Read Geometry for drawing operations, or choose Bake or dedicated Explode according to whether the parametric source should remain.

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Unit mode | Unit mode | list | Saved facade setting | Single Unit / A/B Blend | Single Unit uses A only. Add B and attractor curves before enabling A/B blending. |
| Blend sampling | Blend sampling | list | Saved facade setting | Flowed A Unit Samples / Panel Center | Sample the flowed A unit or use one weight at the center of each panel. |
| Rotate 90° / Reverse Z | Rotate 90° / Reverse Z | toggle | Saved facade setting | On / Off | Adjust unit orientation and the Z direction. |
| GraphMapper / mapping curve | GraphMapper / mapping curve | editor | Saved facade setting | Embedded editor / Pick mapping curve | Drag GraphMapper control points to shape the transition, or replace attractor and mapping curves. |
| Inputs and prototypes | Inputs and prototypes | action | Stored internal inputs | Replace / Extract and edit / Pick and Update | Manage A/B, the base surface, panels, and curves. Explicitly write extracted edits back with Pick and Update. |
| Local units | Local units | action | No additional override, or saved overrides | Local Replace / Restore Default | Replace units at chosen positions without changing the global blend distribution elsewhere. |
| Bake / Explode | Bake / Explode | action | Keep parametric facade | Bake / Explode | Bake retains the source facade. Explode removes it and outputs complete units. |

**Output**: Updates the editable rsNurbsFacade in place, with optional ordinary-geometry output.

**Notes**: The facade stores its units, base surface, panels, and mapping settings internally, so deleting the original inputs does not remove its editing capability. To edit an internal unit, extract it, make your changes, select the facade again, and use Pick and Update. Extracted objects do not update the facade automatically. For a local replacement, pick a facade position and then an undeformed unit. If newly picked panels cannot be matched to existing local replacements, resolve or explicitly clear those replacements.

Bake retains the parametric facade and adds ordinary geometry. Explode, including rsNurbsFacadeExplode, removes the facade and outputs complete Brep, Mesh, or SubD units; one Undo restores it. Use the dedicated explode tool because Rhino Explode does not directly support this parametric object.

Use Read Geometry in Properties for Make2D, duplicate edges, and duplicate borders without baking first. These tools read the saved result. Duplicate Edges rejects mixed inputs containing Mesh geometry. Current-version 3dm files store parameters and exact results. Bake before copying to another document, placing the result in a block, importing or inserting it elsewhere, saving to an older version, or exchanging it with other software. After a model-unit change, cached geometry can still be displayed, baked, or exploded; restore matching units before rebuilding. Legacy one-shot tiling has no complete recipe and must be recreated from its inputs.
