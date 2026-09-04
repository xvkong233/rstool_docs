# rsMoveOpening2D · Move 2D Opening

> Module: 2D Architecture / Doors, Windows & Elevators

[← Back to command index](/en/commands/)

**Function**: Move the selected door, window/elevator to another location (retaining the original parameters), and reopen the wall opening

**Run**: Enter `rsMoveOpening2D` in the Rhino command line (command-line interaction).

**Workflow**:

1. Command line input rsMoveOpening2D
2. Select the door/window/elevator to move
3. Automatic selection of candidate host walls
4. Specify a new location on the target wall and preview it in real time

**Parameters**:

> This command has no numeric command-line parameters. Adjust its options in the settings window.

**Notes**: No numerical parameters; the position is specified by GetPoint, and the parameters follow the original opening
