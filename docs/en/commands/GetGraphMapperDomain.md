# GetGraphMapperDomain

> Module: Grasshopper Components / Animation

[← Back to command index](/en/commands/)

![Icon](../../assets/gh-icons/GetGraphMapperDomain_24.png)

**Function**: Read the domain of the Graph Mapper component.

**Usage**:

1. In the Grasshopper canvas, find the component from the "Animation" group of the RsTool tab and drag it in
2. Connect each input port according to the parameter table (the ports marked "optional" are empty ports)
3. Executed once each time the canvas is solved, reading the results from the output port

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Graph Mapper output data | GraphMapperOutput | numerical value |  | single value |  |

**Notes**: This component runs in the Grasshopper canvas, with inputs and outputs connected through component ports; it is executed once each time the canvas is solved.

Output parameters:
| Name | Type | Description |
| --- | --- | --- |
| X0 | Numeric value | Graph Mapper domain starting value |
| X1 | Numeric value | End value of Graph Mapper domain |

Belongs to GH group: RsTool / Animation
