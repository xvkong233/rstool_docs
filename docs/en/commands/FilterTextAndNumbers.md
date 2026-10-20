# <span class="rstool-command-icon rstool-command-icon--heading rstool-command-icon--gh rstool-command-icon--single" title="FilterTextAndNumbers: Grasshopper component icon" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/gh/FilterTextAndNumbers_24.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> FilterTextAndNumbers

> Module: Grasshopper Components / Text

[← Back to command index](/en/commands/)

**Function**: Filter and separate text content from digital content.

**Usage**:

1. In the Grasshopper canvas, find the component under the "Text" group of the RsTool tag and drag it in
2. Connect each input port according to the parameter table (the ports marked "optional" are empty ports)
3. Executed once each time the canvas is solved, reading the results from the output port

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Text to be filtered | Text | text |  | single value |  |

**Notes**: This component runs in the Grasshopper canvas, with inputs and outputs connected through component ports; it is executed once each time the canvas is solved.

Output parameters:
| Name | Type | Description |
| --- | --- | --- |
| Text | Text | Text |
| Number | Text | Number |

Belongs to GH group: RsTool / Text
