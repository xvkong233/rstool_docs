# <span class="rstool-command-icon rstool-command-icon--heading" title="rsMoveLayerObjs: toolbar icon" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/light/56949ccf-e721-546f-a0a2-462365762cab.png" alt="" width="48" height="48" loading="eager" decoding="async"><img class="rstool-command-icon__dark" src="/command-icons/dark/56949ccf-e721-546f-a0a2-462365762cab.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> rsMoveLayerObjs · Move layer objects

> Module: Organization & Selection / Layers

[← Back to command index](/en/commands/)

**Function**: Move the objects in all source layers involved in the selected object and its blocks to the target layer, and solidify the accompanying layer materials to the objects.

**Run**: Enter `rsMoveLayerObjs` in the Rhino command line (command-line interaction).

**Workflow**:

1. Command line input rsMoveLayerObjs
2. Select the reference object (automatically identify the source layer involved in it and the internal tiles)
3. Select the target layer in the pop-up layer selection dialog box
4. The program moves the objects involved in the model space and block definitions in the layer into the target layer (curing the layer-by-layer material)

**Parameters**:

> This command has no numeric command-line parameters. Adjust its options in the settings window.

**Notes**: Process nested blocks recursively; objects with the layer material checked will be converted to follow the object material and then moved; the target layer is selected using ShowSelectLayerDialog
