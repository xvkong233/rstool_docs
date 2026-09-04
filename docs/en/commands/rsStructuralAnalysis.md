# rsStructuralAnalysis · Structural mechanics analysis

> Module: Analysis / Building Performance Analysis

[← Back to command index](/en/commands/)

**Function**: Structural analysis results (deformed shape/axial force/support reaction force) mesh and curve, can be Bake to the document

**Run**: Enter `rsStructuralAnalysis` in the Rhino command line (opens a settings window).

**Workflow**:

1. Pop up structural analysis form (Eto Forms)
2. Pick a member (curve/line)
3. Pick supports (points)
4. Add load (nodal force/distributed force)
5. Set parameters such as material elastic modulus, cross-sectional area, and load in each direction
6. Click Analyze to display the deformation/axial force in real time, and finally Bake the results to the document

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| elastic modulus | ElasticModulus | double | 200 | 1 – 1000 (GPa) in increments of 1 to 1 decimal place | Material stiffness |
| Cross-sectional area | Area | double | 1000 | 1 – 1000000 (mm²) in increments of 50, 0 decimal places | Rod cross-sectional area |
| X direction force | Fx | double | 0 | -1000000 – 1000000 (kN), 2 decimal places | Node load X component |
| Y direction force | Fy | double | 0 | -1000000 – 1000000 (kN), 2 decimal places | Node load Y component |
| Z direction force | Fz | double | -10 | -1000000 – 1000000 (kN), 2 decimal places | Nodal load Z component (default down -10) |
| Deformation amplification factor | DeformationScale | double | 50 | 1 – 100000 in increments of 10, 0 decimal places | Result distortion display magnification |
| Result display mode | ResultMode | list | Original | Original / DeformedShape / Deformation+AxialForce / AxialForce / Reaction | Original shape / Deformed shape / Deformation + axial force / Axial force only / Support reaction force |
| Ribbon scheme | ColorScheme | list |  | StructuralColorSchemes | List of color schemes provided by StructuralColorSchemes |

**Notes**: A linear elastic small deformation beam model is used; the results are presented as enlarged geometry and vertex color.
