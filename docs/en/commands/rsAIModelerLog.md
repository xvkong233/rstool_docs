# <span class="rstool-command-icon rstool-command-icon--heading rstool-command-icon--missing" title="No icon in the current toolbar" aria-hidden="true"></span> rsAIModelerLog · AI Modeler Execution Log

> Module: AI / Rendering & Modeling

[← Back to command index](/en/commands/)

> The current toolbar has no icon for this command. The dash is a placeholder, not a toolbar icon; run the command by name.

**Function**: Open the AI Modeler execution log to investigate script failures, cancellations, and rollbacks.

**Run**: Enter `rsAIModelerLog` in the Rhino command line (command-line interaction).

**Workflow**:

1. Run to open AIModeler_Execution.log in the default text viewer.
2. Read the printed log and AIModeler_LastFailed.py paths and include the relevant errors when reporting an issue.

**Parameters**:

> No numeric settings or separate settings window are required. Follow the workflow above.

**Notes**: This only opens diagnostics: it does not rerun failed scripts or change geometry. Logs rotate to .old at about 2 MB, so older entries may be there. Check logs and failed scripts for sensitive project information before sharing. No settings dialog is used.
