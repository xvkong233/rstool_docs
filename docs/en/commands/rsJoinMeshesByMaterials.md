# rsJoinMeshesByMaterials · Merge meshes by material

> Module: Geometry / Meshes

[← Back to command index](/en/commands/)

**Function**: Mesh group merged by material

**Run**: Enter `rsJoinMeshesByMaterials` in the Rhino command line (command-line interaction).

**Workflow**:

1. Automatically enumerate all meshes in the document (ObjectEnumeratorSettings)
2. Group by material hash
3. Each group is combined into a mesh

**Parameters**:

> This command has no numeric command-line parameters. Adjust its options in the settings window.

**Notes**: No manual selection required, all meshes in the document are automatically processed. This command is mainly used to process imported 3dmax materials, because if they are not combined according to materials, the model display will be very stuck; after combination, it will be very smooth.
