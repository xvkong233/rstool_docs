# <span class="rstool-command-icon rstool-command-icon--heading rstool-command-icon--single" title="rsDeleteOpening2D: toolbar icon" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/light/6de44462-26d9-4dfc-9ff6-01416f964458.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> rsDeleteOpening2D · Delete 2D Opening

> Module: 2D Architecture / Doors, Windows & Elevators

[← Back to command index](/en/commands/)

**Function**: Deleted door/window/elevator tiles, and restored (filled holes) 2D wall

**Run**: Enter `rsDeleteOpening2D` in the Rhino command line (command-line interaction).

**Workflow**:

1. Command line input rsDeleteOpening2D
2. Select the 2D door/window/elevator tile to be deleted (supports entire group selection, GroupSelect)
3. Enter to confirm
4. The command automatically removes the corresponding hole block and restores (fills) the two-dimensional wall.

**Parameters**:

> This command has no numeric command-line parameters. Adjust its options in the settings window.

**Notes**: Automatically identify A2D tiles of door/window/elevator type (according to the Kind tag of A2DMetadata or Is*2DSymbol user string); when selecting by group, the entire group is deleted; if the corresponding wall opening cannot be found, a failure message will be prompted. Relies on 2D building metadata (A2DMetadata/Wall2DInfo).
