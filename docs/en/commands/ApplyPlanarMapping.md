# <span class="rstool-command-icon rstool-command-icon--heading rstool-command-icon--gh rstool-command-icon--single" title="ApplyPlanarMapping: Grasshopper component icon" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/gh/PlanarMapping_24.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> ApplyPlanarMapping

> Module: Grasshopper Components / TextureMapping

[← Back to command index](/en/commands/)

**Function**: Applies a flat texture map to the object.

**Usage**:

1. In the Grasshopper canvas, find the component from the "TextureMapping" group of the RsTool tag and drag it in
2. Connect each input port according to the parameter table (the ports marked "optional" are empty ports)
3. Executed once each time the canvas is solved, reading the results from the output port

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| The Mesh object to be assigned a texture | Mesh | grid |  | single value |  |
| Use flat rectangle for mapping | Rec | Rectangle |  | single value |  |

**Notes**: This component runs in the Grasshopper canvas, with inputs and outputs connected through component ports; it is executed once each time the canvas is solved.

Output parameters:
| Name | Type | Description |
| --- | --- | --- |
| MappedMesh | Mesh | Mesh after assigning plane map axis |

Belongs to GH group: RsTool / TextureMapping
