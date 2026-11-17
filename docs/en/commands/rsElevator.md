# <span class="rstool-command-icon rstool-command-icon--heading" title="rsElevator: toolbar icon" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/light/4dec889c-c7c5-57e6-bb0c-bff0dc6044c3.png" alt="" width="48" height="48" loading="eager" decoding="async"><img class="rstool-command-icon__dark" src="/command-icons/dark/4dec889c-c7c5-57e6-bb0c-bff0dc6044c3.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> rsElevator · Elevators (2D / 3D)

> Module: Architecture / Building Elements

[← Back to command index](/en/commands/)

::: info Version 2.0

Create 2D and 3D elevators here. rsElevator2D is no longer a standalone command.

[View the 2.0 command changes](/en/commands/v2)

:::

**Function**: Place hosted elevators in 2D or 3D walls: plan symbols in 2D, or independent 3D objects with a hollow cabin, top and bottom slabs, frame, and double doors.

**Run**: Enter `rsElevator` in the Rhino command line (opens a settings window).

**Workflow**:

1. Run rsElevator and choose Automatic or a fixed 2D/3D mode.
2. Choose a cabin preset or enter cabin width/depth and clear door width; in 3D set cabin and door heights.
3. Move near a wall, check size, position, and direction in the preview, and click; continue placing.
4. For precision use From start, From end, or Pier width. Esc or closing the panel finishes placement.

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Placement mode | OutputMode | enum | Automatic | Automatic / 2D / 3D | Detect the wall near the pointer, or choose a fixed dimension. |
| Along-wall positioning | PositionMode | enum | Pointer | Pointer / From start / From end / Pier width | Start/end distances follow the wall axis with center, near-edge, or far-edge anchors. Pier width measures to the near opening edge. |
| Distance / pier width | PositionDistance | group | 1000 mm / 100 mm | Validated against wall length and opening clearance | Measure pier width from the nearest exposed wall end or clear corner on the pointer side; curved walls use side arc length. |
| Cabin width / depth / height | Cabin | group | 1600 / 1600 / 2500 mm | Must satisfy cabin occupancy and clearance | Width and depth are shared; height applies to 3D. |
| Clear door width / height | DoorOpening | group | 900 / 2100 mm | Must fit the cabin and host wall | The wall cut follows clear door dimensions. |
| Cabin side | CabinSide | bool | Pointer wall side | Can be flipped | Interactive base elevation follows the current construction plane of the pointer viewport. |

**Output**: Independent parametric 2D/3D elevators and hosted openings.

**Notes**: Dimensions are displayed in current Rhino model units; mm and m below describe equivalent physical sizes.

No wall preselection is required: move near a wall and click its preview to place repeatedly. Automatic mode detects 2D or 3D walls; a fixed mode is also available. Results are independent parametric objects with host associations; moving, deleting, or editing them updates their wall openings.

Legacy separate 2D commands have been merged into the unified entry while their entitlement keys remain compatible. Sizes must still satisfy wall-end, neighboring-opening, and clearance checks.

`rsElevator2D` is merged into `rsElevator` and is no longer a separate Rhino command. Moving a 3D elevator retargets its host and updates both wall openings; deleting it restores the wall. Elevators can convert between dimensions with their host wall while retaining association and main dimensions.
