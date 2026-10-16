# rsEmbedLinkedBlocks · Embed Linked Blocks

> Module: Utilities / Block Operations

[← Back to command index](/en/commands/)

**Function**: Convert external linked blocks in the active file into embedded blocks for more self-contained delivery.

**Run**: Enter `rsEmbedLinkedBlocks` in the Rhino command line (command-line interaction).

**Workflow**:

1. Ensure linked source files are available and their contents are loaded; save a copy first.
2. Run without selecting objects. The command processes linked definitions and follows used nested links.
3. Review converted and remaining counts, resolve reported failures, and save the 3dm.

**Parameters**:

> No numeric settings or separate settings window are required. Follow the workflow above.

**Notes**: Definitions are embedded without exploding their instances. Embedded blocks no longer update from their external sources. Missing files or unloaded contents can leave definitions unconverted; check the remaining count rather than assuming every link was removed. No settings dialog is required.
