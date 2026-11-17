# <span class="rstool-command-icon rstool-command-icon--heading" title="rsDynamicComponentInteract: toolbar icon" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/light/f0c2f593-67ca-5335-9876-f6c1576fdf6d.png" alt="" width="48" height="48" loading="eager" decoding="async"><img class="rstool-command-icon__dark" src="/command-icons/dark/f0c2f593-67ca-5335-9876-f6c1576fdf6d.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> rsDynamicComponentInteract · Dynamic component interaction

> Module: Dynamic Components / Interaction

[← Back to command index](/en/commands/)

**Function**: Modify component parameters and rebuild instances by action (only one Rhino undo record is formed for one execution); the command line reports the number of executed instances.

**Run**: Enter `rsDynamicComponentInteract` in the Rhino command line (command-line interaction).

**Workflow**:

1. Get the currently selected dynamic component instance; if not selected, you will be prompted to select the instance to perform interactive actions.
2. If multiple instances are selected at one time and the templates are inconsistent, it will prompt that only instances of the same template can be processed and aborted.
3. If the template does not define any actions, you will be prompted to add and save them in "Component Editor → Interactive Actions", and the panel will automatically open.
4. When there is more than one action, the command line lists available actions for selection (a single action is executed directly).
5. Execute the selected action and echo "'action name' has been executed on N dynamic component instances".

**Parameters**:

> This command has no numeric command-line parameters. Adjust its options in the settings window.

**Notes**: Five safety actions: switch Boolean parameters, set parameter values, cycle options, cycle parameter values, and display prompt messages. The action only changes parameters, does not execute C#/scripts, does not access files or networks; it is rebuilt frame by frame when smooth transition animation is enabled. See the "Interactive Actions" page of rsDynamicComponentGuide for details.
