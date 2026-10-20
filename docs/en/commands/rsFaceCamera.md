# <span class="rstool-command-icon rstool-command-icon--heading rstool-command-icon--single" title="rsFaceCamera: toolbar icon" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/light/a1631159-e9ea-4c32-a6f3-a9d8e03b3045.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> rsFaceCamera · Orient Toward Camera

> Module: Views & Documentation / Views & Cameras

[← Back to command index](/en/commands/)

**Function**: Rotate selected objects to face the current view camera (horizontal in-plane alignment only)

**Run**: Enter `rsFaceCamera` in the Rhino command line (command-line interaction).

**Workflow**:

1. Run rsFaceCamera from the command line
2. Select the surface/mesh/tile that needs to face the camera
3. Rotate around the world Z axis so that its normal faces the current camera

**Parameters**:

> This command has no numeric command-line parameters. Adjust its options in the settings window.

**Notes**: Rotates in the plane only around the world Z axis; based on the bottom center point of the bounding box and the normal direction; applies to Brep/Mesh/Tiles (InstanceReference)
