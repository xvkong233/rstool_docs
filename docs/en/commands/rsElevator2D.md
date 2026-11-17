# <span class="rstool-command-icon rstool-command-icon--heading rstool-command-icon--single" title="rsElevator2D: toolbar icon" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/light/390742bf-dcad-51a1-9473-0b74e2edb9dd.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> rsElevator2D · 2D Elevator (legacy entry)

> Module: Architecture / Building Elements

[← Back to command index](/en/commands/)

::: warning Version 2.0: legacy entry

Use the unified elevator command and choose 2D or 3D in its panel.

Use [`rsElevator`](/en/commands/rsElevator).

The old name is not a callable alias in the reviewed 2.0 source. The historical reference below is for 1.x.

[View the 2.0 command changes](/en/commands/v2)

:::

::: details View the 1.x historical reference

> Icons, screenshots, parameters, and workflows in this section describe the old version.

**Function**: Insert an elevator symbol (car + door) and make a hole in the selected 2D wall

**Workflow**:

1. Command line input rsElevator2D
2. Select the 2D wall into which the elevator will be inserted
3. Set the elevator width, depth, door width, and flip car direction
4. Specify the elevator location on the wall and click Insert

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Elevator width | ElevatorWidth | double | 1.6 | >Model tolerance | Default 1.6m (according to 1600mm adaptation unit) |
| Elevator deep | ElevatorDepth | double | 1.6 | >Model tolerance | Default 1.6m (according to 1600mm adaptation unit) |
| Door width | DoorWidth | double | 0.9 | ≤elevator width | The default value is 0.9m, which will be clamped to not exceed the width of the elevator. |
| Flip car direction | FlipSide | toggle | false |  |  |

**Notes**: The door width will be clamped to not exceed the elevator width; the default adaptation unit is 1600/1600/900mm


:::
