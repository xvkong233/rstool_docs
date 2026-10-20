# <span class="rstool-command-icon rstool-command-icon--heading rstool-command-icon--gh rstool-command-icon--single" title="ExtendCrvOnSrf: Grasshopper component icon" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/gh/ExtendCrvOnSrf_24.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> ExtendCrvOnSrf

> Module: Grasshopper Components / Curve

[← Back to command index](/en/commands/)

**Function**: Extends the ends of the curve along the surface to the surface boundary.

**Usage**:

1. In the Grasshopper canvas, find the component under the "Curve" group of the RsTool tab and drag it in
2. Connect each input port according to the parameter table (the ports marked "optional" are empty ports)
3. Executed once each time the canvas is solved, reading the results from the output port

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Curve to be extended | Crv | Curve |  | single value |  |
| Reference surface | Srf | Surface |  | single value |  |
| Extended side | Side | integer | 2 | single value |  |

**Notes**: This component runs in the Grasshopper canvas, with inputs and outputs connected through component ports; it is executed once each time the canvas is solved.

Output parameters:
| Name | Type | Description |
| --- | --- | --- |
| ExtendedCrv | Curve | Extended curve |

Belongs to GH group: RsTool / Curve
