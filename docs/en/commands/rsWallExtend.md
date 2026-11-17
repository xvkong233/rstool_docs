# <span class="rstool-command-icon rstool-command-icon--heading" title="rsWallExtend: toolbar icon" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/light/f932fdaf-631b-543f-a6df-30a5680999b6.png" alt="" width="48" height="48" loading="eager" decoding="async"><img class="rstool-command-icon__dark" src="/command-icons/dark/f932fdaf-631b-543f-a6df-30a5680999b6.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> rsWallExtend · Extend Walls

> Module: Architecture / Walls and Editing

[← Back to command index](/en/commands/)

**Function**: Extend one or more same-dimension smart walls to a target wall.

**Run**: Enter `rsWallExtend` in the Rhino command line (command-line interaction).

**Workflow**:

1. Select the target wall, then the same-dimension walls to extend.
2. Point picking indicates the nearby end; window selection lets the tool determine an extendable end.
3. Enter applies the edit; check reported skips.

**Parameters**:

> This command has no numeric command-line parameters. Adjust its options in the settings window.

**Output**: Updated smart walls and associated objects.

**Notes**: Legacy rsWall2dExtend is merged. The target is excluded from extension.

The unified entry uses the actual dimension of selected walls and rejects mixed dimensions.
