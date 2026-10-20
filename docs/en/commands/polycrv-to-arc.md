# <span class="rstool-command-icon rstool-command-icon--heading rstool-command-icon--gh rstool-command-icon--single" title="PolyCrv to Arc: Grasshopper component icon" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/gh/PolyCrvtoArc_24.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> PolyCrv to Arc

> Module: Grasshopper Components / Curve

[← Back to command index](/en/commands/)

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
