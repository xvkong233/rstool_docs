# rsRandomPtsOnObj · Randomly generated points on an object

> Module: Geometry / Points

[← Back to command index](/en/commands/)

**Function**: Generates a specified number of random points on the selected object (curves weighted by length, faces/grids weighted by area)

![Rhino Perspective viewport: A string of small circle points randomly distributed on the surface of a mushroom/flying saucer-shaped object (rsRandomPtsOnObj effect example)](../../assets/rsRandomPtsOnObj/image1.png)
*Figure 1: Example of rsRandomPtsOnObj effect. In the Rhino Perspective viewport (Perspective label in the upper left corner, red and green coordinate axes in the lower left/lower right corner) is a mushroom/flying saucer-shaped object: the upper part is a large rounded square plate (umbrella cover/yurt roof) with a meridian/longitude and latitude grid, a circular cavity is opened in the center, and the lower half is a cylindrical base support. A large number of small circle points are randomly distributed on the object surface (surface) (each point = a sampling point on the object surface), and the density of the points is controlled by the command parameters (number/minimum spacing, etc.). The positions of the points strictly fall on the input object surface, but the distribution is random and will not be evenly spaced like equidistant points.*

> Screenshots and videos may show a Chinese-language interface. Labels and control positions can vary by Rhino or RSTool version.

**Run**: Enter `rsRandomPtsOnObj` in the Rhino command line (command-line interaction).

**Workflow**:

1. Command line input rsRandomPtsOnObj
2. Select the target object (Curve/Surface/Brep/Mesh/SubD, multiple selections available)
3. Use option to switch distribution mode during selection (completely random / as even as possible)
4. Enter the number of random points (GetInteger, lower limit 1, default 100)
5. Generate random points on the surface of the object weighted by curve length/grid area and write them to the document

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| distribution pattern | DistributionMode | toggle | Try to be as even as possible (EvenRandom) | Completely random (TrueRandom) / as even as possible (EvenRandom) | Switch the random sampling strategy; try to use the candidate point method to spread the distance evenly |
| Number of random points | Count | integer | 100 | >=1 | Generate the number of random points (lastRandomPtNum memory, default 100, SetLowerLimit(1)) |

**Notes**: This command does not override OnHelp and has no help document link; points are allocated according to the length/area ratio when the curve is mixed with the mesh.
