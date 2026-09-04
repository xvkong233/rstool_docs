# rsDynamicComponentSelfTest · Dynamic component self-test

> Module: Dynamic Components / Maintenance

[← Back to command index](/en/commands/)

**Function**: The command line outputs the self-test results one by one, and gives "Dynamic component Rhino self-test: N/M passed"; if all passes, Success is returned, otherwise Failure.

**Run**: Enter `rsDynamicComponentSelfTest` in the Rhino command line (command-line interaction).

**Workflow**:

1. Enter rsDynamicComponentSelfTest on the command line to run the dynamic component runtime self-check (read-only, no object modification).
2. Output the self-test items line by line, and finally summarize the PASS number (such as 12/12 passed).

**Parameters**:

> This command has no numeric command-line parameters. Adjust its options in the settings window.

**Notes**: Read only, do not modify the document. If an item fails, the output will indicate the specific check item, making it easy to locate runtime problems with dynamic components. The automatic headless test environment itself does not support Redo, and an Undo/Redo manual acceptance still needs to be performed on the Rhino desktop before release.
