# rsSelectHathByName · Select Hatches by Name

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
