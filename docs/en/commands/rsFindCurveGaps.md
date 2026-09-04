# rsFindCurveGaps · Find Curve Gaps

> Module: Geometry / Curves

[← Back to command index](/en/commands/)

**Function**: Curves repaired within the tolerance (extending/trimming/connecting line ends), short curves can be optionally deleted; support for UndoLast stroke-by-stroke undo and NextSolution multi-solution switching

![rsFindCurveGaps working view: The command line prompts "Curve preselection not detected, all edited curves are being analyzed." Hover the line head to view the plan, click Repair, and press Enter to complete. The configuration panel contains command line options such as Tolerance=250, DeleteShortCurves=No, NextSolution, and UndoLast; the red in the viewport is a multi-segment polyline (one of the red dots is the current hovering line head), the cyan diagonal line is the candidate solution (bridge line 169.951mm), and the pink short line is a click preview; the information box in the upper left corner displays the number of tolerance hook lines in real time 116, tolerance 250mm, total curve length, trimming length, click execution, etc.](../../assets/rsFindCurveGaps/image1.png)
*Example: A total of 116 line end candidates were found under a tolerance of 250mm. The hovering end system provides a repair plan of 'Trim the original curve to the target curve 169.951mm'. Click to adopt.*

> Screenshots and videos may show a Chinese-language interface. Labels and control positions can vary by Rhino or RSTool version.

**Run**: Enter `rsFindCurveGaps` in the Rhino command line (command-line interaction).

**Workflow**:

1. Command line input rsFindCurveGaps
2. Command to automatically analyze preselected or all editable curves
3. Hover over the thread to view the repair solution (NextSolution switch solution)
4. Click on the thread to perform the repair
5. Use the Tolerance / DeleteShortCurves option to adjust, press Enter to complete or Esc to exit

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Tolerance | Tolerance | double | 10.0 (mm, converted to model units; 10.0 without units) | Lower limit max (model absolute tolerance, ZeroTolerance), upper limit double.MaxValue | Line spacing tolerance, setting key is FindCurveGaps.Tolerance* persistence |
| Delete dash | DeleteShortCurves | toggle | false |  | After turning it on, click the short curve whose length is less than the tolerance to delete it (setting key FindCurveGaps.DeleteShortCurves) |

**Notes**: The command is in hybrid mode (command line prompt + GetPoint interaction): operate directly in the Rhino main viewport, no independent dialog box, all configurations are through command line options (Tolerance / DeleteShortCurves / NextSolution / UndoLast / Restore).

Core use: Batch filling of 'gaps' (gaps, fractures) between curves. A common scenario is that externally imported CAD/SketchUp plan drawings, scanned drawing vectorization, Iconstuctor/LOD drawings, etc. cause a polyline that should be continuous to be cut into two or even multiple segments; this command directly connects two curves whose ends are smaller than the tolerance, or trims one to the other end, restoring geometric continuity, which facilitates subsequent Offset/SweepBoolean/Trim, etc.

Complete usage (6 steps): ① After the command is run, automatically create an index based on the preselected range or 'all editable curves' (prompt when not preselected) The line will indicate 'No curve pre-selection detected, all edited curves are being analyzed'), and all endpoints whose line head distance is within the tolerance are marked with red dots in the viewport. When hovering, the candidate solution connected to the endpoint will be highlighted with a cyan blue short line; ② Hover the mouse over the line head, and the information box in the upper left corner will display the curve to which the current line head belongs in real time ID, distance to the nearest other curve/candidate trimming length, click to perform the action; ③ If there are multiple candidates for the same point (such as four lines converging), press the command line `NextSolution` (shortcut key N) to switch to the next plan. Each candidate lists the plan description of 'Trim Z mm from Stack; ⑤ Command line `UndoLast` (O) to roll back the latest repair one by one, and repeat O to undo multiple transactions if necessary; ⑥ Press Enter to end when all is completed, and press Esc to cancel (no modifications will be retained).

The tolerance (Tolerance) is scaled according to the model unit: the millimeter model defaults to 250/10 (that is, the system static default 10 mm is converted into 250 internal units in Rhino), small-scale models (such as handicrafts, furniture) can be placed at 0.5–1 mm, and landscapes/general drawings can be placed at 50–500 mm. If the tolerance is set too large, it is easy to connect two lines that "should not be connected" by mistake (for example, the road edge is connected to the building exterior wall). If the tolerance is set too small, the gap will be missed. The best practice is to first scan 5–10mm to solve most of the problems, and then zoom in to 50–250mm to scan the remaining spot gaps as needed.

DeleteShortCurves: When turned on, click on an isolated short curve whose length is less than the tolerance to be deleted directly (without extension/connection). It is used to clean the fragmented line segments after SketchUp explodes and clean up the meaningless small corners; it is turned off by default to avoid accidentally deleting useful small components (such as hardware outlines). Used in conjunction with FindCurveGaps.CleanUpSrf, a complete drawing cleaning process can be performed.

Applicable boundaries and limitations: ① Non-planar curves (NURBS control points are not in the same plane) are only highlighted and not automatically extended/connected to avoid geometric degradation; ② Curves on locked layers will be skipped; ③ Reference layer curves are skipped by default; ④ Very long polylines or dense curve sets (more than 10,000) will have a perceptible delay in the first screen scan, so be patient and wait for the index to be completed; ⑤ The restore (U) of the 'Restore' command line is actually Rhino itself. Undo is different from UndoLast: Undo rolls back the entire session level, while UndoLast only rolls back the latest thread repair.

Output and visualization: The candidate solution is presented as a short blue line in the viewport. The adopted modifications are merged into the original curve geometry and no independent objects will be generated. There are no new entities outside the final drawing. After the command is completed, all markers disappear automatically and the drawing will not be polluted.
