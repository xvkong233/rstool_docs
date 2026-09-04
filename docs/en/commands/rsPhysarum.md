# rsPhysarum · Slime mold simulation

> Module: Physics Simulation / Dynamics

[← Back to command index](/en/commands/)

**Function**: Slime mold network: two-dimensional point cloud + isoline, three-dimensional point cloud + isosurface grid

**Run**: Enter `rsPhysarum` in the Rhino command line (opens a settings window).

**Workflow**:

1. Pop up the slime mold algorithm simulation form (Eto Forms)
2. Select mode (2D rectangle/3D box), automatically generate default range
3. (Optional) Pickup range, attraction point (food source) and emission source
4. Set parameters such as particle count, sensor, deposition/attenuation, grid resolution, etc. or apply presets
5. Start the simulation real-time preview and confirm the generation of point cloud + isoline (2D) or point cloud + isosurface (3D)

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Simulation mode | Mode | list | TwoD | TwoD / ThreeD | Two dimensions run on a rectangular plane, and three dimensions run within a box volume. |
| Number of particles | particleCount | integer | 40000 | 1000 – 100000 in increments of 1000 | Number of agent particles; static default LastParticleCount=40000 |
| sensor angle | sensorAngle | double | 30.0 | 0 – 180 (degrees) in increments of 1, 1 decimal place | The angle between the relative orientation of the sensor |
| Sensor distance | sensorDistance | double | 15.0 | 1.0 – 50.0, in increments of 1, 1 decimal place | Sensor-to-particle distance (grid units) |
| rotation angle | rotationAngle | double | 25.0 | 0 – 180 (degrees) in increments of 1, 1 decimal place | Adjust the angle for each step |
| Moving distance | moveDistance | double | 1.0 | 0.1 – 5.0 in 0.1 increments, 2 decimal places | Distance forward per step (grid unit) |
| Amount of deposition | depositAmount | double | 5.0 | 0.1 – 20.0 in 0.5 increments, 2 decimal places | The trajectory value deposited at the current position at each step |
| Attenuation coefficient | decay | double | 0.94 | 0.5 – 0.99 in 0.01 increments, 3 decimal places | The trajectory field attenuates at each step (1=no attenuation) |
| grid resolution | gridResolution | integer | 200 | 64 – 400 in increments of 16 | Number of 2D planar edges/3D X/Y edge elements |
| Z resolution | zResolution | integer | 48 | 16 – 96 in increments of 8 | Z resolution in 3D mode only (Volume O(res³)) |
| equal threshold | contourLevel | double | 0.35 | 0.0 – 1.0 in increments of 0.05, 2 decimal places | Normalized threshold for isoline/isosurface extraction |
| steps per frame | stepsPerFrame | integer | 2 | 1 – 20 | The number of solution steps advanced each time the interface is refreshed |
| attraction radius | attractorRadius | double | 8.0 | 0.0 – 50.0, in increments of 1, 1 decimal place | The grid radius of the attraction point injection trajectory |
| attraction strength | attractorStrength | double | 4.0 | 0.5 – 10.0 in 0.5 increments, 2 decimal places | Magnification relative to background trajectory peak (>1 attracts particle aggregation) |
| shuttle coefficient | teleportFactor | double | 0.2 | 0.0 – 1.0 in increments of 0.05, 2 decimal places | The trigger radius ratio of teleporting to other attraction points after reaching the attraction point; 0 = no shuttle |
| Track history points | pathHistoryPoints | integer | 1200 | 50 – 10000 in increments of 100 | Each represents the number of nearest trajectory points retained by the particle |
| Explore steps | explorationSteps | integer | 300 | 0 – 2000 in increments of 50 | The emitter mode starts with omnidirectional free diffusion steps, and then enables attraction and competition. |

**Notes**: Provides one-click configuration of multiple sets of presets; the 3D mode volume calculation overhead increases with the Z resolution cube.
