# <span class="rstool-command-icon rstool-command-icon--heading rstool-command-icon--single" title="rsMeshColorPaint: toolbar icon" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/light/84d75b11-4441-4ca5-8b32-43e4cf565936.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> rsMeshColorPaint · Mesh Color Brush

> Module: Paneling & Facades

[← Back to command index](/en/commands/)

**Function**: Mesh with vertex colors (for reuse by commands such as blend by color)

**Run**: Enter `rsMeshColorPaint` in the Rhino command line (command-line interaction).

**Workflow**:

1. Select the mesh to draw
2. Open the Mesh Color Paint panel
3. Drag on the mesh to draw the vertex color (Ctrl switches black/white brush)
4. Click "Done"/"Cancel"

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Brush radius | Radius | double | 2 | 0.001–100000 |  |
| Hardness | Hardness | double | 0.5 | 0.0–1.0 |  |
| intensity | Strength | double | 0.5 | 0.0–1.0 |  |
| Smooth after use | Use post smooth | toggle | true |  |  |
| Smoothing times | Smooth passes | integer | 3 | 1–100 |  |
| Smooth intensity | Smooth strength | double | 0.65 | 0.0–1.0 |  |

**Notes**: Real-time drawing using GetPoint; Ctrl key switches black/white brush
