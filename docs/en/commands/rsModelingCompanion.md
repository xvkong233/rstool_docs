# rsModelingCompanion · Modeling Companion

> Module: Productivity / Productivity

[← Back to command index](/en/commands/)

**Function**: Switch the display/hide of the modeling companion assistant

**Run**: Enter `rsModelingCompanion` in the Rhino command line (command-line interaction).

**Workflow**:

1. Command line input rsModelingCompanion
2. The desktop assistant appears; run it again to temporarily hide it, and run it again to restore it.

**Parameters**:

> This command has no numeric command-line parameters. Adjust its options in the settings window.

**Notes**: Switching command: Repeat the operation to switch between display/hide. For complete settings (image, personality, AI endpoints, function switches, etc.), see rsModelingCompanionSettings.

> ⚠️ **Must do before first use**: Fill in the AI ​​endpoint (default DeepSeek) and API Key in `rsModelingCompanionSettings` first, otherwise the assistant cannot talk or model.

## What is it

## What is it

An AI modeling companion assistant built into the Rhino desktop - a virtual pet that can stay on the screen. After running the command, it will appear in the corner of the screen. It can not only chat with you, but also directly modify your Rhino model. It does not occupy the modeling viewport and can be hidden or restored at any time.

## Three working modes

### 1. Chat
Use natural language to ask questions related to Rhino/Grasshopper/architecture, such as "How to quickly build a spiral staircase", "What is the shortcut key for a certain command", "How to parameterize curtain wall units". It will answer within the context of the current document.

### 2. Direct modeling (Agent)
Use spoken language to give instructions, it recognizes the action intention and generates a safety modeling plan and previews it, and writes it directly to Rhino after confirmation. Action whitelist (up to 12 at a time, with quantity and parameter range security checks):

- Create classes: create_box (cube), create_random_boxes (randomly arranged cubes), create_cylinder (cylinder), create_sphere (sphere), create_polyline (polyline), create_extrusion (extrusion body), create_floor_stack (floor stacking), create_facade_grid (curtain wall grid)
- Edit selected classes: move_selected (move), copy_selected (copy), rotate_selected (rotate), scale_selected (zoom)

Typical sayings: "Draw me a sphere with a radius of 5" "Move the selected object up 3 meters" "Extrude the floor on this row of boxes".

### 3. Generate Rhino Python code (Code)
Identify requirements such as "code writing/scripting/batch/array/loop" and generate executable Rhino Python scripts (rhinoscriptsyntax is preferred, RhinoCommon can also be used), which can be combined with the reference image you posted to understand the intention. Suitable for batch processing, array, parameterization and other script tasks.

## Focus function (Focus)

Built-in Pomodoro style focus session: you can start/pause/resume/cancel/check the status for a focused period of time and name the task. During the focus period, the assistant enters the "focus" state to push you to complete the current task; after completion, points, consecutive days, and achievements are accumulated to help maintain your work rhythm. Suitable for the scenario of "only push this curtain wall through this period of time".

## Context and enhancement

- Rhino context awareness: Automatically reads the current document and selected objects (up to 64), allowing answers and modeling to fit the actual scene.
- Project Memory: Remember project preferences and conventions across sessions (can be turned off in settings).
- Internet search: Automatic Internet search when time-sensitive information is needed (can be turned off in settings).
- Agent visual verification: Automatically verify whether the results are reasonable after the modeling action is executed.
- Reference picture understanding: You can paste pictures/screenshots to help it understand architectural references.

## Image and personality

- 6 optional personalities: gentle companion, professional architect, energetic partner, strict supervisor, domineering president, quiet assistant - decide the tone and feedback style.
- You can change the pet image, adjust the size, transparency, whether to stick to the top, click through, position lock, idle chat frequency, etc.
- If it is not saved for a long time (about 1 hour), you will be prompted to press Ctrl+S.
