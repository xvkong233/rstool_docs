# rsNewLayer · Create new layer

> Module: Organization & Selection / Layers

[← Back to command index](/en/commands/)

**Function**: Create (or reuse if existing) a new layer and make it current

**Run**: Enter `rsNewLayer` in the Rhino command line (command-line interaction).

**Workflow**:

1. Command line input rsNewLayer
2. Enter new layer name
3. Create a sublayer (or sibling) under the current layer and set it as the current layer

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| New layer name | layerName | text |  |  | RhinoGet.GetString; if the layer with the same name already exists, it will be directly set as the current layer. |

**Notes**: If the current layer is a sublayer, create a nested sublayer under the parent layer.
