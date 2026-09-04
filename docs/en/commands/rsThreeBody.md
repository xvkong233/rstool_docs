# rsThreeBody · Three-body motion simulation

> Module: Fun / Interactive Entertainment

[← Back to command index](/en/commands/)

**Function**: Real-time preview of three-body gravitational motion (sphere + trajectory + velocity vector), and Bake trajectory as NURBS curve

![rsThreeBody Simulation dialog box and running viewport: The title of the Eto window on the right is "Three-Body Motion Simulation (Three-Body)", which is divided into three areas: ① Initial default (drop-down = random) ② Physical parameters (m1=1.000 / m2=1.000 / m3=1.000 / Gravitational constant G=0.8000 / Time step dt=0.0031 / Initial velocity magnification = 1.200 / Z-axis disturbance = 0.000) ③ Display and simulation (display scaling = 30.00 / sphere radius = 1.000 / steps per frame = 4 / trajectory length = 2000 / ✓ record trajectory / ✓ display velocity vector); bottom status line "Default random steps 2820"; button area: pause / reset / Bake trajectory / close; left Rhino The viewport shows three spheres of different colors (green/blue/red) flying around each other along the colored trajectory lines, each with a white speed vector arrow.](../../assets/rsThreeBody/image1.png)
*Three-body motion simulation: The dialog box sets the 3-body mass + gravitational constant G + time step dt + initial velocity magnification + Z-axis perturbation, real-time preview of the three-ball mutual orbit and supports Bake as a NURBS curve*

> Screenshots and videos may show a Chinese-language interface. Labels and control positions can vary by Rhino or RSTool version.

**Run**: Enter `rsThreeBody` in the Rhino command line (opens a settings window).

**Workflow**:

1. Command line input rsThreeBody
2. Open the three-body simulation Eto window
3. Select initial preset (Figure 8/Equilateral Triangle/Random)
4. Adjust physical and display parameters
5. Click to start/pause real-time preview
6. (Optional) Click Bake trace to generate as NURBS curve

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Mass m1 | Mass1 | double | 1.0 | 0.01~10000 | Body 1 mass |
| Mass m2 | Mass2 | double | 1.0 | 0.01~10000 | body 2 mass |
| Mass m3 | Mass3 | double | 1.0 | 0.01~10000 | Body 3 mass |
| Gravitational constant G | Gravity | double | 1.0 | 0.0~1000 | gravitational constant |
| time step dt | TimeStep | double | 0.005 | 0.0001~0.5 | Integration step size, the smaller the more stable it is |
| Initial velocity magnification | VelocityScale | double | 1.0 | 0.0~5.0 | Initial velocity scaling, 1.0 = classical solution |
| Z-axis disturbance | ZPerturbation | double | 0.0 | 0.0~2.0 | >0 Entering three-dimensional chaos |
| Show zoom | DisplayScale | double | 30.0 | 0.1~10000 | Pure display magnification, does not affect physics |
| sphere radius | BodyRadius | double | 1.0 (scaled by model units) | 0.01~1000 | Preview sphere display radius |
| steps per frame | StepsPerFrame | integer | 4 | 1~50 | Number of physics steps advanced per frame |
| track length | TrailLength | integer | 2000 | 10~50000 | Number of track points retained for each body |
| record track | RecordTrails | toggle | true | on/off | Whether to record and enable Bake traces |
| Show velocity vector | ShowVelocity | toggle | true | on/off | Whether to draw speed direction arrows |
| Initial default | Preset | list | Figure8 | Figure8/Lagrange/Random | Initial condition preset |

**Notes**: Use RK4 integration; classic default (figure 8/equilateral triangle) is a stable solution
