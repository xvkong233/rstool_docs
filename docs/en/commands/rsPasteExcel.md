# rsPasteExcel · Paste Excel

> Module: Utilities / Clipboard

[← Back to command index](/en/commands/)

**Function**: Generate a Rhino table composed of rectangular border curves and text from the Excel HTML table on the clipboard (automatically handles merged cells)

**Run**: Enter `rsPasteExcel` in the Rhino command line (command-line interaction).

**Workflow**:

1. Command line input rsPasteExcel
2. Check the clipboard for table data copied from Excel
3. Specify table insertion point
4. Adjust row height/column width/character height via command line options
5. Generate curved borders and text and group them

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| row height | RowHeight | double | 5.0 | 0.1~1000 | table row height |
| column width | ColumnWidth | double | 20.0 | 0.1~1000 | table column width |
| text height | TextHeight | double | 2.5 | 0.1~500 | cell text height |
