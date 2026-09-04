# Preview Materials

> Module: Grasshopper Components / Display

[← Back to command index](/en/commands/)

![Icon](../../assets/gh-icons/PreviewMaterials_24.png)

**Function**: Show input materials in Grasshopper preview.

**Usage**:

1. In the Grasshopper canvas, find the component under the "Display" group of the RsTool tab and drag it in
2. Connect each input port according to the parameter table (the ports marked "optional" are empty ports)
3. Executed once each time the canvas is solved, reading the results from the output port

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Mesh object for the material to be displayed | Mesh | grid |  | list |  |
| Default color | Color | Color |  | list (optional) |  |
| Transparency 0-1 | Transparency | numerical value |  | list |  |
| Diffuse map file | Diffuse | text |  | list (optional) |  |
| Transparent channel map file | Transparency Map | text |  | list (optional) |  |
| HDR map file | HDR Map | text |  | list (optional) |  |
| Bump map file | Bump Map | text |  | list (optional) |  |
| Highlight intensity 0-1 | Shininess | numerical value |  | list (optional) |  |

**Notes**: This component runs in the Grasshopper canvas, with inputs and outputs connected through component ports; it is executed once each time the canvas is solved.

Belongs to GH group: RsTool / Display
