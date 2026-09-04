# rsGradientSelcectByCrv · Gradient Selection by Curve

> Module: Organization & Selection / Selection

[← Back to command index](/en/commands/)

**Function**: Randomly generate a collection of selected objects based on the distance gradient from the candidate object to the interference curve (with real-time preview)

![Rhino Perspective viewport: Rectangular dense quad mesh panel + meshes away from the cyan S-shaped curve are highlighted in orange (rsGradientSelcectByCrv gradient preview) + [Gradient Gradient Selection] dialog box on the right](../../assets/rsGradientSelcectByCrv/image1.png)
*Figure 1: rsGradientSelcectByCrv gradient selection real-time preview. There is a rectangular dense quad grid panel (square grid with black strokes) in the Rhino Perspective viewport (perspective label in the upper left corner, red and green coordinate axes in the lower left/lower right corners). There is a gradient of orange highlight to light color and then white from one side of the panel to the other side - the grid highlight far away from the cyan S-shaped curve is dark orange, and the one close to the curve is close to white, and the farther away the more orange; a cyan S-shaped curve runs through the panel. On the right is the [Gradient Gradient Selection] Eto dialog box: the input selection area contains [Select Filter Objects] (400 have been selected) and [Select Interference Curves] (1 has been selected ) buttons; the gradient parameter area contains [Select Offset] (0), [Random Seed] (1) and [Re-Random] buttons; the option [Object Priority when Close to the Curve] (unchecked); the description text prompts are grayscaled to select the number, accuracy rate/number of selections, and the default priority is to select objects far away from the curve; the preview status shows that 161/400 objects will be selected; the bottom [Confirm Selection]/[Cancel] button. Calculate pre-selection based on the distance between the candidate object and the interference curve + random seed. Orange highlight = objects far away from the curve (will be selected). Click to confirm the selection and formally write it.*

> Screenshots and videos may show a Chinese-language interface. Labels and control positions can vary by Rhino or RSTool version.

**Run**: Enter `rsGradientSelcectByCrv` in the Rhino command line (opens a settings window).

**Workflow**:

1. Command line input rsGradientSelcectByCrv
2. Click "Select Candidate Object" in the pop-up window to pick up the object.
3. Click "Select Interference Curve" to pick the curve
4. Adjust selection offset/random seed/close to curve priority parameters and preview in real time
5. Click "Confirm Selection" to complete

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Select offset | SelectionBias | integer | 0 | -50 ~ 50 | Negative values increase the number of selections, positive values decrease it; by default, objects away from the curve are given priority. |
| random seed | RandomSeed | integer | 1 | 1 ~ 999999 | Stable randomization, you can use the "re-random" button to increase it automatically |
| Objects close to curves are given priority | PreferNearCurve | toggle | false |  | When checked, objects close to the curve will be selected first. |

**Notes**: You need to select both the candidate object and the interference curve to confirm; use the Eto dialog box GradientSelectionDialog
