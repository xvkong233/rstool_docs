# <span class="rstool-command-icon rstool-command-icon--heading rstool-command-icon--single" title="rsDoor2D: toolbar icon" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/light/b891cbb7-0f98-4abb-805a-c8fdda2a69fa.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> rsDoor2D · 2D Door (legacy entry)

> Module: Architecture / Building Elements

[← Back to command index](/en/commands/)

::: warning Version 2.0: legacy entry

2D and 3D doors share one window. Choose the output mode in the panel.

Use [`rsDoor`](/en/commands/rsDoor).

The old name is not a callable alias in the reviewed 2.0 source. The historical reference below is for 1.x.

[View the 2.0 command changes](/en/commands/v2)

:::

::: details View the 1.x historical reference

> Icons, screenshots, parameters, and workflows in this section describe the old version.

**Function**: Insert a door symbol (including door opening and opening arc) on the selected 2D wall, and open a hole in the wall accordingly

**Workflow**:

1. Command line input rsDoor2D
2. Select the 2D wall into which the door will be inserted (multiple selections possible)
3. Set door width, type (single opening/double opening/door opening), opening angle, flip opening direction and hinges
4. Move the cursor on the wall to specify the location of the door and click to insert

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Door width | DoorWidth | double | 0.9 | >Model tolerance | Default 0.9m (adapted to 900mm units) |
| door type | DoorType | list | Single opening | Single opening/double opening/door opening |  |
| opening angle | SwingAngle | double | 90 |  | Unit: degree, default 90° |
| Flip opening direction | FlipSwing | toggle | false |  |  |
| flip hinge | FlipHinge | toggle | false |  |  |

**Notes**: The required scene already has a rsWall2D wall; the default value of the door width is 900mm to adapt to the model unit.


:::
