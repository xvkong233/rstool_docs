# rsPlaceObjsOnCrv · Place objects along a curve

> Module: Geometry / Object Transforms

[← Back to command index](/en/commands/)

**Function**: Place/align the selected object to the curve based on the geometric relationship between the reference point and the target curve (and optional reference surface)

> Screenshots and videos may show a Chinese-language interface. Labels and control positions can vary by Rhino or RSTool version.

**Run**: Enter `rsPlaceObjsOnCrv` in the Rhino command line (command-line interaction).

**Workflow**:

1. Command line input rsPlaceObjsOnCrv
2. Select the object to be placed (GetMultiple, automatically take the lower center of the boundingbox as the anchor point)
3. Select the target curve (Curve, multiple selections available)
4. Select a reference point (Point, multiple selections available)
5. Select the reference surface (Brep, you can skip AcceptNothing)
6. The system places objects adjacent to curves and points according to the tangent plane of the curve.

**Parameters**:

> This command has no numeric command-line parameters. Adjust its options in the settings window.

**Notes**: There are no numerical parameters, all are object selection interactions; when the reference surface is not selected, the working plane is constructed by projecting the tangent line of the curve on the XY plane, and when the reference surface is selected, the plane is constructed by cross-multiplying the normal line and the tangent line.

**Tutorial videos**:

<iframe class="rstool-video" src="https://player.bilibili.com/player.html?isOutside=true&aid=114750738471373&bvid=BV1NYKZzBEi1&cid=30714561625&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" loading="lazy" title="RsTool places the model according to the curve with one click"></iframe>
*RsTool places the model according to the curve with one click*
