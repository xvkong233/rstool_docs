# rsMoveAlongNormal · Move Along Normal

> Module: SubD Tools / Editing Tools

[← Back to command index](/en/commands/)

**Function**: SubD / Mesh control points moved by a specified distance along their respective normal directions (in-situ GripUpdate update)

**Run**: Enter `rsMoveAlongNormal` in the Rhino command line (command-line interaction).

**Workflow**:

1. Command line input rsMoveAlongNormal
2. Select SubD or Mesh control points (Grips)
3. Automatically calculate the normal direction of each control point
4. Drag the mouse or enter a numerical value to set the movement distance along the normal line
5. Submit update control point

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Moving distance | Distance (finalDist) | double | 0.0 (interactive input) | Model unit (can be dragged or entered as a value) | The distance moved along the normal direction of the respective control point; GetPoint is constrained to the normal line and AcceptNumber |

**Notes**: The normal is calculated by the control mesh; SubD uses the equivalent mesh of the control mesh to find the closest vertex normal (tolerance 0.01 match), compatible with corner points and hard edge Crease.
