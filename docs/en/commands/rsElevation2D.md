# rsElevation2D · Building elevation

> Module: 2D Architecture / Other 2D Tools

[← Back to command index](/en/commands/)

**Function**: Batch generate building elevation details by floor grouping, support above-ground/underground layer management and multiple different floor height (height × number of floors) combinations, real-time preview of the facade on the right, and finally output floor elevation lines, outdoor floor lines, elevation text and floor height/total height dimensions; the "Function" field of the layer group can be linked with rsBuildingArea2D

![rsElevation2D main interface: The Rhino viewport on the left arranges the building elevations according to F1-F13, marking each floor height and baseline; the right side generates the building elevation window, including basic settings, floor height grouping (2. 4.2m × 10 floors / 1. 6.5m × 3 floors), real-time elevation panel and bottom status bar (13 floors above ground, building height 61.5m)](../../assets/rsElevation2D/image1.png)
*rsElevation2D main interface (left elevation viewport + multiple sets of floor height settings and real-time elevation preview on the right)*

> Screenshots and videos may show a Chinese-language interface. Labels and control positions can vary by Rhino or RSTool version.

**Run**: Enter `rsElevation2D` in the Rhino command line (command-line interaction).

**Workflow**:

1. Command line input rsElevation2D
2. A window for generating building elevations pops up.
3. Select the floor area (above ground/underground floor) and outdoor floor elevation in "Basic Settings"
4. Add multiple layer groups (layer height m + number of layers + optional functions) in "Layer Height Grouping", and use Add/Update/Move Up/Move Down to adjust the order and function labels
5. On the "Elevation Display" panel on the right side of the window, press F1-Fn to preview the elevation of each floor and the height of each floor in real time from top to bottom. The status bar at the bottom simultaneously displays the number of above-ground/underground floors and the total height of the building.
6. Click "Generate" and place at the specified base point in the viewport, and output floor elevation lines, outdoor floor lines, elevation text and floor height/total height dimensions.

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Outdoor floor elevation | OutdoorGroundElevationMeters | double | -0.15 |  | Unit: meters, default -0.15m |
| Floor grouping (floor height) | FloorGroups.HeightMeters | double |  | >0 | Height of each group of floors, determined by default settings or user input |
| Floor grouping (number of floors) | FloorGroups.Count | integer |  | ≥1 | The number of repeated floors in this group of floors |
| Basement grouping (floor height) | BasementGroups.HeightMeters | double |  | >0 | The height of each underground floor is only effective when "underground floor" is selected in the floor area. |
| Basement grouping (number of floors) | BasementGroups.Count | integer |  | ≥1 | Number of basement floors |

**Notes**: The main interaction is a window; the above-ground and underground groups are distinguished according to "floor area", and the deeper the underground, the lower they are arranged; the layer group supports multiple additions/moving up and down to adjust the order; the description at the top of the window: "The list is arranged from top to bottom according to the actual facade: the above-ground groupings appear above, and the deeper underground, the lower."

Story height grouping logic: Each layer group record consists of two fields: "Story height (m) × number of layers". You can optionally fill in the "Function" tag for linkage rsBuildingArea2D; the typical adding sequence is "first the bottom layer (height) × N, then the standard layer (medium height) × N, then the roof machine room layer" and other combinations. For example, in the screenshot, 6.5m × 3 layers + 4.2m × 10 layers are combined to form 13 A high-rise building with a total floor height of 61.5m.

Facade real-time preview: The "Facade Display" panel on the right lists F1-Fn row by row from top to bottom. Each row displays the floor number, floor height and cumulative elevation (the baseline is the outdoor floor). The status bar at the bottom simultaneously displays the number of above-ground floors, the number of underground floors (depth m) and the total height of the building (excluding underground), which facilitates pre-checking before generation.

Linkage with rsBuildingArea2D: Orange prompts "China's domestic local calculation reference for rsBuildingArea2D; local standards may be different." The "Function" label of the layer group can be written in the specification version (such as "Residential", "Public Building", "Computer Room", etc.) for ownership identification of building area measurement calculations; the final layer group structure and total building height will be displayed at the bottom of the window to facilitate verification of area configuration correspondence.

Generation and layers: After clicking "Generate", the elevation details are placed at the specified base point in the Rhino viewport; the layers and functional groups remain associated, and the drawings or CAD can be exported separately in Rhino by lines, elevation text, and dimensions.
