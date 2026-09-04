# RsAutoEnglish · Automatic English Commands

> Module: Utilities / System Tools

[← Back to command index](/en/commands/)

**Function**: The background takes over the system input method: after enabling, the command line remains in English, and the text input box returns to Chinese (or other original input methods) when the text input box is focused; no geometry is generated

> Screenshots and videos may show a Chinese-language interface. Labels and control positions can vary by Rhino or RSTool version.

**Run**: Enter `RsAutoEnglish` in the Rhino command line (command-line interaction).

**Workflow**:

1. Command line input RsAutoEnglish
2. Display current status and secondary option menu
3. Select Enable/Cut out recovery/Input box switching/Exit
4. On/off/toggle settings in submenu
5. After exiting, the background takes over the input method

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Smart English Lock (enabled) | Enable | toggle | false | on/off | Master switch: Keep English input on the command line |
| Cut out recovery | RestoreOnDeactivate | toggle | true | on/off | Restore original input method when switching out of Rhino |
| Input box switching | TextInputFocus | toggle | true | on/off | Restore the original input method when the text input box is focused |

**Tutorial videos**:

<iframe class="rstool-video" src="https://player.bilibili.com/player.html?isOutside=true&aid=116018777167422&bvid=BV1epFezvE4V&cid=35845966752&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" loading="lazy" title="RsTool · Automatic English Command (Auto English) Demonstration Teaching (Bilibili)"></iframe>
*RsTool · Automatic English Command (Auto English) Demonstration Teaching (Bilibili)*
