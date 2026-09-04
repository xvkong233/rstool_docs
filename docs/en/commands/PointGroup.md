# PointGroup

> Module: Grasshopper Components / Points

[← Back to command index](/en/commands/)

![Icon](../../assets/gh-icons/PointsGroup_24.png)

**Function**: Divide points into groups based on the distance between them.

**Usage**:

1. In the Grasshopper canvas, find the component under the "Points" group of the RsTool tab and drag it in
2. Connect each input port according to the parameter table (the ports marked "optional" are empty ports)
3. Executed once each time the canvas is solved, reading the results from the output port

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Point collection | point | point |  | list |  |
| range distance | distance | numerical value | 10.0 | single value |  |

**Notes**: This component runs in the Grasshopper canvas, with inputs and outputs connected through component ports; it is executed once each time the canvas is solved.

Output parameters:
| Name | Type | Description |
| --- | --- | --- |
| point | point | grouped point set |
| index | integer | original number |

Belongs to GH group: RsTool / Points
