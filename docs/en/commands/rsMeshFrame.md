# rsMeshFrame · Mesh Frame

> Module: Geometry / Meshes

[← Back to command index](/en/commands/)

**Function**: Picture Frame topology generated within the original mesh surface

![rsMeshFrame input: original mesh (solid faces)](../../assets/rsMeshFrame/image1.png)
*Original mesh (Before): solid mesh surface with continuous surface and only visible thin edges, used as the input object for generating border topology*

![rsMeshFrame output: frame (Picture Frame) topological mesh (thick black mesh)](../../assets/rsMeshFrame/image2.png)
*Border (Picture Frame) Topological mesh (After): Generate an indented border ring in each face of the original mesh. The borders of adjacent faces are connected to each other, and the overall appearance is a dense thick black mesh line frame; the border itself has a width, which is controlled by "Scale Ratio" or "Inward Distance", so the lines are obviously thicker than the thin window mesh lines of rsMeshWindow; the original mesh surface is hidden, and only the frame structure is retained.*

> Screenshots and videos may show a Chinese-language interface. Labels and control positions can vary by Rhino or RSTool version.

**Run**: Enter `rsMeshFrame` in the Rhino command line (command-line interaction).

**Workflow**:

1. Select mesh
2. Select generation method: Scale/Distance
3. input parameters
4. Generate Picture Frame border mesh

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Generation method | Mode | list | Scale | Scale / Distance |  |
| Zoom ratio | Scale ratio | double | 0.8 | 0.01–0.99 | Scale mode only |
| inward distance | Inward distance | double | 1 | >=0.001 | Distance mode only |

**Notes**: Similar to rsMeshWindow, each face of the original mesh is indented, but rsMeshFrame generates a wide border (Picture Frame) instead of thin pane lines: the line width is controlled by "scaling ratio" or "inward distance", and is visually thicker and darker than rsMeshWindow; the original mesh face will be hidden, leaving only the border, suitable for making mesh/frame effects
