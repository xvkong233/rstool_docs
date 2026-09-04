# MeshEdgeSelect

> Module: Grasshopper Components / Mesh

[← Back to command index](/en/commands/)

![Icon](../../assets/gh-icons/MeshEdgeSelect_24.png)

**Function**: Filter mesh edges based on the angle between adjacent mesh faces.

**Usage**:

1. In the Grasshopper canvas, find the component under the "Mesh" group of the RsTool tab and drag it in
2. Connect each input port according to the parameter table (the ports marked "optional" are empty ports)
3. Executed once each time the canvas is solved, reading the results from the output port

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Mesh whose edges will be selected | Mesh | mesh |  | single value |  |
| Maximum edge angle in degrees | AngleLimit | numerical value | 15 | single value |  |

**Notes**: This component runs in the Grasshopper canvas, with inputs and outputs connected through component ports; it is executed once each time the canvas is solved.

Output parameters:
| Name | Type | Description |
| --- | --- | --- |
| outLine | straight line | mesh edge line |

Belongs to GH group: RsTool / Mesh
