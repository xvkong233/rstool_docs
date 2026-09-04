# rsMenu · RsTool Menu

> Module: Utilities / System Tools

[← Back to command index](/en/commands/)

**Function**: Turn on/off the RsTool overlay floating menu (click on the menu item or search to execute the command)

![rsMenu light color (DARK button)](../../assets/rsMenu/light.png)
*Light theme: DARK button in the upper right corner, click to switch to dark color*

![rsMenu Dark (LIGHT button)](../../assets/rsMenu/dark.png)
*Dark theme: LIGHT button in the upper right corner, click to switch back to light color*

> Screenshots and videos may show a Chinese-language interface. Labels and control positions can vary by Rhino or RSTool version.

**Run**: Enter `rsMenu` in the Rhino command line (opens a settings window).

**Workflow**:

1. Command line input rsMenu
2. Toggle RsTool floating menu display
3. Run again to close

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| theme | Theme | toggle | light color | light/dark | Switch the DARK/LIGHT button in the upper right corner of the floating menu to instantly redraw the entire panel. |

**Notes**: Floating Overlay Menu: Overlay a floating panel over the current view of Rhino to browse RsTool commands by category. Run rsMenu again to close; the panel will also be automatically retracted when switching views or switching active documents.

Menu layout:

| Region | Content |
| --- | --- |
| Left Column (Category) | Architecture / 2D Architecture / Stairs / Site / Terrain / Curve / Surface / Mesh / Selection / Layer / Skin; Select the category to highlight |
| Top bar | Current category title + search box + topic switching button |
| Main area (command list) | Command items under the current category, each item displays the Chinese name + English name (rsXxx); click to close the panel and execute the corresponding command |
| Bottom status bar | ACTIVE MODULE: Current category // Number of commands in this category // READY |

Core interaction:

- Search: Search box placeholder "Search commands / Search commands (Ctrl+F)"; match by Chinese name or English command name (tooltip prompt); after inputting, the top title switches to "Search // SEARCH RESULTS", and the matching items are listed in the main area.
- Switching interface (theme): The button text in the upper right corner displays **target theme** - DARK is displayed in light mode, click to switch to dark color; LIGHT is displayed in dark mode, click to switch back to light color. Theme switching instantly redraws the entire panel (9 sets of colors for background, text, selected state, cards, tracks, etc.).
- Execution: After clicking the menu item, first close the panel (CloseAnimated), and then execute the RunScript script (prefixed with !_ plus the English command name) asynchronously through RhinoApp.Idle to prevent the command from starting to run before the panel is closed.
