# ObjectsExport

> Module: Grasshopper Components / Util

[← Back to command index](/en/commands/)

![Icon](../../assets/gh-icons/FileExport_24.png)

**Function**: Exports the specified objects to the selected file format.

**Usage**:

1. In the Grasshopper canvas, find the component from the "Util" group of the RsTool tag and drag it in
2. Connect each input port according to the parameter table (the ports marked "optional" are empty ports)
3. Executed once each time the canvas is solved, reading the results from the output port

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Whether to export | On | Boolean | No | single value |  |
| Object to be exported | Objects | Geometry |  | list |  |
| file path | FilePath | text |  | single value |  |

**Notes**: This component runs in the Grasshopper canvas, with inputs and outputs connected through component ports; it is executed once each time the canvas is solved.

Belongs to GH group: RsTool / Util
