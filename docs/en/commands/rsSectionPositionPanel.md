# rsSectionPositionPanel · Architectural Section Panel

> Module: Views & Documentation / Annotation & Documentation

[← Back to command index](/en/commands/)

**Function**: Opens the architectural section management panel and independently manages active architectural polyline sections in each Rhino viewport.

**Run**: Enter `rsSectionPositionPanel` in the Rhino command line (opens a settings window).

**Workflow**:

1. Run rsSectionPositionPanel to open the dockable Architectural Section Panel
2. Review the architectural section lines in the current document; a ● in the status column marks the section active in the current viewport
3. Click Add Section, then either draw a polyline / jog on World XY or convert an existing vertical ClippingPlane
4. Select a section and click Activate and Select, or double-click its row, to enable it in the current viewport and select its curve
5. Use Move, Rotate, Gumball, or control points to edit the section position and jogs; the panel updates its position and viewing direction automatically
6. Rename, flip, or delete sections as needed, or deactivate the section in the current viewport

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Active | Active | status | — | ● / blank | ● indicates that the section is enabled in the active viewport. Active states are stored separately for each viewport. |
| Reference | Reference | text | Generated automatically | Non-empty and unique | Identifies the section line. A unique suffix is added automatically if the entered reference is already in use. |
| Position | Position | text | Read automatically | World XY coordinates | Shows the X and Y coordinates of the section curve bounding-box center and refreshes after the curve is moved. |
| View Direction | ViewDirection | text | Calculated automatically | World XY direction | Calculated from the starting tangent of the section curve and its viewer side. Use Flip Direction to switch sides. |
| Add Section | AddSection | button | — | Draw polyline / convert ClippingPlane | When drawing, right-click to finish the polyline and specify its depth on the viewer side. Conversion accepts only vertical ClippingPlanes whose normal is parallel to World XY. |
| Rename | Rename | button | — | Single selection | Changes the selected section reference. Empty values are rejected, and duplicate references receive a unique suffix automatically. |
| Delete | Delete | button | — | Single / multiple selection | Deletes one or more selected architectural section lines. |
| Activate and Select | ActivateAndSelect | button | — | Single selection | Enables the selected section in the active viewport and selects its curve for moving, rotating, or control-point editing. |
| Flip Direction | FlipDirection | button | — | Single selection | Reverses the viewer side of the selected section and immediately updates its clipping direction. |
| Deactivate Current Viewport | DeactivateCurrentViewport | button | — | Active viewport | Disables architectural sectioning only in the active viewport without deleting the section line or affecting other viewports. |

**Notes**: ## Usage notes

- An architectural section line is an editable Rhino curve, so you can use Move, Rotate, Gumball, or control points to change its position and jogs. It is not an ordinary native ClippingPlane.
- Activation is mutually exclusive within a viewport: enabling one section disables the previously active section in that viewport. Different viewports can keep different sections active.
- The list supports multiple selection mainly for batch deletion. Rename, activate, and flip operations require exactly one selected item.
- Converting a vertical ClippingPlane deletes the original object. The new section preferably inherits its name and receives an initial depth estimated from the scene extents.
- The panel monitors document and object changes and refreshes while Rhino is idle. Create, convert, activate, rename, delete, flip, and deactivate operations support Rhino Undo.

## Relationship to rsPolylineSection

`rsSectionPositionPanel` uses the same architectural polyline-section system as `rsPolylineSection`. It provides centralized section-line management and fast per-viewport activation.
