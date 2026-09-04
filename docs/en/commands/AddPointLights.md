# AddPointLights

> Module: Grasshopper Components / Light

[← Back to command index](/en/commands/)

![Icon](../../assets/gh-icons/AddPointLights_24.png)

**Function**: Batch add point lights to Rhino documents based on input points.

**Usage**:

1. In the Grasshopper canvas, find the component under the "Light" group of the RsTool tab and drag it in
2. Connect each input port according to the parameter table (the ports marked "optional" are empty ports)
3. Executed once each time the canvas is solved, reading the results from the output port

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Whether to generate point light sources | Run | Boolean |  | single value |  |
| Point light source position point | LocationPt | point |  | list |  |

**Notes**: This component runs in the Grasshopper canvas, with inputs and outputs connected through component ports; it is executed once each time the canvas is solved.

Belongs to GH group: RsTool / Light
