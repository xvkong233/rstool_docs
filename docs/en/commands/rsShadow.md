# rsShadow · Shadow Analysis

> Module: Analysis / Building Performance Analysis

[← Back to command index](/en/commands/)

**Function**: Shadow projection curve at each moment, and semi-transparent shadow filling surface

![rsShadow · Time-by-moment shadow projection curve stacking effect](../../assets/rsShadow/image1.png)
*Shadow analysis: stack of moment-by-moment shadow projection curves generated at 10-minute intervals*

> Screenshots and videos may show a Chinese-language interface. Labels and control positions can vary by Rhino or RSTool version.

**Run**: Enter `rsShadow` in the Rhino command line (command-line interaction).

**Workflow**:

1. Make sure Document Sun is enabled
2. Select the object you want to cast the shadow on (Brep/Mesh/SubD)
3. Enter starting hour (0–23)
4. Enter end hour (≥ start, 0–23)
5. Calculate shadows moment by moment at fixed 10 minute intervals

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| start hour | startHour | integer | 8 | 0 – 23 | Shadow analysis start time (local time) |
| end hour | endHour | integer | 17 | 0 – 23, and ≥ start hour | Shadow analysis end time |

**Notes**: Sun must be enabled; sampling interval is fixed at 10 minutes and is not exposed in command line parameters.
