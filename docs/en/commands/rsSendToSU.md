# rsSendToSU · Send model to SketchUp

> Module: Utilities / Import & Export

[← Back to command index](/en/commands/)

**Function**: Export and push the selected objects to SketchUp: send them in an instant when online, write to the transmission slot and queue up for reception when offline; the command line echoes the number of sent objects and routing messages.

> Screenshots and videos may show a Chinese-language interface. Labels and control positions can vary by Rhino or RSTool version.

**Run**: Enter `rsSendToSU` in the Rhino command line (command-line interaction).

**Workflow**:

1. Command line input rsSendToSU
2. If there is already a pre-selected object, use it directly. Otherwise, follow the command line prompts to select the object to be sent.
3. Command to organize selected objects into SketchUp compatible data and send
4. If running SketchUp is detected, it will be pushed immediately; otherwise, it will be queued and waited for SketchUp to receive.
5. The command line echoes the number and status of objects sent.

**Parameters**:

> This command has no numeric command-line parameters. Adjust its options in the settings window.

**Notes**: The difference between rsSendToSU and rsSuExport: the former pushes the model to the running SketchUp with one click (real-time linkage, no landing file required), while the latter exports the model as a .skp file.

Selection behavior: If the objects have been preselected in Rhino before execution, these objects will be sent directly; if there is no preselection, the command line will prompt you to select the objects to be sent.

Receiving end: The RsTool on the SketchUp side needs to be in a receivable state. When an online SketchUp is detected, the push will be directed immediately; if the SketchUp is not online, the data will be written to the transmission slot and queued, and will be automatically received the next time SketchUp is opened.

Transmission mechanism: Based on the manifest and push request; if the export or push fails, the command line will echo the reason for the failure to facilitate troubleshooting.

**Tutorial videos**:

<iframe class="rstool-video" src="https://player.bilibili.com/player.html?isOutside=true&aid=117049552608868&bvid=BV1EMuH6SEdt&cid=40663515751&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" loading="lazy" title="RsTool · Send model to SketchUp (Send to SketchUp) demonstration tutorial (Bilibili)"></iframe>
*RsTool · Send model to SketchUp (Send to SketchUp) demonstration tutorial (Bilibili)*
