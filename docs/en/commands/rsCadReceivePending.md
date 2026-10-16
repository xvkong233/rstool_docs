# rsCadReceivePending · Receive Pending CAD Transfer

> Module: Utilities / Import & Export

[← Back to command index](/en/commands/)

**Function**: Manually check CAD-to-Rhino transfer batches and import a pending batch into the active Rhino document.

**Run**: Enter `rsCadReceivePending` in the Rhino command line (command-line interaction).

**Workflow**:

1. Send objects using the RSTool transfer tools in CAD and wait for the send to finish.
2. Activate the destination Rhino document, run rsCadReceivePending, and allow idle-time reception after the command ends.
3. Check the received-object count and transfer ID. An empty queue is reported explicitly.

**Parameters**:

> No numeric settings or separate settings window are required. Follow the workflow above.

**Notes**: Run this in Rhino for CAD → Rhino reception; the identically named CAD-side command receives in the opposite application. Automatic checks normally handle reception, while this command requests a manual check. It cannot fetch objects CAD has not sent. Valid source and destination units are required and unit conversion is applied. A batch already received by the same document is not imported twice. Format conversion can change object counts, so inspect layers, annotations, and geometry. For the other direction, see [rsSendToCAD](./rsSendToCAD). No settings dialog is required.
