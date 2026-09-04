# rsDivideCrvByRoundedCount · Divide Curve by Rounded Count

> Module: Geometry / Points

[← Back to command index](/en/commands/)

**Function**: Approximately divide the curve into equal parts according to the rounded number of "curve length ÷ reference spacing" and generate points (optional group)

**Run**: Enter `rsDivideCrvByRoundedCount` in the Rhino command line (command-line interaction).

**Workflow**:

1. Command line input rsDivideCrvByRoundedCount
2. Select the target curve (Curve, GetObject, multi-selectable/pre-selectable)
3. Use options to set reference spacing and whether to group during selection
4. The system divides the curve length by the reference spacing and rounds it to get the number of parts, divides it into equal parts and generates points (can be grouped)

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Reference spacing | RefDistance | double | 1.5 | >=0.01 | Reference segment length (meters); the actual default value is converted to 1.5*unitValue according to the document unit, and is internally rounded according to the curve length/spacing to obtain the number of equal parts (lastDivLength memory, default 1.5) |
| group | Group | toggle | Yes(true) | Yes / No | Whether the generated points are added to the group |

**Notes**: Rounding is used to approximate equal intervals rather than strictly equidistant; default spacing is in meters and converted according to the document's unit system.
