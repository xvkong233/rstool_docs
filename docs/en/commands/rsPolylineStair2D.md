# rsPolylineStair2D · Polyline 2D Staircase

> Module: 2D Architecture / Other 2D Tools

[← Back to command index](/en/commands/)

**Function**: The 2D stair plane generated along the polyline (including step lines and upper and lower row annotations), distinguishes the stair sections/platforms according to the segment type

**Run**: Enter `rsPolylineStair2D` in the Rhino command line (command-line interaction).

**Workflow**:

1. Command line input rsPolylineStair2D
2. Set the tread width, stair flight width, next section type, and upward direction
3. Click each vertex of the polyline in turn (real-time preview of each segment), and press Enter to end the generation

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Tread depth | TreadWidth | double | 0.28 | >0 | Default 0.28m (280mm) |
| Flight width | FlightWidth | double | 1.2 | >0 | Default 1.2m (1200mm) |
| Next segment type | SegmentKind | list | Stairs | Stairs/platform | Can be switched segment by segment during drawing |
| Upward direction | UpDirection | list | reverse | Along draw order/reverse | Determined by _upFollowsDrawOrder, default false → second item in the list "reverse" |

**Notes**: Click the vertices of the polyline to generate it segment by segment; the type of each segment can be switched during drawing
