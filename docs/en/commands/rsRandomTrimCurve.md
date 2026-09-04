# rsRandomTrimCurve · Randomly trim curves

> Module: Geometry / Curves

[← Back to command index](/en/commands/)

**Function**: Replace the original curve with a cropped curve of random length (starting point and/or end point) and retain the layer/color

![Rhino Perspective viewport: two rows of short vertical lines at the top and bottom (the bottom is the original curve segment of equal distance/equal length, the top is the effect after random cropping of rsRandomTrimCurve, with different lengths and different spacing)](../../assets/rsRandomTrimCurve/image1.png)
*Figure 1: rsRandomTrimCurve effect comparison. In the Rhino Perspective viewport (Perspective label in the upper left corner, coordinate axis in the lower left corner), there are two rows of short vertical lines arranged along the same diagonal line (the left is lower, the right is higher, and the left is higher and the right is lower): the lower row is short vertical lines of even length and equal spacing (the original curve is cut according to equal length/equal distance), and the upper row is short vertical lines of different lengths and unequal spacing (used by rsRandomTrimCurve The random length between MinLength-MaxLength is the result of cropping from the starting point/end point/both ends, retaining the original layer and color); there is a black arrow on the left side of the viewport pointing from bottom to top, indicating the original → after cropping*

> Screenshots and videos may show a Chinese-language interface. Labels and control positions can vary by Rhino or RSTool version.

**Run**: Enter `rsRandomTrimCurve` in the Rhino command line (command-line interaction).

**Workflow**:

1. Command line input rsRandomTrimCurve
2. Select the curves to be randomly cropped (multiple selections possible)
3. Set min/max crop length and crop mode in loop options
4. Press Enter to confirm execution
5. Randomly crop the start/end points of each curve

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Minimum cutting length | MinLength (lastMinLen) | double | 1.0 | model unit | Minimum length of random cutting |
| Maximum cutting length | MaxLength (lastMaxLen) | double | 2.0 | model unit | The upper limit of random cropping length; if it is less than Min, it will be automatically exchanged. |
| crop mode | Mode (lastModeIndex) | list | Both ends | Starting point/end point/both ends | 0=Start,1=End,2=Both; default Both |

**Notes**: Automatically swap when Min>Max; curves whose total length is not enough for clipping are skipped.
