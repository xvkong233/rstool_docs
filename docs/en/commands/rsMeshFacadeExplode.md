# <span class="rstool-command-icon rstool-command-icon--heading" title="rsMeshFacadeExplode: toolbar icon" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/light/0990a32c-00d2-528d-9505-31928da21d44.png" alt="" width="48" height="48" loading="eager" decoding="async"><img class="rstool-command-icon__dark" src="/command-icons/dark/0990a32c-00d2-528d-9505-31928da21d44.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> rsMeshFacadeExplode · Explode a Mesh Facade

> Module: Paneling & Facades

[← Back to command index](/en/commands/)

**Function**: Convert rsMeshFacade to complete ordinary geometry, removing the source with single-step Undo.

**Run**: Enter `rsMeshFacadeExplode` in the Rhino command line (command-line interaction).

**Workflow**:

1. Select one existing rsMeshFacade and run the command, or follow the command-line prompt to pick one facade.
2. Outputs complete Mesh/SubD units and removes the parametric source.
3. Use one Undo to restore the parametric object.

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Source | Source | object | Existing parametric object | rsMeshFacade | Reads the applied, saved design rather than uncommitted preview changes. |
| Source handling | Source handling | action | Remove parametric source | Single-step Undo / Redo | Outputs complete ordinary members and removes the parametric source. Parameter editing is no longer available on converted geometry. |

**Output**: Complete ordinary Mesh/SubD units in their original types; the source facade is removed.

**Notes**: Both distance- and color-driven rsMeshFacade objects use this command. Explode preserves complete units and does not apply the Bake merge/group options. Use Bake to keep the parametric source. Use this command or Explode in Properties instead of Rhino Explode.
