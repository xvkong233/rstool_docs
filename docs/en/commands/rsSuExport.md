# rsSuExport · Export to SketchUp

> Module: Utilities / Import & Export

[← Back to command index](/en/commands/)

**Function**: Creates an SKP file with top-level components organized by Rhino layer, separate components for ordinary objects, preserved block instances where possible, and render meshes for surface geometry.

**Run**: Enter `rsSuExport` in the Rhino command line (command-line interaction).

**Workflow**:

1. Run rsSuExport and choose the model and .skp destination
2. The command wraps ordinary objects in separate blocks; existing Rhino blocks keep their instance and nested relationships where possible
3. It then wraps objects from each Rhino layer in an outer block, making layer-based selection and organization easier in SketchUp
4. For export, it prefers Rhino render meshes, then creates the SKP file and reports what it processed

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Output Path | OutputPath | file | Selected by the user | *.skp | Chosen in the save dialog. The target format is fixed to SketchUp 2016, and the command exposes no other export options. |

**Notes**:

## What the command does

Think of this command as “organize the model, then export the SKP.” It wraps ordinary objects in separate blocks. Objects that are already Rhino blocks keep their shared definitions and nested instances where possible. The command then adds another block for each Rhino layer, placing that layer's content inside it. Once the file is open in SketchUp, layer-based selection, hiding, and navigation are easier to manage.

## Why the SketchUp model is often easier to work with

For surfaces, polysurfaces, extrusions, and similar geometry, the command first uses Rhino's existing **render meshes**. If no usable mesh is cached, it generates one from the object or document meshing settings. SubDs are meshed at medium display density. Repeated Rhino block instances continue to share a converted definition instead of each becoming a complete independent copy.

This can keep the component structure and geometry more manageable, often reducing the work SketchUp has to do when selecting, hiding, or navigating the model. A source model with an extremely high polygon count can still be slow; the command cannot guarantee a lag-free result.

## Check Rhino's display quality before exporting

The curved surfaces you see in the SKP depend largely on the render meshes Rhino uses for export. Inspect arcs, cylinders, and other curved edges in Rhino's Shaded or Rendered view first. If they visibly look faceted, increase mesh quality a little. If the model looks smooth but is already very heavy, use a more reasonable mesh density. **Higher quality usually means more faces and a larger file**, which can make SketchUp slower. Getting Rhino's display and mesh settings right before exporting is usually easier than fixing the SKP afterward.

## How it differs from a normal SKP export

| | `rsSuExport` | Standard Rhino SKP export |
| --- | --- | --- |
| Organization | Wraps ordinary objects in blocks, then adds a layer block; tries to preserve shared and nested Rhino blocks | Passes the selection directly to Rhino's SKP exporter; component structure depends on that exporter |
| Surfaces | Extracts or generates Rhino render meshes before export, letting you tune quality in Rhino first | The SKP exporter handles tessellation while writing the file |
| Output settings | Fixed to SketchUp 2016, with planar regions exported as polygons | Supported versions and related settings can be chosen in Rhino's export options |

The final file is still written by Rhino's SKP exporter. This command adds block organization and mesh preparation before that step, and its temporary blocks are cleaned from the current Rhino model afterward. Objects that cannot be meshed are tried as original geometry; very short curves may be skipped. To send a model directly to a running SketchUp instance, use `rsSendToSU`.
