# rsCleanUpOverlappingCurves · Clean up overlapping curves

> Module: Geometry / Curves

[← Back to command index](/en/commands/)

**Function**: Delete duplicate/overlapping curves and generate merged curves (statistics on the number of deleted/generated/skipped groups)

**Run**: Enter `rsCleanUpOverlappingCurves` in the Rhino command line (command-line interaction).

**Workflow**:

1. Command line input rsCleanUpOverlappingCurves
2. Automatically analyze all editable curves in the document
3. Press Esc to cancel
4. Automatically delete duplicate/overlapping curves and merge them, output the results

**Parameters**:

> This command has no numeric command-line parameters. Adjust its options in the settings window.

**Notes**: There are no interactive parameters, all curves are processed; the analysis phase supports Esc to cancel, and the document will not be changed when canceling.
