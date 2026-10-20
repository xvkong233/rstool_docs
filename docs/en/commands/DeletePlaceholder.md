# <span class="rstool-command-icon rstool-command-icon--heading rstool-command-icon--gh rstool-command-icon--single" title="DeletePlaceholder: Grasshopper component icon" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/gh/DeletePlaceholder_24.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> DeletePlaceholder

> Module: Grasshopper Components / Util

[← Back to command index](/en/commands/)

**Function**: Remove placeholder components from Grasshopper documents.

**Usage**:

1. In the Grasshopper canvas, find the component from the "Util" group of the RsTool tag and drag it in
2. Connect each input port according to the parameter table (the ports marked "optional" are empty ports)
3. Executed once each time the canvas is solved, reading the results from the output port

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Whether to remove the placeholder operator | Delete | Boolean | Yes | single value |  |

**Notes**: This component runs in the Grasshopper canvas, with inputs and outputs connected through component ports; it is executed once each time the canvas is solved.

Belongs to GH group: RsTool / Util
