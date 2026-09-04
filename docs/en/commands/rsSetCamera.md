# rsSetCamera · Set Camera

> Module: Views & Documentation / Views & Cameras

[← Back to command index](/en/commands/)

**Function**: Sets the camera of the current view (perspective or two-point perspective projection)

**Run**: Enter `rsSetCamera` in the Rhino command line (command-line interaction).

**Workflow**:

1. Run rsSetCamera from the command line
2. Select projection type (Perspective / TwoPointPerspective)
3. Select the surface/Brep/Mesh/SubD where the camera position is located
4. Pick the camera position point on it
5. Pick target points and generate camera view

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Projection type | ProjectionMode | list | Perspective | Perspective/TwoPointPerspective (perspective/two-point perspective) | Switch via AddOption; remember last time (_lastProjectionMode) |

**Notes**: The camera position point is automatically raised 1.7 meters along the normal line (model unit); the lens focal length is fixed at 30mm; two-point perspective requires that the camera and the target be at a distance on the horizontal plane
