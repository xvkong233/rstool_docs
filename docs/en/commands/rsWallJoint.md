# <span class="rstool-command-icon rstool-command-icon--heading" title="rsWallJoint: right-click the rsWallConnect button" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/light/30a507e6-1a76-5519-bcf5-ba291eb8c4d9.png" alt="" width="48" height="48" loading="eager" decoding="async"><img class="rstool-command-icon__dark" src="/command-icons/dark/30a507e6-1a76-5519-bcf5-ba291eb8c4d9.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> rsWallJoint · Wall Junction Rules

> Module: Architecture / Walls and Editing

[← Back to command index](/en/commands/)

> Right-click the [rsWallConnect](./rsWallConnect) toolbar button to run this command. The two commands share the visible button icon.

**Function**: Choose wall junction nodes and apply automatic, miter, butt, or disabled rules, with an explicit primary wall for butt joints.

**Run**: Enter `rsWallJoint` in the Rhino command line (opens a settings window).

**Workflow**:

1. Select walls of one dimension and click a blue junction node.
2. Choose a rule; specify the primary wall for butt joints.
3. Check numbered and colored previews and apply.

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Junction rule | JunctionMode | enum | Current rule | Automatic / Miter / Butt / Disabled | Automatic removes the manual override; the butt primary wall is shown gold. |

**Output**: Persisted wall junction rules and the updated network.

**Notes**: Rules affect existing junctions and do not pull separated walls together. Rules become inactive if the node disappears. Dimensions do not mix, and 3D junctions apply only over overlapping wall heights.
