# rsToolStart · Start RsTool

> Module: Utilities / System Tools

[← Back to command index](/en/commands/)

**Function**: Reload the RsTool toolbar and pop up the corresponding language panel

**Run**: Enter `rsToolStart` in the Rhino command line (command-line interaction).

**Workflow**:

1. Enter RsToolStart on the command line to automatically load and pop up the RsTool toolbar (matching Chinese/English configuration according to the interface language)

**Parameters**:

> This command has no numeric command-line parameters. Adjust its options in the settings window.

**Notes**: Depends on the version folder and RsTool_CN/EN.rui under the Package directory %APPDATA%\McNeel\Rhinoceros\packages\8.0\RsTool; requires Rhino 8

After executing RsToolStart, RsTool will automatically pop up the toolbar (tool panel) without the need to manually call it up in Rhino; if the toolbar has been closed, hidden or not loaded after a version update, re-run this command to restore the display.
