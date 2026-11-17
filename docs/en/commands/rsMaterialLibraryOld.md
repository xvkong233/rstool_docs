# <span class="rstool-command-icon rstool-command-icon--heading rstool-command-icon--single" title="rsMaterialLibraryOld: right-click the rsMaterial button" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/light/1d9adb07-8e80-483d-b6eb-9b288bf76f5a.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> rsMaterialLibraryOld · Legacy material library (legacy entry)

> Module: Libraries / Material Library

[← Back to command index](/en/commands/)

::: warning Version 2.0: legacy entry

The legacy material-library command is no longer exposed. Use the client material library.

Use [`rsMaterial`](/en/commands/rsMaterial).

The old name is not a callable alias in the reviewed 2.0 source. The historical reference below is for 1.x.

[View the 2.0 command changes](/en/commands/v2)

:::

::: details View the 1.x historical reference

> Icons, screenshots, parameters, and workflows in this section describe the old version.

**Function**: Open the old version of the material library, select the material and then pick up the object or layer to assign it.

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


:::
