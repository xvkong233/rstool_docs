# <span class="rstool-command-icon rstool-command-icon--heading rstool-command-icon--single" title="rsWindow2D: toolbar icon" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/light/d31aa9a2-cdd9-46e4-aa67-79cc70a158e6.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> rsWindow2D · 2D window (legacy entry)

> Module: Architecture / Building Elements

[← Back to command index](/en/commands/)

::: warning Version 2.0: legacy entry

2D and 3D windows share one window. Choose the output mode in the panel.

Use [`rsWindow`](/en/commands/rsWindow).

The old name is not a callable alias in the reviewed 2.0 source. The historical reference below is for 1.x.

[View the 2.0 command changes](/en/commands/v2)

:::

::: details View the 1.x historical reference

> Icons, screenshots, parameters, and workflows in this section describe the old version.

**Function**: Insert window symbols and create openings in selected 2D walls

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


:::
