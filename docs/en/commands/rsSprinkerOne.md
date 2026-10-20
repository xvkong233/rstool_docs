# <span class="rstool-command-icon rstool-command-icon--heading rstool-command-icon--single" title="rsSprinkerOne: right-click the rsSprinkerMutiple button" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/light/8043f71b-48e8-494a-8a8f-0b7f89e54c74.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> rsSprinkerOne · Single-Point Scatter

> Module: Geometry / Object Transforms

[← Back to command index](/en/commands/)

> Right-click the [rsSprinkerMutiple](./rsSprinkerMutiple) toolbar button to run this command. The two commands share the visible button icon.

**Function**: Spread the selected individual objects onto the target surface/grid at random points, random rotations and random scales

**Run**: Enter `rsSprinkerOne` in the Rhino command line (command-line interaction).

**Workflow**:

1. Command line input rsSprinkerOne
2. Select an object to be scattered (GetMultiple 1,1)
3. Specify a reference point (GetPoint)
4. Select target surface/mesh (Brep/Mesh/SubD, GetObject)
5. Use options to set angle range, amount, min/max zoom when selecting a target
6. Enter to generate randomly scattered objects

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Angle range | AngleRange | double | 180 | >=0 | Upper limit of random rotation angle (degrees): actual rotation = PI*(angle/180)*rand |
| Dispersion quantity | Count | integer | 20 | >=1 | The number of random points generated on the target surface |
| Minimum zoom value | MinimumScale | double | 0.8 | >=0.01 | Random scaling lower limit |
| Maximum zoom value | MaximumScale | double | 1.2 | >=0.01 | Random scaling cap |

**Notes**: The target surface will be converted into a mesh and points will be taken on it; each copy will be at a different random position.
