# rsRoadLine · Road Centerline

> Module: Architecture / Roads

[← Back to command index](/en/commands/)

**Function**: Generate road lines, central flower ponds or bicycle lane geometry from pairs of edge lines on both sides of the road

![Road marking mode: dual lanes + lane markings + pavement markings](../../assets/rsRoadLine/image1.png)
*Road marking mode: dual lanes + lane markings + road markings (bike lane diamonds, straight/turn arrows, crosswalks)*

![Central flower pond mode: central green belt](../../assets/rsRoadLine/image2.png)
*Central flower pond mode: the center is changed to a green belt*

![Multiple parallel paths: each with a central planter + end bike symbols](../../assets/rsRoadLine/image3.png)
*Multiple parallel paths: each with a central flower pond and a bicycle symbol at the end*

> Screenshots and videos may show a Chinese-language interface. Labels and control positions can vary by Rhino or RSTool version.

**Run**: Enter `rsRoadLine` in the Rhino command line (command-line interaction).

**Workflow**:

1. Select the edge lines on both sides of the road (need to be in pairs, at least 2; the number must be an even number)
2. Set road width
3. Set the road center type (road line / central flower pond / central flower pond plus bicycle lane)
4. Set driving position (left/right)
5. Generating road alignment geometry from pairs of edge lines

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| road width | RoadWidth | double | 3.5 | >0 (min 0.01) | Unit: meter |
| Road center type | RoadCenterType | list | 0 | Road line\|Road center flower pond\|Central flower pond and bicycle path | 0=Road line, 1=Central flower pond, 2=Central flower pond+bicycle path |
| driving position | DriverPosition | bool | false | right rudder\|left rudder | false=RightHandDrive, true=LeftHandDrive |

**Notes**: Edge lines need to be selected in pairs (the number is an even number), otherwise you will be prompted to select again.
