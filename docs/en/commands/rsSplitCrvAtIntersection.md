# rsSplitCrvAtIntersection · Split curves at intersection points

> Module: Geometry / Curves

[← Back to command index](/en/commands/)

**Function**: The multi-segment curve divided at the intersection points (and overlapping end points) of the selected curves replaces the original curve; extremely short segments are filtered

**Run**: Enter `rsSplitCrvAtIntersection` in the Rhino command line (command-line interaction).

**Workflow**:

1. Command line input rsSplitCrvAtIntersection
2. Select the curve to be divided (multiple selections possible)
3. Automatically divide and replace the original curve at the intersection of two curves

**Parameters**:

> This command has no numeric command-line parameters. Adjust its options in the settings window.

**Notes**: There are no adjustable parameters; use CurveCurve to find intersection, and use the endpoints of overlapping segments as tangent points; delete the original curve only after success.
