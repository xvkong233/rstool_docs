# ClosestOddEvenNumber

> Module: Grasshopper Components / Math

[← Back to command index](/en/commands/)

![Icon](../../assets/gh-icons/ClosestOddEvenNumber_24.png)

**Function**: Find the odd and even numbers that are closest to the target value.

**Usage**:

1. In the Grasshopper canvas, find the component under the "Math" group of the RsTool tab and drag it in
2. Connect each input port according to the parameter table (the ports marked "optional" are empty ports)
3. Executed once each time the canvas is solved, reading the results from the output port

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Input value | x | numerical value |  | single value |  |

**Notes**: This component runs in the Grasshopper canvas, with inputs and outputs connected through component ports; it is executed once each time the canvas is solved.

Output parameters:
| Name | Type | Description |
| --- | --- | --- |
| Even | Integer | Even |
| Odd | Integer | Odd |

Belongs to GH group: RsTool / Math
