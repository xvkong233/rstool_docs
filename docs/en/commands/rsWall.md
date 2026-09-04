# rsWall · Smart wall

> Module: Architecture / 3D Walls

[← Back to command index](/en/commands/)

**Function**: Generate straight lines/arcs/spline smart walls from curves (can open holes/turn curves)

> Screenshots and videos may show a Chinese-language interface. Labels and control positions can vary by Rhino or RSTool version.

**Run**: Enter `rsWall` in the Rhino command line (command-line interaction).

**Workflow**:

1. Select curve (one or more)
2. Select points one by one to draw the wall according to the mode (line/arc/spline)
3. Set wall width/wall height/offset
4. Can be converted to curves or added with openings
5. Generate smart walls

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| wall width | Width | double | 0.2 | >0 | Unit: meter |
| wall height | Height | double | 3 | >0 | Unit: meter |
| offset | Offset | double | 0.0 | arbitrary | Unit: meter |
| mode | Mode | list | 0 | Line \| Arc \| Spline | 0=Line, 1=Arc, 2=Spline |

**Notes**: Also includes "Convert to Curve" and "Add Opening" command line options

**Tutorial videos**:

<iframe class="rstool-video" src="https://player.bilibili.com/player.html?isOutside=true&aid=115871892641774&bvid=BV1nw6QB5EBX&cid=35308962903&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" loading="lazy" title="RsTool · Smart Wall (Wall) Demonstration Teaching (Bilibili)"></iframe>
*RsTool · Smart Wall (Wall) Demonstration Teaching (Bilibili)*
