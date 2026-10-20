# <span class="rstool-command-icon rstool-command-icon--heading rstool-command-icon--single" title="rsLockObjLayer: toolbar icon" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/light/e3c9c5bd-3c11-5477-ac9d-83252f192ca6.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> rsLockObjLayer · Lock Selected Objects’ Layers

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
