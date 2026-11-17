# <span class="rstool-command-icon rstool-command-icon--heading" title="rsUnlockAllLayers: toolbar icon" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/light/ed432ffc-5915-588d-ad80-ed9dea3a4c37.png" alt="" width="48" height="48" loading="eager" decoding="async"><img class="rstool-command-icon__dark" src="/command-icons/dark/ed432ffc-5915-588d-ad80-ed9dea3a4c37.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> rsUnlockAllLayers · Unlock All Layers

> Module: Organization & Selection / Layers

[← Back to command index](/en/commands/)

**Function**: Unlock every layer in the current file and clear persistent layer-lock flags.

**Run**: Enter `rsUnlockAllLayers` in the Rhino command line (command-line interaction).

**Workflow**:

1. Run the command to unlock layers throughout the active document.
2. Read the command-line report, then select or edit objects previously locked by their layers.

**Parameters**:

> No numeric settings or separate settings window are required. Follow the workflow above.

**Notes**: This acts on layers across the whole file, not just visible layers. It clears layer locks, not individual object locks. Parent-layer inheritance is restored. There is no settings window.
