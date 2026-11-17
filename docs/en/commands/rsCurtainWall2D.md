# <span class="rstool-command-icon rstool-command-icon--heading rstool-command-icon--missing" title="No icon in the current toolbar" aria-hidden="true"></span> rsCurtainWall2D · 2D Curtain Wall Shortcut

> Module: Architecture / Building Elements

[← Back to command index](/en/commands/)

::: info Version 2.0

This shortcut is retained. It opens the unified curtain-wall panel initially in 2D, and the panel also allows switching to 3D.

[View the 2.0 command changes](/en/commands/v2)

:::

> The current toolbar has no icon for this command. The dash is a placeholder, not a toolbar icon; run the command by name.

**Function**: Open the unified simple curtain-wall panel in 2D mode, drawing mullion and glass symbols continuously, with a switch to 3D available.

![rsCurtainWall2D · 2D curtain wall extension preview: A section of the generated L-shaped curtain wall (black line segment + outward short diagonal mullions) in the Rhino viewport. The second section in the upper right corner is previewing the extension with an orange rubber line. The length label 7.0066 m is displayed with the cross cursor.](../../assets/rsCurtainWall2D/image1.png)
*rsCurtainWall2D When extending the curtain wall along the center line, the Rhino viewport uses an orange rubber line to preview the next section in real time based on the generated curtain wall (black wall line + equidistantly spaced outward short diagonal vertical mullions) with a length label (7.0066 m in the upper right corner of the picture) in the Rhino viewport, which facilitates control of the curtain wall length and angle according to the design segment.*

> Screenshots and videos may show a Chinese-language interface. Labels and control positions can vary by Rhino or RSTool version.

**Run**: Enter `rsCurtainWall2D` in the Rhino command line (opens a settings window).

**Workflow**:

1. Run rsCurtainWall2D to start directly in 2D; other operations match rsCurtain.
2. Set mullions, clamps, and glass position in 2D, or height, elevation, mullion counts, and sections in 3D.
3. Draw the baseline continuously for lines, with three points for arcs, or with Enter to finish a free curve.
4. Use New chain for another object; Esc or closing the panel finishes.

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Output mode | OutputMode | enum | 2D initially; then last successful mode | 2D / 3D | Switching affects subsequent drawing. Use object properties to change an existing object. |
| Drawing method | DrawingMode | enum | Line | Line / Arc / Free curve | Draw arcs with three points and free curves through picked points. |
| 2D mullion spacing | Spacing | double | 1200 mm | Positive | Controls mullion spacing along the plan path. |
| 2D mullion / glass clamp | Mullions2D | group | Width 40 / Depth 200 / Clamp 30 mm | Must fit the path and spacing | Glass can be outer, centered, or inner; outer is the default. |
| 3D height / base elevation | HeightElevation | group | 3000 mm / 0 | Height must fit the subdivisions | Each confirmed 3D baseline creates a separate curtain wall. |
| Internal vertical / horizontal mullions | Counts | group | 3 / 2 | Each 0–64; total cells ≤1024 | Counts exclude the outer frame; 3 internal mullions form 4 glass columns. |
| 3D sections / frame / glass | Sections3D | group | Mullions and frame 50×100 mm; glass 12 mm | Sections must exceed tolerance and leave valid glass cells | Set face width/height and depth independently. |

**Output**: Parametric 2D curtain walls.

**Notes**: Dimensions are displayed in current Rhino model units; mm and m below describe equivalent physical sizes.

`rsCurtain` unifies simple 2D/3D curtain walls; `rsCurtainWall2D` remains a direct 2D shortcut. It starts in 2D and remembers the last successful mode.

A continuous 2D chain updates one parametric curtain wall; New chain creates another. In 3D, each confirmed baseline creates a separate parametric curtain wall. Switching mode retains completed objects, discards the unfinished baseline, and asks for a new start point.

This tool draws simple curtain walls along a path. Use the separate `rsCurtainPlus` for complex polysurface-based curtain walls.

Images or videos may show the old interface. For 2.0, follow the entries, modes, and parameter descriptions on this page.
