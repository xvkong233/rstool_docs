# <span class="rstool-command-icon rstool-command-icon--heading rstool-command-icon--gh rstool-command-icon--single" title="SubDToBrep: Grasshopper component icon" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/gh/SubDToBrep_24.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> SubDToBrep

> Module: Grasshopper Components / SubD

[← Back to command index](/en/commands/)

**Function**: Convert SubD object to NURBS Brep.

**Usage**:

1. In the Grasshopper canvas, find the component from the "SubD" group of the RsTool tag and drag it in
2. Connect each input port according to the parameter table (the ports marked "optional" are empty ports)
3. Executed once each time the canvas is solved, reading the results from the output port

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| SubD | SubD | SubD |  | single value |  |

**Notes**: This component runs in the Grasshopper canvas, with inputs and outputs connected through component ports; it is executed once each time the canvas is solved.

Output parameters:
| Name | Type | Description |
| --- | --- | --- |
| Brep | Polysurface | Brep |

Belongs to GH group: RsTool / SubD
