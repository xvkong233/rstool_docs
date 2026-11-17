# <span class="rstool-command-icon rstool-command-icon--heading" title="rsFilterHeavyObjects: toolbar icon" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/light/477fdf09-1b3a-5d5d-8822-0fe041d3ca4a.png" alt="" width="48" height="48" loading="eager" decoding="async"><img class="rstool-command-icon__dark" src="/command-icons/dark/477fdf09-1b3a-5d5d-8822-0fe041d3ca4a.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> rsFilterHeavyObjects · Filter Heavy Objects

> Module: Utilities / System Tools

[← Back to command index](/en/commands/)

**Function**: Sort by geometric complexity weight, retain only the heaviest N objects/tiles (and their layers), hide the rest

**Run**: Enter `rsFilterHeavyObjects` in the Rhino command line (command-line interaction).

**Workflow**:

1. Command line input rsFilterHeavyObjects
2. Iterate over all objects and estimate complexity weights
3. List the top 20 heaviest objects/tiles
4. Input keeps first N entries
5. Hide remaining objects (keep layer/unlock)

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Number of entries retained | keepCount | integer | (user input) | 1~total number of entries | Only keep the top N entries by weight and hide the rest. |

**Notes**: Weights are estimated by mesh vertices/faces, Brep faces/edges/vertices, curve control points, etc.; tiles are recursively accumulated by definition
