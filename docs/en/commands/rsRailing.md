# <span class="rstool-command-icon rstool-command-icon--heading" title="rsRailing: toolbar icon" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/light/0d41c225-36fe-5268-8d87-3e72afc8bebe.png" alt="" width="48" height="48" loading="eager" decoding="async"><img class="rstool-command-icon__dark" src="/command-icons/dark/0d41c225-36fe-5268-8d87-3e72afc8bebe.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> rsRailing · Parametric Railing

> Module: Architecture / Building Elements

[← Back to command index](/en/commands/)

::: info Version 2.0

Supports persistent editing of parametric objects in their Properties page. Use the dedicated conversion or explode entry described on the page when ordinary geometry is needed.

[View the 2.0 command changes](/en/commands/v2)

:::

**Function**: Create railings in 15 styles along baseline curves, with editable style, height, spans, and member dimensions in Properties.

![rsRailing Railing parameter window and generation effect](../../assets/rsRailing/image1.png)
*Eto "Parameter Railing" window: Select the basic railing curve and generate railings (including glass/handrails/posts/crossbars) along it. Adjust railing height, column spacing, railing type, and whether to be grouped in the window.*

> Screenshots and videos may show a Chinese-language interface. Labels and control positions can vary by Rhino or RSTool version.

**Run**: Enter `rsRailing` in the Rhino command line (opens a settings window).

**Workflow**:

1. Open Parametric Railing and pick one or more baselines. Straight, curved, polyline, closed, and sloping paths are supported.
2. Choose a style, total height, and maximum span. Expand Advanced Settings for the dimensions relevant to that style.
3. Check the live preview. Keep Create rsRailing Object enabled and Apply to create one editable railing per baseline.
4. Select a single railing and edit its style, height, spans, and advanced settings in its Rhino Properties page. Original baselines can be kept or deleted.
5. Use geometry-reading tools in Properties for 2D drawings or edges. For direct solid editing, choose Convert to Ordinary Objects or run rsRailingToGeometry.

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Railing type | Railing type | list | Glass | Glass / Dense Grid / Horizontal Rods / Offset Glass / Framed Grid / Round Tube / Horizontal Slats / Cross Braced / Vertical Louvers / Base Shoe Glass / Solid Panels / Horizontal Cables / Vertical Cables / Point Fixed Glass / Dual Handrail | 15 styles with thumbnails. Advanced controls depend on the selected style. |
| Total height (m) | Total height (m) | double | 1.1 | 0.01–100 m | Always entered in meters and converted to model units. Leave enough room for the handrail, infill, and bottom clearance. |
| Maximum span (m) | Maximum span (m) | double | 2.5 | 0.01–100 m | A maximum span. Each path segment is divided evenly, so actual post or panel spacing adjusts to its length. |
| Create rsRailing object | Create rsRailing object | toggle | true | true / false | Enabled by default: one independent parametric railing per baseline, without block definitions. Disable for ordinary mesh output. This does not convert existing railings. |
| Group objects | Group objects | toggle | true | true / false | Groups ordinary mesh output separately for each baseline. Not needed in parametric-object mode. |
| Handrail and posts | Handrail and posts | dimensions | Style-specific | Relevant dimensions and switches in the panel | Includes handrail visibility, width or diameter, depth, and post width/depth where applicable. |
| Infill and panels | Infill and panels | dimensions | Style-specific | Horizontal members 1–100; other dimensions as shown | Style-specific controls include infill pitch and dimensions, horizontal-member count, panel thickness, and panel gaps. |
| Bottom clearance / Louver angle | Bottom clearance / Louver angle | dimensions | Style-specific | Clearance ≥0; louver angle −90°–90° | Clearance leaves space below the infill. Rotation angle is shown for louvers only. Adjust overlapping or undersized layouts as prompted. |

**Output**: Creates one editable rsRailing per baseline by default, storing a baseline copy, settings, and exact members. Disabling parametric output creates ordinary meshes.

**Notes**: The original baseline workflow and 15 styles are retained. Version 2.0 adds persistent parametric editing. Advanced settings differ by style; use the controls shown for the selected design. Railings can be moved, copied, mirrored, and scaled, and copied railings can be edited independently.

Run Make2D, Duplicate Edges, or Duplicate Borders from the railing Properties page to retain parameters without conversion. Direct preselection with Rhino commands is not guaranteed to recognize this custom object. For booleans and other ordinary solid edits, use Convert to Ordinary Objects or rsRailingToGeometry. It outputs all exact members of the currently applied design as ordinary closed Breps and removes the parametric source; one Undo restores it.

Current-version 3dm files preserve railing parameters, exact geometry, and appearance. Convert to ordinary geometry before cross-document clipboard operations, import or insertion, older-version output, or third-party exchange. Restore matching model units before parameter editing.
