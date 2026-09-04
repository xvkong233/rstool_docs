# Changelog

This page records the new features, experience optimizations and problem fixes of each release of RsTool in reverse version order. RsTool (Rhino plug-in) and RSTool.Grasshopper (GH component) are released simultaneously, and the version numbers are common to both. You can click on the command name in the entry to jump to the corresponding command document.

The latest version is currently **1.2.4**. For installation and upgrade methods, see [Installation Guide](/en/commands/installation/).

## 1.2.4(2026-09-02)

### Added

- [Modeling Companion](/en/commands/rsModelingCompanion) adds a variety of house type models, and the companion content library continues to expand.

### Improved

- The RsTool toolbar continues to be improved; the file tree display order of [rsModel](/en/commands/rsModel) and [rsMaterial](/en/commands/rsMaterial) has been adjusted.
- [rsWhiteboard](/en/commands/rsWhiteboard) Whiteboard experience optimization.

## 1.2.3(2026-09-01)

### Added

- [rsWhiteboard](/en/commands/rsWhiteboard) Added storyboard function to whiteboard.

### Improved

- The RsTool toolbar is changed to automatically generated, and new commands are automatically synchronized to the toolbar, eliminating the need for manual maintenance.
- All ETO windows are displayed on top and are no longer blocked by the Rhino window.

### Fixed

- Solve the interface stuck problem introduced by new functions.

## 1.2.2(2026-08-31)

### Improved

- The toolbar folder tree is deobfuscated and the directory structure is directly visible.

### Fixed

- [rsHotbox](/en/commands/rsHotbox) The settings window is not centered when it is first opened.
- The global axis lock state is not automatically reset after placing a point.

## 1.2.1(2026-08-30)

### Added

- **Modeling Companion Pets**: Added [Modeling Companion](/en/commands/rsModelingCompanion) lightweight display switching tool for AI pets and models, and continues to expand new pets, new functions and interactive guidance.
- **Hot Box**: [rsHotbox](/en/commands/rsHotbox) Added shortcut keys to call out and gesture interaction.
- **Quick Measurement**: Added quick measurement command.
- **Rhino → Maya**: Added one-click sending model to Maya ([rsSendToMaya](/en/commands/rsSendToMaya), [rsMayaTransferSettings](/en/commands/rsMayaTransferSettings)).
- **GH Component**: Added Alembic mesh animation export ([Export Mesh Alembic](/en/commands/export-mesh-alembic)) and loop (Loop) components.
- **SubD circular quantization**: Added SubD circular quantization command.
- **One-click flattening**: Added [rsLayFlat](/en/commands/rsLayFlat), one-click flattening of objects to the ground.
- **Section Tool**: Added polyline/curve section tool ([rsPolylineSection](/en/commands/rsPolylineSection)).
- **Interactive Escalator**: [rsEscalator](/en/commands/rsEscalator) supports interactive generation of escalators and moving walks.
- **Elevation Panel**: Added [rsElevationPanel](/en/commands/rsElevationPanel), which generates an elevation panel from elevation objects.
- Added several 2D drawing tools and RsTool document viewing commands.

### Improved

- [rsFadingStair](/en/commands/rsFadingStair) gradient stairs, [rsZigZagRamp](/en/commands/rsZigZagRamp) ramps and other commands add real-time interactive preview.
- [rsSimpleSculptor](/en/commands/rsSimpleSculptor) The sculpting brush supports radius changes.
- [rsDisplacementToMesh](/en/commands/rsDisplacementToMesh) Displacement generation optimization, supporting texture adaptive subdivision.
- Wind environment analysis optimization; [rsShadowRender](/en/commands/rsShadowRender) rendering shadow supports worksession reference.
- Added legend control for terrain analysis.
- [rsPdfTools](/en/commands/rsPdfTools) PDF tool preview and conversion enhancements.
- [rsAiAnimation](/en/commands/rsAiAnimation) supports returning multiple drawing results at one time.
- [rsImageStudio](/en/commands/rsImageStudio) / [rsVectorStudio](/en/commands/rsVectorStudio) The toolbar is compacted, hand-drawing is smoothed and optimized, and it supports locking the artboard.
- [rsShadowRender](/en/commands/rsShadowRender) Added softening processing to shadow edges.
- Hotbox interface and setting logic are optimized for smoother operation.

### Fixed

- [rsCopy](/en/commands/rsCopy) / [rsPaste](/en/commands/rsPaste) The pasting reference point is not refreshed.
- Hotbox default button disappears.
- Display problem of [rsQuickColor](/en/commands/rsQuickColor).
- [rsShadowRender](/en/commands/rsShadowRender) Issue with silently outputting white frames.
- When taking a view, [rsMenu](/en/commands/rsMenu) will be merged into the mirror.
- The interception position offset problem of [rsScreenPin](/en/commands/rsScreenPin) in a multi-monitor environment.
- [CanvasTransparent](/en/commands/CanvasTransparent) The viewport state is not restored after exiting.
- The problem of AI rendering image lag when saving.
- The problem of texture and boundary corner points being lost during mesh operations.

## 1.1.8(2026-08-19)

### Added

- **AI Animation**: Added [rsAiAnimation](/en/commands/rsAiAnimation), which can generate AI videos through Seedence and supports Chinese and English bilingual interfaces.
- **Dynamic Component**: Added new parameterized dynamic component system ([rsDynamicComponent](/en/commands/rsDynamicComponent), [rsCreateDynamicComponent](/en/commands/rsCreateDynamicComponent), etc.), supporting parameters, binding and interactive actions.
- **TXT Reader**: Added [rsTxtReader](/en/commands/rsTxtReader), which can read text files page by page in the Rhino command line.
- **Rhino ↔ SketchUp mutual transfer**: Added one-click mutual transfer ([rsSendToSU](/en/commands/rsSendToSU)) and clipboard synchronization, supporting SketchUp 2022.
- Added AO rendering mode and edge overlay for rendering shadows.
- Added indoor illumination analysis and interactive sunshine analysis preview.

### Improved

- The selection filter supports continued filtering within box selection results.
- The gradient skin generation results can be grouped and assigned to materials separately ([rsGradientChangeByCrv](/en/commands/rsGradientChangeByCrv)).
- [rsImageStudio](/en/commands/rsImageStudio) / [rsVectorStudio](/en/commands/rsVectorStudio) Added actual size artboard.
- [rsWhiteboard](/en/commands/rsWhiteboard) whiteboard and [rsMindMap](/en/commands/rsMindMap) mind map add recently opened records.
- [RsAutoEnglish](/en/commands/RsAutoEnglish) Operation logic optimization.
- [rsAIModeler](/en/commands/rsAIModeler) Building intelligence enhancement.
- [rsBuildingArea2D](/en/commands/rsBuildingArea2D) Added floor area ratio calculation.
- [rsQuickColor](/en/commands/rsQuickColor) color palette optimization.
- Dense mesh carving performance optimization.

### Fixed

- [rsEarth](/en/commands/rsEarth) Partition splicing and material generation errors.
- The problem of incomplete display of the interface under different zoom ratios on high-resolution screens.
- The problem of losing the wall when inserting doors and windows under the mm template.
- The Studio workbench viewport is reset when importing a model into Rhino.
- [rsPaste](/en/commands/rsPaste) The reference point is not updated.

## 1.1.7(2026-08-03)

### Added

- **AI modeling agent**: [rsAIModeler](/en/commands/rsAIModeler) introduces building agent and MCP bridge.
- **Vector Studio**: The new vector studio [rsVectorStudio](/en/commands/rsVectorStudio) supports hand-painted smoothing, transparency and path fillet control.
- **Image Studio**: Image Studio (formerly rsPS) has been renamed [rsImageStudio](/en/commands/rsImageStudio), with new capabilities such as magic wand selection and image editing.
- **3ds Max Export**: Added licensed version of 3ds Max FBX exporter.
- **Whiteboard Gallery**: [rsWhiteboard](/en/commands/rsWhiteboard) Added persistent gallery.
- **Screenshot floating window**: Added [rsScreenPin](/en/commands/rsScreenPin) screenshot to paste on the screen.
- **Custom material PBR**: Added [rsPBRToCustomMaterial](/en/commands/rsPBRToCustomMaterial).
- **Group nesting**: [rsQuickNest](/en/commands/rsQuickNest) supports group nesting and independent OpenNest worker processes.
- **White model/Shadow channel export**: New white model and shadow channels are added to the modeling output.
- **GH Components**: Component library and wire editing extension.
- Section profile and part anchor point options expanded ([rsProfileDirector](/en/commands/rsProfileDirector)).

### Improved

- The WebView2 interface is changed to adaptive loading.
- [rsElevation2D](/en/commands/rsElevation2D) window no longer locks the Rhino window.
- [rsAutoParking](/en/commands/rsAutoParking) supports more exclusions.

### Fixed

- GH plugin loading conflicts are clearly reported.
- Shared whiteboard Newtonsoft dependency conflict on Rhino side.
- [Linked C#](/en/commands/linked-csharp) Connection persistence fixed.

## 1.1.6(2026-07-26)

### Added

- **Key floating window**: Added [rsKeyCast](/en/commands/rsKeyCast) configurable key floating layer and [rsKeyCastSettings](/en/commands/rsKeyCastSettings) display control.

### Fixed

- [rsHeightDot](/en/commands/rsHeightDot) Several issues fixed.

## 1.1.5(2026-07-26)

### Added

- **Whiteboard**: The new [rsWhiteboard](/en/commands/rsWhiteboard) whiteboard function supports local drawing and LAN sharing and collaboration.
- **Mind Map**: Added [rsMindMap](/en/commands/rsMindMap).
- **PDF Tools**: Added offline [rsPdfTools](/en/commands/rsPdfTools).
- **Hair System**: Added previewable [rsHairSystem](/en/commands/rsHairSystem).
- **Building Area**: Added [rsBuildingArea2D](/en/commands/rsBuildingArea2D) building area calculation (including fine mode and deduction body).
- **Building elevation**: Added [rsElevation2D](/en/commands/rsElevation2D) two-dimensional elevation.
- **Curtain Wall**: Added [rsCurtainPlus](/en/commands/rsCurtainPlus), supporting multi-surface and G0 hemming.
- **Curve breakpoint search**: Added [rsFindCurveGaps](/en/commands/rsFindCurveGaps).
- **Run multiple stairs**: Added [rsMultiFlightStairs](/en/commands/rsMultiFlightStairs).
- **Membrane Structure**: Membrane structure form-finding process and point anchoring ([rsMembrane](/en/commands/rsMembrane)).
- **GH Component**: Added [Linked C#](/en/commands/linked-csharp) component, [Tessellate NURBS](/en/commands/tessellate-nurbs) operator, and integrated the authorized version of RSTool.Grasshopper plug-in.
- **2D hole editing**: Added 2D hole move/copy/edit commands ([rsMoveOpening2D](/en/commands/rsMoveOpening2D), [rsCopyOpening2D](/en/commands/rsCopyOpening2D), [rsEditOpening2D](/en/commands/rsEditOpening2D)).
- **Arc Fitting**: Added [rsFitArcChain](/en/commands/rsFitArcChain) tangent arc fitting.
- **Terrain Download**: Supports continuous terrain splicing download ([rsTerrain](/en/commands/rsTerrain)).
- Reconstruction of the authorization system: remove the authorization within the plug-in and pass App authentication uniformly.
- Added collection function to material library.

### Improved

- [rsMenu](/en/commands/rsMenu) Added search, rounded corner UI, zoom and light and dark theme layout.
- [rsProfileDirector](/en/commands/rsProfileDirector) Library and panel workflows have been greatly improved.
- AI rendering image workflow and local re-rendering ([rsAiRender](/en/commands/rsAiRender)).
- [rsHeightDot](/en/commands/rsHeightDot) supports carriage return/space/right-click to end commands.

### Fixed

- Some display issues in the English interface.
- [rsSuExport](/en/commands/rsSuExport) Export retains tile instances, SubD export quality improved.
- Authorization automatically checks HTTP 500 and activation service 5xx prompts.
- [rsWall](/en/commands/rsWall) / [rsWall2D](/en/commands/rsWall2D) The connection between the wall and the opening has been repaired in many places.
- [rsCurtainWall2D](/en/commands/rsCurtainWall2D) Preview is aligned with output.
- Overlapping curve cleaning ([rsCleanUpOverlappingCurves](/en/commands/rsCleanUpOverlappingCurves)).

## 1.1.4(2026-07-12)

### Added

- **2D building plan drawing**: Added 2D wall drawing command group ([rsWall2D](/en/commands/rsWall2D), [rsFilletWall2D](/en/commands/rsFilletWall2D), [rsBreakWall2D](/en/commands/rsBreakWall2D) etc.), including two-dimensional corner inversion and conversion to ordinary line drawing ([rsConvertA2DToNormalCurves](/en/commands/rsConvertA2DToNormalCurves)).
- **Free 2D Stairs**: Added [rsPolylineStair2D](/en/commands/rsPolylineStair2D).
- **Quick nesting**: Added [rsQuickNest](/en/commands/rsQuickNest).
- **Slime Mold Simulation**: Added [rsPhysarum](/en/commands/rsPhysarum).
- [rsEarthOld](/en/commands/rsEarthOld) The old Earth command returns.

### Improved

- Two-dimensional drawing performance optimization, new fast indexing.
- [rsProfileDirector](/en/commands/rsProfileDirector) generates logic optimization and supports Chinese interface.
- AI rendering adaptation GPT Image 2 partial redrawing ([rsAiRender](/en/commands/rsAiRender)).
- [rsThreeBody](/en/commands/rsThreeBody) Three-body motion interface and rendering shadow optimization.
- A new UI interactive interface has been added for curtain wall generation and structural line extraction.

### Fixed

- The arrow position of the straight stairs is wrong and the break line is added.
- [rsWall](/en/commands/rsWall) Multiple wall intersection problem.
- [rsWall2D](/en/commands/rsWall2D) The connection between the opening and the wall has been repaired in many places.
- Problem with residual track preview when exporting animation.
- [rsMenu](/en/commands/rsMenu) New commands are not displayed.
- rsEarth, AI rendering, and gallery window are localized according to Rhino language and adapted to high-resolution screens.
- [rsQuickColor](/en/commands/rsQuickColor), [rsHeightDot](/en/commands/rsHeightDot) window layout and position fixes.
- [rsAutoBoxMapping](/en/commands/rsAutoBoxMapping) Heavy geometry protection.
- Automatically switch to the old implementation when the WebView command fails to load.

## 1.1.3(2026-06-19)

### Added

- **Image line draft**: Added [rsImageToCurve](/en/commands/rsImageToCurve) and introduced Vtrace vectorization.
- **Quick Coloring**: Added [rsQuickColor](/en/commands/rsQuickColor), supports undo and transparency.
- **Axis**: Added [rsArchiGrid](/en/commands/rsArchiGrid).
- **Grid surface reduction**: Added [rsReduceMeshByCurvature](/en/commands/rsReduceMeshByCurvature).
- **Cluster Simulation**: Added [rsBoids](/en/commands/rsBoids) (supports attracting sources).
- **Cloth Simulation**: Added [rsClothFluttering](/en/commands/rsClothFluttering) cloth blowing.
- **Steel structure grid**: Added [rsSpaceTruss](/en/commands/rsSpaceTruss), supporting single-layer grid.
- **Curve expansion**: Added [rsUnrollCrv](/en/commands/rsUnrollCrv).
- **Visibility Analysis**: Added [rsVisibilityAnalysis](/en/commands/rsVisibilityAnalysis).
- Texture interference mesh gradient ([rsTileMeshBlendByBitmap](/en/commands/rsTileMeshBlendByBitmap)).
- [rsTesselateNurbs](/en/commands/rsTesselateNurbs) Added random rectangle and other surface division methods.
- [rsSetCamera](/en/commands/rsSetCamera) Added two-point perspective.
- [rsHeightDot](/en/commands/rsHeightDot) Added feet/inch units.
- [rsToolLocation](/en/commands/rsToolLocation) opens the plug-in directory; [rsToolStart](/en/commands/rsToolStart) supports automatic pop-up of the group toolbar.
- The engraving tool supports grayscale image interference ([rsSimpleSculptor](/en/commands/rsSimpleSculptor)).
- Structural mechanics analysis enhancement ([rsStructuralAnalysis](/en/commands/rsStructuralAnalysis)).
- Added ETO interface for gradient selection ([rsGradientSelcectByCrv](/en/commands/rsGradientSelcectByCrv)).

### Improved

- [rsMenu](/en/commands/rsMenu) Grouping and icon updates, Chinese and English adaptation.
- [rsProfileDirector](/en/commands/rsProfileDirector) Chinese interface, tile support and cross-piece panel.
- New preview for road generation ([rsRoadGenerator](/en/commands/rsRoadGenerator)); [rsRoadLine](/en/commands/rsRoadLine) added left-hand drive option.
- Visual analysis multi-thread acceleration; rsWind CFD running speed.
- Placement of cameras supports Brep/Mesh/SubD.
- [rsShadowRender](/en/commands/rsShadowRender) supports section rendering to speed up rendering.

### Fixed

- Problems with window generation under mm template, [rsBubble](/en/commands/rsBubble) bubbles, and grid gradient skin reporting errors.
- T-shaped wall chamfers are incorrect ([rsFilletWall](/en/commands/rsFilletWall)).
- [rsDoor](/en/commands/rsDoor) generation failure problem.
- [rsQuickColor](/en/commands/rsQuickColor) The English interface is not fully displayed.
- [rsRoofTile](/en/commands/rsRoofTile) Roof tiles are missing.
- [rsSuExport](/en/commands/rsSuExport) Export missing objects.
- Authorization verification agent connectivity and version reporting DLL loading failure handling.
- The problem of incomplete display of pop-up window buttons.

## 1.1.1(2026-05-31)

### Added

- **Walking Simulation**: Added [rsWalker](/en/commands/rsWalker), supporting HUD right-click operation.
- **Flood Spotlight Analysis**: Added [rsSolarFocusRiskSimulation](/en/commands/rsSolarFocusRiskSimulation).
- Wall chamfering ([rsFilletWall](/en/commands/rsFilletWall)).

### Improved

- [rsRoofTile](/en/commands/rsRoofTile) supports custom tile spacing.
- [rsRailing](/en/commands/rsRailing) The vertical support is changed to generate Mesh and supports real-time linkage with the curve.
- Added [MeshPipe](/en/commands/MeshPipe), [MeshLoft](/en/commands/MeshLoft) methods.
- [rsTileQuadNurbsBlend](/en/commands/rsTileQuadNurbsBlend) Supports flow mesh and SubD elements.
- [rsShadowRender](/en/commands/rsShadowRender) Added medium image quality, outline thickness and shadow level controls.
- [rsWindow](/en/commands/rsWindow) The generated window supports real-time linkage of Rhino objects.

### Fixed

- [rsRailing](/en/commands/rsRailing), [rsDoor](/en/commands/rsDoor) generation failure causes Rhino to crash.
- [rsWindow](/en/commands/rsWindow) Only a single wall can be selected.
- The problem of holes in sloped roofs.
- [rsRoadLine](/en/commands/rsRoadLine) English version reticle type is not displayed.
- [rsSuExport](/en/commands/rsSuExport) Export missing tiles.

## 1.1.0(2026-05-19)

### Added

- **Top Main Menu**: Added Rhino top main menu [rsMenu](/en/commands/rsMenu).
- **Double running stairs**: Added [rsDoubleFlightStairs](/en/commands/rsDoubleFlightStairs); [rsSpiralStair](/en/commands/rsSpiralStair) new ETO interface for the spiral staircase.
- **Wind Environment CFD**: [rsWindAnalysis](/en/commands/rsWindAnalysis) Added real CFD simulation.
- **Sunshine Analysis**: Added grid-based [rsSunlightAnalysisByMesh](/en/commands/rsSunlightAnalysisByMesh) and [rsSunlightAnalysisByGrid](/en/commands/rsSunlightAnalysisByGrid).
- **Maya → Rhino**: Added [rsCopyMayaToRhino](/en/commands/rsCopyMayaToRhino) to copy Maya models to Rhino.
- **Grid brush coloring**: Added [rsMeshColorPaint](/en/commands/rsMeshColorPaint) and gradient mesh by color.
- **WeChat Notification**: Added [rsWeChatSend](/en/commands/rsWeChatSend) to send WeChat messages regularly.
- **Roof tiles**: Added [rsRoofTile](/en/commands/rsRoofTile).
- **Parametric construction workflow**: Doors, windows, stairs, and railings share ETO parameters and preview processes.
- **Open curve fix**: Added [rsRepairOpenCurves](/en/commands/rsRepairOpenCurves).
- Layer command [rsNewLayer](/en/commands/rsNewLayer); convert NURBS unit to grid unit ([rsConvertToMeshPanel](/en/commands/rsConvertToMeshPanel)).
- [rsShadow](/en/commands/rsShadow) Shadow range supports generating transparent fills.

### Improved

- [rsSuExport](/en/commands/rsSuExport) The export process is changed to extract the rendering grid first to solve the problem of direct export lag.
- [rsAutoParking](/en/commands/rsAutoParking) Parking space generation is optimized and green belts are added.
- TileNurbs paving supports UV adjustment options and polysurface continuous division.
- Mesh gradient and NURBS gradient skin process optimization.
- [rsBubble](/en/commands/rsBubble) is generated by height instead.
- Rendering shadows have been significantly updated (Perfect Shadows first version).
- [rsTesselateNurbs](/en/commands/rsTesselateNurbs) supports real-time preview.

### Fixed

- The problem of misjudgment of offline status.
- Fixed the issue where the plug-in is still occupied after closing the activation window.
- The activation window is on top by default.
- [rsCurtain](/en/commands/rsCurtain) Contains an error after converting smooth corners to NURBS.
- Command registration is blocked by authorization verification, causing an "unknown command" problem.
- Wrong outline color.
- Swapping UVs does not take effect for rectangular/rhombus divisions.
- [rsGroupToBlock](/en/commands/rsGroupToBlock) Keep the original object properties and return the real result on failure.
- Layer merge cancellation and batch export false alarm successful.
- [rsAiRender](/en/commands/rsAiRender) Template window and history window are created repeatedly.

## 1.0.9(2026-03-29)

### Added

- **Model Cleanup**: Added [rsClean](/en/commands/rsClean), which supports layer and block definition cleanup, material merging and unused material cleanup.
- [rsTileMeshBlend](/en/commands/rsTileMeshBlend) supports SubD streaming.

### Improved

- The old version of the material library ([rsMaterialLibraryOld](/en/commands/rsMaterialLibraryOld)) has the ability to synchronize layer material assignment, and adds new object and layer options.

### Fixed

- Material library scanning omissions and list loading experience.
- [rsClean](/en/commands/rsClean) Pop-up blocking and duplicate material misjudgment.
- The material library reuses existing materials in the document to avoid repeated creation.

## 1.0.8(2026-03-26)

### Added

- **Form Paste**: Added [rsPasteExcel](/en/commands/rsPasteExcel).
- Retrieve [rsExplodeNestedBlocks](/en/commands/rsExplodeNestedBlocks) nested tile explosion command.

## 1.0.7(2026-03-26)

### Improved

- [rsMaterial](/en/commands/rsMaterial) material function update.
- The plug-in is loaded and executed by default [rsToolStart](/en/commands/rsToolStart).

### Fixed

- The material library comes with material blocking and supports rmtl material assignment.
- The model library directory scan results are not displayed.

## 1.0.6(2026-03-24)

The first public release includes:

- Command framework and View command group.
- WebView2 interface rewriting and Eto real-time preview.
- Material library system (including directory icons, undo support).
- AI rendering and architectural inspiration word prompt tool.
- Authorization input, caching and security mechanisms.

---

::: tip Version numbering
The two version numbers 1.1.2 and 1.2.0 were skipped during the release process and have not been released to the public. Please note that.
:::
