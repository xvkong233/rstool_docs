# <span class="rstool-command-icon rstool-command-icon--heading rstool-command-icon--gh rstool-command-icon--single" title="2dTextToScreen: Grasshopper component icon" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/gh/2dTxtToScreen_24.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> 2dTextToScreen

> Module: Grasshopper Components / Display

[← Back to command index](/en/commands/)

**Function**: Displays 2D text in screen coordinates of the Rhino viewport, suitable for auxiliary annotation and previewing.

**Usage**:

1. In the Grasshopper canvas, find the component under the "Display" group of the RsTool tab and drag it in
2. Connect each input port according to the parameter table (the ports marked "optional" are empty ports)
3. Executed once each time the canvas is solved, reading the results from the output port

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Window display text | Text | text |  | single value |  |
| Text coordinates, note that they are pixel coordinates | Location | point |  | single value |  |
| font height | Size | numerical value | 12.0 | single value |  |
| Font color | Color | Color | Color.Black | single value |  |
| font | Font | text |  | Single value (optional) |  |

**Notes**: This component runs in the Grasshopper canvas, with inputs and outputs connected through component ports; it is executed once each time the canvas is solved.

Belongs to GH group: RsTool / Display
