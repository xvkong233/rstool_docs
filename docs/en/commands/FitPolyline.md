# <span class="rstool-command-icon rstool-command-icon--heading rstool-command-icon--gh rstool-command-icon--single" title="FitPolyline: Grasshopper component icon" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/gh/FitPolyline_24.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> FitPolyline

> Module: Grasshopper Components / Curve

[← Back to command index](/en/commands/)

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
