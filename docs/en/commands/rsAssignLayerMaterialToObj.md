# <span class="rstool-command-icon rstool-command-icon--heading rstool-command-icon--single" title="rsAssignLayerMaterialToObj: toolbar icon" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/light/b8ffb8ad-cdca-486c-9ed7-bb9cd1cf825e.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> rsAssignLayerMaterialToObj · Assign layer material to object

> Module: Organization & Selection / Layers

[← Back to command index](/en/commands/)

**Function**: Change the object whose material source is "with layer" in the target layer (including inside the block) to use the layer material (with object)

**Run**: Enter `rsAssignLayerMaterialToObj` in the Rhino command line (command-line interaction).

**Workflow**:

1. Command line input rsAssignLayerMaterialToObj
2. Select objects to specify which layer to update (supports tiles)
3. The program changes the objects with the "with layer" material in the selected and internal layers of the block to "with the object" and assigns the layer material

**Parameters**:

> This command has no numeric command-line parameters. Adjust its options in the settings window.

**Notes**: Supports recursive processing of objects within tile definitions
