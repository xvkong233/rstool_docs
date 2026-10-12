# rsDifferentialGrowth · Differential Growth

> Module: Physics Simulation / Form Finding & Relaxation

[← Back to command index](/en/commands/)

**Function**: Simulate line growth and natural folding inside a planar boundary to create maze and fold patterns. Output smooth curves or simulation polylines on the current layer, with one undo action per bake.

**Run**: Enter `rsDifferentialGrowth` in the Rhino command line (opens a settings window).

**Workflow**:

1. Enter rsDifferentialGrowth and select a closed planar curve without self-intersections as the growth boundary. The boundary may lie on any plane.
2. Choose a pattern preset. An automatic seed is created inside the region by default, or click Pick seed curves to select one or more coplanar curves inside it.
3. Set spacing, growth rate, bending stiffness, and fill density. Click Start to watch the lines grow and fold.
4. Click Pause to inspect the shape, then choose Smooth curves or Simulation polylines. Resume to continue, or Reset to grow again from the beginning.
5. Click Bake curves to add the current result to the current layer. The panel stays open so you can continue simulating and bake other stages. Each bake can be undone in one action.

**Parameters**:

### Pattern preset and initial shape

Choose a preset close to the desired result, then fine-tune. Standard folds is a useful starting point; Broad folds is more open, Dense maze more compact, and Fine folds produces smaller bends. Random seed mainly affects the automatic seed curve.

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Pattern preset | Preset | option | Standard folds | Standard folds / Broad folds / Dense maze / Fine folds / Custom | Applies spacing, growth rate, bending stiffness, and density together. Resets the simulation while retaining the seed and custom seed curves. |
| Random seed | Seed | integer | 1 | 0–2147483647 | Controls small variations in the automatic seed curve. The same conditions and seed reproduce the growth process. Changing it resets the simulation. |

### Growth shape: spacing, folds, and density

As lines grow, mutual avoidance, boundary constraints, and bending stiffness make them fold within the region. Spacing sets the pattern scale, while density controls how much line length to grow.

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Spacing | Spacing | length | Shorter side of the boundary's planar bounding box ÷ 40 | ≥ 20 × document tolerance | Entered in document units; controls minimum spacing between nonlocal segments. Smaller values create finer patterns with more nodes and computation. Changing it resets the simulation. |
| Growth | GrowthRate | percent per simulated second | 20 | 0–200 | Controls target length growth. Zero relaxes without adding length. Adjustable while running; seconds refer to simulated time. |
| Bending stiffness | Bending | ratio | 0.50 | 0–1 | Higher values create smoother, broader folds; lower values allow finer folds. Adjustable while running. |
| Fill density | Density | ratio | 0.55 | 0.05–0.90 | Controls target line length, approximately region area × density ÷ spacing. Higher values allow longer lines. Lowering density does not shorten existing growth; reset to compare from the beginning. |

### Viewing the process and choosing output

Simulation speed controls how quickly you see progress; growth rate controls line growth within the simulation. Pause when satisfied, inspect smooth output, and bake the curves.

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Simulation speed | SimulationSpeed | option | Fast preview | Step by step / Fast preview / Maximum speed | Controls the number of steps computed before refreshing the preview. Step by step shows the process; Maximum speed reaches results faster. The rules for each step remain the same. |
| Output | Output | option | Smooth curves | Smooth curves / Simulation polylines | Live simulation displays polylines. Smooth output is checked when paused or baked. If smoothing fails boundary, spacing, or intersection checks, valid polylines are retained with a message. Switching output pauses the simulation. |

**Notes**:

## Panel buttons

- **Pick boundary**: Choose a new growth region and reinitialize the simulation. Existing custom seed curves are cleared.
- **Pick seed curves**: Start from one or more open or closed curves you have drawn. They must lie inside and on the same plane as the boundary, without self-intersections and with sufficient clearance from each other and the boundary.
- **Use automatic seed**: Clear custom seed curves and create an automatic initial shape.
- **Start / Pause**: Grow the pattern or pause to inspect it. You can resume after pausing.
- **Reset**: Restart with the current settings and seed curves; does not restore every default setting.
- **Bake curves**: Pause and write the current valid preview to the document. Each click adds a separate result, useful for retaining different stages.
- **Close**: End the simulation and clear temporary previews. Baked curves remain.

## Practical tips

Start with Standard folds, then adjust spacing and density. For broad patterns, increase bending stiffness and spacing. For a dense maze, reduce spacing and increase density. Large spacing can prevent a seed from fitting narrow regions; small spacing increases nodes and computation.

The status area shows steps, nodes, total line length, and the stopping reason. Stable growth, insufficient local space, or the 10,000-node limit automatically pauses the simulation while preserving valid results. For crowding, reduce spacing and reset. Lowering density does not automatically shorten existing curves.

Live previews use polylines. Smooth output is checked when paused or baked, with a panel message if polylines are used instead. Switching documents pauses the simulation; after changing document units, pick the boundary again.
