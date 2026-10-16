# rsAxisLockStatus · Axis-Lock Status

> Module: Productivity / Productivity

[← Back to command index](/en/commands/)

**Function**: Print axis-lock diagnostics to help explain why an arrow key is not constraining a point.

**Run**: Enter `rsAxisLockStatus` in the Rhino command line (command-line interaction).

**Workflow**:

1. Run and inspect the enabled state, world basis, and recent point-picking diagnostics in the Rhino command line.
2. If disabled, run rsAxisLock. If no point picker with a base point is active, enter a suitable picking step and retry.

**Parameters**:

> No numeric settings or separate settings window are required. Follow the workflow above.

**Notes**: This is a read-only diagnostic: it does not change geometry or toggle axis locking, and has no settings dialog.
