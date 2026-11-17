# <span class="rstool-command-icon rstool-command-icon--heading" title="rsTileQuadNurbsBlend: toolbar icon" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/light/6eb9fb02-4dd4-5f7c-a0e4-a52310b67e97.png" alt="" width="48" height="48" loading="eager" decoding="async"><img class="rstool-command-icon__dark" src="/command-icons/dark/6eb9fb02-4dd4-5f7c-a0e4-a52310b67e97.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> rsTileQuadNurbsBlend · NURBS Panel Tiling and Blending

> Module: Paneling & Facades

[← Back to command index](/en/commands/)

**Function**: Flow or blend units across NURBS panels, creating an editable rsNurbsFacade by default.

> Screenshots and videos may show a Chinese-language interface. Labels and control positions can vary by Rhino or RSTool version.

**Run**: Enter `rsTileQuadNurbsBlend` in the Rhino command line (opens a settings window).

**Workflow**:

1. Open Tile Quad NURBS Blend and pick the target panels, base surface, and Unit A.
2. Unit B may be the same as A. For a gradient, provide B and attractor curves, then shape the transition with the embedded GraphMapper or a picked mapping curve.
3. Set sampling, Rotate 90°, Reverse Z, and Hide Original Panels while checking the live preview.
4. Keep Generate rsNurbsFacade Object enabled and Apply for an editable facade. Disable it to output ordinary geometry.
5. Select the finished facade to edit it in Properties, or run rsNurbsFacade for the full editor.

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Generate rsNurbsFacade object | Generate rsNurbsFacade object | toggle | true | true / false | Enabled by default. Stores the full inputs and recipe for later editing. Disable for ordinary geometry. |
| Blend sampling | Blend sampling | list | Flowed A Unit Samples | Flowed A Unit Samples / Target Panel Center | Controls how A/B blend weights are sampled. |
| Rotate 90° / Reverse Z | Rotate 90° / Reverse Z | toggle | false | true / false | Adjust the base-surface direction and unit orientation. |
| GraphMapper / mapping curve | GraphMapper / mapping curve | editor | Current panel setting | Embedded editor / Pick curve | Edit the transition in the panel or use a picked mapping curve. |
| Hide panels | Hide panels | toggle | false | true / false | Controls the visibility of original panels during creation. |
| Group faces by index | Group faces by index | toggle | false | true / false | Used for ordinary output or later Bake. Dedicated Explode still outputs complete units. |

**Output**: An editable rsNurbsFacade containing complete units by default, or ordinary geometry when the parametric-output option is disabled.

**Notes**: Creation and editing are separate entries: rsTileQuadNurbsBlend creates a facade and rsNurbsFacade edits it. The original creation command remains available. A/B units must have compatible types and structures; Brep, Mesh, and SubD are supported.

The facade stores its units, base surface, panels, and mapping settings internally, so deleting the original inputs does not remove its editing capability. To edit an internal unit, extract it, make your changes, select the facade again, and use Pick and Update. Extracted objects do not update the facade automatically. For a local replacement, pick a facade position and then an undeformed unit. If newly picked panels cannot be matched to existing local replacements, resolve or explicitly clear those replacements.

Bake retains the parametric facade and adds ordinary geometry. Explode, including rsNurbsFacadeExplode, removes the facade and outputs complete Brep, Mesh, or SubD units; one Undo restores it. Use the dedicated explode tool because Rhino Explode does not directly support this parametric object.

Use Read Geometry in Properties for Make2D, duplicate edges, and duplicate borders without baking first. These tools read the saved result. Duplicate Edges rejects mixed inputs containing Mesh geometry. Current-version 3dm files store parameters and exact results. Bake before copying to another document, placing the result in a block, importing or inserting it elsewhere, saving to an older version, or exchanging it with other software. After a model-unit change, cached geometry can still be displayed, baked, or exploded; restore matching units before rebuilding. Legacy one-shot tiling has no complete recipe and must be recreated from its inputs.

**Tutorial videos**:

<iframe class="rstool-video" src="https://player.bilibili.com/player.html?isOutside=true&aid=116084611026973&bvid=BV16aZCBYETP&cid=36119186485&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" loading="lazy" title="RsTool · NURBS Gradient Skin Generation (Tile Quad NURBS Blend) Demonstration Teaching (Bilibili)"></iframe>
*RsTool · NURBS Gradient Skin Generation (Tile Quad NURBS Blend) Demonstration Teaching (Bilibili)*
