# rsSuExport · Export to SketchUp

> Module: Utilities / Import & Export

[← Back to command index](/en/commands/)

**Function**: Pack selected objects into temporary blocks by layer and export as SketchUp (.skp) file (preserving block component structure)

**Run**: Enter `rsSuExport` in the Rhino command line (command-line interaction).

**Workflow**:

1. Command line input rsSuExport
2. Select objects to export
3. Internally packed by layer into temporary blocks (preserving block instances)
4. The save dialog box pops up and select the .skp path.
5. Export to SketchUp file and clean temporary blocks

**Parameters**:

> This command has no numeric command-line parameters. Adjust its options in the settings window.

**Notes**: Export quality is determined by Rhino's current mesh parameters; curves that are too short will be filtered; no user-adjustable numerical parameters
