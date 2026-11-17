# <span class="rstool-command-icon rstool-command-icon--heading" title="rsNoiseAnalysis: toolbar icon" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/light/e601c36e-aeae-5894-a601-280ea1f88e70.png" alt="" width="48" height="48" loading="eager" decoding="async"><img class="rstool-command-icon__dark" src="/command-icons/dark/e601c36e-aeae-5894-a601-280ea1f88e70.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> rsNoiseAnalysis · Site Noise Analysis

> Module: Analysis / Building Performance Analysis

[← Back to command index](/en/commands/)

**Function**: Preview building-surface LAeq,T maps and baseline-minus-scenario reduction maps. Bake coloured meshes with legends and report area-weighted energy means, maximum levels, and optional above-target area percentages by building. CSV includes every scenario, receiver coordinates, source contributions, and calculation diagnostics.

**Run**: Enter `rsNoiseAnalysis` in the Rhino command line (opens a settings window).

**Workflow**:

1. Run rsNoiseAnalysis in Rhino to open Site Noise Analysis, or use RSTool → Terrain → Analysis.
2. On Scene, select buildings and optional surrounding obstacles. Confirm document units and sampling spacing, then preview receivers and normals to check that arrows point outward.
3. On Sources, choose a preset before selecting points / curves or picking a point-source position. Edit reference levels, distances, and duty factors individually, then Apply Source Settings.
4. Create, duplicate, or rename scenarios on Results. Return to Measures to assign screens and vegetation to Existing baseline measures or Current scenario additions, then apply and preview.
5. Click Calculate All. On Results, compare baseline levels, scenario levels, and reductions; inspect building samples for local values and individual source contributions.
6. Use Bake Result for coloured meshes with legends, or export all scenarios to CSV. Save Settings in 3dm and save the Rhino file to continue later.

**Parameters**:

### Scene: buildings and sampling

Select buildings to analyse and optional surrounding buildings or terrain as obstacles. Surfaces, solids, extrusions, SubD, meshes, and block instances are converted into temporary meshes while preserving originals. Analysed buildings also obstruct themselves and each other. Apply Analysis Settings, then check normals and receivers.

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Spacing | Spacing | double | 2 m | 0.1–100 m | Smaller spacing gives denser facade samples and costs more computation. Start with the default. |
| Receiver offset | ReceiverOffset | double | 0.1 m | 0.001–5 m | Moves receivers outward along analysis normals to keep them outside the wall. |
| Include roofs | IncludeRoofs | bool | Off | On / Off | Facades are analysed by default. Enable to include roof exposure. |
| Flip receiver normals | FlipNormals | bool | Off | On / Off | Use Preview Normals / Receivers first. Arrows should point outward; flip for open geometry if needed. |
| Analysis period | PeriodHours | double | 1 h | 0.01–24 h | Results are LAeq,T for this period. Changing the period does not infer traffic or source duty factors. |
| Temperature | Temperature | double | 20 °C | −20–50 °C | Used for sound speed and, when enabled, air absorption. |
| Relative humidity | Humidity | double | 50% | 1–100% | Used with temperature for air absorption. |
| Air absorption | AirAbsorption | bool | On | On / Off | Estimates octave-band atmospheric attenuation using uniform site conditions. |

### Sources: roads, equipment, and measured input

Multiple sources are combined by energy. Establish the measurement distance and time period before adjusting duty factors. Pick Measurement Reference Point calibrates the selected source at a measured location; Use Default Reference Position restores the default.

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Source preset | Preset | enum | Road · medium scenario | Road low/medium/high, rail, fan, generator, compressor, excavator, jackhammer, crowd, custom point | Choose a preset before adding sources. Roads and rail use curves; equipment and crowds use points or picked positions. |
| Source name / enabled | SourceName | text / bool | Preset name; enabled | Custom name; On / Off | Edit sources individually and click Apply Source Settings. |
| Level type | LevelKind | enum | Preset-dependent | Period average LAeq,T / Operating level or Lmax estimate | Period averages are not duty-corrected again. Operating levels are converted using the duty factor. |
| Reference level | Level | double | Medium road 70 dB(A); otherwise preset-dependent | −100–180 dB(A) | Enter the SPL from this source alone at the reference position, not sound power. Road values 60/70/80 are illustrative scenarios. |
| Level entered / confirmed | LevelProvided | bool | Unconfirmed for rail / crowd; confirmed for other presets | Checked / Unchecked | Rail and crowd presets require measured levels and confirmation; placeholder values are not measurements. |
| Reference distance | ReferenceDistance | double | Road 10 m; equipment presets 15.24 m | 0.5–10000 m (UI) | A finite line source is calibrated as a whole at a horizontal side offset from its arc-length midpoint. A picked measurement reference overrides this default position. |
| Height offset | HeightOffset | double | 0 m | −1000–1000 m | Adds an offset to the selected point or curve height, rather than setting an absolute elevation. |
| Duty factor | Usage | double | Road 100%; otherwise preset-dependent | 0–100% | For operating / Lmax estimates only: equivalent level is approximately L + 10log10(fraction). Zero means no contribution. |
| Octave-band SPL | Spectrum | text | Empty | Eight comma-separated values, −100–180 dB | Enter unweighted SPL at 63/125/250/500/1000/2000/4000/8000 Hz. Entered bands determine the total; empty uses a normalized flat spectrum matching total dB(A). |

### Measures: screens, vegetation, and assignment

Select a scenario on Results before adding measures here. Apply and Preview Measure only previews the measure. Bake Selected Measure Geometry creates display meshes on a separate layer; calculation retains the original input references.

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Measure assignment | MeasureScope | enum | Current scenario additions | Existing baseline measures / Current scenario additions | Existing measures apply to baseline and every scenario. Additions apply only to the current scenario selected on Results. |
| Measure geometry | MeasureGeometry | geometry | User selection | Existing screens or trees; screen curves or closed vegetation regions | Select existing screens or define them with curves and height. Use tree models or horizontal closed regions with height for vegetation. |
| Measure name / enabled | MeasureName | text / bool | Automatic name; enabled | Custom name; On / Off | Copy measures into the current scenario to compare combinations. Apply and preview to check placement. |
| Measure height | Height | double | 3 m | 0.1–200 m | Used for curve-defined measures and existing vegetation with Use model height disabled. Existing screens use their actual geometry. |
| Use model height | UseGeometryHeight | bool | On | On / Off | Uses existing vegetation height for its calculation envelope. Disable to use the Height field. |
| Screen transmission loss | TransmissionLoss | double | 25 dB | 0–100 dB | Controls transmission through a screen and combines with diffraction by energy. It is not a guaranteed reduction at each receiver. |
| Vegetation density | Density | double | 0% | 0–100% | Zero gives no attenuation credit for sparse trees. Dense continuous undergrowth at 100% gives about 5 dB over 30 m, capped at 5 dB; overlap is not double-counted. |
| Vegetation envelope width scale | EnvelopeScale | double | 1 | 0.1–5 | Adjusts the calculation envelope width for existing vegetation, not the tree geometry itself. |

### Results: scenario comparison, maps, and statistics

Calculate All at the bottom computes the baseline and every scenario and can be cancelled. Switch maps, inspect raw receiver levels and individual source contributions, bake result meshes, or export all scenarios to CSV.

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Current scenario / name | Scenario | scenario | Scenario 1 | New, duplicate, rename, remove; keep at least one | Create separate planting, screen, and combined scenarios. Calculate All computes baseline and every scenario together. |
| Display mode | ResultMode | enum | Scenario level | Baseline level / Scenario level / Reduction | Reduction equals baseline minus scenario: green is improvement, red is an increase, white is no change. |
| Level colour scale | ColorRange | double | 35–85 dB(A) | Minimum −100–179; maximum at least 1 higher and no greater than 180 | All scenarios share the level scale. Reduction maps use a separate signed scale. |
| Smooth display only | SmoothDisplay | bool | Off | On / Off | Changes display only, not raw receiver values or statistics. Apply with Update Display and Statistics. |
| Area target / target level | TargetLevel | bool / double | Disabled; field 55 dB(A) | On / Off; 0–180 dB(A) | Reports the sampled building area above the chosen target. It does not make an automatic regulatory compliance judgement. |

**Notes**:

## Try the procedural demo first

Generate and Calculate Demo at the top of Scene creates two buildings, a road, a generator, a 3 m screen with a gap, and a 7 m wide dense planting strip on separate layers to the right of the existing model. It calculates planting, screen, and combined scenarios and opens Results. This switches the current window to the demo project; added geometry can be undone. Demo reductions apply only to those inputs, not to arbitrary real sites.

## Enter meaningful sound levels

Source input is sound pressure level at a reference position, not sound power. The road presets of 60/70/80 dB(A) at 10 m are illustrative design scenarios, not guaranteed levels for road classes. Rail and crowd presets require measured values and confirmation. Equipment presets reference [FHWA historical construction equipment data](https://www.fhwa.dot.gov/environment/noise/construction_noise/handbook/handbook09.cfm); Lmax combined with a duty factor is only an equivalent estimate.

Do not duty-correct an existing LAeq,T period average again. Levels and duty factors must match the chosen analysis period; changing 1 hour to 8 hours does not convert the inputs automatically. Reference measurements should represent free-field or corrected contributions from one source, avoiding double-counting other sources or existing screening effects.

A finite line is calibrated as a whole. Integration subdivision does not increase total strength, but splitting a road into independent sources and assigning the same whole-road level to each changes the input meaning. Octave bands require unweighted SPL, not eight A-weighted or sound-power values.

## Interpret screens and vegetation

Screen performance depends on actual height, ends, gaps, and receiver positions. A 25 dB screen transmission loss is not a guaranteed 25 dB facade reduction. Diffraction uses a design-stage Maekawa path-difference approximation capped at 25 dB. Where complex obstruction yields no usable path, screening credit is conservatively omitted and diagnostics are recorded.

Vegetation attenuation uses effective path length through its envelope and density; crowns are not treated as solid walls. Sparse trees receive no default attenuation credit. Dense continuous undergrowth uses an empirical approximation of about 5 dB over 30 m, capped at 5 dB overall, with overlap counted once. See [FHWA vegetation guidance](https://www.fhwa.dot.gov/environment/noise/noise_barriers/design_construction/keepdown.cfm).

## Save and recalculate

Settings, object references, and scenarios are stored in the current document; save the 3dm to retain them. Recalculate after reopening or changing buildings, sources, or measures. Smoothing, colour scales, and target values affect presentation or statistics without changing raw receiver results. A CSV value of −∞ means no sound-energy contribution, not a failed calculation.

## Scope

Use this for design-stage site-noise and mitigation comparisons. Results represent incident building-surface sound, excluding facade reflection corrections, indoor transmission, multiple reflections, ground interference, atmospheric refraction, and traffic-flow prediction. Octave-band air absorption uses uniform temperature and humidity. Complex concave geometry, multiple screens, and reflective street canyons need further professional validation.

Default limits are 100,000 receivers, 20,000 integration cells per curve query, and 5 million receiver × source × scenario records. Increase spacing or simplify inputs if limits are exceeded; precision is not silently reduced. Results support design decisions and do not replace professional environmental-noise prediction, measurements, or acceptance testing.
