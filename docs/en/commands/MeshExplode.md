# MeshExplode

> Module: Grasshopper Components / Mesh

[← Back to command index](/en/commands/)

![Icon](../../assets/gh-icons/ExplodeMesh_24.png)

**Function**: Split the mesh into independent parts based on angular tolerances.

**Usage**:

1. In the Grasshopper canvas, find the component under the "Mesh" group of the RsTool tab and drag it in
2. Connect each input port according to the parameter table (the ports marked "optional" are empty ports)
3. Executed once each time the canvas is solved, reading the results from the output port

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| mesh to be exploded | mesh | mesh |  | single value |  |
| Angle tolerance (radians) | AngleTolerance | numerical value |  | single value |  |

**Notes**: This component runs in the Grasshopper canvas, with inputs and outputs connected through component ports; it is executed once each time the canvas is solved.

Output parameters:
| Name | Type | Description |
| --- | --- | --- |
| exploded | mesh | exploded mesh |

Belongs to GH group: RsTool / Mesh
