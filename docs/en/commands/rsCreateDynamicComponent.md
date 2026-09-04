# rsCreateDynamicComponent · Create Dynamic Component

> Module: Dynamic Components / Creation

[← Back to command index](/en/commands/)

**Function**: Generate dynamic component instances (block references) in the model and automatically open the "Dynamic Components" panel, where parameters, bindings and positional relationships can be edited in the node tree.

> Screenshots and videos may show a Chinese-language interface. Labels and control positions can vary by Rhino or RSTool version.

**Run**: Enter `rsCreateDynamicComponent` in the Rhino command line (command-line interaction).

**Workflow**:

1. If no object is currently selected, the command line prompts you to select the object to be created as a dynamic component (the entire Rhino group is supported as a node, and the original block instance is retained as a whole).
2. The command line prompt specifies the origin of the dynamic component, which can be picked with the mouse or pressed Enter to adopt the default origin (the smallest corner of the selected object's bounding box).
3. Generate dynamic components after confirmation (can be reversed by Rhino Ctrl+Z).
4. Automatically open the "Dynamic Components" panel and edit parameters, bindings and position relationships in the node tree.

**Parameters**:

> This command has no numeric command-line parameters. Adjust its options in the settings window.

**Notes**: Key points for getting started (see the rsDynamicComponentGuide Getting Started Guide for details): ① Two creation methods - ordinary geometric integration (parts such as a door, cabinet, etc. that are not reused separately) and dynamic component assembly (door frames/door leaves/hardware, etc. need to be reused independently, first make dynamic components separately and then create the outer assembly together); ②Five steps to complete: Name the placement → Select the run command → Select CPlane Direction and specify the origin → Confirm the blue box and "Component Identity" in the node tree and set parameters/binding → "Save template" after the preview is correct; ③$Parameter name represents the parameter, Parent is the parent node, Root is the root node, determine the driver first and then let other nodes follow one-way to avoid mutual reference; ④ Select the component individually and use Rhino Scale/Gumball For scaling, size parameters can be automatically written back (template default values remain unchanged), mirroring/cutting/zero scale/scaling copying will not be written back; ⑤ The formula can be used directly as 20mm/5cm/1.2m, and the angle is the default cost; ⑥ Save the template to form a Rhino undo record, and the undo will restore the template and all instances simultaneously.

**Tutorial videos**:

<iframe class="rstool-video" src="https://player.bilibili.com/player.html?isOutside=true&aid=117128455790433&bvid=BV1sQ8A6FECp&cid=41104969276&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" loading="lazy" title="RsTool · Yes! Rhino also has dynamic components! (Site B)"></iframe>
*RsTool · Yes! Rhino also has dynamic components! (Site B)*
