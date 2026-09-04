# rsArrayBetween · Array between two objects

> Module: Geometry / Object Transforms

[← Back to command index](/en/commands/)

**Function**: Copy and generate a specified number of object arrays evenly along the direction connecting the starting and ending reference points.

![Rhino Perspective viewport: yellow balloon dog shaped object (bottom left 1 + several yellow copies) and a long list of black balloon dogs evenly copied and arranged diagonally (rsArrayBetween array result)](../../assets/rsArrayBetween/image1.png)
*Figure 1: rsArrayBetween array effect. In the Rhino Perspective viewport (Perspective label in the upper left corner, coordinate axis in the lower left corner): there is a yellow balloon dog-shaped object in the lower left corner and several yellow copies (input/reference) around it, and about 10+ copies of the black balloon dog are evenly arranged along the diagonal from the lower left to the upper right - this is exactly the array result of the command to copy the specified number of copies evenly in the direction connecting the two reference points (starting point, end point); the spacing is determined by the distance and quantity parameters of the two reference points, and the original object remains yellow as a reference*

> Screenshots and videos may show a Chinese-language interface. Labels and control positions can vary by Rhino or RSTool version.

**Run**: Enter `rsArrayBetween` in the Rhino command line (command-line interaction).

**Workflow**:

1. Command line input rsArrayBetween
2. Frame selection/select objects to be arrayed one by one (GetMultiple)
3. Specify the starting reference point (GetPoint)
4. Specify the end reference point, and the number can be adjusted with options during the process (AddOptionInteger)
5. Press Enter to confirm. After real-time preview, a uniform array between the two reference points is generated.

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Quantity | Count | integer | 10 | >=1 | The number of equally divided array copies between the two reference points (lastArrayNum remembers the last value, default is 10), does not include the original object position, and is copied starting from i=1 |

**Notes**: If the distance between the starting point and the end point is too close (< ZeroTolerance), it will fail; the number can be selected in the command line and previewed in real time (ArrayPreviewConduit). This function refers to the copy function in SketchUp.
