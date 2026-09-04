# rsPurgeDynamicComponentCache · Purge Dynamic Component Cache

> Module: Dynamic Components / Maintenance

[← Back to command index](/en/commands/)

**Function**: The command line reports the number of derived blocks cleaned.

**Run**: Enter `rsPurgeDynamicComponentCache` in the Rhino command line (command-line interaction).

**Workflow**:

1. Enter rsPurgeDynamicComponentCache on the command line to clean up unreferenced derived blocks in dynamic components.
2. Echo "N number of non-referenced dynamic component derived blocks have been cleaned".

**Parameters**:

> This command has no numeric command-line parameters. Adjust its options in the settings window.

**Notes**: Only the reference-free derived block is deleted and component instances that are still in use are not affected. Suitable for slimming down documents after adding and deleting component sizes/variants a lot.
