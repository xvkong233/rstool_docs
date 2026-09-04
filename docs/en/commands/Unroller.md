# Unroller

> Module: Grasshopper Components / Surface

[← Back to command index](/en/commands/)

![Icon](../../assets/gh-icons/Unroll_24.png)

**Function**: Unfold single or polysurfaces and output the corresponding unfolded geometry.

**Usage**:

1. In the Grasshopper canvas, find the component under the "Surface" group of the RsTool tab and drag it in
2. Connect each input port according to the parameter table (the ports marked "optional" are empty ports)
3. Executed once each time the canvas is solved, reading the results from the output port

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Surface or polysurface to be developed | brep | polysurface |  | single value |  |
| along with the unfolded curve | crv | Curve |  | Single value (optional) |  |
| Whether to explode when unfolded | explode | Boolean | Yes | single value |  |
| Explode the gap | ExplodeSpacing | numerical value | 1.0 | single value |  |

**Notes**: This component runs in the Grasshopper canvas, with inputs and outputs connected through component ports; it is executed once each time the canvas is solved.

Output parameters:
| Name | Type | Description |
| --- | --- | --- |
| UnrolledBrep | Polysurface | Unrolled surface |
| UnrolledCrv | Curve | Expanded curve |

Belongs to GH group: RsTool / Surface
