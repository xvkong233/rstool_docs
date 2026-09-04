# PolyCrv to Arc

> Module: Grasshopper Components / Curve

[← Back to command index](/en/commands/)

![Icon](../../assets/gh-icons/PolyCrvtoArc_24.png)

**Function**: Convert polycurves to arcs or straight line segments.

**Usage**:

1. In the Grasshopper canvas, find the component under the "Curve" group of the RsTool tab and drag it in
2. Connect each input port according to the parameter table (the ports marked "optional" are empty ports)
3. Executed once each time the canvas is solved, reading the results from the output port

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| polycurve | PolyCrv | Curve |  | single value |  |
| Tolerance | Tolerance | numerical value |  | single value |  |
| Angle tolerance | AngleTolerance | numerical value | 1 | single value |  |
| minimum length | MinimumLength | numerical value | 0 | single value |  |
| maximum length | MaximumLength | numerical value | 0 | single value |  |

**Notes**: This component runs in the Grasshopper canvas, with inputs and outputs connected through component ports; it is executed once each time the canvas is solved.

Output parameters:
| Name | Type | Description |
| --- | --- | --- |
| PolyCrv | Curve | Curve after arc fitting |

Belongs to GH group: RsTool / Curve
