# rsArchiGrid · Smart Architectural Grid

> Module: 2D Architecture / Grids & Walls

[← Back to command index](/en/commands/)

**Function**: Architectural grid (grid lines, axis number circles and text numbers, spans and total dimensions), classified into the RsTool/ArchiGrid layer group

![Screenshot of drawing building grid window](../../assets/rsArchiGrid/image1.png)
*Non-modal "Drawing Building Grid" window: Four tabs up/down/left/right control the spacing of digital axes. You can add spans one by one or preset commonly used spans. The lower part uniformly sets the axis number height, circle diameter, manual axis number, and automatic span and total dimension labeling switches, and provides an interactive entrance for manual straight lines/manual arcs.*

> Screenshots and videos may show a Chinese-language interface. Labels and control positions can vary by Rhino or RSTool version.

**Run**: Enter `rsArchiGrid` in the Rhino command line (command-line interaction).

**Workflow**:

1. Command line input rsArchiGrid
2. The "Draw Building Grid" window pops up (non-modal)
3. Add axis spacing span by span in the four paginations (open up/down/left/right). You can click the common span preset button
4. Set the axis number font height, circle diameter, manual axis number, and check whether to automatically add span and total dimensions.
5. Click "Generate Grid" and specify the base point of the grid in the viewport (or click "Manual Line"/"Manual Arc" to enter GetLine/GetArc interaction)
6. Generate orthogonal axis network straight lines, axis number circles, numbered text and dimensions

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Spacing between upper bays | UpSpans | text | 6 x3 |  | Text list, comma/semicolon/space separated; supports "value x quantity" repetition syntax (such as 6x3); default 6m×3 span |
| Spacing between lower bays | DownSpans | text |  |  | The format is the same as above, default is empty |
| Left advance distance | LeftSpans | text | 6 x3 |  | The format is the same as UpSpans, the default is 6m×3 span |
| right advance distance | RightSpans | text |  |  | The format is the same as above, default is empty |
| Axis size font height | TextHeight | double | 0.6 | >Model tolerance | The unit depends on the model unit, the default is 0.6m |
| Axis number circle diameter | BubbleRadius | double | 0.4 | >Model tolerance | The input in the window is the diameter, and the internal storage is the radius; the default is 0.4m |
| Manual axis number | ManualAxisLabel | text |  |  | If left blank, press A/B/C… and 1/2/3… for automatic numbering. |
| Automatic dimensioning | AddDimensions | toggle | true |  | Whether to generate branch span and total dimensions next to the grid |

**Notes**: Non-modal window, you can still specify the base point in the viewport after clicking to generate; manual straight lines/arcs are drawn interactively; axes with the same cumulative position are automatically merged
