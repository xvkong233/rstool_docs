# rsBubble · Bubble

> Module: Physics Simulation / Form Finding & Relaxation

[← Back to command index](/en/commands/)

**Function**: Form-finding mesh that bulges upward with edges as anchor points (replaces selected objects in place)

**Run**: Enter `rsBubble` in the Rhino command line (command-line interaction).

**Workflow**:

1. Select the bubble base surface/mesh (Mesh or Brep)
2. If Brep is selected, enter the grid conversion precision.
3. Enter the target bubble height (current model units)
4. Enter the elastic force size (0–10000)
5. Run spring-particle form-finding solver (fixed 1000 steps) to generate a bulging mesh

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Grid transfer accuracy | meshPrecision | double | 1.0 | >0 | Prompt only when input is Brep; static default lastMeshPrecision |
| target height | bubbleHeight | double | 1.0 | ≥0 (scaled by model units) | The height of the highest point of the bubble relative to the original grid; static default lastBubbleHeight=1 |
| Elasticity | stiffness | double | 50 | 0 – 10000 | Spring edge constraint strength; static default lastStiffness=50 |

**Notes**: Solve for fixed iterations of 1000 steps, with the first 50 steps being height scaling warm-up; requires at least one exposed boundary point as an anchor point.
