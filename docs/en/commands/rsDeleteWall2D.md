# <span class="rstool-command-icon rstool-command-icon--heading rstool-command-icon--single" title="rsDeleteWall2D: toolbar icon" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/light/63a0ee4a-feef-5027-bb07-6fb1e917adf4.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> rsDeleteWall2D · Delete 2D wall (legacy entry)

> Module: Architecture / Walls and Editing

[← Back to command index](/en/commands/)

::: warning Version 2.0: legacy entry

Select the wall and use Rhino Delete. Connected junctions update with the deletion.

The old name is not a callable alias in the reviewed 2.0 source. The historical reference below is for 1.x.

[View the 2.0 command changes](/en/commands/v2)

:::

::: details View the 1.x historical reference

> Icons, screenshots, parameters, and workflows in this section describe the old version.

**Function**: Delete the selected 2D wall and its associated door and window symbols and attempt to reconnect adjacent walls

**Workflow**:

1. Command line input rsDeleteWall2D
2. Select the 2D wall to be deleted (curve/fill, multiple selections available)
3. Automatically delete walls and their attached doors and windows, and rebuild/reconnect adjacent wall segments

**Parameters**:

> This command has no numeric command-line parameters. Adjust its options in the settings window.

**Notes**: No adjustable parameters, just selection; doors and windows on the host wall will be deleted and adjacent joints will be repaired


:::
