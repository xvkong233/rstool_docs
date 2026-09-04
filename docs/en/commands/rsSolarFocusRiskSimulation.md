# rsSolarFocusRiskSimulation · Solar Glare Risk Analysis

> Module: Analysis / Building Performance Analysis

[← Back to command index](/en/commands/)

**Function**: Vertex shading mesh + legend reflecting spotlight heat risk or glare time

> Screenshots and videos may show a Chinese-language interface. Labels and control positions can vary by Rhino or RSTool version.

**Run**: Enter `rsSolarFocusRiskSimulation` in the Rhino command line (opens a settings window).

**Workflow**:

1. Select analysis object (Building/Surface Mesh or Brep)
2. Set output type, step size, station elevation, atmospheric clarity and smoothing in the Eto dialog box
3. After confirmation, track the reflection, accumulated heat density or glare time according to the sun's trajectory throughout the day.
4. Generate shaded grid and legend

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Output type | OutputMode | list | HeatDensity | HeatDensity / ReflectionTime | Cumulative heat density/glare (reflection) time |
| time step | StepMinutes | integer | 10 | 1 – 120 | Sun track sampling interval (minutes); static default _lastStepMinutes=10 |
| site altitude | SiteAltitudeMeters | double | 0 | -500 – 9000 (meters) in increments of 10 | Used for atmospheric attenuation calculations |
| atmospheric clarity | AtmosphericClearness | double | 1.0 | 0.5 – 1.5 in 0.05 increments | Default: Ordinary city 0.90 / Sunny countryside 1.05 / Plateau clear sky 1.20; customizable |
| smooth result | SmoothingIterations | list | Light | NoSmooth=0 / Light=1 / Medium=3 | Mesh Result Smoothing Strength |
| gradient color | ColorSchemeIndex | list | 5 | SunlightColorSchemes scheme list | Shared sunshine color scheme, default index 5 |

**Notes**: Depends on document Sun and date; tracks cumulative specular reflection results moment by moment.

**Tutorial videos**:

<iframe class="rstool-video" src="https://player.bilibili.com/player.html?isOutside=true&aid=116673625529139&bvid=BV1FwVd64Err&cid=38766511757&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" loading="lazy" title="RsTool · Solar Focus Risk Simulation Demonstration Teaching (Bilibili)"></iframe>
*RsTool · Solar Focus Risk Simulation Demonstration Teaching (Bilibili)*
