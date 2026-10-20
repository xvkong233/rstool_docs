# <span class="rstool-command-icon rstool-command-icon--heading rstool-command-icon--gh rstool-command-icon--single" title="GetCamera: Grasshopper component icon" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/gh/GetCamera_24.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> GetCamera

> Module: Grasshopper Components / Animation

[← Back to command index](/en/commands/)

**Function**: Read camera information for the current Rhino viewport.

**Usage**:

1. In the Grasshopper canvas, find the component from the "Animation" group of the RsTool tab and drag it in
2. Connect each input port according to the parameter table (the ports marked "optional" are empty ports)
3. Executed once each time the canvas is solved, reading the results from the output port

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Whether to obtain current camera information | Active | Boolean | No | single value |  |

**Notes**: This component runs in the Grasshopper canvas, with inputs and outputs connected through component ports; it is executed once each time the canvas is solved.

Output parameters:
| Name | Type | Description |
| --- | --- | --- |
| CameraLocation | Point | Camera Location Point |
| CameraTarget | Point | Camera target point |
| CameraPlane | Plane | Camera Plane |

Belongs to GH group: RsTool / Animation
