# rsCirclePacking · Circle Packing

> Module: Physics Simulation / Form Finding & Relaxation

[← Back to command index](/en/commands/)

**Function**: A collection of non-overlapping circular curves that fit the grid surface

**Run**: Enter `rsCirclePacking` in the Rhino command line (command-line interaction).

**Workflow**:

1. Select the target mesh (Mesh)
2. Select a number of points (≥2) as the starting point for circle packaging
3. Enter minimum radius
4. Enter the maximum radius
5. Run the repulsion-projection solver (fixed 1500 steps) and Bake the circular curve into the document

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| minimum radius | minRadius | double | 1.0 | >0 (scaled by model units) | Random radius lower limit for each circle; static default lastMinR=1 |
| maximum radius | maxRadius | double | 3.0 | >0 (scaled by model units) | Random upper limit of radius for each circle; static default lastMaxR=3 |

**Notes**: The circle is automatically projected and fitted to the mesh normal; fixed iteration of 1500 steps.
