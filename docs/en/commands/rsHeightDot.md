# rsHeightDot · Elevation Marker

> Module: Views & Documentation / Annotation & Documentation

[← Back to command index](/en/commands/)

**Function**: Dimension text dot (TextDot): height value or XYZ coordinates

![Example of 6.826 elevation points in the height dimension settings panel and view](../../assets/rsHeightDot/image1.png)

> Screenshots and videos may show a Chinese-language interface. Labels and control positions can vary by Rhino or RSTool version.

**Run**: Enter `rsHeightDot` in the Rhino command line (command-line interaction).

**Workflow**:

1. Run rsHeightDot from the command line
2. Pop up the height dimension setting window (Eto Form)
3. Set label mode/unit/decimal places
4. Pick points in the view to generate annotations (height or XYZ coordinates can be directly marked)
5. You can click "Set Working Plane" and place the working plane by drawing a rectangle with three points. Subsequent height/XYZ annotations will refer to the working plane to calculate the corresponding values.
6. Can be closed at any time (right click/space/enter or close the window to end)

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Annotation mode | Mode | list | Height (dimension height) | Height/Coordinates (mark height/mark XYZ coordinates) | HeightDotMode enumeration |
| unit | Unit | list | Document model unit | Millimeters/Centimeters/Meters/Feet/Inches | The default is doc.ModelUnitSystem normalization; optional mm/cm/m/ft/in |
| Decimal places | Digits | integer | 3 | 0 – 8 | NumericStepper integer, incremented by 1 |
| Use work plane | UseReferencePlane | toggle | false |  | Defined with a 3-point rectangle via the "Set Work Plane" button; determining coordinates/heights based on world coordinates or work plane |

**Notes**: Supports Chinese and English; local coordinates/signed heights are marked under the working plane; parameters are remembered for the last setting; the marking process can be closed at any time
