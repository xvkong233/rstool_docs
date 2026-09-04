# EventOperation

> Module: Grasshopper Components / Animation

[← Back to command index](/en/commands/)

![Icon](../../assets/gh-icons/EventOperation_24.png)

**Function**: Handle events and time intervals in the Grasshopper timeline.

**Usage**:

1. In the Grasshopper canvas, find the component from the "Animation" group of the RsTool tab and drag it in
2. Connect each input port according to the parameter table (the ports marked "optional" are empty ports)
3. Executed once each time the canvas is solved, reading the results from the output port

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| event | events | numerical value |  | list |  |
| time | time | numerical value |  | single value |  |

**Notes**: This component runs in the Grasshopper canvas, with inputs and outputs connected through component ports; it is executed once each time the canvas is solved.

Output parameters:
| Name | Type | Description |
| --- | --- | --- |
| OutValue | Numeric value | Output value |

Belongs to GH group: RsTool / Animation
