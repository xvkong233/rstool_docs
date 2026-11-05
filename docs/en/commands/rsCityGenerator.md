# <span class="rstool-command-icon rstool-command-icon--heading" title="rsCityGenerator: toolbar icon" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/light/435ccc02-2d6a-517c-a491-3e56c23a454f.png" alt="" width="48" height="48" loading="eager" decoding="async"><img class="rstool-command-icon__dark" src="/command-icons/dark/435ccc02-2d6a-517c-a491-3e56c23a454f.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> rsCityGenerator · City Generator

> Module: Architecture / Building Elements

[← Back to command index](/en/commands/)

**Function**: Preview a procedural city and bake it to independent scheme layers. Buildings, roads, and ground are primarily meshes; repeated scenery can be mesh block instances. Supports updating existing schemes, project and asset-library storage, variant statistics, and layout-check reports.

**Run**: Enter `rsCityGenerator` in the Rhino command line (opens a settings window).

**Workflow**:

1. Run rsCityGenerator to open City Generator · Mesh City. Choose a preset on Site, then select a closed boundary. For a first trial, explicitly use the 600×450 m example site.
2. Add exclusions, water, terrain, and zones as needed. Choose a road pattern and adjust block spacing and widths, or import / select your own road centrelines.
3. Set parcel area, setbacks, floors, and detail on Buildings, then choose facades, roofs, or modules on Appearance. Start with massing for a large site.
4. Click Preview at the bottom to inspect roads and buildings. New seed explores alternatives. Preview does not bake the city into document objects; cancellation or failure retains the last valid preview.
5. Use Editing or Quick editing to lock good parcels and refine roads or buildings. For overall alternatives, generate a batch of massing variants and apply the selected result.
6. Review statistics and diagnostics on Output and add trees, vehicles, or site facilities as needed. Generate model at the bottom creates a new independent scheme. Use Select update target and Update selected scheme to replace an existing scheme.
7. Save a .rstcity project and, if needed, a separate .rstcityassets library. Save the Rhino 3dm after baking. Later, open the project or recover parameters from generated objects.

**Parameters**:

### Site: establish the extent and choose a preset

Select a horizontal closed city boundary, or explicitly use the 600×450 m example site. Presets change roads, land use, and appearance together, so choose one before customising. Add exclusions, water, zones, or terrain as needed.

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| City preset | Preset | enum | Curvilinear city | 17 presets including mixed city, business district, garden housing, small town, industry, Japanese city, and cyberpunk | Presets are starting points, not fixed models. Customise settings and try new seeds. |
| Boundary / exclusions / water | Boundary | geometry | Select a boundary or example site | Closed boundaries; XY projection in terrain mode | The city is organised inside the boundary. Exclusions reserve space; water has separate level and bank settings. Panel lengths are in metres. |
| Terrain mesh | Terrain | mesh | No terrain | Optional single-valued XY terrain | Roads and ground conform to terrain. Buildings retain level bases with terrace foundations; source terrain is preserved. |
| Maximum foundation rise | FoundationRise | double | 15 m | 0.1–100 m | Limits terrain relief across a footprint; it does not add 15 m to building height. |
| Road grade warning | RoadGradeWarning | double | 15% | 1–100% | Grades above the threshold are reported. This is not automatic grading or engineering validation. |
| Land-use zones | Zones | group | User-defined | Use, floors, massing, appearance, and related overrides | Use zones to guide local housing, offices, industry, and parks rather than relying solely on global settings. Quick editing also supports zones. |

### Roads: establish the network before fine tuning

Combine automatic roads with input centrelines. Edit individual widths and sections and inspect short dead ends or gaps. Quick editing can select roads, edit control curves, and preview affected parcels.

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Road pattern | RoadPattern | enum | Curvilinear network | Grid, perturbed, radial, input-only, curvilinear, neighbourhood, old town, centre-linked, and two Japanese networks | Input-only suits an existing street plan; other patterns create automatic networks. |
| Block spacing | BlockSize | double | 120 m initially; preset-dependent | 30–2000 m | Controls automatic-network scale, not an exact dimension for every block. |
| Default road width | RoadWidth | double | 14 m; preset-dependent | 3–100 m | New roads capture the current width. Existing roads can be edited individually; changing the default alone does not update all roads. |
| Sidewalk width | SidewalkWidth | double | 3 m; preset-dependent | 0–20 m | Affects walking connections, entrances, and facilities. Narrow sidewalks constrain scenery placement. |
| Network angle | Angle | double | 0° | −360–360° | Rotates the automatic network; parcels and buildings can align with their main frontage. |
| Irregularity | Irregularity | double | 0.4 initially; preset-dependent | 0–0.6 | Controls variation in patterns that use it. Larger values do not imply better layouts. |
| Endpoint snap distance | RoadSnapTolerance | double | 0.25 m | 0–3 m | Connects input-road endpoints. Excessive tolerance may merge intentionally separate nodes. |

### Buildings: parcel scale and skyline

Start with parcel area, setback, floor counts, and land use, then choose housing or office forms, block compositions, parks, or parking. Frontage-first subdivision reduces landlocked parcels; target area is a layout preference rather than a hard allocation.

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Target parcel area | ParcelArea | double | 2200 m²; preset-dependent | 100–100000 m² | Subdivision also considers frontage and setbacks. Very small parcels may remain open. |
| Building setback | Setback | double | 4 m; preset-dependent | 0.5–50 m | Reserves space around buildings and affects whether balconies or overhangs fit. |
| Massing coverage preference | Coverage | double | 0.55; preset-dependent | 0.1–0.85 | A massing preference, not an exact coverage target. Check the resulting statistics. |
| Minimum / maximum floors | Floors | int | 3 / 18; preset-dependent | Each 1–150; minimum no greater than maximum | Zone limits and building forms further constrain floors. Detached and industrial forms have specific conditions. |
| Floor height | FloorHeight | double | 3.3 m; preset-dependent | 2–8 m | Controls nominal storey height; roof elements and crowns can add height. |
| Central height bias | CenterHeightBias | double | 0.55; preset-dependent | 0–1 | Biases taller forms towards centres; zones and custom centres provide additional control. |
| Random park ratio | ParkRatio | double | 0.12; preset-dependent | 0–1 | A random assignment preference, not a guaranteed land-area share. Assign park zones for explicit control. |
| Detail level | Detail | enum | Standard | Massing / Standard / Close-up | Use massing for large sites. Standard and close-up progressively add facade, roof, and scenery details. |
| Random seed | Seed | int | 42 | 0–2147483647 | Identical inputs and seeds reproduce a result. With locks or local edits, reseeding preserves roads and varies unlocked buildings. |

### Appearance: facades, roofs, and module patterns

Choose built-in facades, Japanese prototypes, and roofs, or use your own facade modules. Zones and individual buildings can override global settings. Custom building assets retain their own appearance.

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Window spacing / width ratio | WindowSpacing | double | 3.4 m / 0.6; preset-dependent | 2–12 m / 0.2–0.95 | Controls facade rhythm. Window panels generally represent surfaces rather than construction-ready wall openings. |
| Balcony ratio / depth | Balconies | double | 0.35 / 1.2 m; preset-dependent | 0–1 / 0.3–2.5 m | Setback and neighbouring buildings are checked; balconies are omitted where space is insufficient. |
| Roof style / slope / overhang | Roof | group | By building type and preset | Automatic, flat, gable, hip, shed; slope 0.1–0.8; overhang 0–2 m | Slope is rise/run, not degrees. Unstable complex outlines can fall back to flat roofs with a diagnostic. |
| Custom facade modules and patterns | FacadeModules | group | Built-in appearance | Ground, standard, top, entrance; alternating, random, custom sequences | Capture modules and assign families, slots, and codes on Assets, then select them here. AAB. repeats two A modules, one B, and a solid-wall slot. |

### Assets: use your own buildings and streetscape

Capture meshes or nested mesh-only blocks as buildings, trees, lamps, cars, or facade modules while preserving source objects. Assets are normalised in metres around the base centre; buildings are uniformly scaled and footprint-checked. Import or export .rstcityassets libraries.

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Asset random weight | AssetWeight | double | 1 | 0–1000 | Weights affect automatic assignment. Zero means manual use only and does not prevent explicit building assignment. |
| Automatic building replacement ratio | BuildingAssetRatio | double | 0.5 | 0–1 | Controls automatic use of eligible building assets, subject to size and footprint checks. |

### Editing: preserve what works and refine locally

Select parcels in the viewport to lock, unlock, regenerate locally, or override use and floors. Individual buildings support floors, appearance, roof, and asset overrides. Locks still require compatibility with changed roads, setbacks, and terrain.

### Output: scenery, display, and model generation

Control trees, lamps, cars, entrance paving, activity spaces, and planting. Generate model at the bottom creates a new independent scheme, regenerating first if the preview is stale. To replace an existing generated city, select its update target and use Update selected scheme.

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Streetscape and site scenery | Scenery | group | By current preset | Trees, lamps, cars, paving, planting, seats, bicycles, parking, and related items | Some facilities require standard or close-up detail. Walking width, entrances, and vehicle access constrain placement; enabling an item does not guarantee it everywhere. |
| Merge output by block and material | MergeOutput | bool | Current Output setting | On / Off | Reduces Rhino object count. Buildings and roads are meshes; repeated scenery can use mesh block instances. |
| Adaptive / progressive preview | AdaptivePreview | bool | On | On / Off | Simplifies distant or moving views and can show incremental simplified results. It does not reduce the selected detail of baked meshes. |

### Variants: compare a batch before applying

Generate massing alternatives from one input snapshot and compare building counts, coverage, FAR, and parking. Previewing a row does not replace the project; Apply selected variant restores the full detail settings. Comparison batches are cleared when the panel closes; export variants you need.

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Variant count / seed step | VariantCount | int | 3 / 1 | 2–6 / 1–100000 | Comparison uses massing meshes without streetscape, making it suitable for choosing layouts. |

### Transport: rail, elevated routes, and connections

Use centrelines for surface rail, elevated roads, or elevated rail, with width, track count, clearance, and pier-spacing settings. Stations, crossings, ramps, and water crossings have additional controls. Ground connections are not automatic and crossing water requires explicit permission. Geometry is conceptual rather than bridge or traffic engineering.

### Landmarks: place public buildings on suitable parcels

Select a sufficiently large frontage parcel, then set landmark type, height, footprint, and orientation. Options include libraries, hospitals, schools, and commercial complexes. Each type has minimum dimensions and reports insufficient space. Reference-inspired forms are conceptual, not exact replicas.

### Layout checks: inspect findings before changing the city

Check high-rise clusters and abrupt height changes, locate affected areas, and export JSON reports. Checks do not modify the city or certify compliance. Rerun after changing the city or checking parameters.

### Quick editing: edit roads, water, and buildings in the viewport

Select roads, water, buildings, parcels, or zones by click, box, or region. Edit control curves and review local impacts. Apply or cancel curve drafts before switching objects. Confirm the linked target and synchronisation setting before updating a baked model. Panel Undo/Redo tracks successfully generated parameter states within the session, separately from Rhino document Undo.

**Notes**:

## A practical first run

Choose a preset and a small site, then generate at massing detail. Check road connectivity and parcel scale before adjusting height and coverage preferences. Add standard / close-up detail and more scenery once the layout works. Dense windows, vehicles, and close-up detail across a large site increase calculation time, display cost, and file size.

Choose presets before customising because they change multiple settings together. Reseeding explores automatic layouts. With locks or local edits, it preserves roads and varies only unlocked buildings; read the status message for the actual behaviour.

## Preview, generate model, and update

Preview shows the current result without baking the city into Rhino objects. Generate model reuses an up-to-date preview, or regenerates from changed settings, and creates a new scheme with one-step Undo. To change an existing baked city, select its update target on Output and update it. Repeated generation creates additional schemes rather than replacing the previous city.

Updating checks for manual changes to target objects. Review warnings about manual edits or ambiguous ownership before allowing replacement. Quick-edit synchronisation should point only to the scheme you intend to change. Local impacts can expand when roads reconnect.

## Save projects, source curves, and materials

.rstcity stores generator settings and project data; .rstcityassets stores reusable assets. These serve different purposes from Rhino 3dm files. Save the 3dm after generating a model; parameters can also be recovered from generated objects. Variant batches and panel editing history last only for the session, so export variants you want to retain.

Linked source curves such as boundaries, roads, and water can be edited in Rhino and trigger regeneration. Apply or cancel curve drafts first. Do not assume every input is a permanently static snapshot. Custom assets retain basic material properties, UVs, and vertex colours and can carry ordinary base-colour textures; this is not a complete third-party PBR-material migration.

## Terrain and metrics

Terrain must be a single-valued XY height field, not a closed mountain solid, overhanging layers, or overlapping surfaces. Roads follow terrain and building bases remain level. Grade warnings and terrace foundations do not constitute road grading or earthworks design.

Coverage preferences, park ratios, and FAR support conceptual comparisons rather than exact planning targets. Statistics estimate generated geometry and nominal floors; custom assets, pitched roofs, crowns, and landmarks can use their own conceptual measurements. Output supports urban design and scene modelling, not construction documents or structural or transport engineering.
