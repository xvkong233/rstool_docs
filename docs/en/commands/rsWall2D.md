# <span class="rstool-command-icon rstool-command-icon--heading rstool-command-icon--missing" title="No icon in the current toolbar" aria-hidden="true"></span> rsWall2D · 2D Wall Shortcut

> Module: Architecture / Walls and Editing

[← Back to command index](/en/commands/)

::: info Version 2.0

This shortcut is retained. It opens the unified wall panel initially in 2D, and the panel also allows switching to 3D.

[View the 2.0 command changes](/en/commands/v2)

:::

> The current toolbar has no icon for this command. The dash is a placeholder, not a toolbar icon; run the command by name.

**Function**: Open the unified wall panel directly in 2D mode, sharing thickness, baseline, and fill settings with rsWall and allowing a switch to 3D.

> Screenshots and videos may show a Chinese-language interface. Labels and control positions can vary by Rhino or RSTool version.

**Run**: Enter `rsWall2D` in the Rhino command line (opens a settings window).

**Workflow**:

1. Run rsWall2D to open Draw walls in 2D mode.
2. Set thickness, baseline, and hatch, then pick points continuously.
3. Enter starts another chain; Esc finishes. Other operations match rsWall.

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Output mode | OutputMode | enum | 2D initially; then last successful mode | 2D / 3D | Switching affects subsequent drawing. Use object properties to change an existing object. |
| Drawing method | DrawingMode | enum | Line | Line / Arc / Free curve | Draw arcs with three points and free curves through picked points. |
| Wall thickness | Width | double | 200 mm | > model tolerance | Enter a thickness or use a preset button. |
| Baseline and offset | Baseline | group | Center / 0 | Center / Left / Right; signed offset | Left and right follow drawing direction; positive offset is left. Thickness edits preserve the chosen baseline. |
| 2D fill | Fill | group | No fill | None / Solid / document hatch patterns | Set scale and rotation for the 2D hatch. |
| 3D height and base elevation | HeightElevation | group | 3000 mm / 0 | Height > model tolerance; signed elevation | Available in 3D modeling mode. |

**Output**: Parametric 2D walls, or 3D walls after switching modes.

**Notes**: Dimensions are displayed in current Rhino model units; mm and m below describe equivalent physical sizes.

`rsWall` opens the unified 2D/3D drawing panel. `rsWall2D` remains a direct shortcut to its 2D mode. Completed walls remain; switching discards only the unfinished segment and does not convert existing walls. Walls of different dimensions do not join.

The panel also supports curve conversion and editing existing 2D walls. In 3D, Boolean opening uses closed cutters and keeps them. Remove openings clears only free Boolean cuts, retaining hosted door, window, and elevator openings.

To convert existing walls, select them and use Wall representation and Convert selected walls in Properties. Supported hosted doors, windows, and elevators retain their association. Current 2D double doors and passages cannot be converted to 3D doors.

Images or videos may show the old interface. For 2.0, follow the entries, modes, and parameter descriptions on this page.

**Tutorial videos**:

<iframe class="rstool-video" src="https://player.bilibili.com/player.html?isOutside=true&aid=117020293078799&bvid=BV1y2GG6kEBm&cid=40504723234&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" loading="lazy" title="rsWall2D 2D wall teaching video"></iframe>
*rsWall2D 2D wall teaching video*
