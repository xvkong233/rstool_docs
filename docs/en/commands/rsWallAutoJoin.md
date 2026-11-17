# <span class="rstool-command-icon rstool-command-icon--heading" title="rsWallAutoJoin: toolbar icon" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/light/c724088b-7f74-5c21-bfdd-4fea7857c5d0.png" alt="" width="48" height="48" loading="eager" decoding="async"><img class="rstool-command-icon__dark" src="/command-icons/dark/c724088b-7f74-5c21-bfdd-4fea7857c5d0.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> rsWallAutoJoin · Auto-Join Walls

> Module: Architecture / Walls and Editing

[← Back to command index](/en/commands/)

**Function**: Recalculate automatic junctions for a wall network, using the dimension of the selected walls.

**Run**: Enter `rsWallAutoJoin` in the Rhino command line (command-line interaction).

**Workflow**:

1. Select same-dimension smart walls for automatic junctions.
2. Enter applies the edit; inspect the junctions.

**Parameters**:

> This command has no numeric command-line parameters. Adjust its options in the settings window.

**Output**: Updated smart walls and associated objects.

**Notes**: Legacy rsWall2DAutoJoin is merged. 2D and 3D walls do not join each other.

The unified entry uses the actual dimension of selected walls and rejects mixed dimensions.
