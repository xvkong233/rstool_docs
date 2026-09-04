# rsSectionBoxToggle · Toggle Section Box

> Module: Views & Documentation / Annotation & Documentation

[← Back to command index](/en/commands/)

**Function**: Do not change the geometry: only toggle the Section Box section display on/off, the main control box object remains (can still be moved, rotated, scaled, copied and undone)

**Run**: Enter `rsSectionBoxToggle` in the Rhino command line (command-line interaction).

**Workflow**:

1. Run rsSectionBoxToggle from the command line
2. Select the Section Box to temporarily close or restore sectioning (click or frame to select the main control box, pre-selection before running is supported, and multiple selections are possible)
3. The command automatically determines: as long as there are still enabled ones in the selection, they will be closed this time; if all the selections are closed and run again, they will be restored uniformly.
4. The color of the main control box switches with the status (enabled = orange, closed = gray), and the cross-section display is updated in real time.

**Parameters**:

> This command has no numeric command-line parameters. Adjust its options in the settings window.

**Notes**: You must first use rsSectionBox to generate a section box, and then run this command on its main control box; this command does not create or delete the main control box, but only reads and writes the RsTool.SectionBox user data on the main control box and synchronizes six hidden cutting planes. The selection contains enabled items → turn them off uniformly, and the command line output "The section display of N Section Boxes has been temporarily turned off; the main control box is still retained." 』; All selected areas are closed → restored uniformly, and the output 『The section display of N Section Box has been restored. 』. After closing, the main control box turns gray and the sectioning disappears. Run it again to restore the sectioning and retain the transformations (position/rotation/zoom) you have made to the main control box.
