# rsAxisLock · Arrow-Key Axis Lock

> Module: Productivity / Productivity

[← Back to command index](/en/commands/)

**Function**: Toggle arrow-key constraints along world X, Y, and Z during supported point picking with a base point.

**Run**: Enter `rsAxisLock` in the Rhino command line (command-line interaction).

**Workflow**:

1. Run and check the reported state. Run again to turn it off.
2. During point picking with a base point, press Right for X, Left for Y, or Up for Z.
3. Press Down to release the active axis constraint and continue picking.

**Parameters**:

> No numeric settings or separate settings window are required. Follow the workflow above.

**Notes**: Axes are always world-aligned, regardless of the construction plane. With no saved settings the feature starts disabled; subsequent toggle state is saved. It only handles supported point picking with a base point, not every mouse operation. Use [rsAxisLockStatus](./rsAxisLockStatus) for diagnostics. There is no settings dialog.
