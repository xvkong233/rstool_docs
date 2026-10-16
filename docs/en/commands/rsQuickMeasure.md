# rsQuickMeasure · Quick Measure

> Module: Views & Documentation / Annotation & Documentation

[← Back to command index](/en/commands/)

**Function**: Use a floating panel for point and object measurements and place results directly in the model.

**Run**: Enter `rsQuickMeasure` in the Rhino command line (opens a settings window).

**Workflow**:

1. Run and choose the measurement, output units, decimal places, and reference basis.
2. Pick points for point-based modes or select geometry for object-based modes; curve length also accepts sub-object edges.
3. Inspect the generated text dots and guides, switch modes to continue, or use Clear Measurements to remove this tool’s output.

**Parameters**:

### Measurement modes

Point modes measure picked locations; object modes inspect existing geometry. Volume requires closed solids, planar area needs suitable planar geometry, and circle parameters require recognizable circles.

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Measurement | mode | list | Distance | Coordinates, distance, horizontal distance, height difference, angle, slope; curve length, planar area, surface area, volume, bounding-box dimensions, edge lengths, circle parameters | Choose the mode before picking points or geometry. Unsupported geometry is reported. |

### Display and orientation

Results use text dots and guides for quick checks, not automatically associative construction dimensions.

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Output units | unit | list | Document units | Document / mm / cm / m / in / ft | Changes reported units without scaling the model. |
| Decimal places | digits | int | 3 | 0–8 | Controls displayed precision, not geometry precision. |
| Reference basis | basis | list | World XYZ | World XYZ / Current CPlane | Affects coordinates, horizontal distance, height difference, and direction-dependent measurements. |

**Notes**: Clear Measurements removes only this tool’s tagged text dots and guides, not every annotation in the file. More than 200 output objects triggers confirmation. Remeasure after editing source geometry; old labels should not be treated as live values.
