# rsPointDim · Point Dimension

> Module: Views & Documentation / Annotation & Documentation

[← Back to command index](/en/commands/)

**Function**: Creates continuous linear or aligned dimensions using the current layer and dimension style, or merges and splits existing dimensions into new dimension objects.

**Run**: Enter `rsPointDim` in the Rhino command line (opens a settings window).

**Workflow**:

1. Run rsPointDim to open the modeless Point Dimensions panel; running it again brings the existing panel to the front
2. Choose Auto, Horizontal, Vertical, or Aligned direction; the panel also displays the current Rhino dimension style
3. Click Point Dimension, then pick the first point, second point, and dimension-line position
4. Continue picking dimension points; an orange dynamic preview sorts them along the dimension direction and displays adjacent segments
5. Press Enter or right-click to finish, choose Undo to remove the previous point, or press Esc to cancel the entire operation
6. Alternatively, click Merge to combine contiguous dimensions or Split to divide an existing dimension at one or more internal points

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Direction | Direction | select | Aligned | Auto / Horizontal / Vertical / Aligned | Horizontal and Vertical use the active viewport CPlane X/Y axes. Auto chooses between them from the dimension-line placement. Aligned locks to the direction from the first point to the second. |
| Dimension Style | DimensionStyle | status | Current Rhino dimension style | Read-only | The panel automatically displays the document's current dimension style, which is used for new dimensions. Switch the current style in Rhino to change it. |
| Point Dimension | PointDimension | button | — | Continuous point picking | Creates consecutive dimension segments sorted along the chosen direction and places them on the current layer. |
| Merge | Merge | button | — | At least two linear or aligned dimensions | Selected dimensions must share the same type, plane, direction, and dimension line, with end-to-end contiguous intervals and no gaps or overlaps. |
| Split | Split | button | — | One linear or aligned dimension | Pick one or more distinct internal split points to replace the original dimension with multiple contiguous segments. |

**Notes**:

## Four direction modes

- **Auto**: Automatically chooses Horizontal or Vertical on the active CPlane according to where the dimension line is placed relative to the first two points.
- **Horizontal**: Measures along the active viewport CPlane X axis. Picked points are projected onto the CPlane.
- **Vertical**: Measures along the active viewport CPlane Y axis. Picked points are projected onto the CPlane.
- **Aligned**: Uses the spatial direction from the first point to the second as the locked axis. Later points become stations along that axis, making this mode suitable for diagonal or spatial continuous dimensions.

## Merge and split

- Merge accepts only editable, unlocked, non-reference linear or aligned dimensions. Linear and aligned types cannot be mixed. The result inherits the first dimension's object attributes and resets its text to the measured value.
- During Split, the source dimension is temporarily hidden and is shown again if the operation is canceled. Output segments inherit its attributes and also reset their text to measured values.
- Create, Merge, and Split are recorded in Rhino Undo. If writing fails, created or deleted objects are rolled back.

The panel is bound to the Rhino document from which it was opened. If another document is active or another Rhino command is running, finish that command and return to the original document first. The panel closes automatically with its document.
