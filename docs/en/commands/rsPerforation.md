# rsPerforation · Perforation

> Module: Paneling & Facades

[← Back to command index](/en/commands/)

**Function**: Generate circular or regular polygon hole outlines inside a planar boundary, with optional center points and solid hole hatches. Results are grouped on the current layer and can be undone together.

**Run**: Enter `rsPerforation` in the Rhino command line (opens a settings window).

**Workflow**:

1. Enter rsPerforation and select a valid closed planar curve without self-intersections as the boundary.
2. Under Boundary and grid, choose counts or spacing, rectangular or staggered layout, and the grid angle.
3. Under Pattern and dimensions, choose the shape, radius range, edge margin, and hole gap. Check the allowed maximum radius.
4. Under Size field, choose Uniform, Curve distance, Image grayscale, or Directional gradient. Curve distance needs coplanar influence curves; image mode needs an image and its rectangle; gradients need a drawn line or an angle.
5. Inspect the preview, hole count, actual radii, open-area ratio, and rejection reasons. Enable center points or solid hole hatches if needed.
6. When the preview is complete, click Create and close. Results are grouped on the current layer. Cancelling creation removes incomplete output; successful creation can be undone together.

**Parameters**:

### Boundary and grid: arranging holes

Use counts to set rows and columns, or spacing for physical center distances. Boundary filtering removes holes that do not fit, so counts differ from final hole numbers. Lengths use document units. Defaults below refer to first use; later sessions may restore saved settings.

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Distribution | Distribution | option | X/Y counts | X/Y counts / X/Y spacing | Use counts for row and column numbers, or spacing for actual center distances. |
| X / Y count | CountX / CountY | integer | 20 / 20 | Each 1–50000; total candidates ≤ 50000 | Count mode only. Counts refer to the grid before boundary filtering; final hole counts may be lower. |
| X / Y spacing | SpacingX / SpacingY | length | Corresponding boundary bounding-box dimension ÷ 20 | Each > 2 × document tolerance | Spacing mode only, in document units. Smaller spacing makes a denser grid. |
| Layout | Layout | option | Rectangular | Rectangular / Staggered | Staggered layout offsets alternate rows by half the X spacing. |
| Grid angle | GridAngle | angle | 0° | -360–360° | Rotates the full grid from axes determined by the boundary and current construction plane. |

### Pattern and dimensions: shape and clearance

Choose shapes and sizes, then check overlap limits. Polygon size means circumradius. Edge margin is measured from the complete outline, not its center.

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Shape | Shape | option | Circle | Circle / Triangle / Square / Hexagon | Selects each hole outline. |
| Shape angle | ShapeAngle | angle | 0° | -360–360° | Rotates individual polygons independently of the grid angle. |
| Min / max radius | MinimumRadius / MaximumRadius | length | 0.10 / 0.35 × the smaller initial spacing | Minimum ≥ 0; maximum > tolerance and ≥ minimum | Circles use radius; polygons use circumradius. Uniform uses the maximum; other modes vary within the range. The initial maximum is at least twice tolerance. |
| Scale radii with grid spacing | AutoScaleRadii | toggle | On | On / Off | Adjusts radii proportionally when grid counts, spacing, or layout change. |
| Edge margin | EdgeMargin | length | 0 | ≥ 0 | Required clearance from the full hole outline to the boundary. Holes that cannot fit are removed. |
| Prevent overlap | PreventOverlap | toggle | On | On / Off | Limits radii by neighboring centers, using polygon circumradii conservatively. Off permits overlaps. |
| Hole gap | HoleGap | length | 0 | ≥ 0 | Clearance between holes when overlap prevention is on. Excessive gaps may leave no valid holes. |

### Size field: varying hole sizes

Uniform suits regular patterns, curve distance varies around lines, grayscale reproduces images, and gradients transition between small and large. A drawn gradient uses minimum at its start and maximum at its end, holding endpoint values outside the line range.

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Size control | SizeMode | option | Uniform | Uniform / Curve distance / Image grayscale / Directional gradient | Selects the source of size variation without changing the basic grid of centers. |
| Influence distance | InfluenceDistance | length | 5 × the smaller initial spacing | > document tolerance | Curve distance makes holes larger near curves and smaller farther away, reaching the minimum beyond this distance. Invert reverses it. The initial value is at least twice tolerance. |
| Gradient control | GradientControl | option | Draw line | Draw line / Angle | Draw a line to define direction and extent, or set an angle for directional variation. |
| Gradient angle | GradientAngle | angle | 0° | -360–360° | Angle mode only; relative to the grid X axis. |
| Invert size field | Invert | toggle | Off | On / Off | Reverses curve distance, grayscale, or gradient size relationships. Not used in Uniform mode. |

### Image grayscale: placement and tones

Choose an image, then Fit to boundary or Set image rectangle. Black produces small holes and white large holes by default. Centers outside the image rectangle are omitted. Invert size field reverses the relationship.

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Keep image aspect ratio | ImageKeepAspect | toggle | On | On / Off | Preserves proportions during image placement or fitting; Off allows a stretched rectangle. |
| Flip horizontally / vertically | FlipX / FlipY | toggle | Both off | On / Off | Mirrors image sampling and background preview together. |
| Auto levels | ImageAutoLevels | toggle | On | On / Off | Expands tonal range without amplifying noise in nearly constant images. |
| Map tone to area | ImageAreaMapping | toggle | On | On / Off | Maps grayscale to hole area for image reproduction; Off varies radius linearly with grayscale. |
| Contrast / gamma | ImageContrast / ImageGamma | number | 1 / 1 | Each 0.1–4 | Contrast strengthens tonal differences; gamma adjusts midtones in the size mapping. |
| Show image background | ShowImageBackground | toggle | On | On / Off | Shows an image reference to check position, proportions, and direction. It is not geometry output. |
| Background transparency | ImageBackgroundTransparency | percentage | 50% | 0–100% | Affects display only, not grayscale sampling or hole size. |

### Preview and output

Showing centers and outputting points are separate options. Filled previews do not create hatches unless solid hatch output is enabled.

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Show preview | ShowPreview | toggle | On | On / Off | Shows or hides temporary viewport previews. |
| Show centers | ShowCenters | toggle | Off | On / Off | Displays temporary center points for checking the grid. |
| Filled polygon preview | FilledPreview | toggle | On | On / Off | Switches filled or outline previews. Circles preview as 12-gons but output as exact circles. |
| Output center points | OutputCenters | toggle | Off | On / Off | Adds Rhino points alongside hole outlines. |
| Also fill holes with solid hatches | OutputHatches | toggle | Off | On / Off | Adds independent solid hatches inside holes for graphic presentation, retaining outline curves. |

**Notes**:

## Image perforation workflow

Select Image grayscale and load a PNG, JPG, JPEG, or BMP. Use Fit to boundary for quick placement. For custom position, direction, and size, use Set image rectangle and pick the lower-left corner, lower-right corner, then a point on the upper side. With aspect ratio enabled, the third point sets the upper side while image proportions determine height. Background visibility and transparency do not change the pattern.

## Radius limits and filtering

With overlap prevention on, allowed radii are (nearest center distance − hole gap) ÷ 2, using grid neighbors before clipping. If the requested maximum exceeds the limit, size variation is mapped into the safe range, so actual radii may be smaller. Use allowed maximum radius provides a quick setting.

Candidates outside the boundary or image frame, outlines crossing the boundary, insufficient edge margins, and radii that are too small are removed instead of creating partial holes. The panel reports reasons, counts, and radius ranges. With overlap prevention off, the area ratio sums hole areas without deducting overlaps.

## Creation and further use

The command outputs hole outlines rather than cutting panels. Use those curves for subsequent surface trimming or solid cutting. Solid hole hatches support 2D graphic presentation.

There is a limit of 50,000 candidates. Reduce counts or increase spacing if exceeded. Wait for preview completion before Create and close. Cancelling creation removes partial output; successful creation closes the window.

Settings are remembered, with lengths stored separately by document units. Influence curves, images, and placement frames must be selected or set again. Close and rerun after changing document units or tolerance.
