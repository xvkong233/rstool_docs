# rsDiagramArrow · Diagram Arrow

> Module: Views & Documentation / Annotation & Documentation

[← Back to command index](/en/commands/)

**Function**: Arrow solid geometry (stem sweep + arrow head Brep), grouped

![rsDiagramArrow drawing window and Rhino view real-time preview](../../assets/rsDiagramArrow/image1.png)
*Draw window (Eto Modeless Form) parameter panel + open V-shaped smooth path arrow for live preview in Rhino view (End Position / Width 1.000 / Arrow Size 3.00 / Taper ✓)*

> Screenshots and videos may show a Chinese-language interface. Labels and control positions can vary by Rhino or RSTool version.

**Run**: Enter `rsDiagramArrow` in the Rhino command line (command-line interaction).

**Workflow**:

1. Run rsDiagramArrow from the command line
2. Pop-up arrow setting window (Eto non-modal Form)
3. Pick the path starting point in the view
4. Continue to pick subsequent points (Enter/right-click to end, or confirm in the window point)
5. Live preview and generation of arrow geometry

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Width | Width | double | 1.0 (converted according to document unit meter) | 0.001 – 100000 | Window NumericStepper increment 0.1; default is converted according to model unit meter (unitValue), remember the last value |
| arrow size multiplier | ArrowScale | double | 3.0 | 0.01 – 100.0 | Window NumericStepper increment 0.5 |
| line type ratio | LineScale | double | 1.0 | 0.01 – 100.0 | Window NumericStepper increment 0.1; scale in model units |
| Arrow position | Location | list | End | None/Start/End/Both |  |
| path type | CurveType | list | Polyline | Polyline/Smooth |  |
| Arrow style | ArrowheadStyle | list | Triangle | Triangle/OpenV (triangle/open V) |  |
| linear | LineStyle | list | Continue (solid line) | Continue/Dash/DashDot/Center (solid line/dashed line/dash line/center line) |  |
| Tapering | Taper | toggle | false |  | Only takes effect on smooth paths (Smooth) |

**Notes**: Parameters are written into the object through UserString and can be read and edited by rsDiagramArrowEdit; the unit adapts to the document unit.
