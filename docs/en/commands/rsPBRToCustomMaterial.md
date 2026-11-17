# <span class="rstool-command-icon rstool-command-icon--heading" title="rsPBRToCustomMaterial: toolbar icon" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/light/d766a062-a795-593c-8877-a47fadd6fd74.png" alt="" width="48" height="48" loading="eager" decoding="async"><img class="rstool-command-icon__dark" src="/command-icons/dark/d766a062-a795-593c-8877-a47fadd6fd74.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> rsPBRToCustomMaterial · PBR to custom material

> Module: Organization & Selection / Material Tools

[← Back to command index](/en/commands/)

**Function**: Converts the PBR material used by the selected object to a Rhino custom (old-style) material, retaining the base color, base map, and transparency, and setting reflection to 0

**Run**: Enter `rsPBRToCustomMaterial` in the Rhino command line (command-line interaction).

**Workflow**:

1. Command line input rsPBRToCustomMaterial
2. Select the object to convert the PBR material to a custom material
3. The program converts its PBR material to a Rhino custom material (reflections cleared, base color/base map/transparency preserved)

**Parameters**:

> This command has no numeric command-line parameters. Adjust its options in the settings window.

**Notes**: Only IsPhysicallyBased materials are processed; non-PBR objects are skipped
