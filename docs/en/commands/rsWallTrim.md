# <span class="rstool-command-icon rstool-command-icon--heading" title="rsWallTrim: right-click the rsWallExtend button" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/light/f932fdaf-631b-543f-a6df-30a5680999b6.png" alt="" width="48" height="48" loading="eager" decoding="async"><img class="rstool-command-icon__dark" src="/command-icons/dark/f932fdaf-631b-543f-a6df-30a5680999b6.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> rsWallTrim · Trim Walls

> Module: Architecture / Walls and Editing

[← Back to command index](/en/commands/)

> Right-click the [rsWallExtend](./rsWallExtend) toolbar button to run this command. The two commands share the visible button icon.

**Function**: Trim wall portions against a finite boundary wall, committing the selected cuts together and retaining hosted openings.

**Run**: Enter `rsWallTrim` in the Rhino command line (command-line interaction).

**Workflow**:

1. Select a boundary wall.
2. Click portions to remove from other walls of the same dimension.
3. Enter commits the batch together.

**Parameters**:

> This command has no numeric command-line parameters. Adjust its options in the settings window.

**Output**: Updated smart walls and associated objects.

**Notes**: Cuts cannot remove or cross the full occupancy of hosted openings. Missing or ambiguous intersections are rejected.

The unified entry uses the actual dimension of selected walls and rejects mixed dimensions.
