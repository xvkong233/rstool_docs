# rsMoveToOrigin · Move to origin

> Module: Geometry / Object Transforms

[← Back to command index](/en/commands/)

**Function**: Translate the user-specified reference point to the world origin, thereby moving all objects in the document as a whole

**Run**: Enter `rsMoveToOrigin` in the Rhino command line (command-line interaction).

**Workflow**:

1. Command line input rsMoveToOrigin
2. Specify a reference point using GetPoint
3. The system translates the entire document (including hidden/locked objects and layers) so that the reference point is aligned with the world origin (0,0,0)
4. After completion, restore the original state of the object and layer and display ZoomExtents in full screen

**Parameters**:

> This command has no numeric command-line parameters. Adjust its options in the settings window.

**Notes**: No numerical parameters, only picks a reference point; will temporarily unlock/display all layers and objects, and restore the original visibility and lock state after completion. The command class name is rsMoveToOriginCommand, and the English command name is rsMoveToOrigin.
