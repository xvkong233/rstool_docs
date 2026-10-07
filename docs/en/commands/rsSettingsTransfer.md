# rsSettingsTransfer · Rhino / RSTool Settings Transfer

> Module: Productivity / Productivity

[← Back to command index](/en/commands/)

**Function**: Export a Rhino / RSTool settings package (.rssettings), or migrate its settings to a target computer. Import first backs up existing settings, applies after all Rhino instances close, and takes effect on the next start.

**Run**: Enter `rsSettingsTransfer` in the Rhino command line (command-line interaction).

**Workflow**:

1. On the source computer, enter rsSettingsTransfer and choose Export.
2. Choose whether to include API keys, tokens, and proxy credentials saved by RSTool. The default excludes them. Choose a destination for the .rssettings package.
3. Copy the package to the target computer, which must have the same Rhino major version and the required plugins installed. Run rsSettingsTransfer and choose Import.
4. Select the package, review its source versions, file count, credential status, and external resource count, then confirm. The command first backs up the target computer's settings.
5. Save your models and close every Rhino window, including other running Rhino 8 or 9 instances. The settings are written after they exit and take effect the next time Rhino starts.

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Action | Action | command-line option | Selection required | Export / Import | Export on the source computer and import on the target, or use export as a local settings backup. |
| Include API credentials | IncludeApiCredentials | export confirmation | No | Yes / No / Cancel | No removes API keys, tokens, and proxy credentials from RSTool settings and preserves existing target credentials on import. Yes includes portable plaintext credentials in the package. |
| Package file | PackageFile | file selection | A dated filename is suggested for export | .rssettings | Choose a destination when exporting or an existing package when importing. The confirmation shows the source and a content summary. |
| Exit current Rhino now | ExitNow | confirmation after staging import | User choice | Yes / No | Yes requests exit from the current Rhino instance; No lets you exit later. All Rhino windows must close before the import is applied. |

**Notes**:

## What can be transferred

- Rhino options, display modes, interface layouts, toolbars, and readable plugin settings.
- Rhino default templates, environment maps, custom templates, and external display textures or toolbar files that can be identified and found in the settings. Paths to packaged resources are adjusted during import.
- Common RSTool configuration and settings data for Profile Director, Modeling Companion actions and workflows, to-dos, and mind maps.

## Moving to another computer

Export on the old computer, copy the package to the new one, and import it there. Rhino major versions must match: a Rhino 8 package can only be imported into Rhino 8, not Rhino 9. Settings transfer does not install plugins or copy entire local model and material libraries. Copy those separately, then check their configured directories. RSTool license files are excluded; authorize the target computer separately.

Import replaces the corresponding target settings included in the package. An automatic backup is created first, with its location shown in the completion message. Save your models before closing every Rhino instance. Confirming import only queues it; the current window does not switch settings immediately.

## API credentials and export messages

Keep the default No for API credentials when transferring interface preferences and other settings. Choose Yes to migrate your API keys, tokens, and proxy credentials too. The package will contain plaintext credentials, so keep it private and do not share it publicly.

Review any export warnings for resources that could not be read or found before using the package.
