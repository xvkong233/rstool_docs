# rsMeshRelax · Uniform Mesh Relaxation

> Module: Physics Simulation / Form Finding & Relaxation

[← Back to command index](/en/commands/)

**Function**: Relaxed mesh (spring/smooth particle solution, Bake documentation)

![rsMeshRelax Real-time preview: Orange highlighted mesh + "mesh Subdivision Control" parameter panel](../../assets/rsMeshRelax/image1.png)
*rsMeshRelax Real-time preview status: Rhino 8 perspective viewport, the mesh of the object (square plate + center funnel + lower cylinder) is displayed with **orange highlight** (DisplayConduit real-time preview); the "mesh Subdivision Control" parameter panel pops up on the right, divided into three groups: - **Input**: Mesh selected, number of vertices 2116, surface boundary points 132 - **Parameters** (values shown in the figure): Target side length ratio 0.70, Allowed strength 0.25, Smoothing weight 0.00, Damping 0.99, Steps per frame 3 - **Bottom state**: 2116 vertices, 132 surface boundary points, 1296 steps - **Action Buttons**: Pause/Reset/Confirm Generation (Bake)/Close After clicking "Start Preview", the spring/smooth particle solution will start, and the parameters can be adjusted in real time; click "Confirm Generation" to Bake and write the document (see flow[3])*

> Screenshots and videos may show a Chinese-language interface. Labels and control positions can vary by Rhino or RSTool version.

**Run**: Enter `rsMeshRelax` in the Rhino command line (opens a settings window).

**Workflow**:

1. Select mesh
2. Open the Slack panel and preview it in real time
3. Click "Start Preview" to start the spring solver simulation
4. Can "Reset"/"Confirm Generation (Bake)"/"Close"

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Target side length ratio | Length scale | double | 0.75 | 0.1–5.0 | The ratio of the target side length to the median side length of the current mesh |
| Allowed strength | Elasticity | double | 0.1 | 0.0–2.0 | Side spring strength, the larger the force, the faster it will pull to the same side length. |
| smooth weight | Smoothing | double | 0.05 | 0.0–2.0 | Neighborhood smoothing strength, the larger it is, the closer it is to the centroid of the neighboring point. |
| Damping | Damping | double | 0.85 | 0.0–0.99 | Speed damping, the larger the value, the more inertia is retained. |
| steps per frame | Steps per frame | integer | 3 | 1–30 | The number of solution steps advanced each time the interface is refreshed |

**Notes**: Use DisplayConduit for real-time preview; remember last settings. Note: help only points to the website root domain name, not the detail/NNN details page
