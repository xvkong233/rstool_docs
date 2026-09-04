# rsDeleteWall2D · Delete 2D wall

> Module: 2D Architecture / Grids & Walls

[← Back to command index](/en/commands/)

**Function**: Delete the selected 2D wall and its associated door and window symbols and attempt to reconnect adjacent walls

**Run**: Enter `rsDeleteWall2D` in the Rhino command line (command-line interaction).

**Workflow**:

1. Command line input rsDeleteWall2D
2. Select the 2D wall to be deleted (curve/fill, multiple selections available)
3. Automatically delete walls and their attached doors and windows, and rebuild/reconnect adjacent wall segments

**Parameters**:

> This command has no numeric command-line parameters. Adjust its options in the settings window.

**Notes**: No adjustable parameters, just selection; doors and windows on the host wall will be deleted and adjacent joints will be repaired
