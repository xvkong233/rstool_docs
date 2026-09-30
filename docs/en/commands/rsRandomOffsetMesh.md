# rsRandomOffsetMesh · Random Offset Mesh

> Module: Geometry / Meshes

[← Back to command index](/en/commands/)

**Function**: New face-by-face random offset meshes (Mesh). Source meshes remain; results are grouped and selected.

**Run**: Enter `rsRandomOffsetMesh` in the Rhino command line (opens a settings window).

**Workflow**:

1. Enter rsRandomOffsetMesh in the Rhino command line to open the Random Offset Mesh window.
2. Click Pick Objects, select one or more meshes, and press Enter.
3. Set the thickness range, direction, Solid option, and UnweldMesh option.
4. Check the translucent viewport preview and click Generate when ready.

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Minimum | Minimum | number | 0.1 m (converted to document units) | ≥ 0 and ≤ maximum | Lower end of the random thickness range, sampled separately for each mesh face. |
| Maximum | Maximum | number | 1 m (converted to document units) | ≥ minimum; above model tolerance when Solid is on | Upper end of the range. Changing settings keeps the random face-by-face pattern stable. |
| Direction | Direction | option | Positive | Positive / Negative / Both sides (centered) | Offset along each face normal; centered mode places half the thickness on either side of the original face. |
| Solid | Solid | toggle | Yes | Yes / No | Build top and bottom caps plus sidewalls for each face to make closed panels. When off, output offset faces; centered mode outputs faces on both sides. |
| UnweldMesh | UnweldMesh | toggle | Yes | Yes / No | Unweld faces by default to keep hard edges around individual panels. |

**Notes**: Unlike rsRandomOffsetSrf, this command chooses a thickness for each mesh face. It does not produce one continuous, uniformly thick offset of the entire mesh; use it for varied panel relief.
