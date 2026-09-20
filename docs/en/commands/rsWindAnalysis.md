# rsWindAnalysis · Wind environment analysis

> Module: Analysis / Building Performance Analysis

[← Back to command index](/en/commands/)

**Function**: Use a modeless panel to calculate 2D concept or 3D wind fields, preview speed colors, a legend and animated trails, and query sample values. Bake the colored mesh, legend and static direction lines to Rhino when ready.

![Updated wind-analysis panel with a horizontal speed slice and white animated trails around buildings](../../assets/rsWindAnalysis/wind-analysis-panel-20260920.png)
*Updated panel and building wind-field preview. Nonlinear low-speed colors and display smoothing are enabled; trails indicate direction only. This example reached its 1200-step cap without convergence and has not been baked; it is a design preview.*

> Screenshots and videos may show a Chinese-language interface. Labels and control positions can vary by Rhino or RSTool version.

**Run**: Enter `rsWindAnalysis` in the Rhino command line (opens a settings window).

**Workflow**:

1. Run rsWindAnalysis to open the modeless panel. Defaults are Simple, Concept2D and Quick; select Expert for all parameters.
2. Use Select / Update Buildings for meshes, Breps, extrusions, SubDs or blocks. Exclude the boundary and previous result planes. Geometry is snapshotted; reselect after editing.
3. Use Select / Update Boundary to select a closed rectangle; its elevation initializes the analysis height. Use a horizontal rectangle for 2D and check the extent and grid preview.
4. Set the direction wind travels toward using the compass or angle, then set inlet speed, analysis height and a quick preset. Use Expert to adjust grids and iteration budgets.
5. Click Calculate / Recalculate. Parameters remain editable during a run, but changes apply to the next calculation. Cancel requests termination.
6. Inspect the speed colors, legend and status. Use Query Speed to read the nearest sample; enable animated trails, display smoothing or grid diagnostics as needed.
7. Click Bake / Write to Document to add the colored mesh, legend and static direction lines with Undo support. Diagnostic views cannot be baked, and each result can be baked only once.

**Parameters**:

### Common settings

These controls remain at the top of the panel. They select the interface level and solver mode and set the direction, inlet speed and analysis height shared by both modes. Simple is intended for quick presets; Expert expands grids, budgets and diagnostics for the active mode.

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| interfaceLevel | interfaceLevel | list | Simple | Simple / Expert | Expert exposes grids, iteration budgets, statistics and diagnostics; switching does not reset parameters. |
| simulationMode | simulationMode | list | Concept2D | Concept2D / EngineeringCFD | 2D constant inflow supports horizontal slices for quick comparisons; 3D includes building height and ground. |
| simplePreset | simplePreset | list | Quick | Quick / Standard / Fine | 2D: 600/1200/2400 steps and passage references of 15/10/6 m; 3D: 120/600/1500 steps. Selecting resets budgets and automatic grids. |
| windDirectionDegrees | windDirectionDegrees | double | 0 (may reuse saved value) | −360–360° | Counterclockwise from world +X: 0° east, 90° north. This is the direction wind travels toward, not the meteorological source direction. Drag the compass to adjust. |
| referenceSpeed | referenceSpeed | double | 3 | 0.01–100 m/s | Constant inflow in 2D; inlet speed at the analysis height in 3D, with a terrain profile at other heights. Not the maximum result speed. |
| analysisHeight | analysisHeight | double | 1.5; updated from boundary height | 0.01–10000 m | World Z of the horizontal slice, not height above a roof. For a tilted 3D slice, the center height is used and this field is disabled. |
| passageWidth | passageWidth | double | By quick preset: 15 / 10 / 6 | 0–10000 m | Expert: user-specified passage width to preserve. Automatic spacing is limited to width / 3; 0 disables the constraint. Manual grids are preserved. |

### Concept2D panel

Concept2D uses a horizontal slice with constant inflow. Solving and display share one 2D grid, making it useful for quick site-plan comparisons. Expert exposes spacing, step cap and residual tolerance. It cannot simulate flow over rooftops.

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| conceptGrid | conceptGrid | double | Automatic | 0.000001–1000000 m | Short boundary edge / 50, constrained by passage width. Shared by solving and display, capped at 800,000 nodes. Halving spacing roughly quadruples nodes. |
| conceptSteps | conceptSteps | integer | By quick preset: 600 / 1200 / 2400 | 20–1000000 | May stop early on residual convergence; reaching the cap does not imply convergence. |
| conceptTolerance | conceptTolerance | double | 0.05% | 0.001–10% | Smaller is stricter; not an error bound for real wind-speed measurements. |

### EngineeringCFD panel

EngineeringCFD builds a 3D voxel wind tunnel containing building heights and ground. Internal solver voxels control geometry capture and computation; the output grid controls only result-slice sampling and display. Statistical runs may take hours and still require convergence, conservation, grid and domain-sensitivity checks.

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| calculationPreset | calculationPreset | list | Quick preview | Quick / Standard / Fine / Statistical / Custom | Step budgets: 120/600/1500/20000; cell budgets: 200k/800k/3M/3M. Updates grids and quality; the first three are previews. |
| roughnessPreset | roughnessPreset | list | Urban | Open / Suburban / Urban / Dense urban | Controls the 3D vertical inlet profile; not a calibrated rough-wall function. |
| qualityMode | qualityMode | list | By 3D preset | Preview / Balanced / Fine | Controls domain margins and safe cell budgets, also limited by the calculation preset. |
| targetVoxelSize | targetVoxelSize | double | By extent, preset and budget | 0.000001–1000000 m | Actual 3D voxel size. Over-budget manual grids stop instead of silently coarsening. Halving spacing roughly multiplies nodes by eight. |
| analysisGridSize | analysisGridSize | double | Short edge / 30, 50 or 100 | 0.000001–1000000 m | 3D output sampling and display only. Refining does not improve solver resolution and usually has little effect on solve time. |
| iterations | iterations | integer | By preset: 120 / 600 / 1500 / 20000 | 20–1000000 | Iteration cap; longer runs do not automatically guarantee convergence. |
| autoIterationBudget | autoIterationBudget | toggle | By 3D preset | On / Off | Estimates steps from warmup and averaging flow passes, bounded by the step cap. |
| warmupFlowPasses | warmupFlowPasses | double | 2 | 0.1–20 | Warmup duration before statistics, in domain flow-through passes. |
| averagingFlowPasses | averagingFlowPasses | double | 2 | 1.5–20 | Target averaging duration after warmup; short previews may never reach this stage. |
| meanTolerance | meanTolerance | double | 2% | 0.01–10% | Threshold for differences between consecutive mean windows. |
| massTolerance | massTolerance | double | 2% | 0.01–10% | Inflow/outflow and conservation threshold; insufficient alone to establish engineering accuracy. |
| paddingScale | paddingScale | double | 1 | 1–5 | Larger margins increase cell count and flow-through time; small margins increase boundary influence. |
| collisionModel | collisionModel | list | TRT + Smagorinsky | BGK / TRT / TRT + Smagorinsky | Basic, two-relaxation-time, or subgrid-dissipation model; selecting one does not validate turbulence accuracy. |
| conservativeVoxelization | conservativeVoxelization | toggle | Off | On / Off | Conservative 3D occupancy can reduce leakage but may block narrow passages. |
| wakeVisualizationEnhancement | wakeVisualizationEnhancement | toggle | Off | On / Off | 3D wake presentation enhancement; not for quantitative evaluation. |

### Display, diagnostics and output

These controls present and inspect results from either mode. Colors, display smoothing and animated trails do not change computed speeds; use point queries to read values. The diagnostic view checks geometry and grids and cannot be baked.

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| colorPresentation | colorPresentation | list | Emphasize low speeds · Nonlinear | Linear / Emphasize low speeds | Changes color mapping only; legend labels remain actual m/s. Recompute after changing. |
| smoothDisplay | smoothDisplay | toggle | On | On / Off | Three display-smoothing passes without crossing obstacles. Does not change speed readings or directions; immediate and preserved by Bake. |
| showDiagnostics | showDiagnostics | toggle | Off | On / Off | Immediately shows geometry/voxel diagnostics instead of speed colors and animated trails; cannot be baked. |
| animate | animate | toggle | On | On / Off | Shows horizontal flow direction; animation speed is not a wind-speed reading. 3D animation starts after completion; tilted slices are unsupported. |
| particleCount | particleCount | integer | 240 | 0–2000 | 0 hides trails; immediate, affects animated preview only, not the number of baked static direction lines. |
| trailLength | trailLength | double | 25 | 1–500 m | Maximum particle trail length, independent of speed values. |
| legendMaximum | legendMaximum | double | 0 | 0–100 m/s | Expert: 0 covers the peak automatically; a low manual cap saturates colors without changing speeds. |
| emptyTunnel | emptyTunnel | toggle | Off | On / Off | Excludes buildings from the computation; 3D retains ground and domain. Does not delete Rhino objects. |
| showGrid | showGrid | toggle | On | On / Off | Temporary grid lines: solver grid in 2D, output grid in 3D; dense grids use a reduced line preview. |

**Notes**: The panel switches its parameter area with the active solver mode. The screenshot shows part of the simple Concept2D interface. Its 48.90-degree direction, 3 m analysis height and 800 trails are example settings rather than defaults.

## Interface layout

- Top: select or update buildings and the analysis boundary; the status line reports the current selection.
- Scrollable center: common settings first, mode-specific Concept2D or EngineeringCFD settings next, then shared display and diagnostic controls.
- Fixed bottom: Calculate, Cancel, Bake, progress, elapsed time and the result summary. Results remain temporary previews until baked; closing the panel clears temporary previews.
- Inspect 3D Solid Occupancy (No Solve): builds solver voxels and compares them with geometry sections without solving the flow or writing objects.
- Restore Automatic Grid Recommendations: exits manual grid sizing for the active mode without changing its iteration budget.
- Query Speed: reports the nearest sample's speed and horizontal components, not an on-site measurement. During calculation it reads a sampled snapshot.

## Reading colors, trails and results

- Nonlinear colors allocate more color range to low speeds; display smoothing does not modify raw speed readings. Dark blue does not mean zero speed: query a point for its value.
- Gray denotes buildings or invalid/unresolved regions, not zero speed. Diagnostic colors mean geometry section (gray), voxel occupancy/unconfirmed thin walls (orange), missed geometry (red), and invalid sampling (purple); none represents wind speed.
- Animated trails indicate horizontal flow direction only. Do not infer speed from their playback rate. 2D uses the latest field; 3D plays only after completion, and tilted slices are unsupported.
- The screenshot reports that the step cap was reached without convergence, so it is a design preview. Open-section, thin-wall or missed-geometry warnings require checking model closure, grids and diagnostics before recalculating.
- Concept2D cannot simulate flow over rooftops. EngineeringCFD also requires empty-tunnel, grid and domain-sensitivity validation. Previews, visual enhancement and unconverged results are not engineering verification or reliable quantitative assessments.

**Tutorial videos**:

<iframe class="rstool-video" src="https://player.bilibili.com/player.html?isOutside=true&aid=115973713567504&bvid=BV1mHzXBxEE6&cid=35672950510&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" loading="lazy" title="RsTool · Wind Analysis Demonstration Teaching (Bilibili)"></iframe>
*RsTool · Wind Analysis Demonstration Teaching (Bilibili)*
