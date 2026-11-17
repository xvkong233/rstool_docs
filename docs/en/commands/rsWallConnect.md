# <span class="rstool-command-icon rstool-command-icon--heading" title="rsWallConnect: toolbar icon" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/light/30a507e6-1a76-5519-bcf5-ba291eb8c4d9.png" alt="" width="48" height="48" loading="eager" decoding="async"><img class="rstool-command-icon__dark" src="/command-icons/dark/30a507e6-1a76-5519-bcf5-ba291eb8c4d9.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> rsWallConnect · Connect Walls

> Module: Architecture / Walls and Editing

[← Back to command index](/en/commands/)

**Function**: Pick the retained sides of two straight walls to connect their axes while retaining separate walls.

**Run**: Enter `rsWallConnect` in the Rhino command line (command-line interaction).

**Workflow**:

1. Pick the retained side of each straight wall of the same dimension.
2. Check the connection; parallel, coincident, or invalid junctions are rejected.

**Parameters**:

> This command has no numeric command-line parameters. Adjust its options in the settings window.

**Output**: Updated smart walls and associated objects.

**Notes**: This retains two separate objects. 3D walls need actual vertical overlap.

The unified entry uses the actual dimension of selected walls and rejects mixed dimensions.
