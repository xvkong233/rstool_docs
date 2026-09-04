# rsSectionBox · Section Box

> Module: Views & Documentation / Annotation & Documentation

[← Back to command index](/en/commands/)

**Function**: 3D sectioning box (6 hidden clipping planes + orange wireframe, grouped on rsSectionBox layer)

![rsSectionBox Example of cutting frame: A rectangular cube outlined with black thin lines is used as a cutting frame to enclose the volume model of a curved roof + double stairs; part of the top/side of the cube is removed as if it has been cut, exposing several internal sectioning planes and the gray-white grid floor below](../../assets/rsSectionBox/image1.png)
*rsSectionBox is cutting: After the orange cuboid is used as a cutting frame to wrap up the entire building, the six hidden shearing planes inside the frame automatically cut off the excess parts. The roof surface, internal stairs, enclosure surface, etc. can be seen in the frame.*

> Screenshots and videos may show a Chinese-language interface. Labels and control positions can vary by Rhino or RSTool version.

**Run**: Enter `rsSectionBox` in the Rhino command line (command-line interaction).

**Workflow**:

1. Run rsSectionBox from the command line
2. Specify the sectioned cuboid via RhinoGet.GetBox (can be clicked or dragged)
3. Automatically generate and group 6 hidden clipping planes and wireframes

**Parameters**:

> This command has no numeric command-line parameters. Adjust its options in the settings window.

**Notes**: When the thickness in the Z direction is 0, it automatically expands along Z by 1.0; automatically cleans the associated clipping plane when deleting the wireframe; supports scaling/moving/rotating
