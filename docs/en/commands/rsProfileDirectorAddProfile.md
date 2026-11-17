# <span class="rstool-command-icon rstool-command-icon--heading" title="rsProfileDirectorAddProfile: toolbar icon" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/light/1d4f3e3c-0e6d-5151-ad9a-dad4070cbc1f.png" alt="" width="48" height="48" loading="eager" decoding="async"><img class="rstool-command-icon__dark" src="/command-icons/dark/1d4f3e3c-0e6d-5151-ad9a-dad4070cbc1f.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> rsProfileDirectorAddProfile · Add Profile

> Module: Section Management / Profile Director

[← Back to command index](/en/commands/)

**Function**: Save a closed planar curve to the profile library, then browse and use it in the client ProfileDirector library.

**Run**: Enter `rsProfileDirectorAddProfile` in the Rhino command line (command-line interaction).

**Workflow**:

1. Run rsProfileDirectorAddProfile and select a closed planar outline.
2. Pick the profile reference point and enter a name.
3. Save it to the current ProfileDirector library; the client opens the corresponding profile library afterward.

**Parameters**:

> This command has no numeric command-line parameters. Adjust its options in the settings window.

**Output**: Save selected closed planar curves as sections to the ProfileDirector user section library

**Notes**: The curve must be closed and planar. Its reference point controls later path placement. Version 2.0 opens the saved library in the client, while the Add Profile command remains a separate entry.
