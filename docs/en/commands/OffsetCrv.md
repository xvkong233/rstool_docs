# OffsetCrv

> Module: Grasshopper Components / Curve

[← Back to command index](/en/commands/)

![Icon](../../assets/gh-icons/OfsetCrvs_24.png)

**Function**: Offsets a curve on a specified plane.

**Usage**:

1. In the Grasshopper canvas, find the component under the "Curve" group of the RsTool tab and drag it in
2. Connect each input port according to the parameter table (the ports marked "optional" are empty ports)
3. Executed once each time the canvas is solved, reading the results from the output port

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Curve to be offset | crvs | Curve |  | single value |  |
| offset plane | plane | Plane | Plane XY | single value |  |
| offset distance | distance | numerical value | 1 | single value |  |
| Offset on both sides | bothside | Boolean | No | single value |  |
| Capping type 0 = None 1 = Linear 2 = Tangency | cap | integer | 0 | single value |  |

**Notes**: This component runs in the Grasshopper canvas, with inputs and outputs connected through component ports; it is executed once each time the canvas is solved.

Output parameters:
| Name | Type | Description |
| --- | --- | --- |
| offsetcrvs | Curve | Offset curve |

Belongs to GH group: RsTool / Curve
