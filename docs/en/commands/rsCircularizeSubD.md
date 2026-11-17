# <span class="rstool-command-icon rstool-command-icon--heading" title="rsCircularizeSubD: toolbar icon" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/light/45f4b7b0-ada6-533b-94c4-914c8db8b138.png" alt="" width="48" height="48" loading="eager" decoding="async"><img class="rstool-command-icon__dark" src="/command-icons/dark/45f4b7b0-ada6-533b-94c4-914c8db8b138.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> rsCircularizeSubD · Circularize SubD

> Module: SubD Tools / Editing Tools

[← Back to command index](/en/commands/)

**Function**: Circularize selected SubD vertex, edge, or face regions for openings and rounded local details.

**Run**: Enter `rsCircularizeSubD` in the Rhino command line (command-line interaction).

**Workflow**:

1. Preselect SubD vertices, edges, or faces using sub-object selection, or select them after running.
2. Press Enter. Each object and connected region is analyzed, a plane is fitted, and control points are adjusted.
3. Inspect the SubD and command-line report; use Undo if needed.

**Parameters**:

> No numeric settings or separate settings window are required. Follow the workflow above.

**Notes**: Select sub-objects, not the whole SubD. Each region needs at least three control points, a resolvable boundary, and a stable fitted plane. Degenerate selections fail validation. Boundary points are distributed evenly around a circle and interior points are relaxed by connectivity. This edits the SubD control net; it does not draw an exact NURBS circle. Objects are replaced together only after all preparation succeeds. No settings dialog is used.
