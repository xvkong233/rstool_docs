# rsTxtReader · Command-Line Text Reader

> Module: Fun / Interactive Entertainment

[← Back to command index](/en/commands/)

**Function**: Displays text file contents in tabs in the Rhino command line window; no geometry is generated in the model.

![The e-book reading interface of [Those Things in the Ming Dynasty] in Rhino 8 Business Edition: Top Rhino 8 Business Edition menu bar + RsTool has been loaded; a large section of Chinese text on the left is displayed in pages, and the bottom command bar prompts "Page 1/2705, select page, enter or "Exit" to end reading (next page (A) Previous page (B) Skip line number (Shift=1) Number of words per line (D=80) Display order (E=positive sequence) Exit (E)"; the viewport is Rhino's default blank working view](../../assets/rsTxtReader/image1.png)
*Reading .txt text in pages in the Rhino command line window ("Those Things in the Ming Dynasty" page 1/2705)*

> Screenshots and videos may show a Chinese-language interface. Labels and control positions can vary by Rhino or RSTool version.

**Run**: Enter `rsTxtReader` in the Rhino command line (command-line interaction).

**Workflow**:

1. Enter rsTxtReader on the command line, and a file selection dialog box will pop up. Select the text file you want to read (default filtering is *.txt, and all files can also be selected).
2. After automatically detecting the encoding, read the entire content line by line (compatible with various line breaks; remove BOM; retain blank lines); when the file is large, a prompt will be given but it will still be loaded in full.
3. Enter the paging reading loop, and the command line is output in pages. The default is 25 lines per page, and long lines are displayed in segments according to the number of words per line.
4. Use command line options to operate: next page/previous page/jump line number/number of words per line/display order (reverse/forward order)/exit.
5. Press Enter or select "Exit" to end reading; Esc to cancel.

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Next page | Next | Command line options | — | — | Turn back one page; prompt when it is the last page. |
| Previous page | Prev | Command line options | — | — | Turn forward one page; prompt when it is the first page. |
| Jump line number | JumpLine | command line options (integer) | — | 1 – Total number of lines in the file | Jump to the specified line number of the original text and locate the top of the page where the line is located. |
| words per line | CharsPerLine | command line options (integer) | 80 | 20 – 500 | Adjust the number of words displayed in each line; long lines will be automatically split into multiple paragraphs if they exceed the limit. |
| Display order | Order | Command line options (switches) | reverse order | Reverse order / Forward order | The default is reverse order (the bottom is the top of the page when the window stops at the end); it can be switched to forward order (suitable for the entire page to be visible). |
| Exit | Exit | Command line options | — | — | End reading; pressing Enter is equivalent to exiting. |

**Notes**: ① Automatic encoding recognition: UTF-8 / UTF-16LE / UTF-16BE (BOM priority); if there is no BOM, strict UTF-8 verification is performed first, and GBK(936) is returned if it fails. Chinese ANSI text can generally be displayed normally.  ② The default is 80 words per line and 25 lines per page; the "number of words per line" can be adjusted between 20-500, beyond automatic clipping.  ③ Default reverse order: Put the header at the end of the window. When the command line stops at the end, the bottom is the top of the page. Reading from bottom to top is the text. When the command line window can display the entire page, you can switch to "forward order" to read from top to bottom.  ④ Suitable for quickly accessing long texts (logs, instructions, data files) in Rhino without leaving Rhino and opening Notepad.
