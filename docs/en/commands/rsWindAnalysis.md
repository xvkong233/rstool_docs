# rsWindAnalysis · Wind environment analysis

> Module: Analysis / Building Performance Analysis

[← Back to command index](/en/commands/)

**Function**: Wind speed magnitude vertex shaded mesh + legend (Conceptual 2D); or background CFD calculation results (Engineering mode)

> Screenshots and videos may show a Chinese-language interface. Labels and control positions can vary by Rhino or RSTool version.

**Run**: Enter `rsWindAnalysis` in the Rhino command line (command-line interaction).

**Workflow**:

1. Select simulation mode (Conceptual 2D/Engineering CFD)
2. Conceptual 2D: Select obstacle grid → Enter wind direction (degrees) → Enter inlet wind speed (m/s) → Select rectangular boundary (closed curve) → Enter analysis grid size → Select smooth → Select wake response → Run LBM (fixed 600 steps)
3. Engineering CFD: Select obstacle mesh → Select CFD boundary → Set wind direction/reference wind speed/surface roughness/mass/grid size/voxel size/number of iterations → background calculation
4. Generate wind speed shaded grid and legend (or background CFD job results)

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Simulation mode | simulationMode | list | Concept2D | Concept2D / EngineeringCFD | Conceptual 2D for fast LBM approximation; Engineering CFD for high-quality solutions in the background |
| wind direction angle | windDirectionDegrees | double | _lastWindDirectionDegrees | Angle (degrees) | Incoming flow direction, use the last value |
| Inlet wind speed | inletWindSpeed | double | _lastWindSpeedMetersPerSecond | >0 (m/s) | Conceptual two-dimensional inlet wind speed |
| Analysis grid size | targetGridSize | double | min(border width,border height)/50 | >0 (model units) | Conceptual 2D grid cell size |
| smooth result | smoothingIterations | list | Light | NoSmooth=0 / Light=1 / Medium=3 | Wind speed field smooth intensity |
| wake response | wakeResponseMode | list | Balanced | Stable / Balanced / TurbulentVisual | Wake visualization style |
| Reference wind speed | referenceSpeed | double |  | >0 (m/s) | Reference wind speeds used in engineering CFD models |
| surface roughness | roughnessPreset | list |  | Open / Suburban / Urban / DenseUrban | Engineering CFD Surface Roughness Presets |
| quality mode | qualityMode | list |  | Preview / Balanced / Fine | Engineering CFD mesh quality, which determines the default mesh size and number of iterations |
| CFD grid size | analysisGridSize | double | Default by quality mode | >0 | Engineering CFD plane mesh size |
| voxel size | targetVoxelSize | double |  | >0 | Engineering CFD voxel (3D) dimensions |
| Number of iterations | iterations | integer | Default by quality mode | ≥1 | Engineering CFD solution iteration steps |

**Notes**: Conceptual 2D model LBM with fixed iteration of 600 steps; engineering CFD running in the background.

**Tutorial videos**:

<iframe class="rstool-video" src="https://player.bilibili.com/player.html?isOutside=true&aid=115973713567504&bvid=BV1mHzXBxEE6&cid=35672950510&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" loading="lazy" title="RsTool · Wind Analysis Demonstration Teaching (Bilibili)"></iframe>
*RsTool · Wind Analysis Demonstration Teaching (Bilibili)*
