# <span class="rstool-command-icon rstool-command-icon--heading" title="rsNurbsFacadeExplode: toolbar icon" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/light/6eb9fb02-4dd4-5f7c-a0e4-a52310b67e97.png" alt="" width="48" height="48" loading="eager" decoding="async"><img class="rstool-command-icon__dark" src="/command-icons/dark/6eb9fb02-4dd4-5f7c-a0e4-a52310b67e97.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> rsNurbsFacadeExplode · Explode a NURBS Facade

> Module: Paneling & Facades

[← Back to command index](/en/commands/)

**Function**: Convert rsNurbsFacade to complete ordinary geometry, removing the source with single-step Undo.

**Run**: Enter `rsNurbsFacadeExplode` in the Rhino command line (command-line interaction).

**Workflow**:

1. Select one existing rsNurbsFacade, or run the command and pick one when prompted.
2. Explode outputs complete ordinary units and removes the source facade.
3. Use one Undo to restore the parametric source.

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Source | Source | object | Existing parametric object | rsNurbsFacade | Reads the applied, saved design rather than uncommitted preview changes. |
| Source handling | Source handling | action | Remove parametric source | Single-step Undo / Redo | Outputs complete ordinary members and removes the parametric source. Parameter editing is no longer available on converted geometry. |

**Output**: Complete ordinary Brep, Mesh, or SubD units; the source facade is removed.

**Notes**: This is the Explode operation from facade Properties. Complete Brep units are not split into separate faces. Use Bake in Properties to add an ordinary copy while retaining the facade. Rhino Explode is not a direct replacement.
