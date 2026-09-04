# rsEarth · Terrain Downloader

> Module: Terrain / Acquisition & Editing

[← Back to command index](/en/commands/)

**Function**: Write the downloaded terrain mesh (Rhino mesh with map) into the current document

![RsTool terrain download window (satellite basemap + right control panel)](../../assets/rsEarth/image1.png)

> Screenshots and videos may show a Chinese-language interface. Labels and control positions can vary by Rhino or RSTool version.

**Run**: Enter `rsEarth` in the Rhino command line (opens a settings window).

**Workflow**:

1. Enter rsEarth on the command line to open the terrain download window.
2. Download the terrain after searching for the area in the form, selecting the map source, and setting the download precision.
3. If the new version of the window is unavailable, it will automatically fall back to the old version of the map form rsEarthOld

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Mapbox Token | Token | password | None | pk.xxxxx | Panel settings: Mapbox token required to download terrain and satellite tiles, local encrypted archive |
| Accuracy | Precision | radio | in | High / Medium / Low (sampling step 1 / 2 / 4) | Panel settings: Control grid sampling density |
| Tile limit | MaxTiles | radio | 60 | 20 / 60 / 100 | Panel settings: The number of tiles allowed to be pulled by a single task. Excessive tiles will be discarded by the server. |
| zoom level | Zoom | int | automatic | Automatically calculate optimal value based on range | Panel Settings: Map zoom level automatically calculated on generation |
| Generate buildings | GenerateBuildings | bool | close | on/off | Panel settings: Check to pull OSM 3D buildings through Overpass |
| theme | Theme | radio | Follow the system | Follow the system / light / dark | Panel settings: interface theme, effective immediately and written to global configuration |
| agent | Proxy | bool | close | On/off (supports http:// or socks5://) | Panel settings: Only Debug builds are visible, you can click Test to verify connectivity |

**Notes**: RsTool Terrain Download is an online terrain elevation acquisition tool in Rhino; after startup, a window opens with the Leaflet map on the left and the control panel on the right. All interactions are completed on the web page.

The interface is divided into two columns. **The left side is the map preview area** (corresponding to the form `#map`), and the whole block is a Leaflet map: search box (geosearch, supports Esri + OSM, address input is positioning), Zoom zoom, base map switching button; 4 additional movement buttons (▲▼◀▶) are placed in the four directions of the map, which are specially used to pan the currently selected range in steps of "one tile" when there is no scroll bar for precise positioning or the mouse is inconvenient. A LOADING mask will appear above the map until the tiles are loaded.

**The right control panel is partitioned from top to bottom** (in order of form `#panel-inner`):

| Sequence | Partition | Control | Description |
| --- | --- | --- | --- |
| 1 | Title bar | `Terrain Download` + `Reset` | Title and one-click reset of current range/parameters |
| 2 | Theme | Radio Choose one of three | Follow the system / light / dark; the switch takes effect immediately and is written to the global configuration |
| 3 | Mapbox Token | Password box + show/hide | Used to download terrain and satellite tiles (starting with pk.xxxxx), local encrypted archive |
| 4 | Agent (Debug) | Switch + Address + Test | Only Debug build is visible; supports `http://` or `socks5://`, you can click Test to verify connectivity |
| 5 | Range drawing | Draw range button + direction keys | Drag a rectangular selection on the map, and use the 4 direction keys to pan the selection at tile granularity |
| 6 | Quality and tiles | Accuracy select + Tile upper limit select + Building checkbox | Accuracy: high/medium/low → Grid sampling step 1/2/4; Tile upper limit: 20/60/100; Building: Check to enable OSM 3D building |
| 7 | Operations | Start generation + cancel task | Primary/secondary buttons: Green generation, white background Cancel |
| 8 | Status | Status box + progress line | Real-time display of the current stage text and `Nx Elapsed` progress description |
| 9 | Task log | Log list + export button | Scroll log area, can be exported as `TerrainLog.txt` |

**Operation process** - After opening the command, first locate the target area in the search box and zoom in on the map to the target plot; hold down the mouse on the map and drag out a rectangular selection, and the 4 direction buttons can make fine adjustments to the tile granularity of the selection; after pressing "Start Generation", the process is: Token verification → bounds verification (north and south latitude does not exceed ±85.05112878, east and west longitude does not exceed ±180) → calculate optimal zoom → check tile budget → Download the elevation tiles and splice them into a Rhino grid → If 3D architecture is turned on, call Overpass to pull the OSM `building` relationship and fit the height.

**Accuracy and tile upper limit** determine the grid density and download tile quota: precision drop-down mapping sample step (high = 1, medium = 2, low = 4), tile upper limit three levels of 20/60/100 determine the number of tiles allowed to be pulled by a single task. If it is exceeded, it will be discarded by the server and errored. Adjusting these two values ​​​​will affect the details and generation time of the final geometry. To generate a 3D building, pull the `building` geometry in OSM through the Overpass API, and then use the height strategy to generate a Rhino mesh.

**Cancel and Log** - Clicking "Cancel Task" during generation will immediately stop downloading and discard the pulled tiles; the task log scrolls by row, error items are displayed in red, and can be exported to local txt with one click for troubleshooting. In addition to the text of the current stage, the status area also displays the stage time-consuming summary (`Nx spent, stage time-consuming summary...`) in the lower right corner.

**Configuration memory** - Token, theme, latest map position (lat/lon/zoom), accuracy, tile upper limit, building switch, proxy address and switch will be persisted to local JSON through `TerrainDownloadWebForm.Config` (encrypted archive in the Windows `%LocalAppData%` directory), and will be automatically restored next time the command is opened. When you open it for the first time, it will try to migrate data from the old version `rsEarth_Data/token.txt` and `location.txt`.

**Network and Performance** - All downloads go through the own `TerrainNetwork` slot (15s timeout for tiles / 30s timeout for Overpass / 15s timeout for geographical search); if the agent is enabled, the corresponding startup parameters will be injected. Requires Internet connection and Mapbox credentials; automatically falls back to the `rsEarthOld` form when running the old version without dependencies.
