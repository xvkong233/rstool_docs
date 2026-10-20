# <span class="rstool-command-icon rstool-command-icon--heading rstool-command-icon--gh rstool-command-icon--single" title="CurveProjectToMesh: Grasshopper component icon" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/gh/CrvProjectToMesh_24.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> CurveProjectToMesh

> Module: Grasshopper Components / Mesh

[← Back to command index](/en/commands/)

**Function**: Projects a curve to the mesh in the specified direction.

**Usage**:

1. In the Grasshopper canvas, find the component under the "Mesh" group of the RsTool tab and drag it in
2. Connect each input port according to the parameter table (the ports marked "optional" are empty ports)
3. Executed once each time the canvas is solved, reading the results from the output port

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| mesh to be projected | mesh | mesh |  | single value |  |
| Projection curve | Curve | Curve |  | list |  |
| Curve projection direction | Vector | vector |  | single value |  |

**Notes**: This component runs in the Grasshopper canvas, with inputs and outputs connected through component ports; it is executed once each time the canvas is solved.

Output parameters:
| Name | Type | Description |
| --- | --- | --- |
| ProjectedCrvs | Curve | Projected curve |

Belongs to GH group: RsTool / Mesh
