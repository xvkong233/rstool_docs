# rsRandomOffsetSrf · Random Offset Surfaces

> Module: Geometry / Surfaces

[← Back to command index](/en/commands/)

**Function**: New offset surfaces or solids (Brep). The source objects remain; results are grouped and selected.

**Run**: Enter `rsRandomOffsetSrf` in the Rhino command line (opens a settings window).

**Workflow**:

1. Enter rsRandomOffsetSrf in the Rhino command line to open the Random Offset Surfaces window.
2. Click Pick Objects, select one or more surfaces or polysurfaces, and press Enter.
3. Set the minimum and maximum thickness, choose a direction and whether to make solids, then adjust Extend if needed.
4. Check the translucent viewport preview and click Generate when ready.

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Minimum | Minimum | number | 0.1 m (converted to document units) | > 0 and ≤ maximum | Lower end of the random thickness range for each source object. A polysurface receives one thickness as a whole. |
| Maximum | Maximum | number | 1 m (converted to document units) | ≥ minimum | Upper end of the range. The preview updates as you change it while the random sequence stays stable. |
| Direction | Direction | option | Positive | Positive / Negative / Both sides (centered) | Offset to one side of the surface normal, or distribute the thickness equally on both sides. |
| Solid | Solid | toggle | Yes | Yes / No | Create a solid with thickness. When off, create offset surfaces only; centered mode creates a surface on each side. |
| Extend | Extend | toggle | Yes | Yes / No | Extend adjacent faces while offsetting to help resolve polysurface joins. |

**Notes**: Random thickness is assigned per source object, not per face of a polysurface. If an offset fails, try a smaller thickness or inspect the input surfaces; the window reports the failure count.
