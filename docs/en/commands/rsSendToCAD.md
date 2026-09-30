# rsSendToCAD · Send Model to AutoCAD

> Module: Utilities / Import & Export

[← Back to command index](/en/commands/)

**Function**: Converts the selected Rhino objects to DWG 2018 data and sends them to AutoCAD, importing immediately when online or queuing them for the target drawing when offline.

**Run**: Enter `rsSendToCAD` in the Rhino command line (command-line interaction).

**Workflow**:

1. Set the correct real-world units in Rhino and in the target AutoCAD drawing, then open the AutoCAD document that should receive the model
2. Preselect objects in Rhino and run rsSendToCAD; if nothing is preselected, follow the command-line prompt to select objects
3. On first use, the command automatically installs or updates the AutoCAD receiver plugin for the current Windows user
4. The selected objects are written to the transfer queue as DWG 2018 data, preserving world coordinates, full layer paths, and RGB colors
5. If the AutoCAD receiver is online, it automatically imports the objects into the target drawing and selects them; otherwise, the batch remains queued
6. If the batch is not received automatically, run rsCadReceivePending in the target AutoCAD drawing; the send result and transfer ID are reported on the command line

**Parameters**:

> This command has no numeric command-line parameters. Adjust its options in the settings window.

**Notes**:

## First-time installation and receiving

- AutoCAD 2020–2027 is supported. The first run of `rsSendToCAD` automatically installs or updates `RSTool.CadTransfer.bundle` for the current user from the RSTool distribution, without administrator rights.
- If AutoCAD is already open, restart it so the newly installed plugin can load; the current batch remains queued. If Rhino reports that the old plugin is in use and the update was deferred, close AutoCAD, run `rsSendToCAD` once more in Rhino, and then reopen AutoCAD.
- A message saying that the receiver is not connected does not mean the send failed. Start or restart AutoCAD and run `rsCadReceivePending` in the target drawing. If that command is unknown, the receiver plugin has not loaded.

## Units and conversion

- The Rhino document must have valid model units, and the AutoCAD drawing should have the correct `INSUNITS`. Transfer scales data according to real units on both sides and stops when units are undefined or unsupported.
- Rhino exports DWG 2018 without flattening: surfaces and solids use Solid mode, meshes remain meshes, and full layer paths, RGB colors, and world coordinates are preserved.
- DWG conversion may alter the type or appearance of text, dimensions, hatches, and special objects. Dynamic-block parameters, external references, and custom object data are not guaranteed to survive. Check position, solid closure, fonts, and annotations after sending important models.

## Selection and troubleshooting

- Preselected objects are sent directly; selection is requested only when nothing is preselected. The original Rhino selection state is restored when the command ends.
- Objects unsupported by Rhino's DWG exporter can cause the send to fail, with details shown on the command line. Transfer data is stored under `%LOCALAPPDATA%\RSTool\RhinoCadTransfer` for approximately 24 hours for troubleshooting.
