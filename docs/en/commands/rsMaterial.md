# rsMaterial · Material library

> Module: Libraries / Material Library

[← Back to command index](/en/commands/)

**Function**: Add the selected material to the Rhino material library according to the current map axis settings and assign it to the selected object/layer, or just import the material without assigning it; when the automatic map axis is turned on, the map axis object is added simultaneously

![RsTool material library window: on the left is path/search/theme/favorites/recent/folder tree/status bar, on the right is a grid of material thumbnails (including terrazzo color set terrazzo_51~61)](../../assets/rsMaterial/image1.jpg)
*Figure 1: Main interface of material library. "Texture Axis: Box · 5 m" on the upper right side of the title bar opens the automatic texture axis setting (when it is turned on, the texture axis is automatically added according to the rectangle/Box + size when assigning materials), followed by "Refresh/Select Root Directory"; the structure of the left column is consistent with the model library (Library Directory/Search/Theme/Favorite Materials/Recently Used/Folder Tree/Status Bar + Construction Progress); the main area on the right displays all materials under the current path, distinguished by namespace chip (default MaterialLibrary, the screenshot has been cut to Concrete (focus on terrazzo), each thumbnail card contains the file name, label, modification time, 3 circular action buttons side by side (Collect Material/Assign Object/Assign Layer), right-click the card to adjust the right-click menu (Favorite Material/Assign Object/Assign Layer/Import Material/Open Directory), and the "Load More" page at the bottom all*

> Screenshots and videos may show a Chinese-language interface. Labels and control positions can vary by Rhino or RSTool version.

**Run**: Enter `rsMaterial` in the Rhino command line (opens a settings window).

**Workflow**:

1. Enter rsMaterial on the command line to open the material library window (it will automatically fall back to the old version rsMaterialLibraryOld when the new version is unavailable)
2. After the window is opened, the last used library directory is loaded by default (shares the same recently used list with the model library)
3. Click on the title bar "Texture Axis: Box · 5 m" to set: ① Whether to automatically add a texture axis when assigning a material; ② Texture axis type (rectangular plane / Box); ③ Texture axis size (unified width and height or length, width and height). After saving, the button text will be refreshed immediately to display the current type + size.
4. Operations on the left sidebar: The search box filters instantly by file name/tag; click "Favorite Materials" to only display favorites; use "Recently Used" and "Folder Tree" to quickly switch root directories/subdirectories; the status bar displays the progress of index building
5. Main area browsing: thumbnail card + file name + label (such as terrazzo, BestColor) + modification time + 3 circular action buttons (collection/assign object/assign layer), right-click to bring up 5-item right-click menu
6. Click the card preview button (eye) → pop up the preview image: there are 4 action buttons on the right: Collect material/Assign object/Assign layer/Import material/Open directory
7. Click "Assign Object": first add the material to the material library according to the current texture axis settings, then select an object in Rhino and apply it; click "Assign Layer": select the target layer and apply it to all objects under the layer at one time
8. Click "Import Material": only import into the Rhino material library (not directly assigned to the object); if the automatic mapping axis is turned on, the mapping axis will be added simultaneously
9. Switch sorting by name/time in the upper right corner of the main area; "Load more" at the bottom turns the page to display all materials

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| library directory | rootPath | text | last used value | local path | Material library root directory; change to any folder containing material assets through "Select/Select Root Directory"; automatically rebuild the index after switching |
| Search | searchInput | text | empty | any keyword | Perform instant filtering on file names/tags in the current directory |
| theme | theme | radio | Follow the system | Follow the system / light / dark | Switch UI theme; save independently from the model library |
| Map axis button | btnMappingSettings | button | — | — | Title bar "Texture Axis: Type·Size" button: Click to open the automatic texture axis setting pop-up layer, and the button text will display the current settings simultaneously. |
| Automatically add texture axes | autoTextureMappingEnabled | checkbox | open | on/off | Texture axis elastic layer switch: After turning it on, when assigning materials, add the texture axis object according to the current texture axis type + size. |
| Map axis type | autoTextureMappingType | radio | Box | Rectangle (Plane) / Box | Texture axis elastic layer radio selection: Rectangle uses the same width and height, Box uses the same length, width and height; the button text is updated immediately after switching |
| Texture axis size | autoTextureMappingSize | number | 5.0 | > 0 (model unit) | Numerical input for the texture axis elastic layer: use uniform width and height for rectangle, uniform length, width and height for Box, step size 0.000001 |
| favorite view | favoritesView | button | Close | — | The "Collected Materials" button on the left: When lit, only the collected assets will be displayed. |
| Recently used | recentRoots | chip | — | — | The root directory visited the last 5 times, chip switches with one click |
| folder tree | folderTree | tree | — | — | Subfolder tree under the root directory, nod to switch browsing |
| sort | sort | button | by time | by name/by time | Switch in the upper right corner of the main area |
| Refresh | refresh | button | — | — | Rebuild the index: scan all material assets in the current root directory, generate thumbnails and labels, and display the progress in the status bar |
| Favorites/Unfavorites | favorite | button | — | — | Star button in card or preview pop-up window: lit yellow = Favorite; supports right-click menu Favorite Material |
| give object | assignObject | button | — | — | Add the material to the material library according to the current mapping axis settings, then select an object in Rhino and apply it; if the automatic mapping axis is turned on, the mapping axis object will be added simultaneously. |
| Assign layer | assignLayer | button | — | — | Select the target layer and apply it to all objects under the layer at once. |
| Import materials | importMaterial | button | — | — | Only imported into the Rhino material library (not directly assigned to the object); if the automatic mapping axis is turned on, the mapping axis will be added simultaneously |
| Open directory | openFolder | button | — | — | Use Windows Explorer to open the folder where the material is located |
| load more | loadMore | button | — | — | Button at the bottom of the main area: page loading, default 60 pictures per page |

**Notes**: When the new version window is unavailable, it will automatically fall back to the old version rsMaterialLibraryOld. The index is based on the root directory as the granularity, and the thumbnails and textures are cached locally; it is given the Rhino material API, and when the automatic mapping axis is turned on, Surface/BoxMapping will be automatically added according to the current type + size. The material library is a local material library: the built-in materials are limited, and users need to organize and add their own material assets to the library directory by themselves; you can also forward RsTool related videos to Moments and contact customer service to receive more material resources.
