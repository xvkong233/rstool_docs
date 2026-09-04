# rsUnrollCrv · Straighten Curve

> Module: Geometry / Curves

[← Back to command index](/en/commands/)

**Function**: A straight line (Line) from the starting point of the curve along the positive +X axis with a length equal to the length of the curve

![Rhino Perspective viewport: a black S-shaped 2D curve (undulating, lower left to upper right) and a red straight line (connecting the two end points of the original curve), the red line is the rsUnrollCrv expansion result](../../assets/rsUnrollCrv/image1.png)
*Figure 1: rsUnrollCrv expansion effect. There is a black S-shaped 2D curve in the Rhino Perspective viewport (Perspective label in the upper left corner, coordinate axis in the lower left corner) (from lower left to upper right, ups and downs twice, in a wavy shape), and a red straight line (connecting the two end points of the original curve, the direction is starting point→end point); red straight line = rsUnrollCrv Expand the original curve into a Line according to its total arc length along the +X direction The final result (highlighted in red in the figure), the original curve itself is retained as a reference*

> Screenshots and videos may show a Chinese-language interface. Labels and control positions can vary by Rhino or RSTool version.

**Run**: Enter `rsUnrollCrv` in the Rhino command line (command-line interaction).

**Workflow**:

1. Command line input rsUnrollCrv
2. Select a curve
3. Automatically create straight lines of equal length along the +X direction starting from its starting point

**Parameters**:

> This command has no numeric command-line parameters. Adjust its options in the settings window.

**Notes**: Select only one curve (GetMultiple(1,1)); no adjustable parameters.
