# rsAutoBoxMapping · Automatic box mapping

> Module: Organization & Selection / Material Tools

[← Back to command index](/en/commands/)

**Function**: Generate and apply Box Map (with local XYZ preview axes) for selected object (surface/polysurface/extrusion/mesh)

**Run**: Enter `rsAutoBoxMapping` in the Rhino command line (command-line interaction).

**Workflow**:

1. Command line input rsAutoBoxMapping
2. Select the object to assign the Box map axis to
3. Set size/rotation X, Y, Z/random displacement on command line (with real-time preview)
4. Press Enter to confirm the application of the Box sticker

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Size | Size | double | 1.0×Unit conversion (meters) or last value | >0 (actually \|size\|, the minimum is about 0.001) | OptionDouble; AcceptNumber can be input directly; memory _lastInputSize |
| RotateX | RotateX | double | 0 | Angle (degrees) |  |
| Rotate Y | RotateY | double | 0 | Angle (degrees) |  |
| Rotate Z | RotateZ | double | 0 | Angle (degrees) |  |
| random displacement | RandomOffset | double | 0 | >=0 | Each axis is offset from the origin of the map by a random coefficient of 0~1 × the range. |

**Notes**: The texture plane is intelligently aligned by geometry; parameters have real-time preview; the initial texture is restored when canceling
