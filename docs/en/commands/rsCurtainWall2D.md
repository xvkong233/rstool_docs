# rsCurtainWall2D · 2D Curtain Wall

> Module: 2D Architecture / Other 2D Tools

[← Back to command index](/en/commands/)

**Function**: 2D curtain walls (mullions, glass plywood curves) generated along the center line are classified into the curtain wall group

![rsCurtainWall2D · 2D curtain wall extension preview: A section of the generated L-shaped curtain wall (black line segment + outward short diagonal mullions) in the Rhino viewport. The second section in the upper right corner is previewing the extension with an orange rubber line. The length label 7.0066 m is displayed with the cross cursor.](../../assets/rsCurtainWall2D/image1.png)
*rsCurtainWall2D When extending the curtain wall along the center line, the Rhino viewport uses an orange rubber line to preview the next section in real time based on the generated curtain wall (black wall line + equidistantly spaced outward short diagonal vertical mullions) with a length label (7.0066 m in the upper right corner of the picture) in the Rhino viewport, which facilitates control of the curtain wall length and angle according to the design segment.*

> Screenshots and videos may show a Chinese-language interface. Labels and control positions can vary by Rhino or RSTool version.

**Run**: Enter `rsCurtainWall2D` in the Rhino command line (command-line interaction).

**Workflow**:

1. Command line input rsCurtainWall2D
2. Set mullion spacing, mullion width/depth, glass splint width, glass position, drawing mode (line/arc/spline)
3. Specify the starting point and continuously draw the centerline of the curtain wall, press Enter to end

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| mullion spacing | MullionSpacing | double | 1.2 | >Model tolerance | Default 1.2m (1200mm) |
| mullion width | MullionWidth | double | 0.04 | >Model tolerance | Default 0.04m (40mm) |
| mullions deep | MullionDepth | double | 0.2 | >Model tolerance | Default 0.2m (200mm) |
| glass splint width | GlassClampWidth | double | 0.03 | >Model tolerance | Default 0.03m (30mm) |
| glass position | GlassPosition | list | outside | Outside/Center/Inside |  |
| drawing mode | Mode | list | straight line | Line/arc/spline |  |

**Notes**: By default, the model unit is adapted to 1200/40/200/30mm.
