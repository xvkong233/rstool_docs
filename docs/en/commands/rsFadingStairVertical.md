# <span class="rstool-command-icon rstool-command-icon--heading" title="rsFadingStairVertical: toolbar icon" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/light/a1cce2f9-310f-53b8-9a13-4a5b823f4b36.png" alt="" width="48" height="48" loading="eager" decoding="async"><img class="rstool-command-icon__dark" src="/command-icons/dark/a1cce2f9-310f-53b8-9a13-4a5b823f4b36.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> rsFadingStairVertical · Vertical Tapered Staircase

> Module: Architecture / Stairs & Ramps

[← Back to command index](/en/commands/)

**Function**: Vertical evanescent staircase Brep

![rsFadingStairVertical · Vertical gradient staircase effect](../../assets/rsFadingStairVertical/image1.png)
*The difference from rsFadingStair: the tread is completely vertical (the tread of rsFadingStair fades out along the curve, this command keeps the tread vertical, and only the height of the tread fades away)*

> Screenshots and videos may show a Chinese-language interface. Labels and control positions can vary by Rhino or RSTool version.

**Run**: Enter `rsFadingStairVertical` in the Rhino command line (command-line interaction).

**Workflow**:

1. Select two base curves
2. Enter the number of steps
3. Generate vertical evanescent staircase Brep

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Number of steps on stairs | StepCount | int | 12 | 1~999 | Default 12 |
