# rsSprinkerBrush · Surface Scatter Brush

> Module: Geometry / Object Transforms

[← Back to command index](/en/commands/)

**Function**: Brush multiple source objects onto surfaces, meshes, or SubDs for vegetation, stones, and other local scatter.

**Run**: Enter `rsSprinkerBrush` in the Rhino command line (opens a settings window).

**Workflow**:

1. Run, pick source objects, then choose the target surfaces.
2. Adjust source weights, brush radius, stamp density, random rotation, and scale.
3. Drag with the left mouse button to paint; Ctrl+left erases scatter from the current preview.
4. Press Enter to create the objects, or Esc to discard the preview.

**Parameters**:

### Sources and brush

Choose what to scatter, coverage, and density before painting. Weights change relative occurrence.

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Source weights | sourceWeight | double | Current per-source values | ≥0; total must be positive | Relative selection probability, not an exact count. |
| Brush radius | radius | double | Initially estimated, then reused | Greater than model tolerance | Document units; controls each stamp’s coverage. |
| Density per stamp | density | int | 10; may reuse last value | 1–1000 | Placement attempts per stamp; spacing and other constraints may reduce the result. |

### Variation and alignment

Rotation, scale, and spacing shape the distribution. Surface alignment helps on slopes; check source orientation first.

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Rotation range | rotation | double | Previous settings | 0–360° | Adds rotation variation. |
| Minimum / maximum scale | scale | double | Previous settings | 0.01–1000000; minimum ≤ maximum | Uniform scale factors, not lengths. |
| Minimum distance | minimumDistance | double | Previous settings | ≥0 | Limits proximity between placement points, not exact geometry collisions. |
| Align to surface | alignToSurface | bool | Previous settings | On / Off | Controls whether source orientation follows the target surface. |
| Random seed | randomSeed | int | Previous settings | Integer | Controls randomness; brush paths and stamp counts also affect the result. |

### Preview and commit

Painting shows a preview; objects are created only on confirmation. Detailed previews cost more with complex source geometry.

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Preview mode | previewMode | list | Previous settings | Box wireframe / Object wireframe / Shaded preview | Box previews are lighter for large models. |

**Notes**: The command name is intentionally documented as rsSprinkerBrush, matching the plugin spelling. Targets are read when selected; reselect after editing them. Settings are saved after a successful commit and the created result can be undone in one operation.
