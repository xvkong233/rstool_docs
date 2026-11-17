# <span class="rstool-command-icon rstool-command-icon--heading rstool-command-icon--missing" title="No icon in the current toolbar" aria-hidden="true"></span> InsertAsset · Insert model (legacy entry)

> Module: Libraries / Model Library

[← Back to command index](/en/commands/)

::: warning Version 2.0: legacy entry

Import and repeated import are actions inside the client model library rather than a separate Rhino command.

Use [`rsModel`](/en/commands/rsModel).

The old name is not a callable alias in the reviewed 2.0 source. The historical reference below is for 1.x.

[View the 2.0 command changes](/en/commands/v2)

:::

::: details View the 1.x historical reference

> Icons, screenshots, parameters, and workflows in this section describe the old version.

**Function**: Insert a model from the model library into the current document

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


:::
