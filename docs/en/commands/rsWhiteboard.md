# rsWhiteboard · Whiteboard

> Module: Productivity / Productivity

[← Back to command index](/en/commands/)

**Function**: Open the whiteboard window for drawing, annotation, collaboration and material management

![RsTool whiteboard main interface (data sorting scene at Raffles City Hangzhou)](../../assets/rsWhiteboard/image1.png)
*Whiteboard main interface: Top-centered Excalidraw main toolbar (Lock/Undo Redo/Select/Rectangle/Ellipse/Line/Arrow/Free Draw/Pencil/Text/Picture/Eraser/Delete) + Library button on the right; Upper left ≡ Hamburger menu; Bottom RsTool custom toolbar (Capture Rhino view/Auto-align: on/Place comments/Local snapshot) + Left zoom 50% Control; the actual project scene and design drawing reference are arranged on the drawing board, and the video card of Bilibili is embedded in the upper right corner for playback of design results.*

> Screenshots and videos may show a Chinese-language interface. Labels and control positions can vary by Rhino or RSTool version.

**Run**: Enter `rsWhiteboard` in the Rhino command line (opens a settings window).

**Workflow**:

1. Enter rsWhiteboard on the command line to open the whiteboard window
2. Draw/annotate freely on the whiteboard, or use the rectangle, arrow, text, picture and other tools on the top toolbar
3. Open the shared whiteboard to collaborate with team members in real time; you can capture the Rhino window and embed it into the canvas as a reference image

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| automatic alignment | AutoAlign | toggle | open | on/off | Customize the toolbar switch at the bottom to control the automatic alignment of elements when placed |

**Notes**: The whiteboard is RsTool's built-in collaborative drawing tool, based on Excalidraw + React. It has the same window as Rhino and can be normally blocked by Rhino. The window title is "RsTool Whiteboard" and can be renamed at any time in the title bar. Documents are persisted as Excalidraw native `.excalidraw` (structure `{type:"excalidraw", version, source, elements, appState, files}`). Supports **local whiteboard** and **company shared whiteboard (SMB folder)** two modes, and can save/load Excalidraw **asset library** (`*.excalidrawlib`).

## Main toolbar (top center, left to right)

The main toolbar is provided by Excalidraw and has not been added or deleted by RsTool. Only the 4 items of automatic alignment, capturing Rhino, placing comments, and sharing status are added at the bottom.

| Button | Function |
| --- | --- |
| 🔒 Lock | Read-only lock, then click to unlock to prevent accidental modification |
| ↶ / ↷ | Undo / redo recent edits |
| ▶ Select | Switch to the selection tool, the mouse changes to an arrow, and you can click/frame to select elements |
| ▭ Rectangle | Drag out a rectangle (hold down Shift to round corners) |
| ◯ Ellipse | Drag out the ellipse |
| ➤ Straight line / → Arrow | Drag a straight line segment; arrow mode drags out a line segment with an arrow |
| ✏️ Free drawing (highlight) | Press and hold the brush to draw a continuous curve |
| ✎ Pencil | More delicate strokes than free drawing |
| A Text | Click to place the text box on the canvas, supports Markdown |
| 🖼 Picture | Select a local bitmap and embed it into the canvas (you can also drag/paste it) |
| 🩹 Eraser | Click or select to delete elements |
| 🗑 Delete | Remove the currently selected element |

> Extra: RsTool adds a **library button** (book icon) on the right side. Click to expand the Excalidraw **asset library panel** to list reusable components in the personal/company library.

## Top hamburger menu (≡, top left)

The Hamburger menu is injected by RsTool in Excalidraw `MainMenu`, **linked to the collaboration session state**: when sharing is turned on, "New/Open/Recent/Save As/Open Shared Whiteboard" will be hidden to prevent breaking session consistency (Excalidraw's built-in "Load Scene", "Save to Current File" and "Export" buttons are also hidden by RsTool using `UIOptions.canvasActions`, and are taken over by RsTool's own menu).

| Group | Menu item | Description |
| --- | --- | --- |
| File | New | Clear the canvas (if dirty, it will pop up to save and confirm) |
| File | Open... (`Ctrl+O`) | Select local `.excalidraw` or `.json` file |
| Files | Recent | Submenu lists recent files in `RecentFiles.json` (with full path) |
| File | Save (`Ctrl+S`) | Write the current path (save as will be triggered for the first time) |
| File | Save as... | Select a new path to save as `.excalidraw` |
| Share | Share the current whiteboard... | Start collaboration in the SMB shared directory for the first time (see the next section for details) |
| Share | Open the shared whiteboard... | Select the existing `.excalidraw` to join the collaboration |
| Share | Stop sharing editing | Exit collaboration (only shown if joined) |
| asset library | Instructions for using the asset library | Pop-up usage prompt card |
| asset library | Connect to company asset library... | Select a `.excalidrawlib` file to connect as company library |
| asset library | Refresh company library | Reload company library (only displayed when connected) |
| Library | Disconnect company library | Remove company library connection (only shown if connected) |
| asset library | Publish personal asset library to company... | Export current personal library as `.excalidrawlib` |
| Export | Export PNG | Export the current canvas as a PNG bitmap |
| Export | Export SVG | Export the current canvas as vector SVG |
| Default | Clear canvas | Excalidraw `DefaultItems.ClearCanvas` |
| Default | Switch theme | Excalidraw `DefaultItems.ToggleTheme` |
| Default | Help | Excalidraw `DefaultItems.Help` |

## Bottom toolbar (Footer, bottom center)

There are only 4 RsTool custom buttons at the bottom, and the undo/redo of the scaling controls − / 50% / + and ∧ ∨ are still included with Excalidraw.

| button | behavior |
| --- | --- |
| 📷 Capture Rhino view | Embed the screenshot of the current Rhino window into the center of the canvas with one click (button with `loading` status to prevent repeated clicks) |
| 📐 Automatic alignment: on/off | When dragging an element, it will absorb the edges of nearby elements; the status is written as `appState.objectsSnapModeEnabled`, **on by default when opened for the first time** |
| 💬 Place comment | Only available when a sharing session is open: the canvas switches to "Please click on the comment location on the whiteboard" mode |
| Status indicator | Displays "Local whiteboard"/"Synchronized · N people online"/"Synchronizing"/"Saving in the background"/"Shared directory is offline, modifications will be synchronized after recovery" |

## Shared canvas settings (pure SMB, zero server)

RsTool whiteboard sharing **does not require any dedicated server**, only an SMB shared directory. Each client writes files separately in the same directory of the whiteboard with the same name `&lt;name&gt;.rstcollab/`, and relies on `FileSystemWatcher + 400ms polling` to pull the increments of other clients.

**The first user turns on sharing**1. Open or create a new local whiteboard → Top ≡ → "Share current whiteboard..."
2. Select a path under the SMB network disk (`\\server\share\...\whiteboard.excalidraw` is recommended). The system uses `Path.GetFullPath + DriveInfo.DriveType == Network` to automatically identify whether it is on the network disk. If it is not a network disk, a confirmation warning "Other computers may not be able to join. Do you still want to open it at this location?"
3. The system atomically writes `&lt;name&gt;.excalidraw` (first save) and creates a session directory with the same name `&lt;name&gt;.rstcollab\` in the same directory, containing:
```
&lt;name&gt;.rstcollab\
session.json # version / sessionId / whiteboard file name / creation time
scenes\&lt;clientId&gt;.json # Incremental scenes per client (elements clock / files / appState)
comments\&lt;clientId&gt;.json # Comment operation flow for each client
presence\&lt;clientId&gt;.json # Client online heartbeat (write once every 2s, timeout offline after 7s)
clients\&lt;clientId&gt;.json # Client meta information (userName / machineName / joining time)
```
4. The status indicator changes from "Local Whiteboard" to "Synced · 1 person online"

**Other users join**

1. Top ≡ → "Open Shared Whiteboard..." → Select the same `.excalidraw` file
2. The system detects that the file already has `.rstcollab/session.json` and automatically attaches it to the existing session.
3. If there are unsynchronized local modifications when joining, a second confirmation message will pop up saying "This whiteboard already has a shared session. After joining, the latest version in the company's shared directory will be loaded. Modifications that have not yet been shared will not overwrite other people's content. Do you want to continue?"
4. Everyone who is currently online will appear in a colored block next to the mouse cursor in the lower right corner (the color is divided into a 6-color palette `#e0dfff / #d9f4ff / #dcfce7 / #ffedd5 / #ffe4e6 / #f3e8ff` by the AuthorId hash)

**Conflict merge**: Each element has a `clock` incremental timestamp, in increments of last-writer-wins (`LWW`). A complete snapshot is triggered to be written to `snapshot.json` every 30 seconds, and concurrency is prevented through `snapshot.lock` file + token string; the lock is considered residual for more than 20 seconds and will be automatically cleared by the next writer.

**Comment action (only available when sharing)**

- Click "Place Comment" at the bottom → switch the canvas to "Please click on the comment position on the whiteboard" mode
- Click the location and the "New Comment" dialog box will pop up → enter text → publish
- Comment operation type: `create` / `reply` / `resolve` / `reopen` / `delete`, each strip is unique `opId` deduplication
- The comment location, text, author, and solution status are all in the shared directory, visible to the team

**When the shared directory is offline**: The status changes to "The shared directory is offline, modifications will be synchronized after recovery"; dirty data is still written locally to the `Recovery\` directory, and all lagging increments are automatically reissued through polling after the network is restored.

**Stop sharing**: ≡ → "Stop sharing editing" forces a complete snapshot + atomic save `snapshot.json`; if the company's shared directory is currently offline, it will refuse to stop to protect unsynchronized modifications.

## asset library

**Add**: Select any whiteboard element → right-click → **Add to asset library** → Automatically trigger the `onLibraryChange` event and write to the native library file after 500ms of debounce.

**Personal Library**: Automatically saved to `%LOCALAPPDATA%\RsTool\Whiteboard\Library\`, automatically written 500ms after each addition (when the window is closed, debounce is forced to synchronize once, to avoid losing the newly added material).

**Company Library**: Supports `.excalidrawlib` files; Connect → Refresh → Disconnect trio in hamburger menu. Administrators can "publish personal asset library to the company..." → select the target `.excalidrawlib` file to cover, and other members can share the same copy through "Connect company asset library...".

**Capacity**: RsTool **does not limit** the asset library size, but there will be a performance tip when it is > 500KB (reading, writing and opening panels may be slower).

## Two-way collaboration with Rhino

| Entrance | Behavior |
| --- | --- |
| Capture a Rhino view (bottom) | Embed a screenshot of the current Rhino window at screen resolution into the center of the canvas |
| Embed site B/general web page | Paste the `BV/av` video address or external link URL directly on the whiteboard; to avoid Rhino lagging, heavy web pages are not loaded by default and will be loaded after the user clicks; **The homepage and list page of site B have been explicitly blocked** (overweight), and only specific video pages are allowed |
| Naming the embedded object | Double-click the title of the embedded object to rename it to "Embedded Bilibili Video/Embedded Web Page" |
| Wheel zoom / right-click pan | Additional canvas interaction installed by RsTool (`installWheelZoom` / `installRightButtonPan`) |
| Custom stroke width | When multiple elements are selected, RsTool adds a "custom stroke width" input to the stroke-width panel; the mixed selection displays "Mixed" |

## Crash recovery and offline protection

- Automatically write a recovery snapshot 3 seconds after editing is stopped
- In shared mode, the latest snapshot of the shared directory is retained at the same time + native Recovery double insurance (the shared directory is still written to the local when it is offline, and written back to the share after recovery)
- If there are still unsaved changes when closing the window: the "Do you want to save" dialog box will pop up in non-shared mode; **It will not pop up in shared mode** - it will force a complete snapshot to be written and stop the session (avoid blocking + prevent loss)
- Document size > 512KB `LargeDocumentPerformanceWarning` (first reminder only)
- After closing and restarting, the most recent files will be used first to restore the empty canvas.
