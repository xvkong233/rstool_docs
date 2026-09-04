# rsSprinkerMutiple · Multi-Point Scatter

> Module: Geometry / Object Transforms

[← Back to command index](/en/commands/)

**Function**: Randomly scatter multiple source objects onto the target surface according to the dialog box parameters, and retain historical records for easy editing.

![Rhino Perspective viewport: multi-object random scatter dialog box + purple wireframe InstanceReference preview on urban scenes (roads/pools/grass/buildings)](../../assets/rsSprinkerMutiple/image1.jpg)
*Figure 1: rsSprinkerMutiple dialog box and wireframe preview. The Rhino Perspective viewport (Perspective label in the upper left corner, red and green coordinate axes in the lower left/lower right corner) is an urban scene: curved roads, rectangular pools, green grass, and white curved buildings in the upper left corner; a large number of purple InstanceReference wireframes are neatly arranged on the edge of the pool and grass (i.e., the preview space of the source objects to be dispersed on the target surface); on the left is a multi-object random scatter Eto dialog box: the input area shows that 1 object, 1 targets, no exclusions selected; scatter preview map scale 1.00; Scatter parameters include scatter type (ring random), scatter quantity (100), rotation angle range (180.0), minimum zoom (0.30), maximum zoom (0.80), minimum spacing (0.000), fitting surface normal (check), zoom scale (0.001), spiral strength (1.000), number of spiral layers (4); preview mode = outline box wireframe; random seed 12345; The bottom prompts the actual scatter quantity of 100. Preview the corresponding parameters changing in real time, and then write the dispersion results into the document as an official history record after OK*

![Rhino Perspective viewport: The same urban scene, the final result of scattering instanced after removing the purple wireframe - rows of green trees neatly arranged on both sides of the road and pool](../../assets/rsSprinkerMutiple/image2.jpg)
*Figure 2: rsSprinkerMutiple final result. In the same urban scene (road, rectangular pool, curved building, green space), the purple wireframe preview has been replaced by formally scattered instance objects: rows of green tree instances are neatly arranged on both sides of the pool and green space (consistent with the preview number of 100), each tree has a round crown, different postures and different sizes (controlled by scaling 0.30-0.80 and rotation 0-180 degrees), maintaining the source object material and layer; and Figure 1 You can see the effect from the purple wireframe preview to the final instantiation by comparing it.*

> Screenshots and videos may show a Chinese-language interface. Labels and control positions can vary by Rhino or RSTool version.

**Run**: Enter `rsSprinkerMutiple` in the Rhino command line (opens a settings window).

**Workflow**:

1. Command line input rsSprinkerMutiple
2. Pop up the Eto dialog box (SprinkerMultipleDialog, semi-modal)
3. Select the source object and target surface in the dialog box, and set various parameters (number/angle/scale/spacing/noise/distribution, etc.)
4. Real-time preview (SprinkerPreviewConduit)
5. Click OK and press TransformWithHistory to batch generate scattered objects.

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Quantity | Count | integer | 100 | 1 ~ 2147483647 | Total number of scattered objects |
| Angle range | AngleRangeDegrees | double | 180 | 0 ~ 360 | Random rotation angle upper limit (degrees) |
| minimum zoom | MinimumScale | double | 0.8 | 0.01 ~ 1000000 | Random scaling lower limit |
| Maximum zoom | MaximumScale | double | 1.2 | 0.01 ~ 1000000 | Random scaling cap |
| Minimum spacing | MinimumDistance | double | 0.5 | 0 ~ maximum value | Minimum spacing between scattered points to avoid overlapping objects |
| Align to surface | AlignToSurface | toggle | false |  | Whether to align the object normal to the target surface |
| random seed | RandomSeed | integer | 12345 | -2147483648 ~ 2147483647 | Random seeds, the same seed results can be reproduced |
| Noise scaling | NoiseScale | double | 0.25 | 0.001 ~ 1000 | Noise distribution frequency, only noise aggregation/blank mode is effective |
| Noise intensity | NoiseStrength | double | 0.85 | 0 ~ 1 | Noise gathering/white space intensity |
| Number of noise layers | NoiseOctaves | integer | 4 | 1 ~ 8 | Number of noise superposition fractal layers |
| preview mode | PreviewMode | list | BoxWire (bounding box wireframe) | Bounding box wireframe/object wireframe/shaded surface preview | Preview display mode (SprinkerPreviewMode enumeration) |
| distribution pattern | DistributionMode | list | Random (area random) | Random area / uniform spacing / noise gathering / noise blanking | Sprinkle distribution algorithm (SprinkerDistributionMode enumeration) |

**Notes**: Pure form interaction (Eto dialog box), no command line numerical parameters; all default values are remembered by the last* static field.
