# <span class="rstool-command-icon rstool-command-icon--heading" title="rsDetachDynamicComponent: toolbar icon" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/light/82eca76b-37d9-5284-bf57-49bcd1155acb.png" alt="" width="48" height="48" loading="eager" decoding="async"><img class="rstool-command-icon__dark" src="/command-icons/dark/82eca76b-37d9-5284-bf57-49bcd1155acb.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> rsDetachDynamicComponent · Separate dynamic components

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
