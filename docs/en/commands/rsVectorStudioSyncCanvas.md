# rsVectorStudioSyncCanvas · Sync Vector Studio Canvas Bounds

> Module: Views & Documentation / Annotation & Documentation

[← Back to command index](/en/commands/)

**Function**: Place Vector Studio’s current canvas bounds and scale in Rhino to establish a shared drawing frame.

**Run**: Enter `rsVectorStudioSyncCanvas` in the Rhino command line (command-line interaction).

**Workflow**:

1. Open rsVectorStudio, wait for it to load, and activate the canvas to synchronize.
2. Run this command and enter the desired canvas width in Rhino model units.
3. Pick the canvas top-left corner. A rectangular boundary is created at the canvas aspect ratio and the mapping is recorded.

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Model width | modelWidth | double | Existing mapping, otherwise canvas width | At least 10 times model tolerance | Height follows the canvas aspect ratio automatically. |

**Notes**: This synchronizes bounds and coordinate mapping, not all artwork and not automatic two-way updates. It keeps an existing mapping’s orientation or otherwise uses the current construction plane. Each confirmed operation adds a boundary named Vector Studio Canvas. Open the studio first if its page is not ready. Input is requested in Rhino through the studio page, without a separate settings dialog.
