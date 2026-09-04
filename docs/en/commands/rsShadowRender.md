# rsShadowRender · Architectural rendering window

> Module: Views & Documentation / Annotation & Documentation

[← Back to command index](/en/commands/)

**Function**: Architectural shadow/white model rendering results (rendering the current viewport scene in ArchiRenderWindow)

![rsShadowRender Rendering progress pop-up window: RH7 main viewport city texture model has been synchronized to the background ArchiRenderWindow; pop-up window title "67% completed" + progress bar + cancel/pause button, the parameter panel on the right contains Perspective/viewport name/whether to merge working layers/site/height/material subdivision/sun/working panel and many other check boxes](../../assets/rsShadowRender/image1.jpg)
*rsShadowRender is rendering: automatically captures the current Rhino viewport to ArchiRenderWindow for offline rendering, top progress bar + cancel/pause control; the right panel controls switches such as camera, viewport, sun, material edges, white model, etc.; the picture has been rendered to 67%, and the completion level is displayed in real time.*

> Screenshots and videos may show a Chinese-language interface. Labels and control positions can vary by Rhino or RSTool version.

**Run**: Enter `rsShadowRender` in the Rhino command line (opens a settings window).

**Workflow**:

1. Run rsShadowRender from the command line
2. Open the architectural rendering window (capture the current viewport)
3. Automatically open the document sun
4. Set quality/output/white mode/shadow, etc. in the window
5. Click "Render" to start

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Rendering quality | QualityPreset | list | High | Preview/Medium/High/Ultra | Affects internal resolution scaling and anti-aliasing (Preview0.5/Medium1/High2/Ultra3) |
| Output size | OutputPreset | list | Output2K (2560px) | 1K(1920)/2K(2560)/4K(3840)/6K(6144) | long side pixels |
| aspect ratio | AspectRatioPreset | list | MatchViewport (Follow Viewport) | MatchViewport/Square1x1/4x3/16x9/9x16 |  |
| Inherit Rhino material color | InheritRhinoMaterialColor | toggle | true |  | Fixed to true in code |
| edge mode | EdgeRenderMode | list | ViewportOverlay | Off/ViewportOverlay/NativeFramebuffer |  |
| Object edge width | ObjectEdgeLineWidth | integer | 1 | 1 – 16 | ClampObjectEdgeLineWidth limit |
| Use advanced Rhino materials | UseAdvancedRhinoMaterial | toggle | true |  | Fixed to true in code |
| White mold mode | UseWhiteModel | toggle | false |  |  |
| Shadow intensity | ShadowIntensity | double | 1.0 | 0.0 – 1.0 | ClampShadowIntensity limit |
| Main outline line width ratio | PrimaryOutlineWidthRatio | double | 1.5 | 0.0 – 2.0 | ClampPrimaryOutlineWidthRatio limit |

**Notes**: Automatically turn on the document sun (Rendering → Sun panel is adjustable); persist the settings to the command PersistentSettings; reuse window instances for the same document

## 1. Typical usage process

1. Enter `rsShadowRender` on the Rhino command line, and the ArchiRenderWindow (architectural rendering window) will pop up.
2. Automatically open the document sun and capture the current Perspective viewport as the rendering source
3. Set rendering quality/output size/aspect ratio/white mode switch/shadow intensity/edge mode, etc. as needed
4. Click "Render" to start offline rendering; you can "Pause" to continue rendering or "Cancel" to stop it.
5. The progress bar displays the percentage + completion value (such as 67%), and other modeling can continue to be done in Rhino in the background.
6. After completion, a picture will be displayed in the window and can be saved/copied/taken screenshots

## 2. Detailed explanation of parameter grouping

### 1. Output
- **Rendering quality QualityPreset**: Preview / Medium / High / Ultra (internal resolution magnification 0.5/1/2/3)
- **Output Size OutputPreset**: 1K(1920) / 2K(2560) / 4K(3840) / 6K(6144) (long side pixels)
- **AspectRatioPreset**: MatchViewport / Square 1×1 / 4:3 / 16:9 / 9:16

### 2. Material
- **InheritRhinoMaterialColor**: The code is fixed to true, and the color is taken from the current document material ball.
- **Use Advanced Rhino Material UseAdvancedRhinoMaterial**: code fixed to true
- **White Model Mode UseWhiteModel**: If turned on, the color will be ignored and the white film will be rendered uniformly. It is often used for volume research/shadow analysis.

### 3. Sideline
- **EdgeRenderMode**: Off/ViewportOverlay/NativeFramebuffer
- **Object edge width ObjectEdgeLineWidth**: 1–16, limited by ClampObjectEdgeLineWidth
- **Main outline width ratio PrimaryOutlineWidthRatio**: 0.0–2.0, the thickness ratio of the main outline to the secondary outline
- **Shadow Intensity**: 0.0–1.0, 1.0 is a completely black shadow

## 3. Differences from ordinary Rhino Render

- Directly connected to RsTool architectural drawing review workflow: default volume white model + high contrast shadow + main outline, no need to configure Cycles item by item
- Automatically open the document sun, eliminating manual adjustment time; the sun parameters can be changed as needed in "Rendering → Sun Panel"
- You can continue to model, zoom, and modify images in Rhino during the rendering process without the canvas getting stuck.
- Output pure bitmap (white template including main outline + shadow), and later superimpose material drawings, floor plans, and dimensions to produce the review album with one click

## 4. Typical scenarios

- **Building volume shadow analysis**: white model + shadow intensity 1.0 + Ultra, multi-view 4K shadow map
- **General plan base map**: MatchViewport + High + main outline line width ratio 1.5, with plan trees and floor paving to quickly produce maps
- **Bird's Eye/Bird's Eye Animation**: MatchViewport + Ultra, Master Profile 1.0, emphasizing tower form
- **Project comparison rendering**: Batch run 4–6 perspectives + edge switch comparison, save PNG series

## 5. Things to note

- The direction of the sun is linked in real time with "Rendering → Sun Panel". When adjusting the sun, the rendered image will also be refreshed with the preview.
- High resolution (4K+Ultra) rendering consumes a lot of video memory. It is recommended to close other D3D applications.
- Settings exist with the PersistentSettings command. Opening the same document repeatedly will retain the last settings.
- Unfinished parts will not be saved after canceling rendering

**Tutorial videos**:

<iframe class="rstool-video" src="https://player.bilibili.com/player.html?isOutside=true&aid=116754558752387&bvid=BV1ymjN6YE9P&cid=39142556947&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" loading="lazy" title="RsTool · Architectural Rendering Window (Shadow Render) Demonstration Tutorial (Bilibili)"></iframe>
*RsTool · Architectural Rendering Window (Shadow Render) Demonstration Tutorial (Bilibili)*

<iframe class="rstool-video" src="https://player.bilibili.com/player.html?isOutside=true&aid=116607640670567&bvid=BV1jjLS6zENC&cid=38483397032&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" loading="lazy" title="RsTool · Architectural Rendering Window (Shadow Render) Supplementary Demonstration (Bilibili)"></iframe>
*RsTool · Architectural Rendering Window (Shadow Render) Supplementary Demonstration (Bilibili)*
