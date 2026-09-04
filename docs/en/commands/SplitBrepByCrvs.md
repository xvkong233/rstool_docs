# SplitBrepByCrvs

> Module: Grasshopper Components / Surface

[← Back to command index](/en/commands/)

![Icon](../../assets/gh-icons/SpitBrepByCrvs_24.png)

**Function**: Split the Brep using curves lying on the surface.

**Usage**:

1. In the Grasshopper canvas, find the component under the "Surface" group of the RsTool tab and drag it in
2. Connect each input port according to the parameter table (the ports marked "optional" are empty ports)
3. Executed once each time the canvas is solved, reading the results from the output port

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Brep to split | Brep | polysurface |  | single value |  |
| Splitting curves | SplitCrvs | Curve |  | list |  |

**Notes**: This component runs in the Grasshopper canvas, with inputs and outputs connected through component ports; it is executed once each time the canvas is solved.

Output parameters:
| Name | Type | Description |
| --- | --- | --- |
| SplitBreps | Polysurface | Split Breps |

Belongs to GH group: RsTool / Surface
