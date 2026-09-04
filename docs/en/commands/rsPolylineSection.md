# rsPolylineSection · Polyline section

> Module: Views & Documentation / Annotation & Documentation

[← Back to command index](/en/commands/)

**Function**: Create a polyline section

![rsPolylineSection command panel and sectioning effect preview](../../assets/rsPolylineSection/image1.jpg)
*Figure 1: rsPolylineSection command panel and venue preview effect. After selecting a polyline or curve as a section line in the Rhino view, the [Polyline/Curve Section] dialog box pops up: you can set the section name, reference name, section depth (85.964), check [Fill section plane] to display a closed polygon section, and enable [Use at strip cuts] Align View] Align the section with the current view; adjust the section shape through [Reverse], [Add Vertex], and [Delete Vertex]. [New Section] and [New from Curve] support redrawing or creating from existing curves respectively. [Delete Section] is used to remove the established section. The status bar displays [Section Plane Display Ready].*

> Screenshots and videos may show a Chinese-language interface. Labels and control positions can vary by Rhino or RSTool version.

**Run**: Enter `rsPolylineSection` in the Rhino command line (command-line interaction).

**Workflow**:

1. Select a polyline or curved section object
2. Specify a point on the observer's side and its distance is used as the section depth
3. You can specify new vertices near the section polyline, or click to delete internal vertices.

**Parameters**:

> This command has no numeric command-line parameters. Adjust its options in the settings window.

**Notes**: Supports subsequent editing of vertices to adjust the sectioning range.
