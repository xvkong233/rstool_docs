# rsDoor2D · 2D Door

> Module: 2D Architecture / Doors, Windows & Elevators

[← Back to command index](/en/commands/)

**Function**: Insert a door symbol (including door opening and opening arc) on the selected 2D wall, and open a hole in the wall accordingly

**Run**: Enter `rsDoor2D` in the Rhino command line (command-line interaction).

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
