# rsRainFlowSimulation · Rainwater Flow Analysis

> Module: Terrain / Analysis & Simulation

[← Back to command index](/en/commands/)

**Function**: Rainwater flow lines (curve groups) accumulated from each starting point along the steepest slope of the terrain. Each curve corresponds to a complete runoff path from a starting point.

![rsRainFlowSimulation Rainflow simulation example: The dot-shaped uniformly distributed rainwater starting point array above is projected onto the terrain grid below. The runoff network is formed along the steepest descending path along each starting point, and the ridge and valley skeletons are clearly visible.](../../assets/rsRainFlowSimulation/image1.png)
*Arrange an N×N uniform rainfall array on the Delaunay terrain grid (rsTerrain output) as the starting point, iterate moveSteps steps along the steepest descent method, and obtain the surface runoff line network. You can see the location of water catchment channels and ridges at a glance*

> Screenshots and videos may show a Chinese-language interface. Labels and control positions can vary by Rhino or RSTool version.

**Run**: Enter `rsRainFlowSimulation` in the Rhino command line (command-line interaction).

**Workflow**:

1. Select terrain object (mesh or surface Brep)
2. If it is a surface, enter the meshing accuracy
3. Select several starting points (points) on the terrain
4. Enter the water flow distance (step size)
5. Enter the number of movement steps (number of iterations) and start the simulation
6. Generate rainwater flow lines for each starting point

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Grid transfer accuracy | meshPrecision | double | 1.0 | >0 | Prompt only when the input is Brep/Surface; static default lastMeshPrecision=1 |
| Moving distance | moveDis | double | 1.0 | >0 | The distance that water flows along the steepest downhill slope at each step; static default lastMoveDis=1 |
| Number of steps moved | moveSteps | integer | 50 | ≥1 | Number of simulation iterations; static default 50 |

**Notes**: The command line is the cli process: first select the terrain (use Mesh directly, press Brep/surface to temporarily convert to mesh by meshPrecision), then click several starting points, and finally press moveDis/moveSteps to iteratively advance downward along the steepest slope of the terrain; the larger the step length and number of steps, the thinner and longer the streamlines will be, but the time consumption will increase linearly.

The core algorithm uses the Steepest Descent method: at each step, four quantities are linearly interpolated on the triangular patch where the starting point is located to find the gradient, taking the -∇z direction (that is, the direction of the maximum slope); when crossing to the next triangular patch, the slope vector of the adjacent edge is used to interpolate again to ensure that there is no reentry across the patch. When Brep surface input, press meshPrecision to convert it to Rhino Mesh and cache it first, and use it directly for pure Mesh input.

The three-piece parameter set (meshPrecision / moveDis / moveSteps) is scaled according to the model unit: meshPrecision defaults to 1.0. The smaller the terrain, the closer it is to the original surface, but the more vertices it has, the slower it will be; moveDis is the forward distance of each step, which is the same magnitude as the samplingLength of rsTerrain; moveSteps defaults to 50, and large terrain can be placed at 100–200 See the complete confluence, too small a flow may cause the flow line to be cut off before reaching the valley.

The starting point distribution strategy determines the shape of the result: a single point is used to follow a runoff direction; multiple points (along the roof, along the road, along the hillside contour line) synthesize the watershed; a regular N×M grid (as shown in the figure) is used to scatter a large number of starting points at one time, and you can see the ridge/valley skeleton and potential water accumulation points at a glance; there is at least 1 starting point, and there is no upper limit in theory. Due to timing, it is recommended to limit ≤ 500 at a time.

Interpretation of the results: The denser the streamlines = the greater the water collection; the streamlines disappear at a certain point (walking outside the model boundary or falling into the basin) = the drainage is unfavorable; multiple streamlines converge significantly = the main drainage channel, which can be used to arrange flood interception ditches/collection wells; multiple streamlines are evenly distributed = uniform drainage and no obvious water collection. The generated results are output as ordinary Rhino curves, which can be bolded, grouped with different colors by layer, or directly Bake to the output layer.
