# <span class="rstool-command-icon rstool-command-icon--heading rstool-command-icon--missing" title="No icon in the current toolbar" aria-hidden="true"></span> rsRailingToGeometry · Convert Railings to Ordinary Geometry

> Module: Architecture / Building Elements

[← Back to command index](/en/commands/)

> The current toolbar has no icon for this command. The dash is a placeholder, not a toolbar icon; run the command by name.

**Function**: Convert rsRailing to complete ordinary geometry, removing the source with single-step Undo.

**Run**: Enter `rsRailingToGeometry` in the Rhino command line (command-line interaction).

**Workflow**:

1. Select one or more parametric rsRailing objects and run rsRailingToGeometry.
2. Outputs all members of the applied design as ordinary closed Breps and removes the parametric sources.
3. Use Rhino solid-editing tools on the converted result. One Undo restores the parametric railings.

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Source | Source | object | Existing parametric object | rsRailing | Reads the applied, saved design rather than uncommitted preview changes. |
| Source handling | Source handling | action | Remove parametric source | Single-step Undo / Redo | Outputs complete ordinary members and removes the parametric source. Parameter editing is no longer available on converted geometry. |

**Output**: Complete ordinary closed Brep members, preserving placement, layers, grouping, user properties, member colors, and transparency.

**Notes**: The Properties button Convert to Ordinary Objects performs the same operation. This command supports multiple railings. Converted geometry no longer carries the editable railing recipe, so save a parametric model first if you need it later. For 2D drawings or edge curves, use geometry-reading tools in Properties without conversion. Disabling Create rsRailing Object in the creation window only affects new output; it does not convert existing railings.
