# <span class="rstool-command-icon rstool-command-icon--heading rstool-command-icon--gh rstool-command-icon--single" title="Helix: Grasshopper component icon" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/gh/HelixCrv_24.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> Helix

> Module: Grasshopper Components / Curve

[← Back to command index](/en/commands/)

**Function**: Create a spiral or spring-like curve.

**Usage**:

1. In the Grasshopper canvas, find the component under the "Curve" group of the RsTool tab and drag it in
2. Connect each input port according to the parameter table (the ports marked "optional" are empty ports)
3. Executed once each time the canvas is solved, reading the results from the output port

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Draw plane | plane | Plane |  | single value |  |
| pitch | pitch | numerical value |  | single value |  |
| Number of turns | turnCount | numerical value |  | single value |  |
| starting radius | radiusStart | numerical value |  | single value |  |
| end radius | radiusEnd | numerical value |  | single value |  |

**Notes**: This component runs in the Grasshopper canvas, with inputs and outputs connected through component ports; it is executed once each time the canvas is solved.

Output parameters:
| Name | Type | Description |
| --- | --- | --- |
| HelixCrv | Curve | Helix |

Belongs to GH group: RsTool / Curve
