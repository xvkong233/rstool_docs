# <span class="rstool-command-icon rstool-command-icon--heading rstool-command-icon--single" title="rsPolylineStair2D: toolbar icon" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/light/0be5eb04-840c-557a-8921-9dc350c217bd.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> rsPolylineStair2D · Polyline 2D Staircase (legacy entry)

> Module: Architecture / Stairs & Ramps

[← Back to command index](/en/commands/)

::: warning Version 2.0: legacy entry

Free-form 2D stairs now use the multi-flight stair window, sharing its path and dimensions.

Use [`rsMultiFlightStairs`](/en/commands/rsMultiFlightStairs).

The old name is not a callable alias in the reviewed 2.0 source. The historical reference below is for 1.x.

[View the 2.0 command changes](/en/commands/v2)

:::

::: details View the 1.x historical reference

> Icons, screenshots, parameters, and workflows in this section describe the old version.

**Function**: The 2D stair plane generated along the polyline (including step lines and upper and lower row annotations), distinguishes the stair sections/platforms according to the segment type

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


:::
