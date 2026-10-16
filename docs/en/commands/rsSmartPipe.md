# rsSmartPipe · Smart Pipes

> Module: Architecture / Building Elements

[← Back to command index](/en/commands/)

**Function**: Generate hollow pipe runs and fittings from centerlines with multiple specifications, previewing before committing.

**Run**: Enter `rsSmartPipe` in the Rhino command line (opens a settings window).

**Workflow**:

1. Open the Smart Pipes window, set an outer diameter and wall thickness, and pick centerlines with that specification.
2. Change the specification to pick more lines. To change an existing group, use Apply to Selected Group.
3. Set the bend-radius ratio, update the preview, and inspect connections, bends, and segment lengths.
4. Rotate the view during preview, press Enter to return to settings, or Esc to cancel. Update the preview again after edits.
5. Generate when satisfied. Brep runs and fittings are grouped on the current layer; original centerlines remain.

**Parameters**:

### Assigning pipe specifications

Each centerline group has its own diameter and thickness. Picking a line again replaces its previous specification rather than duplicating it.

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Outer diameter | outerDiameter | double | 100 mm, converted to document units | Positive; constrained by wall thickness and model tolerance | Actual outside diameter, not nominal DN. Assign different specifications by group. |
| Wall thickness | wallThickness | double | 4 mm, converted to document units | Thickness and inner radius must each exceed twice model tolerance | An actual bore must remain; a small diameter or excessive thickness prevents generation. |

### Bends and preview

Connections use actual 3D intersections, not projected crossings. Elbows, reducers, tees, and crosses depend on valid intersections, angles, and sufficient straight-run length.

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Bend radius / maximum outer diameter | bendRadiusRatio | double | 1.5 | 1–20 | Larger ratios make gentler bends but require longer centerline segments. |

**Notes**: If lines are too short, angles too tight, or dimensions too close to model tolerance, adjust the centerlines or reduce pipe size/bend radius and preview again. Generated objects carry RSTool.Pipe data for [rsPipeSchedule](./rsPipeSchedule). Later scaling or direct geometry edits do not automatically update those recorded values.
