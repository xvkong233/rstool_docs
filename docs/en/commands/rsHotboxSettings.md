# rsHotboxSettings · Hotbox Settings

> Module: Utilities / System Tools

[← Back to command index](/en/commands/)

**Function**: Open the hot box settings window (including general/layout and command pages); edit the general page scheme, main ring 8-direction slots, and sub-ring command pool allocation; edit background monitoring, triggering methods, keys, thresholds, and appearance themes on the layout and command pages

![rsHotboxSettings "General" page layout: The plan list on the left contains RsTool commonly used/Rhino commonly used; 8 slots in the middle main ring layer ([1] N building / [2] NE 2D building / [3] E curve / [4] SE grid / [5] S selection / [6] SW layer / [7] W perspective / [8] NW auxiliary) Current No. 4 "SE" Sub-ring grid" is selected in orange; there are 6 rows in the sub-ring list below: Smart wall → rsWall / Wall hole → rsWallRemoveHole / Wall connection → rsWallJoin / Inverted corner → rsFilletWall / Wall extension → rsWallExtend / Convert entity to normal Brep → rsConvertWallToNormalBrep; RsTool command pool sorted by pinyin in the command library on the right, including generating stairs by step rsStairBySteps, merging grids by material rsJoinMeshesByMaterials, horizontal color mixing grids rsDivideCrvByRoundedCount, etc.; buttons at the bottom add/copy/rename/delete/↑ ↓ Sequential operation, add the current subitem, assign to the current slot, check "Cancel current Rhino command before execution" in the last line, and the lower status bar "The main ring is fixed in 8 directions; the number of sub-ring slots is free (up to 32), which can be added/delete arbitrarily, and the sub-rings can be nested one level further"](../../assets/rsHotboxSettings/image1.png)
*"General" page: three-layer navigation of scheme/main ring/sub-ring + command pool allocation, SE "grid" sub-ring already contains 6 modeling-related commands*

![rsHotboxSettings "Layout and Command" page: Check "Enable background shortcut key monitoring", status line monitoring is activated (please place the mouse in the active viewport to test); Description "Hotbox only responds when the Rhino active viewport has focus. Command line, Eto, WebView and other software will not take over."; 5 options: trigger method = tap the modifier key, current key = input key (Ctrl), long press threshold = 180 ms, tap upper limit = 250 ms, appearance theme = always dark; bottom prompt "No other keyboard or mouse operations occur during tapping Ctrl, the judgment will be automatically cancelled: short press/long press mode will play back the original keystroke when short pressed"; at the end there are five bottom buttons: Import/Export/Restore Default/Apply/Close](../../assets/rsHotboxSettings/image2.png)
*"Layout and Command" page: four global settings: trigger mode, key press, long/tap threshold, and appearance theme, which determine when to start the hot box for background monitoring*

> Screenshots and videos may show a Chinese-language interface. Labels and control positions can vary by Rhino or RSTool version.

**Run**: Enter `rsHotboxSettings` in the Rhino command line (opens a settings window).

**Workflow**:

1. Enter rsHotboxSettings on the command line to open the settings window
2. Select the trigger method on the "General" page (tap modifier key / short press and long press / key combination / call immediately), click "Enter Key" and press the target key or key combination
3. Adjust long press threshold and tap limit, choose appearance theme
4. Add, copy, rename, or delete schemes on the Layout and Commands page
5. Select the direction and level editing slot, the type can be command, macro or sub-ring.
6. Search by name, filter by category, or sort by recently used in the command library. Double-click the command to assign it to the current slot.
7. Click "Apply" to save and take effect immediately

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Trigger mode | ActivationMode | list | Tap the modifier key | Tap the modifier key / short press the original function and long press to call out / press and hold the combination key to call out / press the key to call out and overwrite immediately | How to call out the hot box |
| Long press threshold | HoldMilliseconds | integer | 180 | 120-600 | The number of milliseconds for short press/long press mode to be judged as long press |
| Tap the limit | TapMilliseconds | integer | 250 | 120-500 | The number of milliseconds after which tap modifier key mode is considered a tap. |
| appearance theme | ThemeMode | list | Follow the Rhino theme | Follow the Rhino theme / Always Dark / Always Light | Hot box panel color matching |

**Notes**: The two major custom scenes of the hot box are entered through this command: (1) change which commands appear in which direction slots; (2) change when the hot box pops up and what it looks like.

There are two tabs at the top of the window: "General" and "Layout and Commands". There is also a "← Return to Previous Layer" button on the top bar, and five buttons at the bottom: Import/Export/Restore Default/Apply/Close. After making the changes, you must click "Apply" to take effect immediately in Rhino (no need to restart Rhino); clicking "Restore to Default" will reset all schemes and global monitoring to the factory state. The export button can save the current complete configuration as a json file for easy backup/sharing/team unification. The same goes for importing.

"General" page layout:

① Left column plan list: Each plan is an independent set of 8 directions + sub-ring layout, supporting new/copy/rename/delete/↑↓ sorting; typical usage is to split different workflows into multiple plans (such as "Modeling", "Plotting", "Screen Recording"), and press the scroll wheel or the center button to switch. Multiple solutions can be bound to different triggering methods + different shortcut keys, but it is recommended to start with one set of configurations and then expand after you are familiar with it.

② Middle column Main ring layer: fixed 8 direction slots N/NE/E/SE/S/SW/W/NW, numbers 1-8 corresponding to numeric keys; there are "Add slot" and "Delete selected" buttons above, which is actually equivalent to adding or removing sub-ring direction slots on a certain layer, up to 32; below there are three columns of type/display name/English command, which determine the action form of the slot:
- Type = command: directly execute an RsTool or Rhino command (such as rsWall)
- Type = Macro: Execute a Rhino macro (Rhino macro edit box at the bottom of the picture)
- Type = sub-ring: Expand 8 more secondary direction slots in this direction, and the sub-ring can be nested one level further (secondary + third level, the fixed structure of the main ring is not counted), which is suitable for quick calls of 8 categories.

③ Below the middle column, sub-ring list: A list of commands assigned to the currently selected sub-ring slot, which can be edited/modified/removed one by one.

④ Right column command library (RsTool common + Rhino common): Built-in coverage of all RsTool commands (about 280+) and Rhino built-in command pool. Search box above + All categories + Sort by name + Sort by Pinyin + Recently used Four filter combinations can quickly locate commands; double-click a command to assign it to the currently selected slot, and the "Add current subitem" / "Assign to current slot" button is a button form that does the same thing. "Recently Used" at the bottom of the command library will record which commands you have launched every time, making it easy to retrieve the ones you use more often.

⑤ Bottom tick option: "Cancel current Rhino command before executing" - After enabling, when the hot box is triggered, Esc will be issued first to cancel the current Rhino command (such as _Line / _Offset) to avoid the situation of 'the hot box will get stuck if the hot box is opened again in _Line'; it is generally recommended to check it.

"Layout and Commands" page:

① Enable background shortcut key monitoring: main switch. After turning it on, the Rhino background will monitor the specified keystrokes with low priority. All Rhino viewports will be affected, but the hotbox will only pop up when the Rhino active viewport has focus; it will not be triggered when other software (Eto/WebView/command line/other Windows applications) grabs focus.

② Triggering method: Choose one of four.
- Tap the modifier key (default): Click the modifier key such as Ctrl/Shift/Alt/Cmd to pop up, and release it to disappear. Generally it is most intuitive for beginners.
- Short press the original function and long press to call out: the original function (such as Tap) remains unchanged after short pressing, and it will pop up after pressing and holding for 180ms. Suitable for scenarios where you want to reuse existing shortcut keys.
- Press and hold the key combination to call out: press and hold the double key to play. Avoid accidental touches but reduce flexibility.
- The key will be called out and overwritten immediately: Press it and it will be called out immediately, covering the original function of the key. Aggressive yet most efficient.

③ Current key: After pressing the "Enter Key" button, the next pressed key (including key combinations) will be captured and saved as the current trigger combination. It is recommended to only use modifier keys (Ctrl/Shift/Alt) as the root key to avoid conflicts with daily editing keys.

④ Long press threshold/tap upper limit: The number of milliseconds that determines "how short is considered a short press/how long is considered a long press/how fast is considered a tap"; the long press threshold defaults to 180, and the tap upper limit defaults to 250. If the threshold value is too small, it will be easy to recognize a normal click as a hot box trigger. If the threshold value is too large, there will be a perceptible delay in popping up the hot box. Adjust it according to your personal feel.

⑤ Appearance theme: Choose one of three - follow Rhino theme (automatic) / always dark / always light. "Always Dark" is suitable for screen recording and dark modeling interfaces to prevent the hot box from flickering on and off.

⑥ Prompt: The current judgment logic will be highlighted at the bottom - for example, "No other keyboard or mouse operations occur while tapping Ctrl, and the judgment will be automatically canceled" + "Short press/long press mode will play back the original keystroke when pressed briefly."

Advanced: You can export the filtering habits of the command library (recently used records) and the current activation plan as a .RsToolHotbox configuration file and send it to colleagues for use; when importing, if it conflicts with the target person's current plan, you will be prompted to merge or overwrite it.
