# rsAssignRandomMaterialToLayers · Randomly assign materials by layer

> Module: Organization & Selection / Layers

[← Back to command index](/en/commands/)

**Function**: Randomly create and assign a material (name RM-&lt;layer path&gt;) to all layers that do not have a render material assigned yet

**Run**: Enter `rsAssignRandomMaterialToLayers` in the Rhino command line (command-line interaction).

**Workflow**:

1. Command line input rsAssignRandomMaterialToLayers
2. The program loops through all layers that do not have a material set and randomly assigns a material

**Parameters**:

> This command has no numeric command-line parameters. Adjust its options in the settings window.

**Notes**: Only processes layers with RenderMaterialIndex == -1; no interactive parameters, batch command
