# <span class="rstool-command-icon rstool-command-icon--heading rstool-command-icon--single" title="rsSelectByPrintWidth: toolbar icon" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/light/9241c742-02ef-4a12-b43d-7fcfb7611212.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> rsSelectByPrintWidth · Select by print width

> Module: Organization & Selection / Selection

[← Back to command index](/en/commands/)

**Function**: Selects all objects with the specified valid plot lineweight (with ByLayer resolution)

**Run**: Enter `rsSelectByPrintWidth` in the Rhino command line (opens a settings window).

**Workflow**:

1. Command line input rsSelectByPrintWidth
2. Programs are grouped by effective line width (including accompanying layers)
3. Select a line width in the pop-up list box
4. After confirmation, select all objects of this line width

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Actual line width | PlotWeight | list | None | &lt;Default&gt; / 0.00mm (very fine / no printing) / specific value (such as 0.13mm) | Dialog options: The program groups by effective line width (including parsing with layers) and then pops up a list selection |

**Notes**: Use Rhino's native Dialogs.ShowListBox; line width grouping is determined by the actual line width in the scene, no numerical parameters
