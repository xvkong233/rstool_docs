# <span class="rstool-command-icon rstool-command-icon--heading rstool-command-icon--single" title="rsStair2D: toolbar icon" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/light/d50f511b-bafd-4929-985b-c72f8c177ed4.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> rsStair2D · 2D stairs (legacy entry)

> Module: Architecture / Stairs & Ramps

[← Back to command index](/en/commands/)

::: warning Version 2.0: legacy entry

2D double-flight stairs are now part of the double-flight stair window, with 2D and 3D modes.

Use [`rsDoubleFlightStairs`](/en/commands/rsDoubleFlightStairs).

The old name is not a callable alias in the reviewed 2.0 source. The historical reference below is for 1.x.

[View the 2.0 command changes](/en/commands/v2)

:::

::: details View the 1.x historical reference

> Icons, screenshots, parameters, and workflows in this section describe the old version.

**Function**: Double run staircase 2D plane symbols (stairs, platforms, up and down arrows and step lines, dimensions)

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


:::
