# rsDiagramArrowMatch · Match Diagram Arrow Style

> Module: Views & Documentation / Annotation & Documentation

[← Back to command index](/en/commands/)

**Function**: Copy one RSTool diagram arrow’s style to other diagram arrows for a consistent drawing.

**Run**: Enter `rsDiagramArrowMatch` in the Rhino command line (command-line interaction).

**Workflow**:

1. Run and select a RSTool diagram arrow as the style source.
2. Select one or more target arrows and press Enter.
3. Review the success/failure report and inspect the updated arrows.

**Parameters**:

> No numeric settings or separate settings window are required. Follow the workflow above.

**Notes**: Copies width, head size/style, line style/scale, arrow placement, and taper settings. Targets are rebuilt along their own paths; the source is unchanged. Only objects carrying RSTool diagram-arrow data are recognized, not ordinary curves or geometry that has lost its metadata. Arrow groups are deduplicated and individual failures are reported. No numeric settings dialog is used.
