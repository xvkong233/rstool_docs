# FilletMultipleRadii

> Module: Grasshopper Components / Curve

[← Back to command index](/en/commands/)

![Icon](../../assets/gh-icons/FilletsMutipleRadius_24.png)

**Function**: Use multiple radii to sequentially fillet the corners of a curve.

**Usage**:

1. In the Grasshopper canvas, find the component under the "Curve" group of the RsTool tab and drag it in
2. Connect each input port according to the parameter table (the ports marked "optional" are empty ports)
3. Executed once each time the canvas is solved, reading the results from the output port

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Curve to fillet | Curve | Curve |  | single value |  |
| Fillet radius list | RadiusList | numerical value |  | list |  |

**Notes**: This component runs in the Grasshopper canvas, with inputs and outputs connected through component ports; it is executed once each time the canvas is solved.

Output parameters:
| Name | Type | Description |
| --- | --- | --- |
| FilletCrv | Curve | Filleted curve |

Belongs to GH group: RsTool / Curve
