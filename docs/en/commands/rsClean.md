# rsClean · Deep Clean

> Module: Utilities / System Tools

[← Back to command index](/en/commands/)

**Function**: Clean/merge documents of unused materials, empty layers, unused block definitions, and duplicates of the same name

**Run**: Enter `rsClean` in the Rhino command line (opens a settings window).

**Workflow**:

1. Command line input rsClean
2. Open the rsClean dialog box
3. Check the clean/merge items you want to perform
4. (Optional) Click Analyze to view a statistical summary
5. Click Perform Cleanup

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Clean up unused materials | RemoveUnusedMaterials | toggle | true | on/off | Delete unreferenced materials from the document |
| Clean up empty layers | RemoveEmptyLayers | toggle | true | on/off | Delete empty layers |
| Clean up unused block definitions | RemoveUnusedBlockDefinitions | toggle | true | on/off | Remove unreferenced block definitions |
| Merge materials with the same name | MergeDuplicateMaterials | toggle | true | on/off | Merge duplicate materials by name |
| Merge layers with the same name | MergeDuplicateLayers | toggle | true | on/off | Merge duplicate layers by name |
| Merge block definitions with the same name | MergeDuplicateBlockDefinitions | toggle | true | on/off | Merge duplicate block definitions by name |
