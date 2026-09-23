# rsFlattenBlockElevation · Flatten Block Elevation

> Module: Utilities / Block Operations

[← Back to command index](/en/commands/)

**Function**: Replaces the selected block instances with independent flattened copies whose leaf objects all lie at the specified world Z elevation; unselected instances and original definitions remain unchanged.

**Run**: Enter `rsFlattenBlockElevation` in the Rhino command line (command-line interaction).

**Workflow**:

1. Run rsFlattenBlockElevation from the command line
2. Select one or more block instances to flatten; preselection and group selection are supported, while sub-object selection is disabled
3. Enter the target world Z elevation; press Enter to reuse the previous value, which is 0 on first use
4. The command recursively reads each block and its nested blocks, then projects every leaf object to the specified world Z elevation
5. An independent block definition is created for each selected instance, and the original instance is replaced with the new block
6. After processing, the new blocks are selected and the command line reports the number processed and the target elevation

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Target Elevation | TargetElevation | double | Previous value (0 on first use) | Any valid finite number, in the current Rhino document units | The world Z coordinate of all block contents is set to this value, while the world X and Y coordinates remain unchanged. |

**Notes**: ## Processing rules

- Projection is performed in **world coordinates**: world X and Y positions are preserved while every point receives the target Z elevation. Existing translation, rotation, scale, and nested transforms are baked into the final geometry first.
- Nested blocks are recursively expanded into leaf objects, so the new definition no longer contains nested references. Object attributes such as layer, color, and material are preserved on the copied leaf objects.
- Each selected block instance receives its own definition named `OriginalName_Flattened`. If that name is already in use, `_1`, `_2`, and so on are appended automatically. The source definition and other unselected instances that share it are not modified.
- The new block base point retains the original instance insertion point's world X and Y coordinates and moves to the target Z elevation.

## Notes

- This command is intended for 2D symbols, plan furniture, imported CAD blocks, and similar content that should lie on one elevation. 3D solids, non-planar surfaces, or other geometry that cannot tolerate a degenerate projection may fail and should not be processed when their 3D form must be retained.
- The target elevation must be a valid finite number. Empty blocks, invalid definitions, cyclic nesting, or objects that cannot be copied or projected cause the command to stop and report the reason.
- All selected blocks are prepared before any document changes are made. If any block cannot be prepared, nothing is modified. If replacement fails midway, the command attempts to restore replaced instances and remove the new definitions.
- The entire operation is recorded in Rhino Undo and can be reverted after completion.
