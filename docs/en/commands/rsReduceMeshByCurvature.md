# rsReduceMeshByCurvature · Reduce Mesh by Curvature

> Module: Geometry / Meshes

[← Back to command index](/en/commands/)

**Function**: Triangular mesh that preserves features by curvature and reduces face count (and passes vertex colors)

![Surface subtraction input by curvature: original mesh grayscale rendering (dense triangular surfaces, obvious shadows at valley bottoms and corners)](../../assets/rsReduceMeshByCurvature/image1.png)
*Input of surface reduction by curvature (Before): grayscale rendering of the original mesh (without UI panel), retaining the large-scale surface undulations; the dense triangular surfaces cast deep black shadows at the valley bottom and corners, and the overall sharp outline of the original model is still clearly displayed; the next picture is the result of performing surface reduction by curvature on the mesh*

![Result of surface reduction according to curvature: yellow mesh after surface reduction + parameter dialog box (the bottom shows the face number change and reduction ratio in real time)](../../assets/rsReduceMeshByCurvature/image2.png)
*The result of surface subtraction by curvature (After): Rhino viewport, the original surface is overlaid with a **yellow wireframe** to display the mesh after surface subtraction (dense triangular surfaces → sparse triangular surfaces); on the right is the "Subtract surface by curvature" parameter dialog box of this command (applied): preset (custom/conservative/balanced/strong), minimum side length 4.0, maximum side length 100, minimum angle 25°, curvature offset 1.00, number of iterations 12. Protect bare edges/corners/hard folded edges, hide original mesh and other parameters; the bottom displays the change and reduction ratio of the number of faces in real time*

> Screenshots and videos may show a Chinese-language interface. Labels and control positions can vary by Rhino or RSTool version.

**Run**: Enter `rsReduceMeshByCurvature` in the Rhino command line (opens a settings window).

**Workflow**:

1. Select the mesh to be subtracted by curvature
2. The "Subtract Surface by Curvature" dialog box pops up.
3. Choose a preset or manually adjust parameters with real-time preview (orange)
4. Click "Confirm Generation" to write the result / "Cancel"

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Default | Preset | list | Balanced | Conservative reduction/Balance/Strong reduction/Customized | Default index 1; switch presets to automatically set side length factor/curvature angle/offset/iteration |
| minimum side length | Minimum edge | double | avgEdge*0.65 | >= model tolerance, <= lengthUpperLimit | The initial value is average side length*0.65; upper limit = max(diagonal of bounding box*2, maximum side length*100) |
| Maximum side length | Maximum edge | double | avgEdge*2.5 | >= model tolerance | The initial value is average side length*2.5 |
| Angle of curvature (degrees) | Curvature angle | double | 25 | 1.0–180.0 |  |
| curvature bias | Curvature bias | double | 1.25 | 0.2–5.0 |  |
| Number of iterations | Iterations | integer | 8 | 1–30 |  |
| Protect bare edges | Preserve boundaries | toggle | true |  |  |
| Protect corners | Preserve corners | toggle | true |  | Enabled by default; this item is automatically grayed out and disabled when "Protect bare edges" is enabled. Identifies contour corner vertices with a 30° boundary corner threshold and skips such corners when folding edges to preserve sharp contours |
| Protect hard hems | Preserve sharp edges | toggle | true |  |  |
| Hide original mesh | Hide original mesh | toggle | true |  |  |

**Notes**: Adopt edge collapse + curvature weight algorithm; customize the preset edge length factors: conservative (0.55, 1.6, 18, 1.5, 6), balanced (0.65, 2.5, 25, 1.25, 8), strong (0.85, 4.0, 35, 1.0, 12) (min factor, max factor, curvature angle, offset, iteration respectively)

⚠️Border and seam protection: When "Protect Bare Edges" is turned on, the entire border is locked, and "Protect Corners" is automatically grayed out and disabled; when "Protect Corners" is turned on individually, the contour corner vertices are identified according to the 30° border angle threshold and skipped when the edges are folded, retaining sharp contours. The UV seams are synchronously locked with the vertices on both sides of the unwelded hard edge to avoid tearing after surface reduction.
