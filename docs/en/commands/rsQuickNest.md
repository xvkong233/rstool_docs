# rsQuickNest · Quick nesting

> Module: Views & Documentation / Annotation & Documentation

[← Back to command index](/en/commands/)

**Function**: Nesting results: part Brep/curve placed on plate, plate border curve, number label curve (layer rsQuickNest_Sheets / rsQuickNest_Labels)

**Run**: Enter `rsQuickNest` in the Rhino command line (command-line interaction).

**Workflow**:

1. Run rsQuickNest from the command line
2. After the pop-up window clicks "Select Object" to pick up the plane object/group
3. Set parameters such as plate size/spacing/sorting
4. Click "Calculate/Update Preview"
5. Click "Confirm to generate" the baking and layout results

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Board width | Width | double | 2440 (mm converted to model units) | min=unit conversion value, max=100000 | Default 2440mm; scaled by document units |
| Board height | Height | double | 1220 (millimeters converted to model units) | min=unit conversion value, max=100000 | Default 1220mm; scaled by document units |
| Spacing between parts | Gap | double | 10 (millimeters converted to model units) | 0 – 100000 | Default 10mm |
| Plate spacing | SheetGap | double | 100 (millimeters converted to model units) | 0 – 100000 | Default 100mm |
| Number maximum height | LabelHeight | double | 50 (millimeters converted to model units) | min=unit conversion value, max=100000 | Default 50mm |
| Sort by | SortMode | list | Area | Area/X/Y/Z/PickOrder (area/X/Y/Z/select order) |  |
| Sort descending | SortDescending | toggle | true |  |  |
| Allow rotation | AllowRotate | toggle | true |  |  |
| Rotation angle step | RotationStepDegrees | double | 15.0 | 1.0 – 90.0 | NumericStepper integer increment 1 |
| Draw board borders | DrawSheet | toggle | true |  |  |

**Notes**: Based on OpenNest (Clipper2); the input needs to be a closed planar curve/plane Brep/Surface/plane Mesh or coplanar group; the output is estimated utilization
