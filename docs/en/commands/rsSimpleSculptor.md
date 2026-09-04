# rsSimpleSculptor · Quick Mesh Sculptor

> Module: Geometry / Meshes

[← Back to command index](/en/commands/)

**Function**: The mesh after carving in place (vertex displacement); cancel to restore the original mesh.

![Rhino 8 Perspective view, "Quick Sculpting Tool" Eto dialog box on the left: three mode buttons at the top - currently highlighted uplift/drop/flatten; four value boxes below: brush radius=1.000/displacement=0.100/strength=0.55/hardness=0.35; curve form 6 thumbnails (1 round, 2 linear, 3 peak, 4 wide, 5 arch, 6 Stairs, currently 1 rounded); undulation type 1: dome; Black map gray state "Unused map" + "Load map" and "Clear map" two buttons; check options ✓ Constant boundary, ✓ Return edge mark after brushing; subdivision density = 2, minimum subdivision side length = 0.250; mirror rule three keys X / Y / Z (current X) + mirror plane position = 0.000; bottom 3 buttons Undo / Complete / Cancel. The light shaded plane mesh in the viewport has been ridged multiple times to carve out three obvious ridges/dimples, with the orange brush outline circle on the right + the center brush point.](../../assets/rsSimpleSculptor/image1.png)
*Quick sculpting tool: Activate after selecting the mesh in hybrid mode (command line + Eto panel), left-click and drag to instantly shift the vertices; the panel adjusts 11 parameters such as brush radius/displacement/strength/hardness/curve form/mirror/Alpha map.*

> Screenshots and videos may show a Chinese-language interface. Labels and control positions can vary by Rhino or RSTool version.

**Run**: Enter `rsSimpleSculptor` in the Rhino command line (command-line interaction).

**Workflow**:

1. Select the mesh to engrave
2. Open the Sculpt panel and activate GetPoint
3. Hold down the left button and drag the sculpt on the mesh (raise/drop/flatten)
4. Adjust brush radius/strength/hardness/curve/mirror, etc. in the panel
5. Press Enter or "Complete" to end writing, or "Cancel" to restore the original mesh.

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Brush mode | Mode | list | Raise | Raise / Lower / Flatten | Panel button switching |
| Brush radius | Brush radius | double | 1 | 0.001–100000.0 | Actual values are scaled in meters → model units (_lastBrushRadius*unitScale) |
| Displacement | Amount | double | 0.1 | 0.0–100000.0 | Disabled in Flatten mode; scale by unit |
| intensity | Strength | double | 0.55 | 0.0–1.0 |  |
| Hardness | Hardness | double | 0.35 | 0.0–1.0 |  |
| Curved form | Profile | list | Smooth | Smooth/Linear/Sharp/Broad/Dome/Terrace | Enumeration values 1–6 |
| fixed boundaries | Preserve boundary | toggle | true |  |  |
| Mirror brush | Mirror brush | toggle | false |  |  |
| mirror axis | Mirror axis | list | X | X / Y / Z | Panel button switching |
| Mirror plane position | Mirror plane offset | double | 0 | -100000.0–100000.0 | Scale by unit |
| black and white map | Alpha map | text |  | png/jpg/jpeg/bmp/tif/tiff | Optional loading of black and white brush maps |

**Notes**: Hybrid mode: Command line interactively selects the mesh → the Eto panel automatically pops up, left-click to sculpt on the mesh in real time; all values in the panel can be dragged and adjusted, and the results are immediately reflected in the viewport (without writing to the document). The Bake will not be officially written to the original mesh until "Finish" is clicked, and "Cancel" will discard all strokes and roll back.

## Detailed explanation of brush 5 elements

The displacement amount of each pen stroke is determined by these 4 values ​​+ 1 curve form.

- **Brush radius** (1.0 / 0.001–100000): The determination distance of the affected vertex set. According to the distance a from each vertex to the center of the brush, the vertices within the radius R are the potentially affected set; the greater the distance, the smaller the impact (attenuated by intensity).
- **Displacement Amount** (0.1 / 0–100000): The displacement size of a single stroke on the vertex per frame; the uplift/descent mode is in effect, and the **leveling mode is automatically disabled**.
- **Strength** (0.55 / 0–1): Multiplies the overall strength of the brush; the larger it is, the more exaggerated the result will be for the same amount of displacement.
- **Hardness** (0.35 / 0–1): Steepness of the falloff curve within the brush radius; 0 = soft transition throughout the range, 1 = concentrated in the center, almost stepped affecting only the center.
- **Curve form Profile** (Smooth/Linear/Sharp/Broad/Dome/Terrace 6 predefined attenuation curves): Each curve affects "distance a vs displacement coefficient f(a/R)" mapping - rounded is the most commonly used, and the transition between strong and weak is natural; linear means distance = proportion; the center of the peak has a sharp protrusion and the edge is almost unchanged; wide, gentle and large radius can still reach the peak; arched two-way curve (low center, rising first and then falling outward); stairs emphasize the sense of contours.

Two sets are commonly used in actual measurements: ①**Detailed shaping**——radius 0.3/strength 0.4/hardness 0.6/curve rounded or peaked; ②**large undulations of the mountain**——radius 5/strength 0.7/hardness 0.3/curve wide and gentle or arched.

## Mirror Engraving

Check "Mirror brush" and turn on X / Y / Z symmetry: each time you put down a pen, a stroke will be written on the other side of the mirror plane; multiple mirror images can be superimposed (X+Y four-sided symmetry, XYZ full eight-point symmetry).

- **Mirror axis**: X (default) / Y / Z, mirror around the X/Y/Z axis respectively
- **Mirror plane position Mirror plane offset** (0.0): offset of the mirror plane along the axis; the default value 0 is the global midpoint position; it can be set to any position to synchronously carve multiple symmetry centers

Mirroring is very effective for public building gables (symmetry around the central axis), terrain (X+Y dual axes), and complex geometric subjects (full symmetry around Z).

## Black and white map Alpha map

"Black map / Alpha map" uses black and white PNG/JPG as a brush mask: black = 0% displacement, white = 100%; supports png/jpg/jpeg/bmp/tif/tiff. Common scenarios:
- Make embossed characters and embossed logos on the wall
- Terrain undulations are guided by map patches (rivers/vegetation)
- Hollow carving (texture background = black mask)

After loading, multiply the mask within the brush radius; click "Clear Map" to restore the unmasked brush.

## Fixed border/flattening mode

- **Preserve boundary**: The mesh outline vertices do not participate in displacement (checked by default). Unchecking this will cause the edges to be dragged as well - typically used for freeform surfaces without clear boundaries.
- **Flatten mode**: Flatten the rounded area to the height of the tangent plane where the current brush center point is, **remove curvature instead of drifting vertices** (other modes will push and pull in the normal direction). It is often used for flattening mountain tops and leveling large areas.

## Undo / Cancel / Live Preview

- **Ctrl+Z Undo the last stroke**: Single-stroke granular undo; each mouse click is an undo unit (including back and forth jitter)
- **"Complete" Bake writes to the original mesh**; **"Cancel"** discards all strokes and returns to the original state
- Hold left button to move = continuous writing; release = end of current stroke
- Enable "Subdivision Density"/"Minimum Subdivision Side Length" to subdivide and encrypt sparse areas to make carving details smoother (without original subdivision, carving will expose triangular patches that are cut incorrectly)
- You can drag and drop new meshes across meshes to sculpt (without interrupting the current session)

After completing the engraving, you can continue to use subsequent tools such as rsMeshRelax, rsMeshOffset, rsTesselateNurbs to perform relaxation, offset, panelization and other operations.
