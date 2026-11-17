# <span class="rstool-command-icon rstool-command-icon--heading" title="rsRandomSelection: toolbar icon" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/light/006465b0-9925-5871-8ffe-32f5bd11260c.png" alt="" width="48" height="48" loading="eager" decoding="async"><img class="rstool-command-icon__dark" src="/command-icons/dark/006465b0-9925-5871-8ffe-32f5bd11260c.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> rsRandomSelection · Random Selection

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
