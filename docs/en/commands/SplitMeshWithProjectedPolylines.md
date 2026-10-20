# <span class="rstool-command-icon rstool-command-icon--heading rstool-command-icon--gh rstool-command-icon--single" title="SplitMeshWithProjectedPolylines: Grasshopper component icon" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/gh/SplitMeshWithProjectedPolylines_24.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> SplitMeshWithProjectedPolylines

> Module: Grasshopper Components / Mesh

[← Back to command index](/en/commands/)

**Function**: Split the mesh using polylines projected onto the mesh.

**Usage**:

1. In the Grasshopper canvas, find the component under the "Mesh" group of the RsTool tab and drag it in
2. Connect each input port according to the parameter table (the ports marked "optional" are empty ports)
3. Executed once each time the canvas is solved, reading the results from the output port

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| mesh to be divided | mesh | mesh |  | single value |  |
| polyline for segmentation | Polylines | Curve |  | list |  |

**Notes**: This component runs in the Grasshopper canvas, with inputs and outputs connected through component ports; it is executed once each time the canvas is solved.

Output parameters:
| Name | Type | Description |
| --- | --- | --- |
| SplitMesh | Mesh | Split mesh |

Belongs to GH group: RsTool / Mesh
