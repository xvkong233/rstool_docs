# MeshPipe

> Module: Grasshopper Components / Mesh

[← Back to command index](/en/commands/)

![Icon](../../assets/gh-icons/MeshPipe_24.png)

**Function**: Generate meshed circular tubes along curves.

**Usage**:

1. In the Grasshopper canvas, find the component under the "Mesh" group of the RsTool tab and drag it in
2. Connect each input port according to the parameter table (the ports marked "optional" are empty ports)
3. Executed once each time the canvas is solved, reading the results from the output port

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Generate mesh tube curves | Curve | Curve |  | single value |  |
| Angle tolerance | angleTol | numerical value | 0.25 | single value |  |
| Radius of round tube | radius | numerical value | 1.0 | single value |  |
| Number of mesh segments | segments | integer | 8 | single value |  |
| Round tube rotation angle | rotation | numerical value | 0 | single value |  |
| Capping type 0 = No capping 1 = Flat head 2 = Round head | cap | integer | 1 | single value |  |

**Notes**: This component runs in the Grasshopper canvas, with inputs and outputs connected through component ports; it is executed once each time the canvas is solved.

Output parameters:
| Name | Type | Description |
| --- | --- | --- |
| meshPipe | mesh | meshPipe |

Belongs to GH group: RsTool / Mesh
