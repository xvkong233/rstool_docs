# <span class="rstool-command-icon rstool-command-icon--heading rstool-command-icon--gh rstool-command-icon--single" title="ChangeGui: Grasshopper component icon" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/gh/ChangeGui_24.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> ChangeGui

> Module: Grasshopper Components / Util

[← Back to command index](/en/commands/)

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
