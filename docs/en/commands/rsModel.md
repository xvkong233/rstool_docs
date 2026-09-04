# rsModel · Model library

> Module: Libraries / Model Library

[← Back to command index](/en/commands/)

**Function**: Import the selected .3dm file into Rhino as a block definition and trigger the InsertAsset command to place it at the clicked position in the viewport; or open the folder where the model is located in the explorer.

![RsTool model library window: Path/Search/Theme/Collection/Recent/Folder Tree/Status Bar on the left, model thumbnail grid on the right (each card contains 3 action buttons)](../../assets/rsModel/image1.png)
*Figure 1: Main interface of model library. "Refresh/select root directory" on the right side of the title bar is a global operation; the left column from top to bottom is: library directory (read-only input box + "select" button, with "previous level/return to root directory" to quickly jump), search (keyword filter files in the current directory), theme (follow the system / light / dark), collected models (one click only displays the collected assets, with a quantity badge), recently used (chip form, the recently visited root directory can be switched with one click), folder tree (the tree shows the subfolders under the current root, nod to switch); the main area on the right displays all models under the current path, each thumbnail card contains the file name, original path, modification time, and 3 circular action buttons side by side (Collect model/Import one/Import multiple, hover displays Chinese tooltip), and the right-click card can also bring up the right-click menu (Favorite Model/Import model/ Open the directory), there is a "Load More" paging button at the bottom*

> Screenshots and videos may show a Chinese-language interface. Labels and control positions can vary by Rhino or RSTool version.

**Run**: Enter `rsModel` in the Rhino command line (opens a settings window).

**Workflow**:

1. Enter rsModel on the command line to open the model library window (it will automatically fall back to the old version rsModelOld when the new version window is unavailable)
2. After the window is opened, the last used library directory is loaded by default (the "Select" button on the right side of the library directory input box can be changed to the root)
3. Operations on the left sidebar: Use the "Search" box to filter files in the current directory; click "Collected Models" to only display favorites; use "Folder Tree" to switch subdirectories; use "Previous Level/Return to Root Directory" to quickly jump
4. Main area browsing: card thumbnail + file name + metadata + 6 circular action buttons; right-click/long press to pop up the right-click menu (Favorite Model/Import model/Open directory)
5. Click the card preview button (eye icon) → pop up the preview image: There are 4 buttons on the right: Favorite Model / Import one / Import multiple / Open directory, which can be directly collected or imported into Rhino
6. Click "Import One": the model is imported into Rhino as a block definition and placed at the click position in the viewport. It supports the Angle/Rotate90 command line option to control rotation.
7. Click "Import multiple": batch import, prompts to select multiple locations to place continuously.
8. Switch sorting by name/time in the upper right corner; load more pages at the bottom to read all models

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| library directory | rootPath | text | last used value | local path | The root directory path of the model library; click "Select/Select Root Directory" to change to any folder containing .3dm; the index will be automatically rebuilt after switching directories. |
| Search | searchInput | text | empty | any keyword | Perform instant filtering on file names/tags in the current directory |
| theme | theme | radio | Follow the system | Follow the system / light / dark | Switch the UI theme and switch according to the current appearance of Windows when configuring to follow the system. |
| favorite view | favoritesView | button | Close | — | The "Collected Models" button on the left: When lit, only the collected assets are displayed; the badge number indicates the number of collections in the current root directory. |
| Recently used | recentRoots | chip | — | — | The root directory visited the last 5 times, click chip to quickly switch |
| folder tree | folderTree | tree | — | — | To collapse the subfolder tree under the root directory, nod to switch browsing; click the triangle on the left side of the line to expand/collapse |
| sort | sort | button | by time | by name/by time | Switch in the upper right corner of the main area, and the order of file cards is refreshed instantly |
| Refresh | refresh | button | — | — | Rebuild index: scan all .3dm/.3dm.gz/.zip in the current root directory, generate thumbnails and metadata, and display the progress in the status bar |
| Favorites/Unfavorites | favorite | button | — | — | Star button in card or preview pop-up window: lit yellow = Favorite; supports right-click menu Favorite Model |
| Import a | importSingle | button | — | — | The model is imported into Rhino as a block definition and the InsertAsset command is used to place it at the click position in the viewport. |
| Import multiple | importMultiple | button | — | — | Batch import, prompts you to select multiple positions to place the same definition in succession |
| Open directory | openFolder | button | — | — | Use Windows Explorer to open the folder where the model is located |
| load more | loadMore | button | — | — | Button at the bottom of the main area: page loading, the default is 60 pictures per page; this button will appear if the number exceeds |

**Notes**: Automatically fall back to the rsModelOld old version of the command when the new version window is unavailable. The index is based on the root directory as the granularity, and the thumbnails are cached in %LOCALAPPDATA%\RsTool\ModelLibrary thumbnail cache; when importing, call InsertAsset to go through a unified placement process (command line Angle/Rotate90 controls rotation). The model library is a local material library: the built-in materials are limited, and users need to organize and supplement their own .3dm models to the library directory; they can also forward RsTool related videos to Moments and contact customer service to receive more model material resources.
