# Text curve

> Module: Grasshopper Components / Curve

[← Back to command index](/en/commands/)

![Icon](../../assets/gh-icons/TextCurve_24.png)

**Function**: Create text outline curves based on text content and font.

**Usage**:

1. In the Grasshopper canvas, find the component under the "Curve" group of the RsTool tab and drag it in
2. Connect each input port according to the parameter table (the ports marked "optional" are empty ports)
3. Executed once each time the canvas is solved, reading the results from the output port

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| text plane | Plane | Plane | Plane XY | single value |  |
| Text to be created RhinoStudio.cn | Text | text | "RhinoStudio.cn" | single value |  |
| Font bold | Font | text | "black body" | single value |  |
| text size | Size | numerical value | 1.0 | single value |  |
| Whether to add an outer rectangle | CrvOn | Boolean | No | single value |  |
| Frame offset distance | OffDistance | numerical value | 0.1 | single value |  |

**Notes**: This component runs in the Grasshopper canvas, with inputs and outputs connected through component ports; it is executed once each time the canvas is solved.

Output parameters:
| Name | Type | Description |
| --- | --- | --- |
| TextCurve | Curve | Text Curve |

Belongs to GH group: RsTool / Curve
