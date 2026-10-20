# <span class="rstool-command-icon rstool-command-icon--heading rstool-command-icon--single" title="rsFilletWall2D: toolbar icon" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/light/8e572021-753f-4e5d-9a70-15347ba223a5.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> rsFilletWall2D · Fillet 2D Wall Corners

> Module: 2D Architecture / Grids & Walls

[← Back to command index](/en/commands/)

**Function**: Generate a fillet connection wall between two 2D walls of the same width, same type, and same filling settings

**Run**: Enter `rsFilletWall2D` in the Rhino command line (command-line interaction).

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
