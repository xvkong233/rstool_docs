# rsAIModeler · AI modeling

> Module: AI / Rendering & Modeling

[← Back to command index](/en/commands/)

**Function**: This command can call the AI large model to quickly generate a script for editing Rhino; you can also select Agent mode to use the large model to directly modify and edit Rhino. In Generate Script mode, AI outputs Python/RhinoScript code, which needs to be executed manually in Rhino; in Agent mode, AI directly controls Rhino geometry through tool calls (Delete/Replace/Boolean, etc. will prompt Approve/Deny for confirmation)

![RsTool AI Modeler window: The left side is the script display area (the default is empty "no script"), the right "AI Modeling Assistant" from top to bottom is the status, setting entrance, work mode drop-down (generate script/Agent modeling), requirement description, reference picture (upload picture/capture Rhino viewport/paste clipboard picture), continuous dialogue switch, model drop-down and the green "Generate Script" button at the bottom](../../assets/rsAIModeler/image1.png)

> Screenshots and videos may show a Chinese-language interface. Labels and control positions can vary by Rhino or RSTool version.

**Run**: Enter `rsAIModeler` in the Rhino command line (opens a settings window).

**Workflow**:

1. Enter rsAIModeler on the command line to open the AI modeling window.
2. For first-time use, click "Settings" to fill in the API Key and select API Endpoint (Yu Luoren/Official/Custom)
3. Choose working mode: Generate Script (first-out reviewable script) or Agent Modeling (autonomous continuous modeling)
4. Describe the requirements in the prompt word box, and you can upload / capture the window / paste the reference picture
5. Generate Script mode: Click Generate Script to generate a Python script → After review, click Run in Rhino to execute it in Rhino
6. Agent mode: AI autonomous modeling, high-risk operations such as object deletion/Boolean replacement will require Approve/Deny confirmation in a pop-up window
7. The result enters Rhino; you can use New Conversation to reopen the conversation, or Undo Agent Run to go back to the previous step.

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| working mode | operationMode | select | Generate Script | Generate Script / Agent Modeling | Generate Script first generates a Python script for review and then runs; Agent Modeling allows AI to continuously model autonomously (subject to the permissions below) |
| prompt word | prompt | textarea | — | arbitrary text | Describe the geometry to be generated or modified; can be combined with reference drawings |
| Reference picture | referenceImages | file[] | — | image/* multiple images (upload / capture window / paste) | As a modeling reference; both Agent mode and Script mode can be used |
| continuous dialogue | toggleContinuous | bool | close | on/off | After turning on, continue to modify the code based on the previous conversation instead of generating it from scratch. |
| Visual verification | toggleVisualValidation | bool | close | on/off | After modeling, the window is automatically captured and handed over to AI to check whether the result meets expectations. |
| Agent - allows creation of objects | toggleAgentCreate | bool | open | on/off | Agent mode only: Allow AI to create new geometry (on by default) |
| Agent - allows modification of objects | toggleAgentModify | bool | open | on/off | Agent mode only: Allow AI to modify authorized objects (on by default) |
| Agent - allows deletion of objects | toggleAgentDelete | bool | open | on/off | Agent mode only: Allow AI to delete objects (on by default, deletion will trigger a confirmation pop-up window) |
| Agent-confirm high risk | toggleAgentConfirmRisk | bool | open | on/off | Agent mode only: Confirmation pops up before deletion and Boolean replacement, manual Approve is required (on by default) |
| Model | modelSelect | select | Gemini Preset (Nano Banana 2) | Default model/custom model name | The multimodal model used for plotting and understanding; you can select or enter a custom model name in the drop-down |

**Notes**: Internet connection is required; all parameters are set within the window. The Generate Script mode generates the script first for review and then runs it, which is relatively safe; Agent Modeling has create/modify/delete permissions, and deletion and Boolean replacement will trigger a confirmation pop-up window.
