# Linked C#

> Module: Grasshopper Components / Developer

[← Back to command index](/en/commands/)

![Icon](../../assets/gh-icons/LinkedCSharp_24.png)

**Function**: Execute external .cs script solution in canvas; input/output terminals are registered and defined by RegisterInputParams/RegisterOutputParams in .cs, and the canvas will automatically display synchronously

![Linked C# component right-click menu: top Linked C# title and fold icon; options are Enabled, Bake..., Runtime warnings (submenu); Source: not selected; Select Source File..., Create Source Template..., Open Source File, Reload Now; checked Watch Source File; lower Use Embedded Source, Detach Source File, Export Embedded Source..., Copy Embedded Source; bottom Help....](../../assets/linked-csharp/image1.png)
*Linked C# component right-click menu: Hang the local .cs file from the Source File group to the component. After Watch Source File is enabled, it will be automatically hot-reloaded after saving.*

> Screenshots and videos may show a Chinese-language interface. Labels and control positions can vary by Rhino or RSTool version.

**Usage**:

1. In the Grasshopper canvas, find the component from the "Developer" group of the RsTool tab and drag it into the canvas
2. Right-click the menu and select "Create Source Template..." to generate a local .cs source file containing only the Input/Output/SolveInstance skeleton with one click (you can also use "Select Source File..." to hang your existing .cs)
3. Use any editor or AI tool (WorkBuddy, ChatGPT, Gemini, Claude, etc.) to change this .cs file according to your own needs. The component will automatically refresh the canvas port according to the input and output ends of your Register.
4. After checking "Watch Source File", save the .cs to automatically hot reload; or click Reload Now in the right-click menu to reload manually.
5. Executed once each time the canvas is solved, reading the results from the output port

**Parameters**:

> This component has no input parameters and runs automatically whenever the Grasshopper solution is evaluated.

**Notes**: Grasshopper's native "container" C# component stores and executes C# scripts in independent local .cs files instead of writing them in the component itself. There is no fixed port itself - all input and output are registered inside .cs using AddGenericParameter/AddNumberParameter, etc., and the component will synchronize the canvas port in real time according to the name, type, and number you registered.

## 1. AI-assisted modeling workflow

This is the biggest advantage of this component. Logics that cannot be solved by Grasshopper's native components (custom recursion, complex geometric operations, special data structures, specific algorithms) and parts that are intensive in RhinoCommon calls can be written by AI:

1. **Create Source Template** → Get an empty skeleton .cs (input and output + SolveInstance placeholder)
2. **Copy it to any AI** such as WorkBuddy / ChatGPT / Gemini / Claude and explain the GH scene clearly (for example, "I have a NurbsSurface list, and I want to calculate the steepest slope, step length s, and maximum number of steps n for each surface; output the Curve list and end point coordinate list of each streamline")
3. **AI generates complete C# code** - it knows how to write Grasshopper API (GH_ParamAccess.item/list/tree, DataTree, Pivot, IKernel, etc.), RhinoCommon (Brep, NurbsSurface, Mesh, Line, Point3d, etc.), common algorithms (SDF, Delaunay, MarchingCubes, ClosestPoint, etc.), and will directly help you write the complete Register + SolveInstance
4. Save **.cs** → Linked C# on the canvas will automatically synchronize the corresponding port according to the Register of the new code; just connect and run
5. **Adjust again, ask again, save again** - This is a local IDE-based GH operator development cycle

Compared with handwriting code in GH's built-in C# editor (every line you change has to wait for compilation, cannot diff, cannot be versioned, and cannot be reused in other .gh): the source code of Linked C# is a **pure local ordinary file**, which can be used in any editor (VS Code / Cursor / Zed), can be iterated with AI tools, can be inserted into git / SVN for version control, and the same .cs can also be reused for other .gh files in the team at the same time.

## 2. Detailed explanation of menu options

Source and auto-reload related entries in the right-click menu (in order of common usage):

- **Source: not selected** — status line; if the file is hung, it will become the file path
- **Select Source File...** — Bind an already written local .cs to the component
- **Create Source Template...** — Generate .cs containing only RegisterInputParams/RegisterOutputParams/RegisterNamedInputs/RegisterNamedOutputs/SolveInstance skeleton with one click (required for first time use)
- **Open Source File** — Open your .cs with a system-associated program (VS/Rider/VSCode) for editing
- **Reload Now** — Reload .cs and synchronize ports; only way to refresh when Watch is closed
- **Watch Source File** — check it and save the .cs file to automatically reload (it is recommended to check it during the development period)
- **Use Embedded Source** — Write the source code of the plug-in .cs back into the component (turn off external connections and the entire component is portable)
- **Detach Source File** — Unlink the local .cs and return to the no-source state
- **Export Embedded Source...** / **Copy Embedded Source** — Export or copy the code embedded in the component to the clipboard
- **Bake...** / **Enabled** — Same as baking and disabling native components
- **Runtime warnings** submenu — see the warning and exception stack during solution

## 3. Differences from "C# Script"

Grasshopper also comes with a "C# Script" component (similar icon). The difference is:

- **C# Script**: The code is stored in the DrawTree/Undo work inside the component - not debugging friendly, cannot be modified with external IDE, cannot be reused across files, cannot be git
- **Linked C#**: The code is externally linked to an independent .cs file - can be used with any editor, can be modified by AI, can be git, and can be reused

For AI-assisted modeling, Linked C# is almost necessary: long files written by AI cannot be stuffed into the GUI editor inside the component and must be independent files.

## 4. AI prompt word template

The prompt word structure usually sent to AI (the hall leader can reuse it directly):

```
I'm using Grasshopper 1.x + Linked C# components. Please help me write a .cs file with the goal:
- Input: [NurbsSurface list srfList, double step size step, double maximum number of steps maxSteps]
- Output: [List&lt;Curve&gt; streamline, List&lt;Point3d&gt; end point]
- Algorithm description: [Start from the center of gravity of each face of srfList, iterate along the steepest descending direction step by step, and stop when the iteration exceeds maxSteps; output each streamline and the corresponding end point]
- Requirements: All Register calls must clearly state the name/abbreviation/description/access method; SolveInstance is error-tolerant for empty inputs; comments must be in Chinese
```

AI will return the complete Register + SolveInstance, paste the entire content back to .cs → Save → Watch to automatically reload → the port will appear on the canvas.

## 5. Things to note

- **Watch Source File is recommended to always be checked** to save trouble during the development cycle; Detach before ending the release of .gh to make the component self-contained
- **.cs file name can be changed**, the component looks at the association of the internal GUID, not the file name
- **Share .gh across machines**: Either use Embedded Source mode (just copy it over), or synchronize .cs files between colleagues
- **Source Reload Not Found**: If the menu displays Source: not selected, it is probably because the .cs file has been deleted or the path has changed. Just select Source File again.
- **GH version difference**: GH 1 top menu writing is `GH_Component.SolveInstance` subclass; GH 2 / Rhino 8 are also compatibleBelongs to GH group: RsTool / Developer

**Tutorial videos**:

<iframe class="rstool-video" src="https://player.bilibili.com/player.html?isOutside=true&aid=117139411310006&bvid=BV1gB826ZERJ&cid=41164472955&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" loading="lazy" title="RsTool · How can I use AI to help me improve performance in Grasshopper? (Site B)"></iframe>
*RsTool · How can I use AI to help me improve performance in Grasshopper? (Site B)*
