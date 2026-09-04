# rsCopyMayaToRhino · Copy Maya files to Rhino

> Module: SubD Tools / Editing Tools

[← Back to command index](/en/commands/)

**Function**: SubD or Mesh object imported from Maya clipboard (generates weighted percentage TextDots annotations for soft edges when SoftCrease=SmoothX), grouped overall

**Run**: Enter `rsCopyMayaToRhino` in the Rhino command line (command-line interaction).

**Workflow**:

1. Command line input rsCopyMayaToRhino
2. Read Maya ASCII or custom JSON data from the clipboard
3. Set the import parameters in the options (Y axis to Z axis/SubD priority/Use source units/Hard fold threshold/SoftCrease mode)
4. Press Enter to execute the import
5. Generate SubD or Mesh (textdots annotation with soft edges)

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Y axis to Z axis | YUpToZUp | toggle | true |  | Convert Maya Y-up coordinates to Rhino Z-up (static _lastConvertYUpToZUp) |
| Priority SubD | PreferSubD | toggle | true |  | First generated as SubD, otherwise Mesh(static _lastPreferSubD) |
| Use source units | UseSourceUnits | toggle | true |  | Convert from source units to current document units (static _lastUseSourceUnits) |
| Hard fold threshold | HardCreaseThreshold | double | 9.5 | 0.01-100.0 | sharpness≥this value is regarded as hard creasing (Crease), otherwise it is processed according to SoftCrease mode |
| Soft hem mode | SoftCrease | list | SmoothX | Ignore/soft/sharp edges | 0=Ignore,1=SmoothX,2=Crease; default SmoothX(static _lastSoftCreaseModeIndex=1) |

**Notes**: Data source is system clipboard (Maya ASCII text fragment or RsTool.MayaClipboard.v1 JSON); no external help URL.
