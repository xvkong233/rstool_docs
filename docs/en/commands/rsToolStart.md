# <span class="rstool-command-icon rstool-command-icon--heading" title="rsToolStart: toolbar icon" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/light/2831bea5-0f16-5a82-a57d-276aa8945f27.png" alt="" width="48" height="48" loading="eager" decoding="async"><img class="rstool-command-icon__dark" src="/command-icons/dark/2831bea5-0f16-5a82-a57d-276aa8945f27.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> rsToolStart · Restore Toolbars

> Module: Utilities / System Tools

[← Back to command index](/en/commands/)

**Function**: Restore the RSTool 2.0 toolbars using the saved language, or the Rhino interface language on first use.

**Run**: Enter `rsToolStart` in the Rhino command line (command-line interaction).

**Workflow**:

1. Run `rsToolStart`.
2. The appropriate RSTool toolbar group reopens if it was closed or hidden.
3. Use `rsToolCN` for Chinese or `rsToolEN` for English when you want to choose a language explicitly.

**Parameters**:

> No numeric settings or separate settings window are required. Follow the workflow above.

**Notes**: This restores the toolbars inside Rhino. Version 2.0 uses the resources shipped with the loaded plugin rather than searching an old package directory. Opening the toolbars does not require sign-in; individual tools still require their own account permissions.
