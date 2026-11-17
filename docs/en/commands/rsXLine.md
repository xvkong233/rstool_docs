# <span class="rstool-command-icon rstool-command-icon--heading rstool-command-icon--missing" title="No icon in the current toolbar" aria-hidden="true"></span> rsXLine · Two-Point Construction Line (legacy entry)

> Module: Views & Documentation / Annotation & Documentation

[← Back to command index](/en/commands/)

::: warning Version 2.0: legacy entry

This construction-line command is not registered in the reviewed 2.0 source. Its legacy reference is retained.

The old name is not a callable alias in the reviewed 2.0 source. The historical reference below is for 1.x.

[View the 2.0 command changes](/en/commands/v2)

:::

::: details View the 1.x historical reference

> Icons, screenshots, parameters, and workflows in this section describe the old version.

**Function**: Define a direction with two points and create an extended line on a locked construction layer.

**Workflow**:

1. Run and pick two points to define the line direction.
2. The line is extended to suit the scene, added to RS_XLine, and that layer is locked.

**Parameters**:

> No numeric settings or separate settings window are required. Follow the workflow above.

**Notes**: The result looks like an infinite construction line but is a finite segment, extended beyond the projected scene by about 20% at each end. A viewport-based fallback is used when necessary. It uses RS_XLine_Dashed. Unlock RS_XLine before editing or deleting these lines. No settings dialog is used.


:::
