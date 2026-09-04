# rsWindow2D · 2D window

> Module: 2D Architecture / Doors, Windows & Elevators

[← Back to command index](/en/commands/)

**Function**: Insert window symbols and create openings in selected 2D walls

**Run**: Enter `rsWindow2D` in the Rhino command line (command-line interaction).

**Workflow**:

1. Command line input rsWindow2D
2. Select the 2D wall into which you want to insert the window
3. Set window width and flip direction
4. Click to insert at the specified window position on the wall

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| window width | WindowWidth | double | 1.2 | >Model tolerance | Default 1.2m (according to 1200mm adaptation unit) |
| Flip direction | FlipSide | toggle | false |  | The position of the flip window in the wall thickness direction |

**Notes**: The default window width is 1200mm to adapt to the model unit
