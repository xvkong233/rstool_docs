# rsSubdivideMesh · Subdivide Mesh

> Module: Geometry / Meshes

[← Back to command index](/en/commands/)

**Function**: Catmull-Clark subdivided mesh

![rsSubdivideMesh Before subdivision: original mesh (wireframe is sparse)](../../assets/rsSubdivideMesh/image1.png)
*Original mesh before subdivision (Before): Rhino 8 viewport, a gray surface body occupying most of the field of view in the center of the screen, with default gradient backgrounds on the left and right sides (no UI panel); the mesh wireframe is sparse and the quadrilateral face is large, serving as the input object for Catmull-Clark subdivision*

![rsSubdivideMesh After subdivision: Catmull-Clark subdivision mesh (wireframe density is about 1.5 times)](../../assets/rsSubdivideMesh/image2.png)
*Catmull-Clark subdivided mesh (After): the same viewport and the same object as Example 1 (68 rows of 102 rows of outlines in the two images are consistent at the pixel level); the mesh line density is increased by about 50%, each quadrilateral face is divided into four, the number of faces is doubled, and the edges and corners are subdivided and smoothed*

> Screenshots and videos may show a Chinese-language interface. Labels and control positions can vary by Rhino or RSTool version.

**Run**: Enter `rsSubdivideMesh` in the Rhino command line (command-line interaction).

**Workflow**:

1. Select mesh
2. Loop: Append the Boundary option and enter the number of subdivisions (can switch boundary modes repeatedly)
3. Performing Catmull-Clark Segmentation

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Number of subdivisions | Iterations | integer | 1 | 1–6 |  |
| Boundary processing | Boundary | list | FixCorners | Free/FixCorners/FixEdges | AddOptionList; default index 1 (FixCorners), remember the last selection _lastModeIndex |

**Notes**: Implemented via SubD subdivisions
