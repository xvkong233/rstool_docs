# <span class="rstool-command-icon rstool-command-icon--heading" title="rsCleanUpOverlappingCurves: toolbar icon" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/light/37cf7b52-52f5-5158-b0c6-39d2369295ce.png" alt="" width="48" height="48" loading="eager" decoding="async"><img class="rstool-command-icon__dark" src="/command-icons/dark/37cf7b52-52f5-5158-b0c6-39d2369295ce.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> rsCleanUpOverlappingCurves · Clean up overlapping curves

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
