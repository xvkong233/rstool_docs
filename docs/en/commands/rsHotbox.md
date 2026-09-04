# rsHotbox · Hotbox

> Module: Utilities / System Tools

[← Back to command index](/en/commands/)

**Function**: Call up the radial command menu around the mouse position in the Rhino active viewport (triggered by tapping Ctrl by default), click/numeric keys to select the corresponding direction slot or sub-ring command and execute it; trigger it again or Esc/right-click to close

![rsHotbox Working example of radial command menu: "<Grid" in the center means the SE sub-ring (grid) is currently selected; the 8 direction slots around the center are sorted by N/NE/E/SE/S/SW/W/NW, in order: [1] Building / [2] 2D Building / [3] Curve / [4] Grid / [5] Selection / [6] Layer / [7] Perspective / [8] Auxiliary, currently 4 The direction "grid" chip is highlighted in orange; the lower secondary panel expands the SE sub-ring with 8 commands: Grid frame (1) / Mesh tool (2) / Close mesh outer (3) / Merge mesh by material (4) / Unify quadrilateral mesh (5) / Dual mesh (6) / Triangular reconstructed surface (7) / Reduce mesh surface by curvature (8); The bottom status bar prompts "1-8 Select · Arrow key navigation · Enter to execute · Roller to cut sublayers · Esc to close"](../../assets/rsHotbox/image1.png)
*Example: When the SE direction "grid" chip is selected, the lower outer ring automatically expands 8 grid-type secondary commands, each corresponding to an RsTool grid tool. Use the numeric keys 1-8 to directly select/enter to execute.*

> Screenshots and videos may show a Chinese-language interface. Labels and control positions can vary by Rhino or RSTool version.

**Run**: Enter `rsHotbox` in the Rhino command line (command-line interaction).

**Workflow**:

1. By default, tap Ctrl to call out the hotbox (can be changed to other triggering methods in settings)
2. The hot box displays 8 directional slots around the mouse position, and hovering the sub-ring slot automatically expands sub-commands
3. Click the command slot to execute the command; click the center to switch schemes, and when deep into the sub-ring, click the center to return to the previous level.
4. After opening the hot box, you can press numeric keys 1-8 to quickly select commands, press Enter to execute, and Esc to close
5. Run rsHotbox again or press Esc/right mouse button to close the hotbox

**Parameters**:

> This command has no numeric command-line parameters. Adjust its options in the settings window.

**Notes**: Hotbox (Hotbox/Pie Menu) collects commonly used RsTool and Rhino commands into an 8-direction radial menu, which can be popped up by hovering the mouse or pressing the numeric keys for quick key selection. It does not block the line of sight and does not interrupt the rhythm. It is especially suitable for "less keystrokes, more wrist use" scenarios in the modeling proficiency period.

Core structure: The 8 main direction slots are fixed, sorted by N/NE/E/SE/S/SW/W/NW, corresponding to 1-8 numerical shortcut keys. One of the three action types "command/macro/sub-ring" can be placed under each main direction slot; if you select "sub-ring", the direction will expand a circle of secondary direction slots (8 directions), and another layer can be nested above the sub-ring, up to two levels of nesting. In the center is the button for switching/returning to the previous layer. With the scroll wheel, you can quickly switch back and forth between multiple profiles (Profiles). The status of the profiles is completely independent.

The default scheme and directory structure (consistent with the screenshot): The main ring is organized by [1] Architecture / [2] 2D Building / [3] Curve / [4] Grid / [5] Selection / [6] Layer / [7] Perspective / [8] Auxiliary. The secondary sub-rings of each main ring are subdivided by scene. 8 common commands for grid / wall / curve / perspective; you can use rsHotboxSettings according to personal habits Adjust the order, overwrite, and change the type by yourself (command → macro → subring).

Interaction Category 5: ① Mouse hover (hover) - automatically expand the direction sub-ring (delay about 100ms to prevent accidental touches); ② Mouse click - click to execute the corresponding command, click the center to switch solutions or return to the previous level when deep in the sub-ring; ③ Keyboard - numeric keys 1-8 to directly select the direction, press Enter to execute the currently selected item, Esc to close, direction key ←↑↓→ at 8 Jump between directions; ④Scroll wheel - switching scheme (quickly switch between two different sets of workflows); ⑤Right click/Esc - close directly without executing. All interactions have no modal windows and disappear when disabled, without blocking the main process of Rhino.

Typical usage scenarios: ① Learning period - put hidden commands (such as rsKeySettings, rsDiagramArrowEdit) that are usually not available in hot box position 1 to reduce memory burden; ② Modeling period - when modeling multi-arc curved curtain walls, put a series of operations such as 'extend surface/surface merge/rebuild UV' into a sub-ring, triggering continuous window-free interruption; ③Drawing period - Concentrate view-related commands such as 'layer switching/quick lock/view naming and saving/screenshot' into one solution, and use the scroll wheel to switch workflows with one click; ④Screen recording/demo - use the numeric keys 1-8 to directly select the direction and press Enter to execute, avoiding mouse drift and making it look clean.

The relationship between the hot box and other applications: ① Only responds in the active viewport that Rhino is currently focused on (the background monitoring logic is enabled in rsHotboxSettings), the command line/Eto dialog box/WebView, etc. will not take over or be triggered accidentally; ② The appearance can follow the Rhino theme or force dark/light, not eye-catching but clear; ③ The current Rhino command will be automatically canceled before execution to avoid 'in _Line' ④ During operation, the mouse cursor is anchored in the switching level of the hot box scheme, which does not affect the regular selection/panning/zooming of the Rhino viewport.
