# rsGradientChangeByCrv · Gradient transformation along curve

> Module: Geometry / Object Transforms

[← Back to command index](/en/commands/)

**Function**: Using the nearest distance from the center of the object's bounding box to the interference curve as the gradient, perform a gradient scaling of the object from near to far (cli mode) / scale, rotate, and move compound transformation (Eto mode)

![rsGradientChangeByCrv · Gradient scaling effect along the curve](../../assets/rsGradientChangeByCrv/image1.png)
*Gradient transformation along the curve: use the nearest distance from the object to the interference curve as the gradient, and perform linear remapping scaling from near to far.*

![rsGradientChangeByCrv · Eto dialog (4D transformation + real-time preview)](../../assets/rsGradientChangeByCrv/image2.png)
*Eto dialog box: Scale/rotate/move three-dimensional transformations can be enabled separately, filter provides perturbation strength and random seeds, supports hiding original objects and real-time preview*

> Screenshots and videos may show a Chinese-language interface. Labels and control positions can vary by Rhino or RSTool version.

**Run**: Enter `rsGradientChangeByCrv` in the Rhino command line (command-line interaction).

**Workflow**:

1. Command line mode:
2. Command line input rsGradientChangeByCrv
3. Select the object to be transformed (interference) (GetMultiple, multiple selections possible)
4. Select the interference curve (Curve, GetObject, multiple selections possible)
5. Use options to set min zoom/max zoom during selection
6. After pressing Enter, perform linear remapping scaling based on the closest distance between the object and the curve (cli mode only scales)
7. Eto dialog mode (4D transformation + real-time preview):
8. Enter rsGradientChangeByCrv on the command line to open the Eto dialog box (or select the dialog box option in the cli process)
9. Pick/confirm the object to be transformed and the interference curve in the dialog box (the preselected set can be inherited)
10. In the "Scale/Rotate/Move" tab, check the transformation dimensions to be enabled and set the near/far parameters respectively.
11. Enable filter, perturbation intensity, and random seed in the filter tab settings
12. Check "Hide original object" and "Real-time preview" to confirm the transformation result or cancel it.

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Minimum zoom value | MinimumScale | double | 0.8 | >= Document absolute tolerance | The scaling ratio corresponding to the nearest object (lastMinScaleNum memory, default 0.8) |
| Maximum zoom value | MaximumScale | double | 1.2 | >= Document absolute tolerance | The scaling ratio corresponding to the farthest object (lastMaxScaleNum memory, default 1.2) |

**Notes**: cli mode: The scaling value is calculated by Remap(distance, minimum distance, maximum distance, minScale, maxScale) and scaled according to the center of the respective bounding box. Eto dialog mode: supports simultaneous application of scaling/rotating/moving three-dimensional transformations to objects (can be checked and enabled separately). The transformation intensity is also linearly remapped from near to far using the nearest distance from the object to the interference curve as the gradient; when the filter is turned on, random perturbation will be applied to the "distance sorting" - perturbation intensity 0% maintains pure distance sorting, 100% is completely random, and the intermediate values ​​are mixed in proportion; the same random perturbation result can be reproduced when the random seed is fixed. Check "Hide Original Object" to keep only the result object; check "Real-time Preview" to instantly refresh the results when adjusting parameters.
