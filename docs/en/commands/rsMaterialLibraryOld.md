# rsMaterialLibraryOld · Legacy material library

> Module: Libraries / Material Library

[← Back to command index](/en/commands/)

**Function**: Open the old version of the material library, select the material and then pick up the object or layer to assign it.

**Run**: Enter `rsMaterialLibraryOld` in the Rhino command line (command-line interaction).

**Workflow**:

1. Command line input rsMaterialLibraryOld
2. Create and display the rsMaterialDialogOld (WinForms) window
3. After selecting the material, enter the picking loop
4. Click on the object/press option to switch assignment mode (object/layer)

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Assign mode | Mode | list | Object | Object/Layer | Command line option Mode, default object (index 0) |

**Notes**: Legacy command; use GetObject + option list Mode when assigning materials
