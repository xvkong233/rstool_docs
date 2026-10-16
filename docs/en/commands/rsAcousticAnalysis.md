# rsAcousticAnalysis · Indoor Acoustic Analysis

> Module: Analysis / Building Performance Analysis

[← Back to command index](/en/commands/)

**Function**: Estimate reverberation and compare indoor acoustic schemes using a closed air volume, materials, sources, and receivers.

**Run**: Enter `rsAcousticAnalysis` in the Rhino command line (opens a settings window).

**Workflow**:

1. In Scene, select a closed Brep/extrusion representing indoor air, then select reflectors, screens, or furniture.
2. Place sources and enter six-band sound power. Generate a horizontal receiver grid or manually place receivers for stepped seating.
3. In Materials, assign frequency-dependent absorption and scattering to enclosure/obstacle faces, marking open exits where appropriate.
4. In Calculation, run the statistical estimate first, use it to choose a trace duration, then run the geometric simulation.
5. In Results, choose a source, band, metric, and receiver. Inspect decay curves, paths, and sampling diagnostics, then bake or export a report.
6. Save the scheme into the current 3dm, then save the Rhino file itself.

**Parameters**:

### Scene: room, sources, and receivers

Select air volume, not wall solids. Keep sources and receiver spheres inside. Use manual receivers for stepped seating. Multiple sources are computed separately, not combined into one field.

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Band sound power Lw | sourcePower | text | 80,80,80,80,80,80 dB | Six comma-separated values | Order: 125/250/500/1000/2000/4000 Hz. Omnidirectional point sources are calculated and viewed separately. |
| Receiver grid spacing | receiverGrid | double | 0.5 m | 0.1–10 m | Smaller spacing adds receivers; regenerate the grid after changing it. |
| Receiver height | receiverHeight | double | 1.2 m | 0.1–100 m | Measured from the room bounding-box bottom. Horizontal grids do not follow steps or slopes. |
| Receiver sphere radius | receiverRadius | double | 0.15 m | 0.02–1 m | Keep receiver spheres inside the air volume and clear of walls and obstacles; radius affects sampling. |

### Materials: absorption, scattering, and openings

Assign enclosure and obstacle materials separately. Band absorption controls energy loss and scattering controls directional spread. Check these before increasing the computation budget.

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Six-band absorption | absorption | double | Initially 0.1 per field; assign per material | 0–1 | Set each band separately; render colors do not define acoustic absorption. |
| Scattering | scattering | double | 0.1 | 0–1 | Controls directional scattering, not absorption. |
| Open exit | openExit | bool | Off | On / Off | Lets energy escape through a face; do not treat it as an ordinary hard wall. |

### Calculation: sampling and environment

Statistical Sabine/Eyring estimates are source-position independent. Geometric simulation then considers paths. Estimate duration first and check decay truncation and sampling afterward.

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Rays per source | rayCount | int | 100000 | 1000–2000000 | More rays improve sampling but do not replace geometry, material, or decay checks. |
| Trace duration | duration | double | 4 s | 0.1–30 s | Short durations can truncate decay tails and make reverberation metrics unavailable. |
| Maximum reflections | bounces | int | 500 | 1–2000 | Paths stop at this limit; assess it together with trace duration. |
| Early image-source order | earlyOrder | int | 1 | 0–2 | Controls early analytic reflections, not an unlimited exact solution. |
| Air absorption | airAbsorption | bool | On | On / Off | Estimates air absorption from temperature and humidity. |
| Temperature / relative humidity | temperatureHumidity | double | 20°C / 50% | −20–50°C / 1–100% | Used when air absorption is enabled. |
| Random seed | seed | int | 73471 | 0–100000000 | Controls ray sampling; keep it fixed for scheme comparisons. |

**Notes**:

### Reading the Results tab

Results include Sabine/Eyring, EDT, T20/T30, C50/C80, D50, approximate LI, decay curves, reflection paths, and discrete maps. LI is not a calibrated absolute SPL. N/A means metric requirements were not met, not zero; check decay tails, duration, ray count, and receiver placement. Reports include HTML and a matching CSV.

### Scope

Use for indoor mid/high-frequency scheme comparisons, not as a replacement for independent professional solvers, measurements, or acceptance testing. Treat low frequencies, especially 125 Hz in small rooms, cautiously. Standing waves, diffraction, sound transmission/isolation, STI, source directivity, WAV auralization, and combined multi-source fields are not included. After storing a scheme in the document, save the 3dm file.
