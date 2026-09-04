# rsRandomSelection · Random Selection

> Module: Organization & Selection / Selection

[← Back to command index](/en/commands/)

**Function**: Randomly selects a portion of the selected objects by a given percentage

**Run**: Enter `rsRandomSelection` in the Rhino command line (command-line interaction).

**Workflow**:

1. Command line input rsRandomSelection
2. Select objects to randomly select
3. Enter random selection percentage
4. After pressing Enter, the object is randomly selected according to the percentage.

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| random selection percentage | per | double | 50 | 0 ~ 100 | GetNumber input, SetLowerLimit(0) SetUpperLimit(100); remember the last value lastPerNum |
