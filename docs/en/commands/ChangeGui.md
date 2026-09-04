# ChangeGui

> Module: Grasshopper Components / Util

[← Back to command index](/en/commands/)

![Icon](../../assets/gh-icons/ChangeGui_24.png)

**Function**: Modify the display settings of the Grasshopper interface.

**Usage**:

1. In the Grasshopper canvas, find the component from the "Util" group of the RsTool tag and drag it in
2. Connect each input port according to the parameter table (the ports marked "optional" are empty ports)
3. Executed once each time the canvas is solved, reading the results from the output port

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Whether to switch display | switcher | Boolean |  | single value |  |
| background color | canvas_back | Color |  | single value |  |
| Grid color | canvas_grid | Color |  | single value |  |
| Wire color | canvas_wire | Color |  | single value |  |
| Wire shadow color | canvas_shadow | Color |  | single value |  |

**Notes**: This component runs in the Grasshopper canvas, with inputs and outputs connected through component ports; it is executed once each time the canvas is solved.

Belongs to GH group: RsTool / Util
