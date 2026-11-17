# <span class="rstool-command-icon rstool-command-icon--heading rstool-command-icon--missing" title="No icon in the current toolbar" aria-hidden="true"></span> rsStairToGeometry · Stair to Geometry

> Module: Architecture / Stairs & Ramps

[← Back to command index](/en/commands/)

> The current toolbar has no icon for this command. The dash is a placeholder, not a toolbar icon; run the command by name.

**Function**: Convert parametric 3D stairs to ordinary Brep components for downstream tools.

**Run**: Enter `rsStairToGeometry` in the Rhino command line (command-line interaction).

**Workflow**:

1. Run rsStairToGeometry and select one or more parametric 3D stairs.
2. Confirm; use Undo to recover parametric objects.

**Parameters**:

> No numeric settings or separate settings window are required. Follow the workflow above.

**Output**: Ordinary stair Brep components.

**Notes**: Retains placement, layers, groups, user properties, and part appearance. Open handrail Breps are not forcibly closed. Ordinary geometry no longer supports stair parameter editing.
