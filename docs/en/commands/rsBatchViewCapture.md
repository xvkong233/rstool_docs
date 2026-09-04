# rsBatchViewCapture · Batch view capture

> Module: Views & Documentation / Views & Cameras

[← Back to command index](/en/commands/)

**Function**: Batch export all named views as PNG images to the specified folder

**Run**: Enter `rsBatchViewCapture` in the Rhino command line (opens a settings window).

**Workflow**:

1. Run rsBatchViewCapture from the command line
2. Select Export Folder (WinForms Folder Dialog Box)
3. Iterate through all named views (Named Views)
4. Restore views one by one and save screenshots as PNG

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Export folder | ExportFolder | folder | None | any local path | Dialog Options: Folder Selector Specify output directory for all named view PNGs |

**Notes**: Prompt and return when there is no named view; the file name is the view name (illegal characters are replaced with underscores). The window is a folder selector only, with no adjustable numeric parameters
