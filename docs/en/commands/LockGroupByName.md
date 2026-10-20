# <span class="rstool-command-icon rstool-command-icon--heading rstool-command-icon--gh rstool-command-icon--single" title="LockGroupByName: Grasshopper component icon" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/gh/LockGroupByName_24.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> LockGroupByName

> Module: Grasshopper Components / Animation

[← Back to command index](/en/commands/)

**Function**: Lock or unlock objects in a Grasshopper group by name.

**Usage**:

1. In the Grasshopper canvas, find the component from the "Animation" group of the RsTool tab and drag it in
2. Connect each input port according to the parameter table (the ports marked "optional" are empty ports)
3. Executed once each time the canvas is solved, reading the results from the output port

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Whether to lock the Group with the specified name in gh | Active | Boolean |  | single value |  |
| GHGroup name | GroupName | text |  | single value |  |
| When true, the object in the group is unlocked; when false, it is locked. | Unlock | Boolean |  | single value |  |

**Notes**: This component runs in the Grasshopper canvas, with inputs and outputs connected through component ports; it is executed once each time the canvas is solved.

Belongs to GH group: RsTool / Animation
