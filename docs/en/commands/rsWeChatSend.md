# <span class="rstool-command-icon rstool-command-icon--heading" title="rsWeChatSend: toolbar icon" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/light/b527c43f-589c-526e-953e-6962b4538a62.png" alt="" width="48" height="48" loading="eager" decoding="async"><img class="rstool-command-icon__dark" src="/command-icons/dark/b527c43f-589c-526e-953e-6962b4538a62.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> rsWeChatSend · Automatically send WeChat messages

> Module: Utilities / System Tools

[← Back to command index](/en/commands/)

**Function**: Open and activate WeChat (Weixin) at the set time, and send the Enter key to the front window

**Run**: Enter `rsWeChatSend` in the Rhino command line (opens a settings window).

**Workflow**:

1. Command line input rsWeChatSend
2. Pop up the scheduled sending dialog box
3. Select date and hours/minutes/seconds
4. After confirmation, wake up the system regularly in the background.
5. Then open and activate WeChat and send the Enter key

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Date | Date | text |  |  | Scheduled date to send (Eto DateTimePicker) |
| hours | Hour | integer |  | 0~23 | Scheduled Hours (Step 1) |
| minutes | Minute | integer |  | 0~59 | Plan minutes (step 1) |
| seconds | Second | integer |  | 0~59 | Planning seconds (step 1) |

**Notes**: Requires the system to have WeChat installed and logged in (Weixin.exe); relies on Windows API front window activation and simulated keystrokes; will prevent the system from sleeping/turning off the screen during operation until the sending is completed
