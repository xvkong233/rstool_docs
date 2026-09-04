# Export Mesh Alembic

> Module: Grasshopper Components / Animation

[← Back to command index](/en/commands/)

![Icon](../../assets/gh-icons/ExportMeshAlembic_24.png)

**Function**: Success (whether the latest one was successful)/File Path (actual absolute path)/Progress (0~1, Path and Progress share the P name)/Frames Written (number of frames written)/Message (bilingual status, warning or error message in Chinese and English)

![The icons and prompts of the Export Mesh Alembic operator on the Grasshopper canvas (including running alarm status)](../../assets/ExportMeshAlembic/image1.jpg)
*Figure 1: The Export Mesh Alembic (Mesh ABC) component on the Grasshopper canvas. The component is located under the RsTool / Animation group, with a light orange icon. The input ports on the left are: F (Frames mesh frame list), P (File Path target .abc path), E (Export trigger, False→True rising edge), C (Cancel cancellation, True rising edge), FPS (frame rate, default 30), S (Start Frame start frame), A (Up Axis 0=Z-Up/1=Y-Up), Hover tooltip (Bilingual in Chinese and English): Export mesh frames in list order as Alembic animation files that support topology changes. The component in this picture is in the Ready state but displays This component did not run because it lacked required data.Two runtime warnings. - indicating that the input has not been completely connected; once Frames and File Path are connected and Export triggers a rising edge, the background MeshRay export will begin.*

> Screenshots and videos may show a Chinese-language interface. Labels and control positions can vary by Rhino or RSTool version.

**Usage**:

1. In the Grasshopper canvas, find the Export Mesh Alembic component from the "Animation" group of the RsTool tab and drag it in
2. Connect each input port according to the parameter table: Frames mesh frame list, File Path target .abc path, Export trigger, Cancel cancellation, FPS frame rate, Start Frame starting frame, Up Axis coordinate axis, Scale scaling, Overwrite coverage, Object Name internal name
3. Export only starts a background export on the rising edge of False→True; Cancel cancels the export in progress and cleans up the temporary .abc.tmp file on the rising edge of True
4. Export uses temporary files + atomic replacement: first write `.RsTool.&lt;guid&gt;.tmp` and then atomically replace it to the target path to avoid contamination of semi-finished products
5. Refresh the output port Success / File Path / Progress / Frames Written / Message each time the canvas is solved (where Path and Progress share the P name)

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| mesh frame list | Frames | Mesh | empty | Mesh list | mesh frames in list order, one Alembic frame per mesh; topology variable |
| Output path | File Path | Text |  | .abc absolute path or relative path to the GH file directory | The extension must be .abc; an empty extension will automatically be filled with .abc; when the GH file is not saved, relative paths are not available and absolute paths must be used. |
| export trigger | Export | Bool | false | True / False | It is only started once on the rising edge of False→True; if there is already a task running, this trigger will be ignored and a warning will be prompted. |
| Cancel export | Cancel | Bool | false | True / False | True rising edge cancels the export in progress and cleans up the temporary `.RsTool.&lt;guid&gt;.tmp` file |
| Frame rate | FPS | Number | 30 | Finite positive numbers | Animation frame rate; must be a finite positive number, illegal values will directly report an error |
| start frame | Start Frame | Integer | 0 | integer | Alembic The starting frame number corresponding to the first sample |
| upward axis | Up Axis | Integer | 0 | 0 = Z-Up (Rhino default) / 1 = Y-Up (rotation around X axis) | Controls the direction of the exported coordinate system; a common usage is to take 1 when exporting Rhino models to Maya/Houdini |
| Zoom | Scale | Number | 1.0 | Finite positive numbers | Coordinate scaling factor; normals are not scaled |
| Allow override | Overwrite | Bool | false | True / False | When the target .abc already exists; true = atomic replacement, false = reject and report an error |
| object name | Object Name | Text | MeshAnimation | arbitrary text | Alembic internal mesh name; illegal characters are automatically replaced with underscores |

**Notes**: Export through MeshRay parallel computing; use temporary files + atomic replacement to avoid semi-finished products; Export / Cancel are both triggered by rising edges and do not conflict with each other; the mesh topology can be changed (topology-change support).

Belongs to GH group: RsTool / Animation
