# <span class="rstool-command-icon rstool-command-icon--heading rstool-command-icon--missing" title="No icon in the current toolbar" aria-hidden="true"></span> rsAIModelerLog · AI Modeler Execution Log (legacy entry)

> Module: AI / Rendering & Modeling

[← Back to command index](/en/commands/)

::: warning Version 2.0: legacy entry

This legacy log command is not registered in the reviewed 2.0 source.

The old name is not a callable alias in the reviewed 2.0 source. The historical reference below is for 1.x.

[View the 2.0 command changes](/en/commands/v2)

:::

::: details View the 1.x historical reference

> Icons, screenshots, parameters, and workflows in this section describe the old version.

**Function**: Open the AI Modeler execution log to investigate script failures, cancellations, and rollbacks.

**Workflow**:

1. Run to open AIModeler_Execution.log in the default text viewer.
2. Read the printed log and AIModeler_LastFailed.py paths and include the relevant errors when reporting an issue.

**Parameters**:

> No numeric settings or separate settings window are required. Follow the workflow above.

**Notes**: This only opens diagnostics: it does not rerun failed scripts or change geometry. Logs rotate to .old at about 2 MB, so older entries may be there. Check logs and failed scripts for sensitive project information before sharing. No settings dialog is used.


:::
