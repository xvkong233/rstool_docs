# rsMoveProject · Move Project

> Module: Geometry / Object Transforms

[← Back to command index](/en/commands/)

**Function**: Move the selected object along the vertical (Z-axis) projection to the target surface/mesh surface

**Run**: Enter `rsMoveProject` in the Rhino command line (command-line interaction).

**Workflow**:

1. Command line input rsMoveProject
2. Select the moving object to be projected (GetMultiple)
3. Select the target surface/mesh (Brep/Mesh/SubD, multiple selections available, internal conversion to mesh)
4. The system intersects the rays along the ±Z axis and projects the lower center point of the object bounding box onto the target surface.

**Parameters**:

> This command has no numeric command-line parameters. Adjust its options in the settings window.

**Notes**: There are no numerical parameters; use MeshRay to intersect upward (+Z) and downward (-Z), and move when hitting the first intersection point; SubD first rotates to Brep and then to the mesh.
