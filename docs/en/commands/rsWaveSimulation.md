# rsWaveSimulation · Water Surface Waves

> Module: Physics Simulation / Dynamics

[← Back to command index](/en/commands/)

**Function**: Create lake or ocean waves with obstacles, multiple ripple sources, and spray effects, then bake a fine paused surface.

**Run**: Enter `rsWaveSimulation` in the Rhino command line (opens a settings window).

**Workflow**:

1. Run, draw a water rectangle or select a closed boundary, set world-Z water level, and select obstacles if needed.
2. Start with Calm Water, Breezy Lake, or Spectral Ocean and adjust wave height, wavelength, direction, and resolution.
3. Play or step to inspect motion. Play, step, and reset show points; pausing shows the fine surface.
4. Use Multiple Ripples, press Enter to apply the batch or Esc to cancel. Manage sources individually or repeat them at simulation-time intervals.
5. Enable the local FLIP preview only when 3D water is needed, draw a box including water depth, and test a small region first.
6. Pause, inspect the surface, choose output subdivision, and bake the mesh.

**Parameters**:

### Base surface: presets and shape

Lake mode suits gentle water; spectral mode adds multidirectional ocean waves. Lengths use document units and wind uses m/s. Tune shape before increasing resolution.

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Wave model / preset | model | list | Breezy Lake; lake waves | Lake waves / Spectral ocean FFT | Presets adjust several parameters together as a starting point. |
| Water level | level | double | 0 | Document units, world Z | Mean surface elevation, not water depth. |
| Wave height / wavelength | heightLength | double | 0.25 m / 6 m | Height ≥0; wavelength >0, converted to document units | Lake height bounds background variation; ocean height is Hs, about four standard deviations, not a cap on individual crests. |
| Direction | direction | double | 0° | −360–360° | World XY: 0° toward +X, 90° toward +Y. |
| Ocean wind speed | windSpeed | double | 12 m/s | 1–60 m/s | Affects ocean wavelength distribution; amplitude remains controlled by wave height. |
| Speed multiplier | speed | double | 1 | 0–10 | Playback multiplier; local 3D mode sets it to 1. |
| Ripples / sharpness / irregularity / spread | waveShape | double | 0.35 / 0.35 / 0.8 / 0.7 | Each 0–1 | Adjusts surface character; fine waves require adequate simulation resolution. |

### Resolution and mesh output

Simulation cells determine resolved detail; output subdivision controls presentation only. Playback points are not the finished surface: pause before judging it.

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Simulation cell size | cell | double | Initially 0.075 m | Positive; at most 200000 vertices | Smaller cells add detail. Use suggested resolution by wavelength; budget failures retain the preview. |
| Paused / output detail | detail | list | Base | Base / 2x / 4x; optional local refinement | Changes paused/output sampling without resetting time or recovering missing physics. |

### Ripples and advanced effects

Sources can fire once or repeat and can be moved, deleted, or triggered separately. Time reset keeps sources, while changing the boundary clears them.

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Ripple radius / strength | ripple | double | 0.5 m / 0.15 m | Document length units | Editable per source; changes affect the next trigger. 3D mode converts length strength to a velocity impulse. |
| Repeat / interval | repeat | bool / double | Off; 1 simulation second | 0.1–60 simulation seconds | Uses simulation time, not wall-clock time. Adding a source fires once unless repeat is enabled. |
| Swell mix / relative direction / seed | swellSeed | double / int | 0 / 45° / 1 | Mix 0–1; direction −180–180°; nonnegative integer seed | Advanced settings. Ocean swell adds long waves from another direction while total Hs remains controlled by wave height. |
| Crest and impact spray | spray | group | Panel settings | Enable, amount, drop size, particle budget | Secondary artistic effects; falling drops can trigger ripples but do not represent full volume exchange. |

### Local 3D FLIP panel (preview)

Adds local 3D water inside a box, not a fully 3D ocean. Include water depth, use static collider snapshots, and keep an obstacle-free transition near box edges.

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Local 3D FLIP | localFlip | bool | Off | On / Off, preview | 3D particles inside a box with an exterior heightfield. Enabling resets, selects spectral waves, speed 1, sharpness 0, and disables artistic spray. |
| 3D spacing / budget | localResolution | double / int | Initially 0.0375 m / 20000 | Spacing >0; budget 1–100000 | Simulation cells must be at least twice the 3D spacing. Over-budget initialization is rejected rather than silently truncated. |

**Notes**:

### Distinguish the two tools

This command mainly uses a surface heightfield. For emitters, rain, and freely moving liquid, see [rsFluidSimulation](./rsFluidSimulation). Artistic spray is not strictly conservative. Local FLIP remains a preview, not complete two-way ocean coupling, validated breaking waves, or engineering fluid analysis.

### Practical checks

Local 3D ripples change velocity: play or step to see the surface evolve. Use a radius of at least four 3D particle spacings and stay at least seven spacings from box edges. Physics, box, and collider edits reset the simulation; output subdivision does not. Output is not a closed printable solid; inspect meshes and seams before fabrication. Reopen after changing model units.
