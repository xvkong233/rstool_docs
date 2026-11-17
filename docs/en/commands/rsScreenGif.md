# <span class="rstool-command-icon rstool-command-icon--heading" title="rsScreenGif: toolbar icon" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/light/b5e8fc86-41a7-5c46-88b0-733fb017441a.png" alt="" width="48" height="48" loading="eager" decoding="async"><img class="rstool-command-icon__dark" src="/command-icons/dark/b5e8fc86-41a7-5c46-88b0-733fb017441a.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> rsScreenGif · Record Screen Region to GIF

> Module: Productivity / Screen Tools

[← Back to command index](/en/commands/)

**Function**: Record a rectangular screen region as a GIF for command demonstrations and issue reports.

**Run**: Enter `rsScreenGif` in the Rhino command line (opens a settings window).

**Workflow**:

1. Run and choose frame rate, output width, and cursor capture.
2. Select a screen rectangle and wait for the three-second countdown.
3. Pause/resume or stop while recording. Ctrl+Alt+F9 pauses/resumes; Ctrl+Alt+F10 stops.
4. Preview the clip after stopping, discard and rerecord if needed, then save the GIF and open it or its folder.

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Frame rate | fps | list | 15 FPS | 5 / 10 / 15 / 20 FPS | Higher rates look smoother but add frames, file size, and encoding work. |
| Maximum output width | maximumWidth | list | 1280 px | Original / 1920 / 1280 / 960 / 640 px | Downscales proportionally; small captured regions are not enlarged. |
| Include cursor | includeCursor | bool | On | On / Off | Useful when viewers need to follow clicks and pointer movement. |

**Notes**: This captures a screen region, not a Rhino render animation. Other windows, notifications, and sensitive content inside that region may also be recorded. Prepare the screen and keep clips short. GIF encoding can be cancelled.
