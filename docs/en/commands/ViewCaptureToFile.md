# ViewCaptureToFile

> Module: Grasshopper Components / Util

[← Back to command index](/en/commands/)

![Icon](../../assets/gh-icons/ViewCaptrueToFile_24.png)

**Function**: Captures the current Rhino viewport from Grasshopper and saves it to a specified path.

**Usage**:

1. In the Grasshopper canvas, find the component from the "Util" group of the RsTool tag and drag it in
2. Connect each input port according to the parameter table (the ports marked "optional" are empty ports)
3. Executed once each time the canvas is solved, reading the results from the output port

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Whether to take a screenshot | On | Boolean | No | single value |  |
| Screenshot path Please change the background in the display panel to use program settings | FilePath | text |  | single value |  |
| Rhino window background color | ViewportBackgroundColor | Color |  | single value |  |
| File format 0 = jpg 1 = png | ImageFormat | integer | 0 | single value |  |
| width resolution | width | integer | 1920 | single value |  |
| height resolution | height | integer | 1080 | single value |  |
| png format transparent background | PngTrans | Boolean | No | single value |  |

**Notes**: This component runs in the Grasshopper canvas, with inputs and outputs connected through component ports; it is executed once each time the canvas is solved.

Belongs to GH group: RsTool / Util
