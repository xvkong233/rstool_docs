# rsFpsGame · FPS reaction test

> Module: Fun / Interactive Entertainment

[← Back to command index](/en/commands/)

**Function**: Enter FPS response speed test mode (click on the target that appears in the viewport)

**Run**: Enter `rsFpsGame` in the Rhino command line (opens a settings window).

**Workflow**:

1. Command line input rsFpsGame
2. Open the FPS game settings window
3. Set game duration and mouse sensitivity
4. Click Start Game to enter the test

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Game duration | Duration | integer | 30 | 10~120 (step 5) | Game duration in seconds, falls back to 30 if <5 |
| Mouse sensitivity | MouseSensitivity | double | 0.5 | 0.1~3.0 | Mouse sensitivity, too low (<0.05) falls back to 0.5 |

**Notes**: Running rsFpsGame again while the game is running will be rejected and you need to exit the current game first.
