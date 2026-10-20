# <span class="rstool-command-icon rstool-command-icon--heading rstool-command-icon--gh rstool-command-icon--single" title="CreaseVertex: Grasshopper component icon" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/gh/CreaseVertex_24.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> CreaseVertex

> Module: Grasshopper Components / SubD

[← Back to command index](/en/commands/)

**Function**: Sets the specified SubD vertex to an acute vertex.

**Usage**:

1. In the Grasshopper canvas, find the component from the "SubD" group of the RsTool tag and drag it in
2. Connect each input port according to the parameter table (the ports marked "optional" are empty ports)
3. Executed once each time the canvas is solved, reading the results from the output port

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| SubD object to be modified | SubD | SubD |  | single value |  |
| Points that need to be designated as sharp edges | CreasePt | point |  | list |  |

**Notes**: This component runs in the Grasshopper canvas, with inputs and outputs connected through component ports; it is executed once each time the canvas is solved.

Output parameters:
| Name | Type | Description |
| --- | --- | --- |
| SubD | SubD | Modified SubD |

Belongs to GH group: RsTool / SubD
