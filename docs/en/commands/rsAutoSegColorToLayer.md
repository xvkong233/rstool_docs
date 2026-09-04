# rsAutoSegColorToLayer · Assign Segmented Colors to Layers

> Module: Organization & Selection / Layers

[← Back to command index](/en/commands/)

**Function**: According to the built-in 150 semantic segmentation keywords→color mapping table, the corresponding display color is automatically set for the layer matching the layer name (including Chinese and English keywords)

**Run**: Enter `rsAutoSegColorToLayer` in the Rhino command line (command-line interaction).

**Workflow**:

1. Command line input rsAutoSegColorToLayer
2. The program matches layer names and assigns colors based on built-in semantic segmentation keyword rules.

**Parameters**:

> This command has no numeric command-line parameters. Adjust its options in the settings window.

**Notes**: The color table is built into SegRulesParser (150 rules, keywords include Chinese and English); batch processing is performed directly without any interaction; the layer name contains keywords and is matched (priority according to rule order)
