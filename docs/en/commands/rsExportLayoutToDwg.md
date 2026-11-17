# <span class="rstool-command-icon rstool-command-icon--heading" title="rsExportLayoutToDwg: toolbar icon" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/light/838eee3e-bbd4-5b4e-b244-85792de76f93.png" alt="" width="48" height="48" loading="eager" decoding="async"><img class="rstool-command-icon__dark" src="/command-icons/dark/838eee3e-bbd4-5b4e-b244-85792de76f93.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> rsExportLayoutToDwg · Export Layouts to DWG

> Module: Views & Documentation / Annotation & Documentation

[← Back to command index](/en/commands/)

**Function**: Create one AutoCAD 2018 DWG per selected layout, named after the page. The complete sheet is flattened into DWG model space at Z=0 in paper millimetres, rather than exporting the original 3D model or retaining CAD layout viewports.

**Run**: Enter `rsExportLayoutToDwg` in the Rhino command line (opens a settings window).

**Workflow**:

1. Prepare the Rhino layouts: paper sizes, Detail projections and scales, layer visibility, and paper-space text, dimensions, and borders. The command reports and exits if no layout pages exist.
2. Run rsExportLayoutToDwg to open Export Layouts to DWG. Alternatively, use RSTool → Views & Documentation → Annotation & Documentation → Export Layouts to DWG, or rsMenu → Drafting → Export Layouts to DWG.
3. Check the required pages, using Select all, Clear, or Current layout as needed. If a layout is active, only that page is initially selected; from a model view, all pages are selected. At least one page is required.
4. Browse for an output folder or enter a full absolute path. Vector resolution defaults to 1200 DPI; start with the default. Enable Overwrite existing DWGs only when replacement of existing drawings is intended.
5. Click Export DWG. Pages are processed individually. The Rhino command line reports output paths, errors, and a summary. A page failure does not stop later pages. Esc stops after the current processing step and keeps completed DWGs.

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Layout selection | SelectedPages | multi-select list | Active layout; all pages from a model view | One or more layouts in the current document | Select all checks every page, Clear unchecks every page, and Current layout selects only the active page. Current layout is unavailable from a model view. |
| Output folder | OutputDirectory | folder path | Last valid folder used in this session, otherwise the model folder | Valid absolute folder path | All selected DWGs are written here. Specify a folder if the model is unsaved and no previous valid folder exists. Missing folders are created if possible; write permission is still required. |
| Vector resolution (DPI) | Dpi | integer | 1200 | 300–9600; increment 300 | Controls coordinate precision in vector printing, not screenshot resolution. Output remains 2D CAD geometry. Increasing it does not convert raster or rendered views into linework. |
| Overwrite existing DWGs | Overwrite | toggle | Off | On / Off | Off preserves existing files and adds suffixes such as (2) and (3). On permits replacement. Different pages within the same batch still receive separate names. |

**Notes**:

## Paper dimensions versus model dimensions

Think of this as turning the complete layout sheet into an editable 2D CAD drawing. Projections, clipping, and placement from multiple Details are combined in one DWG together with paper-space annotations, fills, and borders. Rhino layouts and Details are not copied as AutoCAD layouts and viewports.

Output is organized in paper millimetres. An A4 landscape sheet uses a 297×210 mm paper extent. A 10 m model object in a 1:100 Detail measures approximately 100 mm in the exported drawing, not its original model length. Blank paper margins do not create border geometry; draw a border in the layout if required.

## What is preserved

The command captures the sheet through Rhino native vector printing, then uses native PDF import and DWG writing. AutoCAD, VisualARQ, and virtual printer installation are not required. Vector-printable projections, view scales, Detail clipping, sectioning, visibility results, and print widths are carried through. This is neither a screenshot nor a fresh hidden-line calculation of every 3D object.

Text is retained as editable text where possible, curves as CAD curves, and fills as hatch objects. Dimensions are split into their printed appearance and lose associative dimension relationships. Fonts, linetypes, and layers pass through the printing pipeline, so original text semantics, annotation object types, and Rhino layer structure are not guaranteed.

## Images, shading, and blank pages

The layout paper extent and each Detail's current display mode determine the result. Only vector-printable content is supported. Shaded or rendered views are not automatically converted to complete hidden-line drawings. Images, textures, and raster shading cannot be fully converted into 2D linework. A page containing raster images is explicitly rejected rather than silently exported with missing image content.

Remove images and check Detail display modes, then retry with vector-printable content. A blank page with no exportable 2D geometry also reports failure, while later pages continue processing.

## Names, overwrites, and cancellation

File names come from layout names, with invalid Windows characters replaced. Names that become identical after sanitizing are distinguished automatically. Existing targets are preserved by default with numbered suffixes such as (2) and (3). Enable overwriting carefully: it permits replacement of existing drawings.

Each page is first written to a staged DWG and read back to confirm content before publishing the final file. A failed generation or verification does not damage the existing destination. Esc takes effect after the current processing step, rather than interrupting all calculations immediately. Completed files remain after cancellation. The source Rhino model is not flattened or replaced.

## Macros and scripted use

Use -rsExportLayoutToDwg to bypass the dialog. The first input is All or Current, and the second is an absolute output folder path. Enter accepts All. Current requires an active layout; from a model view it reports the requirement and exits.

```text
_-rsExportLayoutToDwg _All "D:/Drawings/DWG"
```

Replace All with Current to export only the active layout. Scripted mode uses 1200 DPI and numbers existing files without overwriting. Use the interactive dialog to change resolution or enable overwriting.
