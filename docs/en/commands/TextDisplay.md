# TextDisplay

> Module: Grasshopper Components / Display

[← Back to command index](/en/commands/)

![Icon](../../assets/gh-icons/TextDisplay_24.png)

**Function**: Display text labels in Rhino viewports.

**Usage**:

1. In the Grasshopper canvas, find the component under the "Display" group of the RsTool tab and drag it in
2. Connect each input port according to the parameter table (the ports marked "optional" are empty ports)
3. Executed once each time the canvas is solved, reading the results from the output port

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| text plane | Plane | Plane |  | list |  |
| Text to be created | Text | text |  | list |  |
| text size | Size | numerical value |  | list |  |
| Default color | Color | Color |  | list |  |
| font | Font | text |  | list |  |
| Text justification | Justification | integer | 7 | single value |  |

**Notes**: This component runs in the Grasshopper canvas, with inputs and outputs connected through component ports; it is executed once each time the canvas is solved.

Belongs to GH group: RsTool / Display
