# CurveBooleanRegions

> Module: Grasshopper Components / Curve

[← Back to command index](/en/commands/)

![Icon](../../assets/gh-icons/CurveBooleanRegion_24.png)

**Function**: Creates a Boolean region from a closed planar curve.

**Usage**:

1. In the Grasshopper canvas, find the component under the "Curve" group of the RsTool tab and drag it in
2. Connect each input port according to the parameter table (the ports marked "optional" are empty ports)
3. Executed once each time the canvas is solved, reading the results from the output port

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Closed planar curves to compute regions from | Curves | Curve |  | list |  |
| Origin of the projection plane | Reference Point | point |  | single value |  |
| Combine overlapping regions if true | Combine | Boolean |  | single value |  |
| Tolerance for region calculation | Tolerance | numerical value | 0.001 | single value |  |

**Notes**: This component runs in the Grasshopper canvas, with inputs and outputs connected through component ports; it is executed once each time the canvas is solved.

Belongs to GH group: RsTool / Curve
