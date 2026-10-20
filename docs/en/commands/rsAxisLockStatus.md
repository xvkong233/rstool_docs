# <span class="rstool-command-icon rstool-command-icon--heading rstool-command-icon--missing" title="No icon in the current toolbar" aria-hidden="true"></span> rsAxisLockStatus · Axis-Lock Status

> Module: Productivity / Productivity

[← Back to command index](/en/commands/)

> The current toolbar has no icon for this command. The dash is a placeholder, not a toolbar icon; run the command by name.

**Function**: Print axis-lock diagnostics to help explain why an arrow key is not constraining a point.

**Run**: Enter `rsAxisLockStatus` in the Rhino command line (command-line interaction).

**Workflow**:

1. Run and inspect the enabled state, world basis, and recent point-picking diagnostics in the Rhino command line.
2. If disabled, run rsAxisLock. If no point picker with a base point is active, enter a suitable picking step and retry.

**Parameters**:

> No numeric settings or separate settings window are required. Follow the workflow above.

**Notes**: This is a read-only diagnostic: it does not change geometry or toggle axis locking, and has no settings dialog.
