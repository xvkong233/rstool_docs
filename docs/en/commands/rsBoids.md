# rsBoids · Boids Simulation

> Module: Physics Simulation / Dynamics

[← Back to command index](/en/commands/)

**Function**: Group motion particles (trajectory curve, which can be Bake as NURBS curve; or instance objects can be placed in batches by position)

> Screenshots and videos may show a Chinese-language interface. Labels and control positions can vary by Rhino or RSTool version.

**Run**: Enter `rsBoids` in the Rhino command line (opens a settings window).

**Workflow**:

1. Pop up the group motion simulation form (Eto Forms)
2. Draw simulation boundary Box
3. (Optional) Emit particles from surfaces/grids, pick up obstacle avoidance objects, attraction sources and instance objects
4. Set separation/alignment/aggregation and other group parameters and presets
5. Start a real-time preview of the simulation, Bake trajectory curves or place instances in batches by particle position

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Number of particles | boidCount | integer | 50 | 1 – 10000 | Number of boids in the simulation |
| Separate weights | separationWeight | double | 1.5 | 0 – 10 in 0.1 increments, 2 decimal places | Avoid getting too close to each other |
| Alignment weight | alignmentWeight | double | 1.0 | 0 – 10 in 0.1 increments, 2 decimal places | Follow neighbor direction strength |
| aggregate weight | cohesionWeight | double | 1.0 | 0 – 10 in 0.1 increments, 2 decimal places | The intensity of convergence towards the center of the group |
| Sensing radius | perceptionRadius | double | 50.0 | 0.1 – 10000 (in model units) | Perceive the distance range of neighbors |
| maximum speed | maxSpeed | double | 10.0 | 0.1 – 1000 (in model units) | Maximum moving speed of each particle |
| Maximum force | maxForce | double | 0.3 | 0.01 – 10 in increments of 0.05, 2 decimal places | maximum steering force |
| Obstacle avoidance weight | avoidanceWeight | double | 2.0 | 0 – 10 in 0.1 increments, 2 decimal places | Ability to avoid obstacles |
| attraction | attractionWeight | double | 0.0 | 0 – 10 in 0.1 increments, 2 decimal places | The intensity of flying around the source of attraction (point/line) |
| steps per frame | stepsPerFrame | integer | 1 | 1 – 10 | The number of simulation steps advanced each time the interface is refreshed |
| track length | trailLength | integer | 500 | 2 – 5000 | The number of track points retained by each particle |
| Parameter preset | preset | list | Balanced | Balanced / TightFlock / LooseWander / FastSchool | Apply a set of group motion parameters with one click |

**Notes**: Boundary Box is required; supports emission from surfaces, obstacle avoidance, attraction sources, and Block/SubD instances.

**Tutorial videos**:

<iframe class="rstool-video" src="https://player.bilibili.com/player.html?isOutside=true&aid=116749424924802&bvid=BV1gpJK6nEg2&cid=39120932166&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" loading="lazy" title="RsTool·Group-like motion analysis (Boids) demonstration teaching (Bilibili)"></iframe>
*RsTool·Group-like motion analysis (Boids) demonstration teaching (Bilibili)*
