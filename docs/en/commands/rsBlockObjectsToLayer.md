# rsBlockObjectsToLayer · Move Block Hierarchy to Layers

> Module: Organization & Selection / Layers

[← Back to command index](/en/commands/)

**Function**: Move the specified range of block instances (including block definitions and nested sub-blocks) to the target layer, and solidify the corresponding layer material to the object

**Run**: Enter `rsBlockObjectsToLayer` in the Rhino command line (command-line interaction).

**Workflow**:

1. Command line input rsBlockObjectsToLayer
2. Select the processing scope on the command line (all tiles/only selected instances/all instances with the same definition/all tiles on the selected layer)
3. Select tile instances on demand
4. Select the target layer in the pop-up layer selection dialog box
5. The program moves the matching tiles (including nesting) into the target layer and solidifies the material

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Processing scope | ProcessingScope | list | AllBlocks | AllBlocks / SelectedInstances / SameDefinition / SameLayer | Command line GetOption option; if it is not AllBlocks, you need to select the block instance subsequently |

**Notes**: Use ShowSelectLayerDialog to select the target layer; the solidification material logic is the same as rsMoveLayerObjs
