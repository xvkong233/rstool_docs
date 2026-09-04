# rsTesselateNurbs · Panelize NURBS

> Module: Paneling & Facades

[← Back to command index](/en/commands/)

**Function**: Parametrically segment NURBS surfaces/polysurfaces according to selected patterns and U/V fractions, and output panel Brep sets; you can "swap UVs", "hide base surfaces" and "write by group"

![rsTesselateNurbs Working example: When a medium-sized hyperboloid (NURBS) is divided into "rectangular", UDivideNum=10, VDivideNum=10 real-time preview, each 10×10 rectangular panel is highlighted in orange; the "NURBS surface division" panel on the right contains input boxes (selected), division method = rectangular, U/V and other fractions 10×10, swap UV, hide the four controls of the base surface, apply/cancel button](../../assets/rsTesselateNurbs/image1.png)
*Default rectangular division: U/V equal fraction 10×10 generates 100 rectangular panels, the real-time preview is refreshed immediately with each parameter modification*

> Screenshots and videos may show a Chinese-language interface. Labels and control positions can vary by Rhino or RSTool version.

**Run**: Enter `rsTesselateNurbs` in the Rhino command line (opens a settings window).

**Workflow**:

1. Open the "NURBS Surface Division" window
2. Select the base surface (Brep/Extrusion)
3. Select the dividing method (Pattern)
4. Set U/V direction equal fraction, optionally swap UVs
5. Live orange preview
6. Apply (write by group)/Cancel

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Division method | Pattern | list | Rectangle (QuadPanels) | Rectangle / rhombus / triangle / random rectangle / random four-sided panel / oblique rectangle / hexagon / staggered brick / herringbone pattern / octagonal square / triangular hexagon / Cairo pentagon | 12 patterns; default index 0 (QuadPanels) |
| Equal fractions in U direction | UDivideNum | integer | 10 | 1–999 | Remember the last value lastUDivNum |
| Equal fractions in V direction | VDivideNum | integer | 10 | 1–999 | Remember the last value lastVDivNum |
| Swap UVs | Swap U/V | toggle | false |  | Remember the last value lastSwapUV |
| Hide base plane | Hide base surface | toggle | false |  |  |

**Notes**: Panel interaction is the main focus (form mode + real-time preview), and the process is fixed in 6 steps: open the window → select the basic surface (Brep/Extrusion) → select the dividing method → set U/V and other fractions → real-time preview → apply/cancel, and the output is written to the document according to the output group.

The core purpose of this command is to parametrically cut a single NURBS surface or a whole group of NURBS surfaces into a large number of panels (Brep panels) according to the selected pattern, which can be used directly as panel raw materials for curtain walls, roofs, interior wall tops, floor tiles, etc. The number of divisions (U/V, etc.), patterns, and whether to swap UVs are all fed back to the preview in real time, so what you see is what you get.

An overview of the 12 patterns (each is parametric and the density can be freely controlled with fractions such as U/V):

① Rectangle (QuadPanels, default) - U×V equal division, rectangular 4-sided panel, the most standard curtain wall/roof division.

② Diamond (DiagonalQuadPanels) - A rectangle is cut twice diagonally, and each grid is divided into two triangles. It is more dynamic and suitable for glass curtain walls + facade breathing joints.

③ Triangular Panels - Each rectangle is cut diagonally once to obtain a triangular panel, which is suitable for complex hyperboloid subdivision.

④ Random RectangularPanels - The U/V step size introduces random perturbations to obtain rectangular collages of different sizes, simulating the dry-laying effect of stone/wooden floors.

⑤RandomQuadPanels—Each panel maintains a quadrilateral shape but is randomly shaped for a more natural irregular skin.

⑥ SkewRectangularPanels - Rectangular but tilted at a fixed angle in the direction of travel, suitable for imitation brick walls that are misaligned but have a unified direction.

⑦ Hexagonal Panels—honeycomb-shaped equilateral hexagonal panels with regular + few topological singularities, suitable for roof waterproofing finishes and indoor sound-absorbing panel backgrounds.

⑧ RunningBondPanels—the horizontal seams are aligned, the longitudinal seams are staggered by 1/2, the most common method for masonry/brick walls, and the aspect ratio is adjustable at 2:1.

⑨ Herringbone Panels - Rectangles are arranged staggered at 90°, forming a V shape in pairs. It is a common texture for carpet/wooden flooring.

⑩ Octagon Square Panels - a classic "Islamic geometry" pattern of octagon + small square in the middle, mostly used for ceilings of large public buildings and square floor tiles.

⑪ TriHexagonalPanels - Alternate collage of triangles and hexagons, 3-6-3-6 topology, producing a semi-regular mosaic effect.

⑫ Cairo Pentagonal Panels - Cairo mosaic (mainly pentagons, including acute and obtuse angles), non-periodic splicing, the most common pattern of Islamic/Middle Eastern style geometry.

Practical points: ① Select multiple surfaces (for example, the entire UV of a special-shaped curved curtain wall has been unfolded). This command will automatically treat them as a continuous surface and divide them by U/V, and then write them back to the corresponding original patches according to the patch ownership, still using RsTool division logic; ② U/V and other scores jointly determine the panel density, 1-999 range, 4 within 1m×1m perceptible to the naked eye. Block panels are a common curtain wall scale, and the large roof volume can be placed at 50/40 to make each panel 1–2m square; ③ "Exchange UV" is used for quick correction of horizontal composition when the directions of 0/0, 0/U, and V/V are inconsistent with actual expectations; ④ "Hide base surface" combined with "Apply" is usually used to: retain panels for subsequent modeling (Offset, Trim, Boolean etc.) operation, the original base surface is saved as a "template" with a separate layer for rollback; ⑤ By default, 12 patterns support continuous division of multi-surfaces. A common stuck point is that the boundary joints of multi-surfaces will cause panel overflow. You can join or RebuiltUV to a single UV interval before cutting.

Final output: Panel Brep set, each is an independently editable Surface; documents are written according to the output group, and can be subsequently Bake, add materials, and perform Offset/SweepBoolean/Trim according to the panel boundaries. It is mostly used for curtain wall deepening and indoor facade parametric modeling. The generated result shares the UV parameter space with the original base surface, so re-slicing the same surface again (different pattern/different equal fractions) will accurately cover the original area.
