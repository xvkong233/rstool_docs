# rsClothFluttering · Cloth Wind Simulation

> Module: Physics Simulation / Dynamics

[← Back to command index](/en/commands/)

**Function**: Cloth mesh fluttering due to wind and gravity (orange transparent preview, can be Bake)

> Screenshots and videos may show a Chinese-language interface. Labels and control positions can vary by Rhino or RSTool version.

**Run**: Enter `rsClothFluttering` in the Rhino command line (opens a settings window).

**Workflow**:

1. Pop up the cloth wind simulation form (Eto Forms)
2. Pick one or more cloth meshes (Mesh)
3. Pick an anchor point (Point object) to lock a vertex
4. Set wind direction/force, gravity, elasticity, damping and collision parameters
5. Start the simulation real-time preview, and finally Bake the mesh

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Wind direction | windX | double | 1 | -1 – 1 (automatic normalization) | Wind direction vector component |
| Wind direction Y | windY | double | 0 | -1 – 1 (automatic normalization) | Wind direction vector component |
| Wind direction Z | windZ | double | 0.2 | -1 – 1 (automatic normalization) | Wind direction vector component |
| wind force | windStrength | double | 4.0 | 0 – 10000 in increments of 0.5, 2 decimal places | Wind pressure and waft disturbance intensity |
| Gravity direction X | gravityX | double | 0 | -1 – 1 (automatic normalization) | Gravity direction vector component |
| Gravity direction Y | gravityY | double | 0 | -1 – 1 (automatic normalization) | Gravity direction vector component |
| Gravity direction Z | gravityZ | double | -1 | -1 – 1 (automatic normalization) | The default -1 means falling in the negative direction of world Z |
| Gravity size | gravityStrength | double | 9.8 | 0 – 10000 in increments of 0.5, 2 decimal places | gravity acceleration |
| Elasticity | stiffness | double | 180.0 | 1 – 5000 in increments of 10, 1 decimal place | Edge spring constraint strength |
| Damping | damping | double | 0.985 | 0.80 – 0.999 in 0.005 increments, 3 decimal places | Speed damping, the closer to 1, the stronger the inertia |
| Collision thickness | collisionThickness | double | 0.03 | 0 – 100000 (in model units) | Minimum separation distance between multiple pieces of fabric |
| avoidance distance | collisionAvoidance | double | 0.09 | 0 – 100000 (in model units) | Enter this range and push gently in advance |
| Impact force | collisionStrength | double | 0.45 | 0 – 1 in increments of 0.05, 2 decimal places | Collision/avoidance push force |
| collision range | collisionSpan | integer | 1 | 0 – 50 | Limit the collision detection range according to the picking order; 0=all fabrics check each other, 1=adjacent pieces |
| steps per frame | stepsPerFrame | integer | 3 | 1 – 30 | The number of physical steps advanced each time the interface is refreshed |

**Notes**: Supports multiple pieces of cloth colliding with each other; automatically hides the original mesh after starting the simulation.

**Tutorial videos**:

<iframe class="rstool-video" src="https://player.bilibili.com/player.html?isOutside=true&aid=116749827577150&bvid=BV16HJN6wEJt&cid=39121259158&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" loading="lazy" title="RsTool · Cloth Fluttering Demonstration Teaching (Bilibili)"></iframe>
*RsTool · Cloth Fluttering Demonstration Teaching (Bilibili)*
