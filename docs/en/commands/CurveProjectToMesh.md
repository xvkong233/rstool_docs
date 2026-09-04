# CurveProjectToMesh

> Module: Grasshopper Components / Mesh

[← Back to command index](/en/commands/)

![Icon](../../assets/gh-icons/CrvProjectToMesh_24.png)

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
