# <span class="rstool-command-icon rstool-command-icon--heading rstool-command-icon--single" title="rsMaterialLibraryOld: right-click the rsMaterial button" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/light/1d9adb07-8e80-483d-b6eb-9b288bf76f5a.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> rsMaterialLibraryOld · Legacy material library

> Module: Libraries / Material Library

[← Back to command index](/en/commands/)

> Right-click the [rsMaterial](./rsMaterial) toolbar button to run this command. The two commands share the visible button icon.

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
