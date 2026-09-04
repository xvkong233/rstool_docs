# rsStair2D · 2D stairs

> Module: 2D Architecture / Other 2D Tools

[← Back to command index](/en/commands/)

**Function**: Double run staircase 2D plane symbols (stairs, platforms, up and down arrows and step lines, dimensions)

**Run**: Enter `rsStair2D` in the Rhino command line (command-line interaction).

**Workflow**:

1. Command line input rsStair2D
2. Set floor height, tread width/height, stair section width, stairwell width, platform depth, upstairs side
3. Specify the starting point of the ladder, move the cursor to determine the direction and length, and click Generate

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Floor-to-floor height | FloorHeight | double | 3.0 | >0 | Default 3.0m (adapted to 3000mm units) |
| Tread depth | TreadWidth | double | 0.28 | >0 | Default 0.28m (280mm) |
| Riser height | RiserHeight | double | 0.15 | >0 | Default 0.15m (150mm) |
| Flight width | FlightWidth | double | 1.2 | >0 | Default 1.2m (1200mm) |
| Stairwell width | StairwellWidth | double | 2.7 | ≥2×stair width | Default 2.7m (2700mm), automatically no less than 2×FlightWidth |
| Landing depth | LandingDepth | double | 1.2 | >0 | Default 1.2m (1200mm) |
| Upward side | UpSide | list | left | left/right |  |

**Notes**: Two-run stairs; the width of the stairwell is automatically not less than 2 × the width of the stair section.
