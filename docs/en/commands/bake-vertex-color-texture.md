# <span class="rstool-command-icon rstool-command-icon--heading rstool-command-icon--gh rstool-command-icon--single" title="Bake Vertex Color Texture: Grasshopper component icon" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/gh/BakeVertexColorTexture_24.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> Bake Vertex Color Texture

> Module: Grasshopper Components / Mesh

[← Back to command index](/en/commands/)

**Function**: Bake triangle/quad mesh vertex colors to a PNG and output an independent mesh with matching UVs. Use it to transfer colors from analysis or gradient meshes into material-rendering and model-export workflows.

**Usage**:

1. In Grasshopper, find Bake Vertex Color Texture under RSTool → Mesh and place it on the canvas. Its nickname is ColorTexture. This is a GH component, not a Rhino command-line command.
2. Connect a mesh with a color for every vertex to Mesh (M). Triangles, quads, or a mixture of both are supported.
3. Keep Save=False initially and inspect the output mesh and Size. Set File Path (P) to a PNG destination in an existing folder. Use an absolute path while the GH document is unsaved.
4. Connect a Grasshopper Button to Save (S) and press it to save. Overwrite defaults to False. Choose a new path if the file exists, or enable Overwrite after confirming replacement is intended.
5. Check Saved (S) and Message (I). Only Saved=True confirms that this solve wrote the PNG; a File Path output alone does not confirm success.
6. Bake or export the output Mesh and assign the PNG as its base-color or diffuse texture using the existing mesh UVs. Do not substitute the input mesh or apply new box or planar mapping.

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Vertex-colored mesh | Mesh (M) | mesh | Required | Item; valid triangle/quad mesh with 1–1000000 faces | The vertex-color count must equal the vertex count. The input is unchanged; the output is an independent copy. |
| PNG file path | File Path (P) | text | Empty | Item; .png path | A missing extension is completed with .png; other extensions are rejected. Relative paths use the saved GH document directory. The destination folder must exist. Empty is allowed with Save=False; a supplied path is validated even when saving is disabled. |
| Save texture | Save (S) | boolean | False | Item; False / True | False outputs a UV mesh without writing a PNG. True attempts to save on every solve. Use a Button rather than leaving it True. |
| Allow overwrite | Overwrite (O) | boolean | False | Item; False / True | Enable to replace an existing PNG. When disabled, an existing file is preserved and the save attempt reports failure. |

**Notes**:

## Output ports

| Name | Nickname | Type | Description |
| --- | --- | --- | --- |
| Mesh | M | Mesh | An independent mesh with face-local vertices and rebuilt UVs. Retains RGB vertex colors and source smooth normals, computing normals first if absent. Use this mesh for materials, baking, and export. |
| File Path | P | Text | Absolute target path for this solve. No path is output when the input is empty and Save=False. This is not proof of a successful save. |
| Size | R | Integer | Square PNG side length in pixels, calculated from the face count. |
| Saved | S | Boolean | True only if this solve successfully wrote the PNG; False when saving is disabled or fails. |
| Message | I | Text | Status or error details, including disabled saving, successful writes, invalid paths, and blocked overwrites. |

## Why the output mesh is essential

This is not a viewport screenshot. It arranges face corner colors into a compact atlas. Each face receives a 2×2 pixel cell and its own UV island. Shared vertices are separated by face to align the UVs, increasing the vertex count and replacing original UVs and Ngon grouping. The original input remains unchanged.

The PNG side length is 2 × ceil(sqrt(face count)): 10000 faces produce a 200×200 pixel texture. There is no separate resolution input. Image size does not depend on model dimensions or viewport size. The compact atlas reconstructs face colors through its matching UVs and cannot simply be assigned to the original mesh.

## Saving and connecting materials

Use a Button for Save. Leaving a Boolean Toggle True can write again on any recomputation; with Overwrite=False, the next write to the same file is blocked. On failure, read Message and check the folder, extension, write permissions, and overwrite setting.

For preview, connect the PNG path to [MaterialPlus](./MaterialPlus) / DiffuseTex (DT) and use Grasshopper Custom Preview. Alternatively, connect the path to [Preview Materials](./preview-materials) / Diffuse with Color=White and Transparency=0 to avoid extra tinting or transparency. Both workflows must use the output mesh.

Here, baking means converting vertex colors to a texture. The component does not add objects to the Rhino document or automatically create or assign Rhino materials. Bake or export the output mesh yourself and keep the PNG with the model.

## Limitations

Supports up to 1000000 faces without third-party plugins. Colors are opaque RGB; vertex alpha is not retained. Quad bilinear texture interpolation can differ slightly from vertex-color rendering after a renderer triangulates the quad.

The atlas has no additional mipmap padding, so distant or low-resolution sampling can bleed between neighboring faces. Prefer bilinear sampling and retain the generated UVs rather than remapping the atlas as an ordinary tiled image.
