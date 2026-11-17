# <span class="rstool-command-icon rstool-command-icon--heading rstool-command-icon--missing" title="No icon in the current toolbar" aria-hidden="true"></span> InsertAssetOld · Legacy insert model (legacy entry)

> Module: Libraries / Model Library

[← Back to command index](/en/commands/)

::: warning Version 2.0: legacy entry

Use the client model library to select and import an asset. The old insertion command is no longer exposed.

Use [`rsModel`](/en/commands/rsModel).

The old name is not a callable alias in the reviewed 2.0 source. The historical reference below is for 1.x.

[View the 2.0 command changes](/en/commands/v2)

:::

::: details View the 1.x historical reference

> Icons, screenshots, parameters, and workflows in this section describe the old version.

**Function**: Insert a model from the legacy model library into the current document

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


:::
