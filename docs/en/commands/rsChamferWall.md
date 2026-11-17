# <span class="rstool-command-icon rstool-command-icon--heading" title="rsChamferWall: toolbar icon" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/light/736c0996-df5f-510a-a1d2-11c540df02ff.png" alt="" width="48" height="48" loading="eager" decoding="async"><img class="rstool-command-icon__dark" src="/command-icons/dark/736c0996-df5f-510a-a1d2-11c540df02ff.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> rsChamferWall · Chamfer Walls

> Module: Architecture / Walls and Editing

[← Back to command index](/en/commands/)

**Function**: Chamfer two same-dimension straight walls with independent setbacks, adding a separate diagonal wall when setbacks are nonzero.

**Run**: Enter `rsChamferWall` in the Rhino command line (command-line interaction).

**Workflow**:

1. Pick the retained side of each straight wall.
2. Enter the first setback, then the second, which defaults to the first.
3. Confirm; two zero setbacks create a direct connection.

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Two setbacks | Setbacks | group | First 500 mm; second follows first | ≥0 | Measured from the axis intersection in current model units. |

**Output**: The original walls plus a diagonal wall where required.

**Notes**: Nonzero chamfers need equal widths; 3D also needs equal height and base elevation. Curves, parallel/mixed walls, cuts into opening occupancy, incompatible custom junctions, or free openings are rejected with original walls retained.
