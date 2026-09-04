# rsHairSystem · Hair system

> Module: Geometry / Meshes

[← Back to command index](/en/commands/)

**Function**: Hair system generated along surface (renderable mesh or center curve)

![rsHairSystem window: 1 object has been selected on the surface, and the hair roots are evenly distributed according to the current pre-control; a piece of yellow hair has been generated in the left viewport and evenly covered on the surface; the right panel contains 16 parameters](../../assets/rsHairSystem/image1.png)
*rsHairSystem real-time rendering preview: yellow hair grows densely along the surface in the left viewport; the "Generation Hair System" panel on the right contains 16 parameters (Default/Length/Density/Diameter/Tip/Random/Tilt/Gravity/Bend/Segment/Number of Section Sides/Maximum Number/Preview Scale/Random Seed/Output Type), below "Tip: The smaller the preview and the thinner and slower the number of segments, the greater the amount of generation. The direction of gravity is the world -Z, real-time preview of 5,000 roots (10%); official generation is expected to be 50,000."*

> Screenshots and videos may show a Chinese-language interface. Labels and control positions can vary by Rhino or RSTool version.

**Run**: Enter `rsHairSystem` in the Rhino command line (opens a settings window).

**Workflow**:

1. Select Surface/Clipping Plane/Mesh/SubD as the vector
2. Pop up the hair system dialog box
3. Adjust parameters and preview in real time
4. Click "Generate" to write / "Cancel"

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Default | Preset | list | Customize | Customized / carpet short pile / object short pile / soft long pile |  |
| hair length | Length | double | 0.025 | min≈0.001 (model unit), max is extremely large | Default converted to model unit in meters is 0.025 |
| Hair root spacing/density | Root spacing | double | 0.008 | min≈0.001 (model unit) | Default conversion in meters is 0.008 |
| root diameter | Root diameter | double | 0.0008 | min≈0.0001 (model unit) | Default conversion in meters is 0.0008 |
| Tip thickness | Tip scale | double | 12 | 1–100 | Interface display value = internal value × 100; internal default 0.12 |
| Random length | Length variation | double | 15 | 0–95 | Interface display value = internal value × 100; internal default 0.15 |
| Maximum tilt angle | Lean angle | double | 12 | 0–89 | Unit: degree |
| Gravity effect | Gravity | double | 25 | 0–300 | Interface display value = internal value × 100; internal default 0.25 |
| Natural bending/disturbance | Bend | double | 12 | 0–200 | Interface display value = internal value × 100; internal default 0.12 |
| length segment | Length segments | integer | 4 | 1–24 | Bending accuracy |
| Number of cross-section sides | Section sides | integer | 4 | 3–12 | mesh accuracy |
| Maximum number of hairs | Max hair count | integer | 50000 | 1–200000 |  |
| Preview scale | Preview percentage | integer | 10 | 1–100 | Unit: % |
| random seed | Random seed | integer | 2026 | 0 – int.MaxValue |  |
| Output type | Output type | list | Renderable hair mesh | Renderable hair mesh/hair center curve (lightweight) |  |

**Notes**: Automatically scatter points evenly on the selected surface/clipping surface/mesh/SubD according to the spacing between hair roots, and grow hair along the normal direction of the surface (with the maximum tilt angle constraint); the gravity direction is along the world-Z.

## 1. Typical interaction process

1. Select one or more load-bearing surfaces (Brep/Mesh/SubD)
2. Run `rsHairSystem` from the command line, and the "Generate Hair System" dialog box will pop up.
3. Adjust parameters → Real-time refresh preview of right viewport (green progress bar display ratio)
4. Click "Generate" to formally write to the current surface. You can choose one of "Renderable Hair Mesh" or "Hair Center Curve (Lightweight)"; click "Cancel" to give up.
5. When large-scale scene estimation > 50,000 roots, the estimated number of roots will be directly displayed at the bottom of the panel.

## 2. Detailed explanation of parameter grouping

### 1. Form
- **Default Preset**: Customized / Carpet short pile / Object short pile / Soft long pile, 4 common combinations can be applied with one click
- **Hair length Length**: model unit, starting from 0.001, metric default is 0.025
- **Root spacing**: the distance between adjacent hair roots (inversely related to density), metric default is 0.008
- **Root diameter**: hairy root circle cross-section diameter, metric default is 0.0008
- **Section sides**: The number of polygonal sides of the circular section of each hair (3–12, 4 is commonly used)
- **Maximum tilt angle Lean angle**: The maximum deviation of hair from the normal direction of the surface (°)

### 2. Randomization and perturbation
- **Tip scale (%)**: 1–100, ratio of hair tip to hair root diameter, 25–50 visually obvious
- **Random Length variation (%)**: 0–95, jitter amplitude of each length
- **Natural Bend/Disturbance Bend (%)**: 0–200, hair shaft twisting and bending strength
- **Gravity (%)**: 0–300, pull strength in the world-Z direction
- **Length segments**: 1–24, the larger, the more natural the bending (bending accuracy cost)

### 3. Output
- **Max hair count**: 1–200,000, if it exceeds it, it will automatically thin out according to the spacing.
- **Preview percentage (%)**: only affects the real-time refresh of the panel, and is officially generated according to the spacing.
- **Random seed**: After fixing, a reproducible random distribution is obtained
- **Output type**: Renderable hair mesh (with cross-section, large file size) / hair center curve (lightweight, easy for secondary editing)

## 3. Display conversion instructions

In the interface, TipScale / LengthVariation / Gravity / Bend is displayed as a percentage (0–100), and the internal value = interface value / 100; for example: interface 12 = internal 0.12; to change the default value, please use the internal value of the code or proportionally enlarge the interface value.

## 4. Typical scenarios

- **Carpet/Lawn/Moss** → Preset=Carpet low pile, Root spacing 0.005–0.012, Tip scale 30–60
- **Plush toys/pillows** → Preset=soft long hair, Length 0.04–0.08, Gravity 40–80, Bend 15–30
- **Hair / Animal Hair** → Preset=Object short hair, Lean angle 8–15, maximum tilt angle allows free direction
- **Tight performance budget/slow rendering** → Select "Hair Center Curve (Lightweight)" + adjust the length segment to 6–8, and reduce the number of section edges to 3

## 5. Things to note

- You must first select the bearing geometry before running the command; changing the bearing will not be automatically synchronized after the command is run.
- Canceling preview reconstruction will not lose the generated hair
- White/completely black rendering is usually a problem of hair root normals in a large area with the same direction. You can increase the randomization or reduce the distance between hair roots appropriately.
