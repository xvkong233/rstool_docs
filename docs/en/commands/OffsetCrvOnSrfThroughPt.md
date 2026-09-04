# OffsetCrvOnSrfThroughPt

> Module: Grasshopper Components / Curve

[← Back to command index](/en/commands/)

![Icon](../../assets/gh-icons/OffsetCrvOnSrfThoughtPt_24.png)

**Function**: Offsets a curve on a surface and passes the result through specified points.

**Usage**:

1. In the Grasshopper canvas, find the component under the "Curve" group of the RsTool tab and drag it in
2. Connect each input port according to the parameter table (the ports marked "optional" are empty ports)
3. Executed once each time the canvas is solved, reading the results from the output port

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Curve to be offset | Crv | Curve |  | single value |  |
| The point through which the offset curve needs to pass | Pt | point |  | single value |  |
| Reference surface | Srf | Surface |  | single value |  |

**Notes**: This component runs in the Grasshopper canvas, with inputs and outputs connected through component ports; it is executed once each time the canvas is solved.

Output parameters:
| Name | Type | Description |
| --- | --- | --- |
| OffsetCrv | Curve | Offset curve |

Belongs to GH group: RsTool / Curve
