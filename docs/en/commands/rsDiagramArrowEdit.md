# rsDiagramArrowEdit · Edit Diagram Arrow

> Module: Views & Documentation / Annotation & Documentation

[← Back to command index](/en/commands/)

**Function**: Updated arrow geometry (Brep regenerated), grouped

**Run**: Enter `rsDiagramArrowEdit` in the Rhino command line (command-line interaction).

**Workflow**:

1. Run rsDiagramArrowEdit from the command line
2. Select arrow objects (whole group) to edit
3. Pop-up editing window (Eto Dialog)
4. Adjust parameters and click Apply
5. Delete old objects and generate arrows by new parameters

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Width | Width | double | Taken from the selected object UserString (default 1.0) | 0.001 – 100000 | Window NumericStepper increment 0.1 |
| arrow size multiplier | ArrowScale | double | Taken from selected object UserString (default 3.0) | 0.01 – 100.0 | Window NumericStepper increment 0.5 |
| line type ratio | LineScale | double | Taken from the selected object UserString (default 1.0) | 0.01 – 100.0 | Window NumericStepper increment 0.1 |
| Arrow position | Location | list | Taken from the selected object UserString (default End) | None/Start/End/Both |  |
| path type | CurveType | list | Taken from the selected object UserString (default Polyline) | Polyline/Smooth |  |
| Arrow style | ArrowheadStyle | list | Taken from the selected object UserString (default Triangle) | Triangle/OpenV (triangle/open V) |  |
| linear | LineStyle | list | Taken from the selected object UserString (default Continue) | Continue/Dash/DashDot/Center (solid line/dashed line/dash line/center line) |  |
| Tapering | Taper | toggle | Taken from the selected object UserString (default false) |  | Only takes effect on smooth paths (Smooth) |

**Notes**: Read parameters from the selected object UserString; automatically synchronize move/scale transformations; replace the original object after application and preserve the layer/color
