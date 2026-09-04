# rsDoor · Door

> Module: Architecture / Building Elements

[← Back to command index](/en/commands/)

**Function**: Make a hole in the wall and generate a door (door frame / door leaf / door handle)

![rsDoor door parameter window and generation effect](../../assets/rsDoor/image1.png)
*Eto "Parameters" window: After selecting the basic line and wall body, open a hole and generate a door (including door frame/door leaf/door handle). In the window, adjust the door opening width, door type (single opening/double opening, etc.), whether it is grouped, and the specified material of the door frame/door leaf/door handle.*

> Screenshots and videos may show a Chinese-language interface. Labels and control positions can vary by Rhino or RSTool version.

**Run**: Enter `rsDoor` in the Rhino command line (opens a settings window).

**Workflow**:

1. Open parameterized form
2. Select the door opening foundation line (level 1/level 2) and the host wall
3. Set door frame width and door type
4. Generate door (opening + door frame + door leaf + door handle)

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Door frame width | FrameWidth | double | 0.05 | 0.001~10000 | Step 0.01, unit: meters |
| door type | DoorType | list | 1 | Door opening \| single opening \| double opening \| double and double doors | 0=Opening, 1=Single, 2=Double, 3=Auxiliary |
| in groups | IsGrouped | bool | false | true\|false | Group the generated results |
