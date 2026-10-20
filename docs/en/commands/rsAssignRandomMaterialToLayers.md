# <span class="rstool-command-icon rstool-command-icon--heading rstool-command-icon--single" title="rsAssignRandomMaterialToLayers: right-click the rsAssignRandomColorToLayer button" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/light/5f16386b-3bf2-40d4-ab3d-cc93e4e4eda7.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> rsAssignRandomMaterialToLayers · Randomly assign materials by layer

> Module: Organization & Selection / Layers

[← Back to command index](/en/commands/)

> Right-click the [rsAssignRandomColorToLayer](./rsAssignRandomColorToLayer) toolbar button to run this command. The two commands share the visible button icon.

**Function**: Randomly create and assign a material (name RM-&lt;layer path&gt;) to all layers that do not have a render material assigned yet

**Run**: Enter `rsAssignRandomMaterialToLayers` in the Rhino command line (command-line interaction).

**Workflow**:

1. Command line input rsAssignRandomMaterialToLayers
2. The program loops through all layers that do not have a material set and randomly assigns a material

**Parameters**:

> This command has no numeric command-line parameters. Adjust its options in the settings window.

**Notes**: Only processes layers with RenderMaterialIndex == -1; no interactive parameters, batch command
