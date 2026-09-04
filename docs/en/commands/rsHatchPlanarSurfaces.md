# rsHatchPlanarSurfaces · Hatch Planar Surfaces

> Module: Views & Documentation / Annotation & Documentation

[← Back to command index](/en/commands/)

**Function**: Hatch object generated from planar boundary curve

**Run**: Enter `rsHatchPlanarSurfaces` in the Rhino command line (command-line interaction).

**Workflow**:

1. Run rsHatchPlanarSurfaces from the command line
2. Select the plane to convert to fill (Brep)
3. Toggle Delete Original Faces switch (Yes/No)
4. After confirmation, the hatch is generated from the plane boundary curve (Hatch)

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Delete original faces | DeleteInputSrf (ifDelSrf) | toggle | true |  | Remember the last selection (lastIfDelSrf); option label Chinese Yes/No, English Yes/No |

**Notes**: Only Faces[0] of plane Brep will be processed; if turned on, the original faces will be deleted; the fill will be created on the current layer
