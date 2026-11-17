# <span class="rstool-command-icon rstool-command-icon--heading" title="rsWallRemoveHole: toolbar icon" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/light/2872ff54-efe1-54ca-a913-24676dd290c9.png" alt="" width="48" height="48" loading="eager" decoding="async"><img class="rstool-command-icon__dark" src="/command-icons/dark/2872ff54-efe1-54ca-a913-24676dd290c9.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> rsWallRemoveHole · Remove Free Wall Openings

> Module: Architecture / Walls and Editing

[← Back to command index](/en/commands/)

**Function**: Remove free Boolean wall cuts and rebuild the 3D wall while retaining normal door, window, and elevator openings.

**Run**: Enter `rsWallRemoveHole` in the Rhino command line (command-line interaction).

**Workflow**:

1. Run rsWallRemoveHole and select 3D smart walls to restore.
2. Confirm removing free cuts and inspect the restored walls.

**Parameters**:

> This command has no numeric command-line parameters. Adjust its options in the settings window.

**Output**: 3D smart walls with free Boolean cuts removed.

**Notes**: This does not delete doors or windows. Move or delete their corresponding hosted objects to remove those openings. Also available as Remove openings in the rsWall 3D panel.
