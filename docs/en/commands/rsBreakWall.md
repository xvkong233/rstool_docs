# <span class="rstool-command-icon rstool-command-icon--heading" title="rsBreakWall: toolbar icon" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/light/ef98a9e2-5588-5b18-99a8-4914e65532c5.png" alt="" width="48" height="48" loading="eager" decoding="async"><img class="rstool-command-icon__dark" src="/command-icons/dark/ef98a9e2-5588-5b18-99a8-4914e65532c5.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> rsBreakWall · Break Wall

> Module: Architecture / Walls and Editing

[← Back to command index](/en/commands/)

**Function**: Split a 2D or 3D smart wall at an axis position while retaining valid opening hosts.

**Run**: Enter `rsBreakWall` in the Rhino command line (command-line interaction).

**Workflow**:

1. Select a smart wall.
2. Pick the break point on its axis.
3. Confirm the result.

**Parameters**:

> This command has no numeric command-line parameters. Adjust its options in the settings window.

**Output**: Updated smart walls and associated objects.

**Notes**: The break cannot cross hosted-opening occupancy. Legacy rsBreakWall2D is merged.

The unified entry uses the actual dimension of selected walls and rejects mixed dimensions.
