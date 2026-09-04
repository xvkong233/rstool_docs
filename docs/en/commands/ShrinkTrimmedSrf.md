# ShrinkTrimmedSrf

> Module: Grasshopper Components / Surface

[← Back to command index](/en/commands/)

![Icon](../../assets/gh-icons/TrimmedSrf_24.png)

**Function**: Shrinks the underlying surface of the trimmed surface to the trimming boundary.

**Usage**:

1. In the Grasshopper canvas, find the component under the "Surface" group of the RsTool tab and drag it in
2. Connect each input port according to the parameter table (the ports marked "optional" are empty ports)
3. Executed once each time the canvas is solved, reading the results from the output port

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Trim surfaces | brep | polysurface |  | list |  |

**Notes**: This component runs in the Grasshopper canvas, with inputs and outputs connected through component ports; it is executed once each time the canvas is solved.

Output parameters:
| Name | Type | Description |
| --- | --- | --- |
| Shrunk | Polysurface | Shrunk Surface |

Belongs to GH group: RsTool / Surface
