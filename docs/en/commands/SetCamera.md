# SetCamera

> Module: Grasshopper Components / Animation

[← Back to command index](/en/commands/)

![Icon](../../assets/gh-icons/Camera_24.png)

**Function**: Sets the camera position and direction of the current Rhino viewport.

**Usage**:

1. In the Grasshopper canvas, find the component from the "Animation" group of the RsTool tab and drag it in
2. Connect each input port according to the parameter table (the ports marked "optional" are empty ports)
3. Executed once each time the canvas is solved, reading the results from the output port

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Whether to control the camera | On | Boolean | No | single value |  |
| camera position | Location | point |  | single value |  |
| camera target point | Target | point |  | single value |  |
| lens focal length | Len | numerical value | 30 | single value |  |
| Camera rotation angle | Bias | numerical value | 0 | single value |  |
| Up | Up | vector | Vector3d.ZAxis | single value |  |
| Mesh object used to find mesh outlines | Mesh | grid |  | list (optional) |  |
| IsParallel | IsParallel | Boolean | No | single value |  |

**Notes**: This component runs in the Grasshopper canvas, with inputs and outputs connected through component ports; it is executed once each time the canvas is solved.

Output parameters:
| Name | Type | Description |
| --- | --- | --- |
| cameraPlane | Plane | cameraPlane |
| meshOutLines | Curves | Mesh outlines |

Belongs to GH group: RsTool / Animation
