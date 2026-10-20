# <span class="rstool-command-icon rstool-command-icon--heading rstool-command-icon--single" title="rsHatchPlanarSurfaces: toolbar icon" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/light/02495ef7-dcec-44c5-859a-01cf611b5a82.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> rsHatchPlanarSurfaces · Hatch Planar Surfaces

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
