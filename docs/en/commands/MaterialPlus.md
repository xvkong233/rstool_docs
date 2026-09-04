# MaterialPlus

> Module: Grasshopper Components / Display

[← Back to command index](/en/commands/)

![Icon](../../assets/gh-icons/MaterialPlus_24.png)

**Function**: Create a Rhino material with basic color and map settings.

**Usage**:

1. In the Grasshopper canvas, find the component under the "Display" group of the RsTool tab and drag it in
2. Connect each input port according to the parameter table (the ports marked "optional" are empty ports)
3. Executed once each time the canvas is solved, reading the results from the output port

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| diffuse color | DiffuseColour | Color | Color.White | single value |  |
| Diffuse map | DiffuseTex | text |  | Single value (optional) |  |
| AmbientColour | AmbientColour | Color | Color.Black | Single value (optional) |  |
| Glow color | EmissionColour | Color | Color.Black | Single value (optional) |  |
| reflectivity | Reflection | numerical value | 0 | single value |  |
| Smoothness | Smoothness | numerical value | 0 | single value |  |
| Transparency | Transparency | numerical value | 0.0 | single value |  |
| Transparency channel map | TransparencyTex | text |  | Single value (optional) |  |
| Bump map, make sure the Use advanced GPU lighting option is turned on in display mode | BumpTex | text |  | Single value (optional) |  |
| Whether Fresnel reflection is on | FresnelReflections | Boolean | No | single value |  |

**Notes**: This component runs in the Grasshopper canvas, with inputs and outputs connected through component ports; it is executed once each time the canvas is solved.

Output parameters:
| Name | Type | Description |
| --- | --- | --- |
| Material | General | Material |

Belongs to GH group: RsTool / Display
