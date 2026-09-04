# InsertAsset · Insert model

> Module: Libraries / Model Library

[← Back to command index](/en/commands/)

**Function**: Insert a model from the model library into the current document

**Run**: Enter `InsertAsset` in the Rhino command line (command-line interaction).

**Workflow**:

1. Select the model to insert from the Model Library panel
2. Drag to position the model in the viewport
3. Use the command line option "Rotate 90°" or directly enter "angle" to adjust the orientation.
4. Click to confirm placement

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Rotate 90° | Rotate90 | toggle |  | +90° each time | Command line options during placement, can be switched multiple times |
| angle | Angle | double | 0.0 | Any angle (degrees) | Command line options during placement, directly enter the orientation angle |

**Notes**: The corresponding command for the old version is InsertAssetOld.
