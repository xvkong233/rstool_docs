# rsDiscreteCity · Discrete City

> Module: Architecture / Building Elements

[← Back to command index](/en/commands/)

**Function**: Arrange building modules on a grid under interface, support, and access constraints, compare schemes, then bake Rhino blocks.

**Run**: Enter `rsDiscreteCity` in the Rhino command line (opens a settings window).

**Workflow**:

1. Start with Garden Community, Courtyard, Terraced Settlement, or Waterfront and click Preview Preset to explore examples.
2. For a custom project, use Site to set a horizontal closed boundary, grid dimensions, levels, exclusions, entries, paths, and form.
3. In Modules, use built-ins or capture geometry, set occupied cells and weights, configure exposed-face interfaces, and apply the edits.
4. In Rules, review matching, support, and circulation constraints, preview/check the grid and paths, then generate.
5. In Solutions, change seed, generate batches, or compare side by side. Lock modules, inspect/replace instances, or recalculate a region.
6. Read diagnostics and audit the scheme, then Bake to Rhino. Save a project or module library to continue later.

**Parameters**:

### Site: bounds, grid, and form

Use a horizontal closed site boundary with optional holes and exclusions. Only fully contained cells participate. Zoning and form height limits both apply. Automatic paths are circulation scaffolds, not road-engineering models.

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Grid cell X / Y / Z | cellSize | double | 6 / 6 / 3 m | Each 0.001–10000 m | All panel lengths are meters, regardless of document units. Modules are not scaled to fit cells. |
| Maximum levels | levels | int | 6 | 1–100 | Also limited by zoning heights, setbacks, and other form constraints. |
| Grid orientation | angle | double | 0° | −360–360° | Rotates the grid about world Z, not arbitrary individual module rotations. |
| Path width / automatic nodes | paths | double / int | 3 m / 6 | Width 0.001–10000 m; nodes 0–100 | Rasterized to paths at least one cell wide; inspect connectivity with guide curves and entries. |
| Building form | form | group | Current preset/project | Courtyard, clusters, setbacks, tower, and podium | Form dimensions use cell counts and positions use percentages; preview the form grid before solving. |

### Modules: geometry, occupancy, and interfaces

Capture supports Breps, meshes, extrusions, and nested blocks as snapshots without deleting sources. Check occupancy before interfaces and apply module and interface edits explicitly.

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Module occupied cells | occupancy | text | Per module | Must include 0,0,0; at most 64 face-connected cells | For example 0,0,0;1,0,0. Geometry must fit the declared occupancy. |
| Module / category weights | weight | double | Per module/project | ≥0; 0 disables | Random-selection preferences, not exact counts or area quotas. |
| Interfaces and internal access | interfaces | group | Per module | Type, required connection, boundary allowance, support, access groups | Click Apply Interface after edits. Separate internal access groups are not implicitly connected. |

### Rules: matching, support, and access

Same-name interfaces match by default and prohibitions take precedence. Empty interfaces match empty interfaces. Support chains must reach ground/foundation, and required access groups must reach entries. These are discrete constraints, not structural safety calculations.

### Solutions: generation, diagnostics, and edits

Weights and density explore form without guaranteeing targets. Start small; limits are 50000 active cells, 128 module types, and 512 expanded states. Regional recalculation spans all levels, respects locks, and keeps the previous scheme on failure.

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Density / height falloff | density | double | 0.55 / 0.3 | 0.01–0.99 / 0–10 | Both are random preferences, not exact site coverage or floor-area ratios. |
| Seed / batch count | seedBatch | int | 1 / 4 | Nonnegative integer seed; batch 1–20 | Fixed inputs and budgets help reproduce results; new seeds explore variants. |
| Attempts / backtracks per attempt | searchBudget | int | 8 / 2000 | 1–100 / 0–100000 | Exhausting the budget means no scheme was found in that search, not proof of impossibility. |

**Notes**:

### Preview, bake, and save

Previews do not create document objects. Bake to Rhino creates block instances in one undoable operation. Old schemes remain after input edits but cannot be baked under changed settings: restore their inputs or regenerate. Preset switching keeps session caches; save projects before closing.

Projects and module libraries use .rstdiscrete packages containing settings, geometry, materials, and accessible textures. Imported libraries require matching cell sizes. Geometry is stored as a snapshot and does not follow source edits.

### Scope

This is constrained grid-based generation, not free growth on arbitrary terrain. Non-square grids allow 0°/180° and square grids can allow 90° rotations. Built-in modules are conceptual, without automatic exact planning targets, structural checks, code checks, or construction documents. Switching documents cancels solving. Save the project before changing units, then reopen.
