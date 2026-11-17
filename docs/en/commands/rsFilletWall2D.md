# <span class="rstool-command-icon rstool-command-icon--heading rstool-command-icon--single" title="rsFilletWall2D: toolbar icon" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/light/8e572021-753f-4e5d-9a70-15347ba223a5.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> rsFilletWall2D · Fillet 2D Wall Corners (legacy entry)

> Module: Architecture / Walls and Editing

[← Back to command index](/en/commands/)

::: warning Version 2.0: legacy entry

Use the unified wall fillet command for 2D wall corners.

Use [`rsFilletWall`](/en/commands/rsFilletWall).

The old name is not a callable alias in the reviewed 2.0 source. The historical reference below is for 1.x.

[View the 2.0 command changes](/en/commands/v2)

:::

::: details View the 1.x historical reference

> Icons, screenshots, parameters, and workflows in this section describe the old version.

**Function**: Generate a fillet connection wall between two 2D walls of the same width, same type, and same filling settings

**Workflow**:

1. Command line input rsFilletWall2D
2. Enter the corner radius
3. Select the first wall and click Keep Side
4. Select the second wall and click Keep side
5. Create a fillet connection between two walls

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| corner radius | FilletRadius | double | 1.0 | ≥0 | The default value is 1.0m; if it is unreasonable, it will automatically take a reasonable default value (calculated based on the wall width) |

**Notes**: Only walls of the same wall width, type, and fill settings are supported


:::
