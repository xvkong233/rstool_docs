# rsSlab · Parametric Slab

> Module: Architecture / Building Elements

[← Back to command index](/en/commands/)

**Function**: Creates one or more closed Brep parametric slabs thickened along world -Z and stores RSTool slab-type and thickness metadata.

**Run**: Enter `rsSlab` in the Rhino command line (command-line interaction).

**Workflow**:

1. Enter rsSlab on the Rhino command line
2. While selecting curves, use the Thickness command-line option when needed and enter the slab thickness
3. Select one or more closed coplanar planar curves; outer and inner loops can form a slab with openings, while disjoint regions create separate slabs
4. Press Enter to confirm; the command thickens the regions along world -Z and creates closed Brep solids
5. The new slabs are selected automatically; later, edit RSToolSlabThickness under the object's User Text properties to rebuild a slab at a new thickness

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Thickness | Thickness | double | 0.2 m; subsequent runs reuse the last value | ≥ max(document absolute tolerance, 0.001 m) | Editable through a command-line option while selecting curves; displayed in the current Rhino document units, with extrusion fixed to world -Z |
| Parametric slab thickness | RSToolSlabThickness | user text | Thickness used at creation | ≥ max(document absolute tolerance, 0.001 m) | Edit RSToolSlabThickness under the object's User Text properties using current document units; invalid values or failed rebuilds restore the previous value |

**Notes**: rsSlab creates closed Brep slabs with stored thickness metadata. Creation and thickness changes both support Rhino Undo.

## Curve requirements

Only closed planar curves are accepted. Outer loops and opening loops for the same slab must be coplanar and have valid nesting. Curve sets that cannot form valid planar regions are rejected. Multiple disjoint closed regions produce separate slabs.

## Parametric thickness

The slab's top face remains on the input-curve plane, while the solid is created along world `-Z`; a tilted curve plane does not change the thickening direction. After creation, select the slab and edit `RSToolSlabThickness` under User Text in Rhino Object Properties. The plug-in keeps the top face in place and rebuilds the solid along its original thickening direction. The value uses current document units and must be positive and no smaller than the greater of the document absolute tolerance and the converted value of 1 mm.

Parametric behavior depends on the slab marker, face indices and geometry signature stored by the command. If another modeling command changes the slab topology, the plug-in removes the parametric marker after detecting a mismatch, and editing `RSToolSlabThickness` will no longer rebuild it. Copied or reopened slabs whose metadata remains valid can still be resized.
