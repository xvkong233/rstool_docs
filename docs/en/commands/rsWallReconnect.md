# <span class="rstool-command-icon rstool-command-icon--heading" title="rsWallReconnect: toolbar icon" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/light/0c941e31-6c47-56e0-8918-6da111c14cb3.png" alt="" width="48" height="48" loading="eager" decoding="async"><img class="rstool-command-icon__dark" src="/command-icons/dark/0c941e31-6c47-56e0-8918-6da111c14cb3.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> rsWallReconnect · Reconnect Walls

> Module: Architecture / Walls and Editing

[← Back to command index](/en/commands/)

**Function**: Recalculate connections for selected same-dimension walls.

**Run**: Enter `rsWallReconnect` in the Rhino command line (command-line interaction).

**Workflow**:

1. Select smart walls of one dimension to repair.
2. Enter recalculates connections; inspect the result.

**Parameters**:

> This command has no numeric command-line parameters. Adjust its options in the settings window.

**Output**: Updated smart walls and associated objects.

**Notes**: Legacy rsWall2DReconnect is merged into this entry.

The unified entry uses the actual dimension of selected walls and rejects mixed dimensions.
