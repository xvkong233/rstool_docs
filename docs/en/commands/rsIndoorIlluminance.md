# rsIndoorIlluminance · Indoor Illuminance and Daylight

> Module: Analysis / Building Performance Analysis

[← Back to command index](/en/commands/)

**Function**: Compare indoor daylight schemes using point-in-time illuminance, daylight factor, or daily cumulative illuminance, with colored grids and statistics.

**Run**: Enter `rsIndoorIlluminance` in the Rhino command line (opens a settings window).

**Workflow**:

1. Select analysis regions, glazing groups, and opaque enclosure/obstructions. Create separate glass types for different optical properties.
2. Choose a mode. For point-in-time or daily analysis, check Rhino Sun’s date, location, time zone, and north direction.
3. Set grid size, sensor height, wall offset, indoor reflectances, and each glazing group’s transmission/reflection properties.
4. Click Analyze, inspect the color map, legend, and statistics, or cancel if necessary. Start large regions at low quality with a coarse grid.
5. Use Bake to write results to the document. Reselect/recalculate after changing geometry or inputs rather than relying on old results.

**Parameters**:

### Input and glazing

Input selects geometry; Glazing assigns groups and optical properties. Include the full enclosure and obstructions, since gaps change results.

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Glass type groups | glassType | group | Glass Type 1 | Multiple types supported | Assign geometry and optical properties separately for each glazing type. |
| Visible transmittance VT | transmittance | double | 0.6 | 0–1 | Each side must satisfy VT + reflectance ≤ 1. |
| Front / back reflectance | glassReflection | double | 0.08 / 0.08 | Each 0–1 | Front follows the surface normal; validated together with VT. |

### Analysis and sky

Choose a specific moment, overcast daylight factor, or a day’s accumulation. DF is independent of date/time; configure Rhino Sun for the other modes.

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Mode | mode | list | Daylight factor DF% | Point-in-time lux / Daylight factor DF% / Daily klux·h | DF uses CIE overcast sky without a specific time; the other modes use Rhino Sun timing. |
| CIE sky | sky | list | Overcast | Sunny/intermediate with or without sun, overcast, uniform | Locked in DF mode; choose an appropriate sky in other modes. |
| Quality | quality | list | Medium: 2048 paths / 2 bounces | Low 512/1; medium 2048/2; high 8192/3 | Higher quality increases sampling and bounces, and computation time. |
| Target | target | double | DF 2%; point-in-time 300 lux; daily 2.4 klux·h | ≥0 | Resets with mode changes. Used for target statistics, not automatic code compliance. |
| Daily hours and step | dailyHours | time | 08:00–18:00; 60 minutes | Start 0–23.5 h; end 0.5–24 h; step 10–180 min | Daily mode only: integrates over the chosen hours on the Rhino Sun date. End must follow start. |

### Grid and indoor optics

Enter lengths in meters. Grid size controls sampling and reflectance controls indoor bounces; do not compensate for missing geometry by increasing reflectance.

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Grid size | gridSize | double | 0.5 m | 0.05–20 m | Panel values are in meters and converted to model units; smaller grids add samples. |
| Sensor height | sensorHeight | double | 0.8 m | 0–10 m | Sets the sensor workplane height. |
| Wall offset | wallOffset | double | 0.1 m | 0–10 m | Excludes near-wall sampling areas. |
| Ceiling / wall / floor reflectance | reflectance | double | 0.8 / 0.5 / 0.2 | Each 0–0.95 | Estimate actual material reflectance; this is not Rhino render-material brightness. |

### Result display

Inspect overall distribution before enabling labels. Bake commits the preview to the document.

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Show cell values | showLabels | bool | Off | On / Off | Labels can overlap on dense grids; inspect the color map first. |

**Notes**: Intended for daylight scheme comparisons, not luminaire design or compliance certification. Point-in-time illuminance, DF, and daily accumulation have different units and are not directly interchangeable. Recalculate after changing grid, glazing, or sky inputs. Dense grids are expensive and sampling may be adjusted to the grid budget; read status messages. Getting Rhino Sun settings enables Rhino Sun.
