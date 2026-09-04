# rsBatchSnapshotCapture · Batch screenshots

> Module: Views & Documentation / Views & Cameras

[← Back to command index](/en/commands/)

**Function**: Batch export all snapshots as PNG images to a specified folder

**Run**: Enter `rsBatchSnapshotCapture` in the Rhino command line (opens a settings window).

**Workflow**:

1. Run rsBatchSnapshotCapture from the command line
2. Select Export Folder (WinForms Folder Dialog Box)
3. Loop through all Snapshots of a document
4. Restore snapshots one by one and save screenshots as PNG

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Export folder | ExportFolder | folder | None | any local path | Dialog Options: Folder Selector Specify Output Directory for All Snapshot PNGs |
| Render buffer | RenderDelay | int | 500 | Fixed 500ms | The number of milliseconds to wait before taking a screenshot after each snapshot switch (hard-coded in the source code) |

**Notes**: Use ScriptRunner to restore snapshots synchronously; wait for 500ms buffering for each frame; take the snapshot name as the file name (illegal characters are replaced with underscores); prompt to return when there is no snapshot. The window is a folder selector only, with no adjustable numeric parameters
