# <span class="rstool-command-icon rstool-command-icon--heading" title="rsWall: toolbar icon" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/light/5bdc5dd8-c655-5558-81ce-4212e1c6f673.png" alt="" width="48" height="48" loading="eager" decoding="async"><img class="rstool-command-icon__dark" src="/command-icons/dark/5bdc5dd8-c655-5558-81ce-4212e1c6f673.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> rsWall · Walls (2D / 3D)

> Module: Architecture / Walls and Editing

[← Back to command index](/en/commands/)

::: info Version 2.0

The unified wall window supports 2D and 3D. rsWall2D opens the same panel initially in 2D.

[View the 2.0 command changes](/en/commands/v2)

:::

**Function**: Draw 2D or 3D walls from one modeless panel with thickness, baseline, hatch, height, and elevation settings and same-dimension junctions.

> Screenshots and videos may show a Chinese-language interface. Labels and control positions can vary by Rhino or RSTool version.

**Run**: Enter `rsWall` in the Rhino command line (opens a settings window).

**Workflow**:

1. Run rsWall and choose 2D drawing or 3D modeling.
2. Set thickness, baseline, and offset, then choose line, arc, or free curve.
3. Pick points continuously; nearby walls of the same dimension support centerline snapping.
4. Enter ends a chain and starts a new one; for free curves it first creates the curve. Esc or closing the panel ends drawing and retains completed walls.

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Output mode | OutputMode | enum | 2D initially; then last successful mode | 2D / 3D | Switching affects subsequent drawing. Use object properties to change an existing object. |
| Drawing method | DrawingMode | enum | Line | Line / Arc / Free curve | Draw arcs with three points and free curves through picked points. |
| Wall thickness | Width | double | 200 mm | > model tolerance | Enter a thickness or use a preset button. |
| Baseline and offset | Baseline | group | Center / 0 | Center / Left / Right; signed offset | Left and right follow drawing direction; positive offset is left. Thickness edits preserve the chosen baseline. |
| 2D fill | Fill | group | No fill | None / Solid / document hatch patterns | Set scale and rotation for the 2D hatch. |
| 3D height and base elevation | HeightElevation | group | 3000 mm / 0 | Height > model tolerance; signed elevation | Available in 3D modeling mode. |

**Output**: Independent parametric 2D or 3D walls.

**Notes**: Dimensions are displayed in current Rhino model units; mm and m below describe equivalent physical sizes.

`rsWall` opens the unified 2D/3D drawing panel. `rsWall2D` remains a direct shortcut to its 2D mode. Completed walls remain; switching discards only the unfinished segment and does not convert existing walls. Walls of different dimensions do not join.

The panel also supports curve conversion and editing existing 2D walls. In 3D, Boolean opening uses closed cutters and keeps them. Remove openings clears only free Boolean cuts, retaining hosted door, window, and elevator openings.

To convert existing walls, select them and use Wall representation and Convert selected walls in Properties. Supported hosted doors, windows, and elevators retain their association. Current 2D double doors and passages cannot be converted to 3D doors.

Images or videos may show the old interface. For 2.0, follow the entries, modes, and parameter descriptions on this page.

**Tutorial videos**:

<iframe class="rstool-video" src="https://player.bilibili.com/player.html?isOutside=true&aid=115871892641774&bvid=BV1nw6QB5EBX&cid=35308962903&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" loading="lazy" title="RsTool · Smart Wall (Wall) Demonstration Teaching (Bilibili)"></iframe>
*RsTool · Smart Wall (Wall) Demonstration Teaching (Bilibili)*
