# rsXLine · Two-Point Construction Line

> Module: Views & Documentation / Annotation & Documentation

[← Back to command index](/en/commands/)

**Function**: Define a direction with two points and create an extended line on a locked construction layer.

**Run**: Enter `rsXLine` in the Rhino command line (command-line interaction).

**Workflow**:

1. Run and pick two points to define the line direction.
2. The line is extended to suit the scene, added to RS_XLine, and that layer is locked.

**Parameters**:

> No numeric settings or separate settings window are required. Follow the workflow above.

**Notes**: The result looks like an infinite construction line but is a finite segment, extended beyond the projected scene by about 20% at each end. A viewport-based fallback is used when necessary. It uses RS_XLine_Dashed. Unlock RS_XLine before editing or deleting these lines. No settings dialog is used.
