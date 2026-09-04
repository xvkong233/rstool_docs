# NamedView

> Module: Grasshopper Components / Util

[← Back to command index](/en/commands/)

![Icon](../../assets/gh-icons/NamedViewList_24.png)

**Function**: Reads named views in the current Rhino document.

**Usage**:

1. In the Grasshopper canvas, find the component from the "Util" group of the RsTool tag and drag it in
2. Connect each input port according to the parameter table (the ports marked "optional" are empty ports)
3. Executed once each time the canvas is solved, reading the results from the output port

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Whether to get the named view list | Update | Boolean |  | single value |  |

**Notes**: This component runs in the Grasshopper canvas, with inputs and outputs connected through component ports; it is executed once each time the canvas is solved.

Output parameters:
| Name | Type | Description |
| --- | --- | --- |
| NamedViewList | Text | List of named views |

Belongs to GH group: RsTool / Util
