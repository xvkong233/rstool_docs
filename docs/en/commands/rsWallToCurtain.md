# <span class="rstool-command-icon rstool-command-icon--heading" title="rsWallToCurtain: toolbar icon" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/light/dc86e86b-995d-5486-ad5d-25089e7afabe.png" alt="" width="48" height="48" loading="eager" decoding="async"><img class="rstool-command-icon__dark" src="/command-icons/dark/dc86e86b-995d-5486-ad5d-25089e7afabe.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> rsWallToCurtain · Wall to Curtain Wall

> Module: Architecture / Walls and Editing

[← Back to command index](/en/commands/)

**Function**: Convert same-dimension smart walls to parametric curtain walls, retaining baselines, object identity, user properties, and each 3D wall’s height and elevation.

**Run**: Enter `rsWallToCurtain` in the Rhino command line (opens a settings window).

**Workflow**:

1. Run rsWallToCurtain, select walls of one dimension, and press Enter.
2. Adjust the relevant 2D/3D mullion and section settings; each 3D wall retains its height and base elevation.
3. Click Convert to curtain wall and continue editing in Properties.

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| 2D mullion spacing | Spacing | double | 1200 mm | Positive | Controls mullion spacing along the plan path. |
| 2D mullion / glass clamp | Mullions2D | group | Width 40 / Depth 200 / Clamp 30 mm | Must fit the path and spacing | Glass can be outer, centered, or inner; outer is the default. |
| Internal vertical / horizontal mullions | Counts | group | 3 / 2 | Each 0–64; total cells ≤1024 | Counts exclude the outer frame; 3 internal mullions form 4 glass columns. |
| 3D sections / frame / glass | Sections3D | group | Mullions and frame 50×100 mm; glass 12 mm | Sections must exceed tolerance and leave valid glass cells | Set face width/height and depth independently. |

**Output**: Parametric curtain walls matching the source dimension.

**Notes**: Dimensions are displayed in current Rhino model units; mm and m below describe equivalent physical sizes.

Walls with hosted doors, windows, elevators, or free openings are rejected until those associations are resolved. Conversion retains GUIDs and supports one Undo. It does not convert curtain walls back to walls.
