# <span class="rstool-command-icon rstool-command-icon--heading" title="rsNewLayer: toolbar icon" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/light/d0354ebf-596f-5c33-8fa6-aced691ad74a.png" alt="" width="48" height="48" loading="eager" decoding="async"><img class="rstool-command-icon__dark" src="/command-icons/dark/d0354ebf-596f-5c33-8fa6-aced691ad74a.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> rsNewLayer · Create new layer

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
