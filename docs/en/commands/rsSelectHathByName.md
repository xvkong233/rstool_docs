# <span class="rstool-command-icon rstool-command-icon--heading" title="rsSelectHathByName: toolbar icon" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/light/00dff0ce-63b4-5b9f-b950-1b5256bd019e.png" alt="" width="48" height="48" loading="eager" decoding="async"><img class="rstool-command-icon__dark" src="/command-icons/dark/00dff0ce-63b4-5b9f-b950-1b5256bd019e.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> rsSelectHathByName · Select Hatches by Name

> Module: Organization & Selection / Selection

[← Back to command index](/en/commands/)

**Function**: Selects all hatch objects using the specified hatch pattern (Hatch Pattern)

**Run**: Enter `rsSelectHathByName` in the Rhino command line (opens a settings window).

**Workflow**:

1. Command line input rsSelectHathByName
2. Program collects existing hatch pattern names in a document
3. Select a pattern in the list box
4. After confirmation, select all filled objects of the pattern

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| fill pattern | HatchPattern | list | None | The name of the pattern that actually exists in the document | Dialog options: popup list selection after the program collects existing hatch pattern names in the document |

**Notes**: Use Dialogs.ShowListBox; only the patterns that actually exist in the document, no numerical parameters
