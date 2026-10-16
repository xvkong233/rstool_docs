# rsFluidSimulation · Fluid Simulation

> Module: Physics Simulation / Dynamics

[← Back to command index](/en/commands/)

**Function**: Arrange emitters, rain, and colliders in Rhino, preview fluid motion, and bake a paused water surface as a mesh.

**Run**: Enter `rsFluidSimulation` in the Rhino command line (opens a settings window).

**Workflow**:

1. Set standard Rhino length units, run the command, and add point nozzles, surface nozzles, or rain regions.
2. Edit emitter direction, speed, and emission behavior, select colliders, and draw a simulation box or use automatic bounds.
3. Start with Standard droplet detail and automatic resolution. Try the preview FLIP backend for continuous liquid.
4. Start playback or inspect with Step. Playback shows particles and pausing generates the fine surface.
5. Stop Emission prevents new water while existing water continues moving; Reset restarts the simulation.
6. Pause at the desired moment and use Bake Water Mesh. Meshing can be cancelled if too expensive.

**Parameters**:

### Scene and emitters

The upper panel manages water sources, colliders, and bounds. Emitter presets and sizes apply to the selected item and reset on application. Reselect colliders after editing their source geometry.

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Emitters and flow presets | emitters | group | Per-emitter settings | Point nozzle / Surface nozzle / Rain region | Presets affect the selected emitter only and require Apply; emitters can be moved, reselected, disabled, or removed. |

### Solver and resolution

Choose resolved detail and budget before surface polish. Thin streams need sufficient particles; a finer output mesh cannot recover missing simulation detail.

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Solver | solver | list | PBF particle fluid | PBF / FLIP liquid (preview) | Switching resets the simulation. FLIP targets continuous liquid and remains a preview. |
| Droplet detail | quality | list | Standard | Draft / Standard / Fine / Custom | Not a fixed droplet diameter. Preset particle budgets are 8000/20000/60000. |
| Automatic resolution | automatic | bool | On | On / Off | Recommends spacing from emitters. Editing spacing manually disables it. |
| Particle spacing | spacing | double | Initially 0.012 m; automatic resolution adjusts it | Positive, in document units | Smaller spacing increases detail and particle cost; changes reset the simulation. |
| Particle budget | budget | int | 20000 | 100–100000 | The budget limits new particles; read the bottom statistics. |

### Advanced: motion

These controls affect solving and some are disabled by backend. Gravity, spacing, and motion changes generally restart simulation.

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Gravity | gravity | double | 9.81 m/s² | 0–100 m/s² | Velocity uses m/s and gravity m/s² regardless of displayed length units. |
| Viscosity | viscosity | double | 0.02 | 0–1 | Controls viscous behavior; not a calibrated physical-viscosity unit. |
| Density iterations | iterations | int | 4 | 1–12 | Controls PBF density solving; available controls depend on backend. |
| Surface tension | tension | double | 0.15 | 0–1 | Local cohesion; changes reset the simulation, zero disables it. |
| Random seed | seed | int | 1 | 0–2147483647 | Controls particle-generation randomness. |

### Advanced: surface and output

These mostly affect paused previews and output meshes, not existing particle paths. Finer reconstruction costs more time and memory.

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Mesh cell size | meshCell | double | Initially 0.006 m; presets adjust it | Positive, in document units | Changes surface reconstruction resolution, not simulation particle count. |
| Surface anisotropy | anisotropy | double | 0.65 | 0–1 | Adapts reconstruction to local shape; zero uses spherical kernels. |
| Surface continuity | continuity | double | 1 | 0–1 | Smooths supported water layers; requires nonzero anisotropy and only rebuilds the surface. |
| Surface smoothing | smoothing | int | 2 | 0–5 | Smooths the output mesh only; zero disables it without changing particles. |
| Sheet closing radius | sheetClosing | int | 1 cell | 0–2 cells | Closes small supported holes; does not guarantee exact reconstructed volume conservation. |

**Notes**: Domain boundaries are open, not physical tank walls; use valid colliders to contain water. FLIP treats open colliders as a shell about two particle spacings thick, so inspect spacing if contact appears offset. This is a form/effect preview, not an engineering hydraulic solver. Inspect baked meshes before downstream modeling. Reopen and reconfigure after changing document units.
