# rsExportCamToSU · Export camera to SketchUp

> Module: Views & Documentation / Views & Cameras

[← Back to command index](/en/commands/)

**Function**: Copy current camera parameters JSON to clipboard (mode/eye/target/up/fov/viewHeight)

**Run**: Enter `rsExportCamToSU` in the Rhino command line (command-line interaction).

**Workflow**:

1. Run rsExportCamToSU from the command line
2. Read the current view camera parameters
3. Copy JSON to clipboard (for SketchUp to paste)

**Parameters**:

> This command has no numeric command-line parameters. Adjust its options in the settings window.

**Notes**: The unit is converted to millimeters; two-point perspective calculates the visual center offset; ordinary perspective uses a 35mm lens to calculate the FOV most accurately
