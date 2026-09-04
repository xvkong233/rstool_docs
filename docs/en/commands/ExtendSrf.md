# ExtendSrf

> Module: Grasshopper Components / Surface

[← Back to command index](/en/commands/)

![Icon](../../assets/gh-icons/ExtendSrf_24.png)

**Function**: Extends the surface in the specified direction.

**Usage**:

1. In the Grasshopper canvas, find the component under the "Surface" group of the RsTool tab and drag it in
2. Connect each input port according to the parameter table (the ports marked "optional" are empty ports)
3. Executed once each time the canvas is solved, reading the results from the output port

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Surface to be extended | Srf | Surface |  | single value |  |
| Surface extension direction 0 = U direction 1 = V direction | ExtendDirection | integer | 0 | single value |  |
| Starting position extension length | Start | numerical value | 0 | single value |  |
| End position extension length | End | numerical value | 0 | single value |  |

**Notes**: This component runs in the Grasshopper canvas, with inputs and outputs connected through component ports; it is executed once each time the canvas is solved.

Output parameters:
| Name | Type | Description |
| --- | --- | --- |
| ExtendedSrf | Surface | Extended surface |

Belongs to GH group: RsTool / Surface
