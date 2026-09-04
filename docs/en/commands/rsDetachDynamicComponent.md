# rsDetachDynamicComponent · Separate dynamic components

> Module: Dynamic Components / Assembly

[← Back to command index](/en/commands/)

**Function**: The selected dynamic component instance becomes a normal geometry, and the command line reports the number of separations; Failure is returned when no instances can be separated.

**Run**: Enter `rsDetachDynamicComponent` in the Rhino command line (command-line interaction).

**Workflow**:

1. Get the currently selected dynamic component instance; if not selected, you will be prompted to select the instance to be separated.
2. Confirmation restores the instance to normal geometry that can be independently edited (can be rolled back via Rhino Undo).
3. Redraw the view and echo "N dynamic component instances detached".

**Parameters**:

> This command has no numeric command-line parameters. Adjust its options in the settings window.

**Notes**: Detachment is an irreversible undoing of the structure (it can still be undone using Rhino Undo). If you only need to change the size/parameters, use "Component Options" instead of separation.
