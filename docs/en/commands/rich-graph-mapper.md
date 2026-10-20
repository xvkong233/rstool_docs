# <span class="rstool-command-icon rstool-command-icon--heading rstool-command-icon--gh rstool-command-icon--single" title="Rich Graph Mapper: Grasshopper component icon" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/gh/RichGraphMapper.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> Rich Graph Mapper

> Module: Grasshopper Components / Util

[← Back to command index](/en/commands/)

**Function**: Provides editable enhanced numerical mapping curves.

**Usage**:

1. In the Grasshopper canvas, find the component from the "Util" group of the RsTool tag and drag it in
2. Connect each input port according to the parameter table (the ports marked "optional" are empty ports)
3. Executed once each time the canvas is solved, reading the results from the output port

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Input values | Values | numerical value |  | list |  |
| Source domain | Source | interval |  | single value |  |
| Target domain | Target | interval |  | single value |  |

**Notes**: This component runs in the Grasshopper canvas, with inputs and outputs connected through component ports; it is executed once each time the canvas is solved.

Output parameters:
| Name | Type | Description |
| --- | --- | --- |
| Values | Numeric values | Output values |

Belongs to GH group: RsTool / Util
