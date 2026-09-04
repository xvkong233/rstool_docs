# rsCameraPath · Camera Path

> Module: Views & Documentation / Views & Cameras

[← Back to command index](/en/commands/)

**Function**: Camera path curve and target path curve, key frame points; or export animation frame PNG sequence

**Run**: Enter `rsCameraPath` in the Rhino command line (opens a settings window).

**Workflow**:

1. Run rsCameraPath from the command line
2. Open the camera path animation recorder window (Eto Modeless Form)
3. After adjusting the viewing angle, click "Record current viewing angle"
4. Manage keyframes/clips, set duration/loop/frame rate
5. Play preview, or generate path curves/keyframe points, or export animation frames

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Duration (seconds) | Duration | double | 5.0 | 0.5 – 600 | NumericStepper increment 0.5; CameraClip.Duration default 5.0 |
| loop | Loop | toggle | false |  |  |
| Export frame rate | ExportFps | integer | 30 | 1 – 120 | NumericStepper integer, incremented by 1 |

**Notes**: Fragments and keyframes are persisted with .3dm UserString; window is non-modal and on top; exported frames use EaseInOut easing; at least 2 keyframes are required to play/generate paths
