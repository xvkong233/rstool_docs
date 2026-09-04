# rsGroupToBlock · Convert Group to Block

> Module: Utilities / Block Operations

[← Back to command index](/en/commands/)

**Function**: Recursively convert all groups in the document into nested block definitions from the inside out (compatible with SketchUp components)

**Run**: Enter `rsGroupToBlock` in the Rhino command line (command-line interaction).

**Workflow**:

1. Command line input rsGroupToBlock
2. Convert naked objects in the group into independent blocks one by one (atomization)
3. Recursively containerize groups into nested chunks (inside out)
4. Inherit the parent group relationship and delete the original object/empty group

**Parameters**:

> This command has no numeric command-line parameters. Adjust its options in the settings window.
