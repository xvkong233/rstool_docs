# FitPolyline

> Module: Grasshopper Components / Curve

[← Back to command index](/en/commands/)

![Icon](../../assets/gh-icons/FitPolyline_24.png)

**Function**: Fits an approximately smooth portion of a polyline to a curve.

**Usage**:

1. In the Grasshopper canvas, find the component under the "Curve" group of the RsTool tab and drag it in
2. Connect each input port according to the parameter table (the ports marked "optional" are empty ports)
3. Executed once each time the canvas is solved, reading the results from the output port

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| polyline | polyline | Curve |  | single value |  |
| Angle limit value | anglelimit | numerical value |  | single value |  |

**Notes**: This component runs in the Grasshopper canvas, with inputs and outputs connected through component ports; it is executed once each time the canvas is solved.

Output parameters:
| Name | Type | Description |
| --- | --- | --- |
| Curve | Curve | Multiple curves |

Belongs to GH group: RsTool / Curve
