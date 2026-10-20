# <span class="rstool-command-icon rstool-command-icon--heading rstool-command-icon--single" title="rsAxisLockBasis: toolbar icon" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/light/affa3c57-d0be-541c-b77f-ed4266b0407f.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> rsAxisLockBasis · Confirm World Axis-Lock Basis

> Module: Productivity / Productivity

[← Back to command index](/en/commands/)

**Function**: Confirm world XYZ as the arrow-key axis-lock basis and report it.

**Run**: Enter `rsAxisLockBasis` in the Rhino command line (command-line interaction).

**Workflow**:

1. Run and read the world-coordinate confirmation.
2. Use rsAxisLock to enable or disable arrow-key constraints.

**Parameters**:

> No numeric settings or separate settings window are required. Follow the workflow above.

**Notes**: The current implementation supports World only, not CPlane or custom axes, and does not modify Rhino’s construction plane. This command does not replace the axis-lock toggle and has no settings dialog.
