# Component Labels

> Module: Grasshopper Components / Util

[← Back to command index](/en/commands/)

![Icon](../../assets/gh-icons/ComponentLabels_24.png)

**Function**: Displays floating name labels next to Grasshopper components and supports exception configuration.

![Actual display effect of Component Labels: On the Grasshopper canvas after CanvasTransparent, a line of gray English/Chinese labels describing the purpose of the operator floats above each operator - you can see from left to right and top to bottom Define 5 points / Range / Interpolate points / Display colored points / Define 3 colors / Color Swatch / Color / Interpolate colours. These labels are arranged in two lines, just covering the description text of the operator. Their position can be hovered Display → Draw Icons adjustment in menu or Grasshopper](../../assets/ComponentLabels/image1.png)
*When Component Labels is turned on: a line of gray comments appears at the top of each operator on the canvas to explain its function.*

> Screenshots and videos may show a Chinese-language interface. Labels and control positions can vary by Rhino or RSTool version.

**Usage**:

1. In the Grasshopper canvas, find the component from the "Util" group of the RsTool tag and drag it in
2. Connect each input port according to the parameter table (the ports marked "optional" are empty ports)
3. Executed once each time the canvas is solved, reading the results from the output port

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| List of component names to exclude | Exceptions | text |  | list (optional) |  |

**Notes**: Component Labels is a very practical little tool - one-sentence positioning: a line of English/Chinese labels will automatically appear at the top of each operator on the Grasshopper canvas to mark the purpose of the operator (similar to the inline document/tooltip permanent display version of a programming IDE).

## 1. Typical usage process
1. In the Grasshopper canvas, find the component from the "Util" group of the RsTool tag and drag it into the canvas.
2. In the default activation state, there is no need to connect any ports - the corresponding label will automatically appear on the top of each operator.
3. If you want to turn off a certain type of label (for example, if you see built-in operators such as Prefix / Suffix / Panel and you don’t need to label them), connect the name of the operator to be excluded (text list) to the `Exceptions` input port, and the corresponding label will be hidden on the canvas.
4. When you no longer need to see the label, right-click the operator → Disable or delete it directly from the canvas, and the canvas will return to its default appearance.

## 2. Detailed explanation of parameters
| Input port | Meaning | Default | Value |
| --- | --- | --- | --- |
| Exceptions | List of operator names to be excluded (do not display labels) | Empty | Text list (optional), for example: `["Panel","Number Slider"]` |
This operator has no output port (it is a display switch, and the result is a visual change of the canvas).

## 3. Typical Scenarios
1. **Teaching/Tutorial Screen Recording**: When recording GH modeling tutorials, the audience should be able to see the function of each operator at a glance. Once Component Labels is turned on with CanvasTransparent, the functions of all operators will be clear at a glance, and the audience does not need to guess what the nodes are for.
2. **New person takes over old file**: Taking over a complex GH file written by someone else, the new person is confused and doesn’t know which arithmetic unit is used. Once Component Labels is turned on, the function of each node will be annotated, eliminating the trouble of right-clicking to view Help / entering the Help document.
3. **Code Review/Review Meeting**: When throwing the GH file to others for review, the other party cannot understand the purpose of the arithmetic unit at first glance. Labels greatly improve the review efficiency.
4. **Temporary debugging/large file reread**: Look back at the GH file you wrote every once in a while (I haven’t looked at it for a long time). The tags can quickly remind you of the purpose of each operator and avoid reading the logic from the beginning.

## 4. Notes
1. Component Labels will only make the description text appear on the top of the operator and will not change the operating logic of the operator itself; any connections, solutions, and calculation results will be consistent with the original ones.
2. Label font size, transparency, text color and other appearance are controlled by Grasshopper global settings (Display → Canvas → Font Size, etc.). This operator itself does not provide style ports.
3. The `Exceptions` port accepts the "class name/internal name" of the operator (such as `Panel`), not necessarily the Chinese label displayed on the canvas. If you are not sure, leave it blank first to display the full name, and then use Display → Draw Full Names to proofread the internal name.

Belongs to GH group: RsTool / Util
