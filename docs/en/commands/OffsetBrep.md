# OffsetBrep

> Module: Grasshopper Components / Surface

[← Back to command index](/en/commands/)

![Icon](../../assets/gh-icons/OffsetBrep_24.png)

**Function**: Offset Breps or polysurfaces and produce solid results.

**Usage**:

1. In the Grasshopper canvas, find the component under the "Surface" group of the RsTool tab and drag it in
2. Connect each input port according to the parameter table (the ports marked "optional" are empty ports)
3. Executed once each time the canvas is solved, reading the results from the output port

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| polysurface | brep | polysurface |  | single value |  |
| offset distance | distance | numerical value | 1.0 | single value |  |
| Whether entity | solid | Boolean | Yes | single value |  |
| Whether to extend | extend | Boolean | Yes | single value |  |
| Offset on both sides | bothside | Boolean | No | single value |  |

**Notes**: This component runs in the Grasshopper canvas, with inputs and outputs connected through component ports; it is executed once each time the canvas is solved.

Output parameters:
| Name | Type | Description |
| --- | --- | --- |
| OffsetBrep | Polysurface | Offset polysurface |

Belongs to GH group: RsTool / Surface
