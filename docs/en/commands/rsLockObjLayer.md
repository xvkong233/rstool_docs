# rsLockObjLayer · Lock Selected Objects’ Layers

> Module: Organization & Selection / Layers

[← Back to command index](/en/commands/)

**Function**: Select objects to lock their containing layers and keep other work easier to select.

**Run**: Enter `rsLockObjLayer` in the Rhino command line (command-line interaction).

**Workflow**:

1. Run the command, select objects whose layers should be locked, and press Enter.
2. The command locks each distinct layer and reports the result.

**Parameters**:

> No numeric settings or separate settings window are required. Follow the workflow above.

**Notes**: This locks entire layers, including other objects on those layers. The current layer is skipped; switch to another current layer first if necessary. Use [rsUnlockAllLayers](./rsUnlockAllLayers) to unlock all layers. There are no numeric settings or dialog.
