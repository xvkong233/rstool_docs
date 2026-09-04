# rsMembrane · Membrane structure form finding

> Module: Physics Simulation / Form Finding & Relaxation

[← Back to command index](/en/commands/)

**Function**: Membrane structure form-finding result mesh (vertices are constrained by anchor points, sag/shrink according to elasticity and gravity)

**Run**: Enter `rsMembrane` in the Rhino command line (opens a settings window).

**Workflow**:

1. Pop up the membrane structure form finding form (Eto Forms)
2. Pick the base mesh (Mesh)
3. Pick at least two anchor points (Point objects)
4. Adjust elasticity and gravity parameters and preview in real time
5. Click Generate to write the current preview into the document as a new grid

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Elasticity | Elasticity | double | 50.0 | 0 – 1000, in increments of 5, 1 decimal place | Anti-shrinkage ability; the larger it is, the closer it is to the original side length, and the weaker the shrinkage. |
| Gravity | Gravity | double | 0.0 | 0 – 1000 (m/s²) in increments of 0.5, 2 decimal places | Gravity acceleration along world-Z, allowed to be 0 |

**Notes**: The original grid is hidden while the form is running; the original grid display state can be maintained after generation.
