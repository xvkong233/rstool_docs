# <span class="rstool-command-icon rstool-command-icon--heading" title="rsWallBoolean: right-click the rsWallRemoveHole button" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/light/2872ff54-efe1-54ca-a913-24676dd290c9.png" alt="" width="48" height="48" loading="eager" decoding="async"><img class="rstool-command-icon__dark" src="/command-icons/dark/2872ff54-efe1-54ca-a913-24676dd290c9.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> rsWallBoolean · Boolean Wall Openings

> Module: Architecture / Walls and Editing

[← Back to command index](/en/commands/)

> Right-click the [rsWallRemoveHole](./rsWallRemoveHole) toolbar button to run this command. The two commands share the visible button icon.

**Function**: Cut free openings in 3D smart walls with closed solids while retaining parametric walls and hosted openings.

**Run**: Enter `rsWallBoolean` in the Rhino command line (command-line interaction).

**Workflow**:

1. Run rsWallBoolean and select 3D smart walls.
2. Select closed solid cutters that intersect them.
3. Confirm; cutters are retained.

**Parameters**:

> This command has no numeric command-line parameters. Adjust its options in the settings window.

**Output**: 3D smart walls with free openings.

**Notes**: Also available as Boolean opening in the rsWall 3D panel. Use rsWallRemoveHole to restore free cuts. Hosted door, window, and elevator openings remain controlled by their objects.
