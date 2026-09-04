# InsertAssetOld · Legacy insert model

> Module: Libraries / Model Library

[← Back to command index](/en/commands/)

**Function**: Insert a model from the legacy model library into the current document

**Run**: Enter `InsertAssetOld` in the Rhino command line (command-line interaction).

**Workflow**:

1. Select the model to insert from the legacy model library panel
2. Drag to position the model in the viewport
3. Use the command line option "Rotate 90°" or directly enter "angle" to adjust the orientation.
4. Click to confirm placement

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Rotate 90° | Rotate90 | toggle |  | +90° each time | Command line options during placement |
| angle | Angle | double | 0.0 | Any angle (degrees) | Command line options during placement |

**Notes**: For the old version of the command, it is recommended to use InsertAsset first.
