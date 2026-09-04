# rsRepairOpenCurves · Repair open curves

> Module: Geometry / Curves

[← Back to command index](/en/commands/)

**Function**: The curve after repair (closed or connected) retains the layer and color of the first selected object; counts the number of selected/generated/closed objects

**Run**: Enter `rsRepairOpenCurves` in the Rhino command line (command-line interaction).

**Workflow**:

1. Command line input rsRepairOpenCurves
2. Select open curves that need to be repaired/closed
3. Set the repair threshold (or press Enter to use the default)
4. Generate repaired/closed curves and delete original curves

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Repair threshold | Threshold | double | Model absolute tolerance (>=ZeroTolerance) | >0 (lower limit ZeroTolerance, upper limit double.MaxValue) | Distance tolerance for connecting/closing open curves; default max(ModelAbsoluteTolerance, ZeroTolerance) |

**Notes**: Delete the original curve first and then write the repair result; closed curves are counted as closed.
