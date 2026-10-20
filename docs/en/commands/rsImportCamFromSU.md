# <span class="rstool-command-icon rstool-command-icon--heading rstool-command-icon--single" title="rsImportCamFromSU: toolbar icon" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/light/e98fe49c-34c1-43b2-87f5-bbf99c6b96e3.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> rsImportCamFromSU · Import cameras from SketchUp

> Module: Views & Documentation / Views & Cameras

[← Back to command index](/en/commands/)

**Function**: Set current view camera (synchronize SketchUp camera parameters)

**Run**: Enter `rsImportCamFromSU` in the Rhino command line (command-line interaction).

**Workflow**:

1. Run rsImportCamFromSU from the command line
2. Read SketchUp camera JSON from clipboard
3. Parse eye/target/up/fov/viewHeight and set the current view

**Parameters**:

> This command has no numeric command-line parameters. Adjust its options in the settings window.

**Notes**: Read JSON from the clipboard; support Perspective/Parallel/TwoPoint; coordinates scale according to mm → document unit; view height scales synchronously
