# <span class="rstool-command-icon rstool-command-icon--heading" title="rsAxisLockStatus: toolbar icon" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/light/0990a32c-00d2-528d-9505-31928da21d44.png" alt="" width="48" height="48" loading="eager" decoding="async"><img class="rstool-command-icon__dark" src="/command-icons/dark/0990a32c-00d2-528d-9505-31928da21d44.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> rsAxisLockStatus · Axis-Lock Status

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
