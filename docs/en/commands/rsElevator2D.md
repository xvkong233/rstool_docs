# rsElevator2D · 2D Elevator

> Module: 2D Architecture / Doors, Windows & Elevators

[← Back to command index](/en/commands/)

**Function**: Insert an elevator symbol (car + door) and make a hole in the selected 2D wall

**Run**: Enter `rsElevator2D` in the Rhino command line (command-line interaction).

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
