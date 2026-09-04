# rsPdfTools · PDF tools

> Module: Productivity / Productivity

[← Back to command index](/en/commands/)

**Function**: Perform split/rotate/compress/extract/delete/merge/encrypt/decrypt/watermark operations on PDF and drop the resulting PDF to the output directory

![PDF tool main interface (merge - 11 function modules on the left)](../../assets/rsPdfTools/image1.png)
*PDF Tool main interface: Title "PDF Tools/Document Processing Workbench"; 11 functional modules on the left (Merge/Split/Compress/Encrypt/Decrypt/Extract Pages/Delete Pages/Rotate Pages/Add Watermark/PDF to Image/Image to PDF), "Merge" is currently selected; Tool buttons on the top bar of the main area (Add File, Delete Selected, Clear List, Move Up and Down, Set Input Password) + File List + Page Thumbnail Preview + Operation settings (output name, output directory) + bottom (open output directory / cancel task / start merging)*

> Screenshots and videos may show a Chinese-language interface. Labels and control positions can vary by Rhino or RSTool version.

**Run**: Enter `rsPdfTools` in the Rhino command line (opens a settings window).

**Workflow**:

1. Command line input rsPdfTools
2. Create a PdfToolsDialog (Eto) window; window title "PDF Tools"
3. Select the processing method from the 11 functional modules on the left; drag in the intermediate file list or "Add File"
4. Adjust parameters by module in the "Current Operation Settings" panel (split mode/rotation angle/watermark style, etc.)
5. Select the output directory below or leave it blank to go to the source file directory.
6. Click "Start XXX" to execute; the progress bar + status text is updated in real time; you can click "Cancel Task" to interrupt
7. After completion, the "Start" button is restored, "Open Output Directory" is activated, and the button copy is adapted according to the current module.

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| split span | SplitSpan | integer | 5 | 1-9999 | Page span for "every N pages" split mode (NumericStepper) |
| split mode | SplitMode | list | Split page by page | Split page by page/every N pages/custom grouping | Drop-down option, the default is to split page by page (index 0); when "Custom Grouping" is selected, the input box supports `1-3;4-6;7,9` semicolon-delimited multi-segment output. |
| page rotation | PageRotation | list | 90° | 90° / 180° / 270° | Page rotation angle, default 90° (index 0) |
| Compression gear | Compression | list | Balanced (1600px / quality 72) | Clear(2400px/Q85) / Balanced(1600px/Q72) / Extreme(1200px/Q55) | Image compression level, default balanced (index 1); only re-encode qualified large images and retain text/vectors |
| watermark transparency | WatermarkOpacity | integer | 18 | 1-100 | Watermark opacity percentage, default 18 |
| Watermark font size | WatermarkFontSize | integer | 28 | 8-200 | Watermark text font size (pt), default 28 |
| Watermark rotation angle | WatermarkRotation | integer | -30 | -180~180 | Watermark rotation angle (degrees), default -30 |
| watermark horizontal spacing | WatermarkHorizontalSpacing | integer | 70 | 20-500 | Watermark horizontal repeat spacing (mm), default 70 |
| watermark vertical spacing | WatermarkVerticalSpacing | integer | 50 | 20-500 | Watermark vertical repeat spacing (mm), default 50 |

**Notes**: Eto dialog; PDF processing is done in a separate background pipeline.

**11 functional modules on the left** (click to switch the settings panel; the "Start XXX" button at the bottom is dynamically named according to the current module): Merge (default) / Split / Compress / Encrypt / Decrypt / Extract page / Delete page / Rotate page / Add watermark / PDF to picture / Picture to PDF.

**File operation area** (button group at the top of the main area):

| Button | Function |
| --- | --- |
| Add files | Pop up the file selection dialog box, multiple selections |
| Delete selected | Remove checked rows from table |
| Clear the list | Clear with one click |
| ↑ / ↓ | Only enabled in the "Merge" module, rearranged in list order |
| Set the input password | Set the opening password individually for the selected file (used by the decryption module) |

**File table** (5 columns): file name/number of pages/size/page range (double-click to directly edit the page range of each row)/status. It also supports dragging PDF files directly into this area to add them in batches.

**Current operating settings** (Panel switched by module):

| Module | Settings |
| --- | --- |
| Merge | Output name (default merge PDF) + list order is the merge order |
| Split | Split mode (page by page/every N pages/custom grouping) The "number of pages per group" and "custom grouping" input boxes appear according to the mode |
| Compression | Compression gear (clear/balanced/extreme)|
| Encryption | Open password + Confirm open password + Owner password + Confirm owner password + 4 permissions CheckBox (allow printing/copying/modification/annotation) |
| Decryption | Prompt text (use the "Set password" above to assign a separate password for each file) |
| Extract/Delete/Rotate | Page number input box + page range syntax (same as Rhino style: `1;3;5-7` or `1-3;4-6;7,9`) |
| Add watermark | Watermark text + application page number + transparency 1–100 + font size 8–200 pt + angle -180~180 + horizontal/vertical spacing 20–500 mm |

**Output directory line**: Output directory input box (default "Leave blank to save to source folder" prompt) + Select directory + Use source directory two buttons.

**Bottom bar**: Status text (default "Please add PDF file.") / Progress bar / Three buttons: Start XXX (dynamically named according to the current module) / Cancel task (activated only during execution) / Open output directory (activated after completion). Closing the window automatically cancels running tasks. The minimum window size is 780×520, and the startup size is 920×620.
