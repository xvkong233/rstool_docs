# rsBuildingArea2D · Building area

> Module: 2D Architecture / Other 2D Tools

[← Back to command index](/en/commands/)

**Function**: Automatically summarize the inner area, common area, building area, outer perimeter length and balcony area by floor. It supports two topological determinations, the nine-square grid area method and the whole surface calculation formula. Statistics can be calculated separately according to the net height classification (<1.20 does not count, 1.20–2.10 half counts, ≥2.10 fully counts), and the Rhino area table, viewport label and optional outline/area surface can be output.

![rsBuildingArea2D Main interface: The left Rhino viewport displays the floor surface superimposed according to F1-F5 floors, marking the summary values such as the interior of the suite, the stall, the area, the outer perimeter, and the balcony; the right side of the building area measurement calculation window, including multi-floor management, nine-square area format, net height classification and other calculation settings](../../assets/rsBuildingArea2D/image1.png)
*rsBuildingArea2D main interface (floor surface superimposed by layer on the left + area calculation window and overview data table on the right)*

> Screenshots and videos may show a Chinese-language interface. Labels and control positions can vary by Rhino or RSTool version.

**Run**: Enter `rsBuildingArea2D` in the Rhino command line (opens a settings window).

**Workflow**:

1. Command line input rsBuildingArea2D
2. The building area measurement calculation window pops up
3. In "Multiple Floor Management", select the construction group, reading subject, and cropping subject, and check options such as automatically locking peripheral reading.
4. Switch between the nine-square area formula/whole surface calculation formula in "Calculation Settings", and adjust the deduction rules such as section upward shift, net height classification, opening/exterior wall/balcony, etc. according to the needs of the drawing.
5. Frame selection or automatically obtain all floor slabs/exterior walls/balconies in the scene that participate in the calculation, and click "Start Calculation"
6. After the progress bar at the bottom of the window is completed, view the area summary label in the Rhino scene, and review the data of each layer in the "Overview Data" table on the right

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| tangential shift | SliceOffsetMeters | double | 0.010 | 0–10 | Unit: meter, default 0.010m |
| Largest gap repair | MaximumGap | double |  | 0–1000 | Maximum gap allowed for wire break repair |
| minus internal openings | PreserveHoles | toggle | true |  | Whether to deduct the area of internal openings |
| After failure, try to disconnect and repair | RepairGaps | toggle | true |  |  |
| Building area ratio profile | FloorAreaRatioProfile | list |  | by profile/dropdown | ComboBox, select the volume area rule section |
| Generate Rhino area table | AddTable | toggle | true |  | The remaining output items: Outline/Area/Label/Lock Entity/Hide Entity are not checked by default. |
| Height at all levels | StoreyHeight | list |  | >0 | Set floor height according to elevation classification (meters) |

**Notes**: **Important statement**: This order can only be used as a rough estimate in the early stage, and the accuracy of the area output by the order is not guaranteed. For formal construction application, floor area ratio calculation and warrant surveying and mapping, please refer to the results of qualified surveying and mapping units.

All configurations are completed in the window; the main body of the reading is the floor surface of each floor, and the cutting body is defined to belong to it. The outline of the scene is selected or automatically selected to participate in the calculation. After the calculation is completed, an area label is generated in the viewport and summarized row by row in the "Overview Data" table on the right by checking the floor.

The calculation process is executed serially in six steps: "Reading → Topology Attribution → Net Height Classification → Holes and Clasps → Sub-item Summary → Output":
- Reading: Taking the "Reading Subject" in multi-floor management as input, move up the SliceOffsetMeters layer by layer, extract the floor surface boundaries, and automatically map to floors such as F1-F5 according to the construction group.
-Topological attribution: Based on the current "calculation logic", it is decided whether each sub-area is classified as an interior, a common wall, or an external wall; this step is the calculation core of the command.
- Clear Height Rating: Apply a factor of 0, 0.5 or 1.0 times to each segment area based on the "Clear Height Rating" drop-down in the window (<1.20 N/A / 1.20–2.10 Half / ≥2.10 FULL).
- Button hole button plate: Correct the boundary according to parameters such as "deduction of internal openings", "maximum gap repair", "maximum plate seam thickness (m)", and deduct the area of ​​the outer wall panel according to the plate thickness if necessary.
- Sub-item summary: Independently obtain indicators such as apartments, public stalls, balconies, and perimeters by floor, and list them in the Rhino area table in the format of "check·floor·number of floors (M)·floor (m²)".
-Output: Generate area labels in the viewport (orange label block in the picture), and can add layered output such as outline/area surface/locked entities/hidden entities.

Nine-square grid area formula vs whole area calculation formula: Nine-square grid mode (default) will cut each room into 9 along the diagonal and midline Sub-districts are divided into three categories: "in-suite", "shared-wall sharing" and "external-wall sharing" according to the ownership of the surrounding walls (exterior wall/household wall/inner wall), which is the standard topology for residential and apartment division calculations; the calculation formula for the entire area does not break down the nine-square grid, and directly calculates each floor as a complete plot, and then divides the area into apartments and public stalls based on the ownership of the exterior wall. It is more suitable for commercial, loft, large flat and other spaces without clear separation walls.

Clear height classification (consistent with the common practice in the "Code for Calculation of Building Area of ​​Construction Projects"):
- Clear height < 1.20m: The current section is not included in the building area.
- 1.20m ≤ net height < 2.10m: counted as 1/2 area.
- Clear height ≥ 2.10m: calculated based on the full area.
Note: The actual effective gear is controlled by the selected "Building Area Ratio Section" configuration file, and different specification versions can be switched in the drop-down menu.

Sub-item summary caliber:
- In-suite area: All the effective area attributable to the home (including the Jiugong grid area + half of the common wall belonging to the household), converted according to the net height and accumulated on a household-by-household basis.
- Shared area: Shared wall stall + external wall shared stall, excluding the exclusive balcony of the household.
-Building area: inner area + shared area (i.e. the "area" column in the picture, used as the basis for construction application/floor area ratio calculation).
-Peripheral length: The cumulative perimeter of all exterior wall exterior lines, in m, is used for estimating exterior wall finishes and scaffolding, and is not included in the total area.
- Balcony area: The cumulative value of all balconies according to the current rules (default 1/2), in a separate column and not merged into the pool.

Deduction and boundary correction: Checking "Deduction of internal openings" will deduct the corresponding area according to the holes in the floor slab (stairwells, pipe wells, equipment holes, etc.); "Unfinished board area deduction" is used to deduct the construction of unenclosed board sections (also affected by the net height classification); "Exterior board thickness" is retracted from the outer edge of the exterior wall by the set number of meters for exterior wall finishing evaluation, and does not affect the main accounting of the building area.

Output: Generate area labels by layer in the scene and generate a Rhino area table; you can check "Lock Entity/Hide Entity" to avoid accidental editing; finally, you can export it to a drawing template by layer in Rhino.
