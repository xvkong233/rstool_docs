# <span class="rstool-command-icon rstool-command-icon--heading" title="rsSelectBySrfEdgeCount: toolbar icon" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/light/e0c68135-5032-5a0d-aefe-759c435815ca.png" alt="" width="48" height="48" loading="eager" decoding="async"><img class="rstool-command-icon__dark" src="/command-icons/dark/e0c68135-5032-5a0d-aefe-759c435815ca.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> rsSelectBySrfEdgeCount · Select by number of surface edges

> Module: Organization & Selection / Selection

[← Back to command index](/en/commands/)

**Function**: Selects a surface/polysurface with a number of boundary curve segments equal to the specified value

**Run**: Enter `rsSelectBySrfEdgeCount` in the Rhino command line (command-line interaction).

**Workflow**:

1. Command line input rsSelectBySrfEdgeCount
2. Enter the number of edges to filter
3. Frame selection/select the faces to be filtered
4. Automatically select surfaces with a number of boundary segments equal to this value

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Number of sides | edgeCount | integer | 3 | >=1 | RhinoGet.GetInteger input; less than 1 prompts but continues |
