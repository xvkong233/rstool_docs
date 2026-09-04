# rsFilterHeavyObjects · Filter Heavy Objects

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
