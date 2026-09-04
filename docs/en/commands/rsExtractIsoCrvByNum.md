# rsExtractIsoCrvByNum · Extract isoparms by quantity

> Module: Geometry / Curves

[← Back to command index](/en/commands/)

**Function**: Isoparametric curves (ISO curves) extracted by quantity (equal fractions or equidistant) from the selected surface, grouped by source object + direction

![Rhino Perspective viewport: Parameter extraction isoparametric curve dialog box (in equal fraction mode U=6 V=14 UV direction cross U/V) real-time preview of 22 yellow isoparametric curves on a wavy surface](../../assets/rsExtractIsoCrvByNum/image1.png)
*Figure 1: rsExtractIsoCrvByNum dialog box and real-time preview. The Rhino Perspective viewport (Perspective label in the upper left corner, red and green coordinate axes at the bottom and left) is an undulating surface with a yellow isoparametric grid (6 U direction, 14 cross structural lines in the V direction, a total of 22 yellow curves). The upper right is the "Parameter Extraction Isoparametric Curve" dialog box: the input area displays "1 surface selected"; the parameter area contains mode (by equal fraction), U equal fraction (6), V Equal fraction (14), U specified distance (1.000), V specified distance (1.000), UV direction (cross U/V) and other parameters; the preview status shows "22 curves and 1 surface"; the bottom OK / Cancel button. When the specified distance is 0, no structural lines will be extracted in this direction. The yellow curves are all previews and will be written to the document after OK.*

> Screenshots and videos may show a Chinese-language interface. Labels and control positions can vary by Rhino or RSTool version.

**Run**: Enter `rsExtractIsoCrvByNum` in the Rhino command line (opens a settings window).

**Workflow**:

1. Command line input rsExtractIsoCrvByNum
2. Click "Select Surface" to pick up the surface/Brep/Extrude (multiple selections possible, sub-objects possible)
3. Select mode (by equal fraction / by specified distance)
4. Set U/V fractional or U/V distance
5. Real-time yellow preview of extracted isoparms
6. Click OK to write isoparms (automatically grouped by source)

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| mode | Mode | list | By divisions | By equal fraction/by specified distance | 0=ByDivisions,1=ByDistance; disable equal fractions and enable distance by distance mode |
| U equal fractions | UDivisions | integer | 3 | 0-1000 | Equal fractions in U direction (static lastUCount) |
| V equal fractions | VDivisions | integer | 3 | 0-1000 | V direction equal fraction (static lastVCount) |
| U specifies distance | UDistance | double | 1.0 | 0-1000000.0 | The U direction is equidistantly separated (model unit); if it is 0, there is no separation in this direction (static lastUDistance) |
| V specifies distance | VDistance | double | 1.0 | 0-1000000.0 | The V direction is equidistantly separated; if it is 0, there will be no separation in this direction (static lastVDistance) |
| Swap U/V | SwapUv | toggle | false |  | Swap U/V directions (static lastSwapUv) |

**Notes**: There is no adjustment unit limit; the maximum segment limit in distance mode is 1000.
