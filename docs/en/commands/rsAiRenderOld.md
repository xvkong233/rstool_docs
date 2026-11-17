# <span class="rstool-command-icon rstool-command-icon--heading rstool-command-icon--single" title="rsAiRenderOld: right-click the rsAiRender button" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/light/8fa021d9-e321-4ae1-b218-205fa2451c7d.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> rsAiRenderOld · Legacy AI rendering (legacy entry)

> Module: AI / Rendering & Modeling

[← Back to command index](/en/commands/)

::: warning Version 2.0: legacy entry

The legacy AI-rendering entry is no longer exposed. Open AI rendering in the client; rsAiRender is not an available replacement command.

The old name is not a callable alias in the reviewed 2.0 source. The historical reference below is for 1.x.

[View the 2.0 command changes](/en/commands/v2)

:::

::: details View the 1.x historical reference

> Icons, screenshots, parameters, and workflows in this section describe the old version.

**Function**: Old version: Generate AI renderings based on viewport/reference images (WinForms implementation), which can be saved locally

**Workflow**:

1. Command line input rsAiRenderOld
2. Create and display the AiRenderForm (WinForms) window (front-focused if open)
3. Select the access point (Yoloren/Official) in "API Settings" and fill in the corresponding API Key (optional to remember the configuration)
4. In the window, click "Get window screenshot" or "Upload image" as the base image, optionally "Upload reference image"
5. Select model, resolution/quality, aspect ratio, and describe rendering requirements in the prompt box
6. Click "Start AI Rendering"; to preview the result after success, you can "Compare the original image", "Set as base image" and "Save image"

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| API access point | EndpointType | radio | Yoro API (yoro) | Yoluoren API / Official Google / Official OpenAI | Select the API provider; when selecting official and the model is GPT Image 2, it will automatically switch to the OpenAI endpoint |
| API Key | ApiKey | password | — | String (saved separately by access point) | Yo Luoren / Official Key Save separately; check "Remember Configuration" and write it to RhinoAiRenderOld_Config.json |
| Model | Model | list | Nano Banana Pro | Nano Banana 2 / Nano Banana Pro / GPT Image 2 | AI image model; Nano Banana Pro (gemini-3-pro-image-preview) is selected by default in the form |
| Resolution/Quality | Resolution | list | HD (1920x1080) - 1K | Standard (1280x720)-1K / HD (1920x1080)-1K / Ultra HD (2560x1440)-2K / Cinema (3840x2160)-4K | Output resolution, default SelectedIndex=1; the size passed to the API is mapped to 1K/2K/4K |
| aspect ratio | AspectRatio | list | 16:9 | 16:9 / 4:3 / 3:2 / 1:1 / 2:3 / 3:4 / 9:16 | Aspect ratio, default 16:9; screenshots/output are cropped or corrected according to this |
| prompt word | Prompt | textarea | Photorealistic architectural rendering, sunny day, high detail, 8k resolution | arbitrary text | Rendering requirements; stored separately according to basic rendering/local re-rendering |
| Reference picture | ReferenceImage | file | — | png/jpg/jpeg/bmp/webp | Optional; after uploading, it will only be used for overall style/lighting/material tone reference, and does not copy objects or compositions. |

**Notes**: The old version of the command, implemented in WinForms, is reserved for compatibility; you need to configure the API Key yourself. Compared with the new version rsAiRender, there is no distinction between rendering/inspiration workspaces and the functions are simpler.


:::
