# RsTool Command Reference

> Complete reference for all 277 RsTool commands. Each command has a dedicated page covering its purpose, invocation, workflow, parameters, output, notes, and tutorials.

## AI (4)

### Rendering & Modeling

- [rsAiRender · AI rendering](/en/commands/rsAiRender) — Open the AI ​​rendering window to provide AI-assisted rendering functionality. After selecting the perspective, various styles of rendering renderings can be generated.
- [rsAIModeler · AI modeling](/en/commands/rsAIModeler) — Open the AI ​​modeling window and generate a 3D model from a text description or reference drawing.
- [rsAiRenderOld · Legacy AI rendering](/en/commands/rsAiRenderOld) — The old AI rendering window remains compatible. It is recommended to use the new version rsAiRender.

### Video Generation

- [rsAiAnimation · AI animation](/en/commands/rsAiAnimation) — Open the AI ​​animation window and generate a Seedance video through reference pictures (optional reference video/audio) and prompt words.

## Libraries (6)

### Model Library

- [rsModel · Model library](/en/commands/rsModel) — Open the Model Library window to browse and manage built-in 3D model assets. Supports category filtering and search.
- [rsModelOld · Old model library](/en/commands/rsModelOld) — The old model library window remains compatible.
- [InsertAssetOld · Legacy insert model](/en/commands/InsertAssetOld) — Legacy model insertion command, select model insertion from the legacy model library.
- [InsertAsset · Insert model](/en/commands/InsertAsset) — Select a model from the model library and insert it into the current document. The angle can be rotated during insertion.

### Material Library

- [rsMaterial · Material library](/en/commands/rsMaterial) — Open the material library window to browse and manage built-in material resources. Supports PBR material preview.
- [rsMaterialLibraryOld · Legacy material library](/en/commands/rsMaterialLibraryOld) — The old version of the material library window remains compatible.

## Productivity (10)

### Productivity

- [rsMindMap · Mind Map](/en/commands/rsMindMap) — Opens the mind mapping tool to create and edit mind maps in Rhino.
- [rsVectorStudio · Vector Studio](/en/commands/rsVectorStudio) — Open Vector Studio and edit vector graphics within Rhino.
- [rsImageStudio · Image Studio](/en/commands/rsImageStudio) — Open the Image Studio editor for image editing and processing within Rhino.
- [rsPdfTools · PDF tools](/en/commands/rsPdfTools) — Open PDF tools that support PDF import, export, and processing.
- [rsWhiteboard · Whiteboard](/en/commands/rsWhiteboard) — Open the whiteboard tool to freely draw and annotate in Rhino.
- [rsModelingCompanion · Modeling Companion](/en/commands/rsModelingCompanion) — Call up the modeling companion assistant in the Rhino interface and hide or restore it at any time.
- [rsModelingCompanionSettings · Modeling companion settings](/en/commands/rsModelingCompanionSettings) — Open the settings window of the modeling companion assistant and configure the image and behavior of the assistant.

### Screen Tools

- [rsScreenPin · Screenshot floating window](/en/commands/rsScreenPin) — Capture a screen area and fix it on the screen as a floating window for easy reference.
- [rsKeyCast · Keystroke Display](/en/commands/rsKeyCast) — Displays the currently pressed shortcut keys in real time on the screen, suitable for teaching demonstrations and screen recordings.
- [rsKeyCastSettings · Keystroke Display Settings](/en/commands/rsKeyCastSettings) — Open the settings panel displayed by the button to adjust the position, size, style, etc.

## Fun (5)

### Interactive Entertainment

- [rsBrowser · Break-Time Browser](/en/commands/rsBrowser) — Opens the built-in browser window to support web browsing within Rhino.
- [rsThreeBody · Three-body motion simulation](/en/commands/rsThreeBody) — Three-body motion simulator visualizes the gravitational motion trajectories of three celestial bodies.
- [rsWalker · Walkthrough Mode](/en/commands/rsWalker) — Embark on first-person roaming, game-like exploration of the Rhino model.
- [rsFpsGame · FPS reaction test](/en/commands/rsFpsGame) — Play the FPS Reaction Test mini-game in Rhino to test your reaction speed.
- [rsTxtReader · Command-Line Text Reader](/en/commands/rsTxtReader) — Read .txt text files page by page on the Rhino command line. It supports turning pages, skipping lines, adjusting the number of words per line, displaying in forward and reverse order, and automatically recognizing UTF-8 / GBK encoding.

## Architecture (25)

### Roads

- [rsRoadLine · Road Centerline](/en/commands/rsRoadLine) — Generate road center lines based on parameters and support parameter settings such as lane width and sidewalks.
- [rsRoadGenerator · Road Generator](/en/commands/rsRoadGenerator) — Automatically generate a complete road model based on the centerline, including lanes, sidewalks, green belts, etc.
- [rsAutoParking · Automatic Parking Layout](/en/commands/rsAutoParking) — Automatically generate parking space layout based on site contours, supporting parallel/diagonal/perpendicular parking.

### Stairs & Ramps

- [rsStairBySteps · Staircase by Step Count](/en/commands/rsStairBySteps) — Specify the number of steps to generate a parametric staircase, and adjust the step aspect ratio, staircase width, etc.
- [rsDoubleFlightStairs · Double-Flight Staircase](/en/commands/rsDoubleFlightStairs) — Generate double running stairs, including landing. Supports adjusting staircase width, floor height, and number of steps.
- [rsMultiFlightStairs · Multi-Flight Staircase](/en/commands/rsMultiFlightStairs) — Generate multi-run stairs, and you can customize parameters such as the number of runs and the location of the landing.
- [rsSpiralStair · Spiral Staircase](/en/commands/rsSpiralStair) — Generate a spiral staircase with adjustable inner diameter, outer diameter, number of steps and rotation angle.
- [rsEscalator · Escalator](/en/commands/rsEscalator) — Generate an escalator model, including handrails, steps and other components.
- [rsZigZagRamp · Zigzag ramp](/en/commands/rsZigZagRamp) — Generate a zigzag ramp that complies with barrier-free design specifications. Adjustable slope and platform width.
- [rsFadingStair · Tapered Staircase](/en/commands/rsFadingStair) — Generate stairs with gradient step sizes, used for special-shaped special-shaped stairs.
- [rsFadingStairVertical · Vertical Tapered Staircase](/en/commands/rsFadingStairVertical) — Generate a staircase with a vertical gradient, and the step height changes along the vertical gradient.

### Building Elements

- [rsDoor · Door](/en/commands/rsDoor) — Create parameterized doors on the wall, supporting single door, double door, sliding door and other types.
- [rsWindow · Window](/en/commands/rsWindow) — Create parametric windows on the wall, supporting casement windows, sliding windows, fixed windows and other types.
- [rsRailing · Railing](/en/commands/rsRailing) — Generate parametric railings along the path, including handrails, columns and other components. Adjustable spacing and height.
- [rsSpaceTruss · Double-Layer Space Frame](/en/commands/rsSpaceTruss) — Generate a double-layer space grid structure, supporting multiple grid types and parameter configurations.
- [rsCurtain · Curtain wall](/en/commands/rsCurtain) — Generate a curtain wall system on a curved surface, including mullions, beams and panels.
- [rsCurtainPlus · Enhanced Curtain Wall](/en/commands/rsCurtainPlus) — Enhanced curtain wall creation tool with more parameters and customization options.
- [rsOldTownRoof · Traditional Roof](/en/commands/rsOldTownRoof) — Generate a traditional pitched roof in the old town style, including ridges, cornices and other components.
- [rsRoofTile · Roof tile generation](/en/commands/rsRoofTile) — Generate tile paving on the roof surface, supporting different tile types and arrangements.

### 3D Walls

- [rsWall · Smart wall](/en/commands/rsWall) — Create parametric smart walls that are generated along paths. Supports wall thickness, height, material and other parameters. Door and window openings can be processed automatically.
- [rsWallRemoveHole · Remove holes in wall](/en/commands/rsWallRemoveHole) — Remove the door and window openings on the smart wall and restore the wall to its complete state.
- [rsWallJoin · Join Walls](/en/commands/rsWallJoin) — Connect and transfer two or more sections of smart walls.
- [rsFilletWall · Fillet Wall Corners](/en/commands/rsFilletWall) — Round the corners of the wall and adjust the radius.
- [rsWallExtend · Extend Wall](/en/commands/rsWallExtend) — Extend a smart wall to a specified boundary or another section of wall.
- [rsConvertWallToNormalBrep · Convert wall to normal Brep](/en/commands/rsConvertWallToNormalBrep) — Convert smart walls to standard Brep surfaces, unparametrically linked.

## 2D Architecture (21)

### Grids & Walls

- [rsArchiGrid · Smart Architectural Grid](/en/commands/rsArchiGrid) — Create a building grid and support customizing grid spacing, numbering methods and labeling styles.
- [rsWall2D · 2D wall](/en/commands/rsWall2D) — Create two-dimensional planar walls, supporting automatic handover and thickness parameters. Suitable for floor plan drawing.
- [rsDeleteWall2D · Delete 2D wall](/en/commands/rsDeleteWall2D) — Delete 2D walls and automatically handle the endpoints of adjacent walls.
- [rsWall2DReconnect · 2D wall reconnection](/en/commands/rsWall2DReconnect) — Reconnect 2D walls, repairing breaks caused by movement or deletion.
- [rsWall2DAutoJoin · Auto-Join 2D Walls](/en/commands/rsWall2DAutoJoin) — Automatically handle the handover relationship of multiple two-dimensional wall sections and generate correct plan nodes.
- [rsFilletWall2D · Fillet 2D Wall Corners](/en/commands/rsFilletWall2D) — Chamfer the corners of a two-dimensional wall.
- [rsBreakWall2D · Break a 2D wall](/en/commands/rsBreakWall2D) — Break a two-dimensional wall into two sections at a specified location.

### Doors, Windows & Elevators

- [rsDoor2D · 2D Door](/en/commands/rsDoor2D) — Insert the door into the two-dimensional wall, including the opening arc of the door leaf. Supports single door, double door, etc.
- [rsWindow2D · 2D window](/en/commands/rsWindow2D) — Insert a window into a 2D wall, including window frame and glass representation lines.
- [rsElevator2D · 2D Elevator](/en/commands/rsElevator2D) — Insert a 2D elevator block with car and doors in the plan view.
- [rsMoveOpening2D · Move 2D Opening](/en/commands/rsMoveOpening2D) — Move the position of 2D doors, windows or elevators along the wall to automatically update the wall openings.
- [rsCopyOpening2D · Copy 2D Opening](/en/commands/rsCopyOpening2D) — Copy 2D doors, windows or elevators along a wall to automatically create new openings in the wall.
- [rsEditOpening2D · Edit 2D Opening](/en/commands/rsEditOpening2D) — Edit the parameters of 2D doors and windows/elevators, such as width, opening direction, etc.
- [rsDeleteOpening2D · Delete 2D Opening](/en/commands/rsDeleteOpening2D) — Delete 2D doors and windows and automatically repair walls.

### Other 2D Tools

- [rsStair2D · 2D stairs](/en/commands/rsStair2D) — Create a 2D flat staircase illustration with tread lines and directional arrows.
- [rsPolylineStair2D · Polyline 2D Staircase](/en/commands/rsPolylineStair2D) — Create a two-dimensional staircase along a custom polyline, suitable for special-shaped staircase planes.
- [rsCurtainWall2D · 2D Curtain Wall](/en/commands/rsCurtainWall2D) — Create a 2D curtain wall representation line in a plan view.
- [rsElevation2D · Building elevation](/en/commands/rsElevation2D) — Create building elevation dimensions for use in elevations and sections.
- [rsBuildingArea2D · Building area](/en/commands/rsBuildingArea2D) — Calculate and mark the building area, and support statistics by floor.
- [rsConvertA2DToNormalCurves · Convert 2D Architecture to Curves](/en/commands/rsConvertA2DToNormalCurves) — Convert 2D building objects (walls, doors, windows, etc.) into ordinary curves and cancel parametric associations.
- [rsElevationPanel · Elevation panel](/en/commands/rsElevationPanel) — The elevation object or group generated by rsElevation2D generates an elevation panel.

## Terrain (6)

### Acquisition & Editing

- [rsEarth · Terrain Downloader](/en/commands/rsEarth) — Download terrain elevation data for a specified area from an online map service and generate a grid.
- [rsEarthOld · Legacy Terrain Downloader](/en/commands/rsEarthOld) — The old version of terrain download function remains compatible.
- [rsTerrainEdit · Edit terrain](/en/commands/rsTerrainEdit) — Edit the terrain grid, such as local lifting, lowering, flattening, etc.

### Analysis & Simulation

- [rsTerrain · Terrain Mesh](/en/commands/rsTerrain) — Generate terrain mesh surfaces from elevation points or contours.
- [rsTerrainAnalysis · Terrain analysis](/en/commands/rsTerrainAnalysis) — Multi-dimensional analysis of terrain: elevation, slope, aspect, concavity, roughness, etc., visualized with color mapping.
- [rsRainFlowSimulation · Rainwater Flow Analysis](/en/commands/rsRainFlowSimulation) — Simulate the flow path of rainwater on terrain surfaces for drainage analysis.

## Geometry (38)

### Curves

- [rsImageToCurve · Convert image to curve](/en/commands/rsImageToCurve) — Vectorize bitmap images into Rhino curves with support for adjusting precision and threshold.
- [rsFilletNonPlanar · Fillet Non-Planar Curves](/en/commands/rsFilletNonPlanar) — Perform rounding processing on non-coplanar curves and support curve beveling in three-dimensional space.
- [rsFitArcChain · Tangent arc fitting](/en/commands/rsFitArcChain) — Fitting curves with tangent arc chains is often used to convert free curves into arc segment combinations.
- [rsExtractIsoCrvByNum · Extract isoparms by quantity](/en/commands/rsExtractIsoCrvByNum) — Extracts isoparms (U/V direction) uniformly on the surface according to the specified number.
- [rsRandomTrimCurve · Randomly trim curves](/en/commands/rsRandomTrimCurve) — Trim the curve according to random parameters to generate irregular segments.
- [rsSplitCrvAtIntersection · Split curves at intersection points](/en/commands/rsSplitCrvAtIntersection) — Automatically split curves at curve intersections to generate multiple independent curves.
- [rsRepairOpenCurves · Repair open curves](/en/commands/rsRepairOpenCurves) — Automatically repair open curves, close gaps or extend connections.
- [rsFindCurveGaps · Find Curve Gaps](/en/commands/rsFindCurveGaps) — Find and mark gaps and breakpoints in curves to help repair unclosed curves.
- [rsCleanUpOverlappingCurves · Clean up overlapping curves](/en/commands/rsCleanUpOverlappingCurves) — Detect and remove overlapping curve segments, leaving unique curves intact.
- [rsUnrollCrv · Straighten Curve](/en/commands/rsUnrollCrv) — Straighten the curve into a straight segment, keeping the length constant. Suitable for expansion calculations.

### Surfaces

- [rsLoftCurvesPairs · Loft Curve Pairs](/en/commands/rsLoftCurvesPairs) — Loft out multiple sets of curves in pairs to generate surfaces, and process multiple sets of sections in batches.
- [rsSectionSweep · Section sweep](/en/commands/rsSectionSweep) — Sweep the section along the path curve to generate a surface, supporting variable sections.

### Meshes

- [rsMeshWindow · Mesh Toolkit](/en/commands/rsMeshWindow) — Open the mesh tool window and integrate a variety of mesh editing and processing functions.
- [rsTriRemesh · Triangle Remesh](/en/commands/rsTriRemesh) — Re-triangulate the mesh to generate a uniform triangular mesh. Supports control by side length.
- [rsDualMesh · Dual Mesh](/en/commands/rsDualMesh) — Generate the dual mesh of the mesh, converting the face centers to vertices.
- [rsDiamondMesh · Diamond Mesh](/en/commands/rsDiamondMesh) — Convert the mesh to a diamond mesh representation.
- [rsSubdivideMesh · Subdivide Mesh](/en/commands/rsSubdivideMesh) — Subdivide the mesh and increase mesh density. Supports subdivision modes such as Catmull-Clark.
- [rsUnifyQuadMesh · Unified quadrilateral mesh](/en/commands/rsUnifyQuadMesh) — Unify the normal direction and topology of the quadrilateral mesh.
- [rsFlipClosedMeshOutward · Flip Closed Mesh Outward](/en/commands/rsFlipClosedMeshOutward) — Flip the closed mesh's normals outwards, making sure the normals are in the same direction.
- [rsJoinMeshesByMaterials · Merge meshes by material](/en/commands/rsJoinMeshesByMaterials) — Merge meshes with the same material into one mesh, reducing Draw Calls.
- [rsReduceMeshByCurvature · Reduce Mesh by Curvature](/en/commands/rsReduceMeshByCurvature) — The number of mesh faces is intelligently reduced according to the surface curvature, and the number of faces is reduced more in areas with low curvature.
- [rsDisplacementToMesh · Displacement map to real mesh](/en/commands/rsDisplacementToMesh) — Bake displacement/bump maps of Rhino objects into true mesh geometry with support for quality presets, real-time preview and production risk checks.
- [rsMeshFrame · Mesh Frame](/en/commands/rsMeshFrame) — Generate a retracted frame (Picture Frame) topology in each face of the original mesh, which is complementary to rsMeshWindow and is suitable for making mesh/frame effects.
- [rsHairSystem · Hair system](/en/commands/rsHairSystem) — Create a hair system on the mesh surface and control parameters such as density, length, direction, etc.
- [rsConvertToMeshPanel · NURBS unit to Mesh unit](/en/commands/rsConvertToMeshPanel) — Convert NURBS panels to mesh panels for subsequent paving and gradient operations.
- [rsSimpleSculptor · Quick Mesh Sculptor](/en/commands/rsSimpleSculptor) — A quick mesh sculpting tool that supports interactive mesh editing such as push-pull and smoothing.

### Object Transforms

- [rsArrayBetween · Array between two objects](/en/commands/rsArrayBetween) — Make an even array between two objects, automatically calculating spacing and quantity.
- [rsSprinkerOne · Single-Point Scatter](/en/commands/rsSprinkerOne) — Spread objects around a single point and control the spread range and quantity.
- [rsSprinkerMutiple · Multi-Point Scatter](/en/commands/rsSprinkerMutiple) — Spread objects around multiple points, suitable for large-area vegetation layout.
- [rsPlaceObjsOnCrv · Place objects along a curve](/en/commands/rsPlaceObjsOnCrv) — Place objects along a curved path with control over spacing, rotation, and alignment.
- [rsGradientChangeByCrv · Gradient transformation along curve](/en/commands/rsGradientChangeByCrv) — Gradually scale or rotate an object along a reference curve.
- [rsRandomChange · Random Transform](/en/commands/rsRandomChange) — Perform random scaling, rotation, movement and other transformations on the selected objects.
- [rsMoveToOrigin · Move to origin](/en/commands/rsMoveToOrigin) — Move the selected object to the origin of the world coordinate system.
- [rsMoveProject · Move Project](/en/commands/rsMoveProject) — Move objects with engineering precision and support input of precise coordinate values.
- [rsLayFlat · Flatten with one click](/en/commands/rsLayFlat) — Pick a face on the object and rotate the entire object flat to the plane of the face.

### Points

- [rsRandomPtsOnCrv · Random point on curve](/en/commands/rsRandomPtsOnCrv) — Generate randomly distributed points on the curve, controllable number and random seed.
- [rsRandomPtsOnObj · Randomly generated points on an object](/en/commands/rsRandomPtsOnObj) — Generate randomly distributed points on the surface of the object, supporting meshes and surfaces.
- [rsDivideCrvByRoundedCount · Divide Curve by Rounded Count](/en/commands/rsDivideCrvByRoundedCount) — Divide the curve by the rounded amount, ensuring that the number of equal segments is rounded.

## Paneling & Facades (6)

### General

- [rsTesselateNurbs · Panelize NURBS](/en/commands/rsTesselateNurbs) — Subdivide the NURBS surface to generate a panelized structure.
- [rsTileQuadNurbsBlend · Blend Panels on Quad NURBS](/en/commands/rsTileQuadNurbsBlend) — Generate gradient skin patterns on NURBS surfaces.
- [rsTileMeshBlend · Blend Panels on Mesh](/en/commands/rsTileMeshBlend) — Generate pavement patterns on the mesh surface, supporting mixed transitions between different patterns.
- [rsTileMeshBlendByColor · Blend Mesh Panels by Color](/en/commands/rsTileMeshBlendByColor) — Generate a gradient pavement skin based on mesh vertex color, with color driving pattern density or type.
- [rsTileMeshBlendByBitmap · Blend Mesh Panels by Bitmap](/en/commands/rsTileMeshBlendByBitmap) — Generate a gradient pavement surface based on the map image, and the image grayscale or color drives the pattern changes.
- [rsMeshColorPaint · Mesh Color Brush](/en/commands/rsMeshColorPaint) — Use a brush to draw color on the mesh, supporting real-time interactive painting.

## Organization & Selection (20)

### Selection

- [rsSelectSimilar · Similar object selection](/en/commands/rsSelectSimilar) — Select objects that are similar to the current object (same type, same layer, same material, etc.).
- [rsGradientSelcectByCrv · Gradient Selection by Curve](/en/commands/rsGradientSelcectByCrv) — Make gradient selections based on distance from the reference curve.
- [rsSelectByPrintWidth · Select by print width](/en/commands/rsSelectByPrintWidth) — Filters the selection by the object's plot lineweight property.
- [rsSelectBySrfEdgeCount · Select by number of surface edges](/en/commands/rsSelectBySrfEdgeCount) — Filters the selection of surfaces by their number of sides (trimmed face).
- [rsSelectHathByName · Select Hatches by Name](/en/commands/rsSelectHathByName) — Select the corresponding fill object according to the name of the fill pattern.
- [rsRandomSelection · Random Selection](/en/commands/rsRandomSelection) — Randomly selects a proportion or number of objects from the current objects.

### Layers

- [rsNewLayer · Create new layer](/en/commands/rsNewLayer) — Quickly create new layers with custom names and colors.
- [rsCloseObjLayer · Close the layer where the object is located](/en/commands/rsCloseObjLayer) — Close the layer where the selected object is located to quickly hide unnecessary objects.
- [rsMoveLayerObjs · Move layer objects](/en/commands/rsMoveLayerObjs) — Moves all objects from one layer to another destination layer.
- [rsMergeLayers · Merge layers](/en/commands/rsMergeLayers) — Merge multiple layers into one.
- [rsAssignLayerMaterialToObj · Assign layer material to object](/en/commands/rsAssignLayerMaterialToObj) — Assigns a layer material directly to all objects on that layer.
- [rsAssignRandomMaterialToLayers · Randomly assign materials by layer](/en/commands/rsAssignRandomMaterialToLayers) — Randomly assign materials to different layers to make them easier to distinguish.
- [rsAssignRandomColorToLayer · Assign Random Layer Colors](/en/commands/rsAssignRandomColorToLayer) — Randomly assign display colors to layers for easier visual differentiation.
- [rsAutoSegColorToLayer · Assign Segmented Colors to Layers](/en/commands/rsAutoSegColorToLayer) — Automatically segment objects by their properties, assign them to different layers and color them.
- [rsBlockObjectsToLayer · Move Block Hierarchy to Layers](/en/commands/rsBlockObjectsToLayer) — Classify the objects in the block definition into specified layers according to rules.
- [rsDeleteLayer · Delete layer](/en/commands/rsDeleteLayer) — Select one or more layers through the layer selection dialog box and delete them.

### Material Tools

- [rsPickMaterial · Pick Material](/en/commands/rsPickMaterial) — Pick a material from an object in the scene and make it the current material.
- [rsQuickColor · Quick coloring](/en/commands/rsQuickColor) — Quickly assign a specific color to selected objects without opening the material editor.
- [rsAutoBoxMapping · Automatic box mapping](/en/commands/rsAutoBoxMapping) — Automatically set box mapping mapping coordinates for objects, suitable for quick mapping of architectural models.
- [rsPBRToCustomMaterial · PBR to custom material](/en/commands/rsPBRToCustomMaterial) — Convert PBR materials to Rhino custom materials for easy use in lower versions of Rhino.

## Views & Documentation (16)

### Annotation & Documentation

- [rsHatchPlanarSurfaces · Hatch Planar Surfaces](/en/commands/rsHatchPlanarSurfaces) — Automatically add fill patterns to planar surfaces, suitable for plan view material representation.
- [rsSectionBox · Section Box](/en/commands/rsSectionBox) — Create a three-dimensional section box and interactively adjust the section range to view the inside of the model.
- [rsSectionBoxToggle · Toggle Section Box](/en/commands/rsSectionBoxToggle) — Temporarily close or restore the Section Box section display, the main control box is retained, and can be switched and restored again.
- [rsDiagramArrow · Diagram Arrow](/en/commands/rsDiagramArrow) — Create analysis schematic arrows with adjustable arrow style, size, and color.
- [rsDiagramArrowEdit · Edit Diagram Arrow](/en/commands/rsDiagramArrowEdit) — Edit the parameters and style of the created schematic arrow.
- [rsHeightDot · Elevation Marker](/en/commands/rsHeightDot) — Create elevation label points, label point heights or XYZ coordinates, and support calculations based on custom working planes.
- [rsQuickNest · Quick nesting](/en/commands/rsQuickNest) — Layout and nest multiple plane graphics to optimize material utilization.
- [rsShadowRender · Architectural rendering window](/en/commands/rsShadowRender) — Open the architectural rendering window, including shadow rendering function, to quickly generate architectural renderings.
- [rsPolylineSection · Polyline section](/en/commands/rsPolylineSection) — Create a section along a polyline or curve, specify the section depth on the viewer's side, and add or delete vertices.

### Views & Cameras

- [rsSetCamera · Set Camera](/en/commands/rsSetCamera) — Set up the view camera by specifying the camera position and target point.
- [rsFaceCamera · Orient Toward Camera](/en/commands/rsFaceCamera) — Make the selected object automatically face the current view camera, similar to a billboard effect.
- [rsBatchSnapshotCapture · Batch screenshots](/en/commands/rsBatchSnapshotCapture) — Take screenshots of multiple named views in batches and output image files.
- [rsBatchViewCapture · Batch view capture](/en/commands/rsBatchViewCapture) — Capture current views as pictures in batches, supporting multiple resolutions and formats.
- [rsImportCamFromSU · Import cameras from SketchUp](/en/commands/rsImportCamFromSU) — Import a camera perspective from a SketchUp file and restore the SU's view in Rhino.
- [rsExportCamToSU · Export camera to SketchUp](/en/commands/rsExportCamToSU) — Export Rhino's current view's camera to a SketchUp file.
- [rsCameraPath · Camera Path](/en/commands/rsCameraPath) — Create a camera animation path for generating walkthrough animations.

## Analysis (8)

### Building Performance Analysis

- [rsShadow · Shadow Analysis](/en/commands/rsShadow) — Perform shadow analysis based on geographic location and date and time to visualize building shadow ranges.
- [rsSunlightAnalysisByGrid · Planar Sunlight Analysis](/en/commands/rsSunlightAnalysisByGrid) — Perform sunshine analysis on a plane, calculate the sunshine hours at each point, and visualize it with color mapping.
- [rsSunlightAnalysisByMesh · 3D Mesh Sunlight Analysis](/en/commands/rsSunlightAnalysisByMesh) — Perform sunlight analysis on a three-dimensional mesh to visualize the sunlight distribution on the building surface.
- [rsSolarFocusRiskSimulation · Solar Glare Risk Analysis](/en/commands/rsSolarFocusRiskSimulation) — Simulate the risk of light concentration caused by reflective surfaces and analyze the distribution and intensity of light spots.
- [rsVisibilityAnalysis · Visibility Analysis](/en/commands/rsVisibilityAnalysis) — Analyzes the visibility of various areas in the scene from a specified viewpoint, visualizing it as a color map.
- [rsViewshedAnalysis · Viewshed Analysis](/en/commands/rsViewshedAnalysis) — Calculate the field of view of the designated observation point and analyze the openness of the field of view.
- [rsWindAnalysis · Wind environment analysis](/en/commands/rsWindAnalysis) — Perform CFD analysis of the wind environment around the building to visualize wind speed and pressure distribution.
- [rsStructuralAnalysis · Structural mechanics analysis](/en/commands/rsStructuralAnalysis) — Perform mechanical analysis on structures to visualize and calculate stress conditions.

## Physics Simulation (7)

### Form Finding & Relaxation

- [rsBubble · Bubble](/en/commands/rsBubble) — Simulate the surface tension shape finding of soap bubbles to generate a minimal surface.
- [rsMembrane · Membrane structure form finding](/en/commands/rsMembrane) — Perform form-finding analysis on the membrane structure to generate a tension membrane surface.
- [rsMeshRelax · Uniform Mesh Relaxation](/en/commands/rsMeshRelax) — Relax and smooth the mesh to make the mesh vertices more evenly distributed.
- [rsCirclePacking · Circle Packing](/en/commands/rsCirclePacking) — Perform circular filling simulation on the surface to generate a tangent circle array.

### Dynamics

- [rsClothFluttering · Cloth Wind Simulation](/en/commands/rsClothFluttering) — Simulate the fluttering effect of cloth in the wind and generate dynamic cloth shapes.
- [rsBoids · Boids Simulation](/en/commands/rsBoids) — Boids group movement simulation, generating bird/fish school-like collective movement trajectories.
- [rsPhysarum · Slime mold simulation](/en/commands/rsPhysarum) — Physarum slime mold growth simulation, generating organic growth path patterns.

## SubD Tools (3)

### Editing Tools

- [rsMoveAlongNormal · Move Along Normal](/en/commands/rsMoveAlongNormal) — Move SubD vertices along the normal direction, suitable for quickly adjusting the surface shape.
- [rsCopyMayaToRhino · Copy Maya files to Rhino](/en/commands/rsCopyMayaToRhino) — Copy geometry from Maya files to Rhino, supporting format conversion.
- [rsSelectSubDEdgeDirection · Select Co-Directional SubD Edges](/en/commands/rsSelectSubDEdgeDirection) — Click a SubD control mesh edge to automatically select all edges with the same direction (U or V) in the same quadrilateral area.

## Section Management (2)

### Profile Director

- [rsProfileDirector · Profile Director](/en/commands/rsProfileDirector) — Open the Section Manager to manage a library of section profiles and extrude along paths.
- [rsProfileDirectorAddProfile · Add Profile](/en/commands/rsProfileDirectorAddProfile) — Add a new profile to Profile Director.

## Utilities (20)

### Clipboard

- [rsCopy · Copy with origin](/en/commands/rsCopy) — Record the original coordinates when copying an object and keep the position consistent when pasting across files.
- [rsPaste · Paste with origin](/en/commands/rsPaste) — Use original coordinates when pasting objects, used with rsCopy.
- [rsPasteExcel · Paste Excel](/en/commands/rsPasteExcel) — Paste tabular data from Excel into Rhino to generate text tables or curves.

### Block Operations

- [rsGroupToBlock · Convert Group to Block](/en/commands/rsGroupToBlock) — Convert selected groups to block definitions to reduce file size.
- [rsExplodeNestedBlocks · Explode nested blocks](/en/commands/rsExplodeNestedBlocks) — Recursively explode all nested block instances down to the lowest primitive.

### System Tools

- [rsMenu · RsTool Menu](/en/commands/rsMenu) — Opens the RsTool floating overlay menu, providing command search and a quick launch panel.
- [rsHotbox · Hotbox](/en/commands/rsHotbox) — Call up the radial command menu to quickly launch frequently used commands around the mouse position.
- [rsHotboxSettings · Hotbox Settings](/en/commands/rsHotboxSettings) — Open the hot box settings window and configure the triggering method, scheme and command layout.
- [RsAutoEnglish · Automatic English Commands](/en/commands/RsAutoEnglish) — Automatically switches to the English input method when inputting on the command line, and restores the original input method when inputting text.
- [rsEngCommandSearch · English command search](/en/commands/rsEngCommandSearch) — Search Rhino English command names to quickly locate and execute commands.
- [rsToolStart · Start RsTool](/en/commands/rsToolStart) — Start/initialize the RsTool toolset.
- [rsToolLocation · Open the plugin directory](/en/commands/rsToolLocation) — Open the RsTool plug-in installation directory in a file manager.
- [rsClean · Deep Clean](/en/commands/rsClean) — Opens the Deep Clean dialog box to clean redundant data in the document (unused layers, materials, block definitions, etc.).
- [rsFilterHeavyObjects · Filter Heavy Objects](/en/commands/rsFilterHeavyObjects) — Analyze the complexity of objects in the document and sort by weight to find the heaviest object.
- [rsWeChatSend · Automatically send WeChat messages](/en/commands/rsWeChatSend) — Automatically send WeChat messages at regular intervals, suitable for automated notification scenarios.
- [RSToolActivateLicense · Activate license](/en/commands/RSToolActivateLicense) — Check the license status and open the activation dialog if it is not activated.

### Import & Export

- [rsSuExport · Export to SketchUp](/en/commands/rsSuExport) — Export selected Rhino objects to SketchUp (.skp) format files.
- [rsSendToSU · Send model to SketchUp](/en/commands/rsSendToSU) — Send selected Rhino objects to running SketchUp with one click (real-time linked push) without exporting files.
- [rsMayaTransferSettings · Rhino-Maya transfer settings](/en/commands/rsMayaTransferSettings) — Opens the settings window for model transfer between Rhino and Maya.
- [rsSendToMaya · Send model to Maya](/en/commands/rsSendToMaya) — Send selected objects in Rhino to Maya.

## Dynamic Components (7)

### Creation

- [rsCreateDynamicComponent · Create Dynamic Component](/en/commands/rsCreateDynamicComponent) — Create the selected ordinary geometry or existing dynamic component as a parametric dynamic component, supporting the use of parameters and one-way relationships to drive nodes.

### Panels

- [rsDynamicComponent · Dynamic Components Panel](/en/commands/rsDynamicComponent) — Open the Dynamic Components panel (Component Options / Component Editor) to edit templates, parameters, bindings, and interactions.

### Getting Started

- [rsDynamicComponentGuide · Getting started with dynamic components](/en/commands/rsDynamicComponentGuide) — Open the Dynamic Components Getting Started Guide dialog box, which contains 8 tabs such as Quick Start, Panel Operation, Geometry Tools, and Formula Basics.

### Interaction

- [rsDynamicComponentInteract · Dynamic component interaction](/en/commands/rsDynamicComponentInteract) — Execute defined interactive actions (such as opening/closing the door, switching styles) on the selected dynamic component instance.

### Maintenance

- [rsDynamicComponentSelfTest · Dynamic component self-test](/en/commands/rsDynamicComponentSelfTest) — Run dynamic component Rhino block structure self-test, read-only verification of the runtime structure, without modifying the document.
- [rsPurgeDynamicComponentCache · Purge Dynamic Component Cache](/en/commands/rsPurgeDynamicComponentCache) — Clean up dynamic component derived blocks that are not referenced by any instance and recycle redundant block definitions.

### Assembly

- [rsDetachDynamicComponent · Separate dynamic components](/en/commands/rsDetachDynamicComponent) — Separate the selected dynamic component instance into ordinary geometry and disassociate it from the dynamic template.

## Grasshopper Components (73)

### Animation

- [Counter](/en/commands/Counter) — Generate count values during a Grasshopper solve or animation.
- [EventOperation](/en/commands/EventOperation) — Handle events and time intervals in the Grasshopper timeline.
- [Export Mesh Alembic](/en/commands/export-mesh-alembic) — Export list-ordered mesh frames as Alembic animation files that support topology changes.
- [GetCamera](/en/commands/GetCamera) — Read camera information for the current Rhino viewport.
- [GetGraphMapperDomain](/en/commands/GetGraphMapperDomain) — Read the domain of the Graph Mapper component.
- [LockGroupByName](/en/commands/LockGroupByName) — Lock or unlock objects in a Grasshopper group by name.
- [RandomFlash](/en/commands/RandomFlash) — Generates a random flash animation effect for an object.
- [SetCamera](/en/commands/SetCamera) — Sets the camera position and direction of the current Rhino viewport.

### Architecture

- [ZigzagRamp](/en/commands/ZigzagRamp) — Create a switchback ramp from multiple straight or polyline paths.

### Color

- [TweenColor](/en/commands/TweenColor) — Linearly interpolates between two colors.

### Curve

- [ArcBlend](/en/commands/ArcBlend) — Use arcs to create transitional connections between curves.
- [BrepSmoothEdge](/en/commands/BrepSmoothEdge) — Filter smoothly connected edges in Brep.
- [CurveBooleanRegions](/en/commands/CurveBooleanRegions) — Creates a Boolean region from a closed planar curve.
- [CurveRegion](/en/commands/CurveRegion) — Analyze planar curves and generate closed regions.
- [CurvesSplitAtIntersections](/en/commands/CurvesSplitAtIntersections) — Split multiple curves where they intersect.
- [DivideCrvByDistanceList](/en/commands/DivideCrvByDistanceList) — Get the points on the curve in sequence according to the given distance list.
- [ExtendCrvOnSrf](/en/commands/ExtendCrvOnSrf) — Extends the ends of the curve along the surface to the surface boundary.
- [FilletMultipleRadii](/en/commands/FilletMultipleRadii) — Use multiple radii to sequentially fillet the corners of a curve.
- [FitPolyline](/en/commands/FitPolyline) — Fits an approximately smooth portion of a polyline to a curve.
- [Helix](/en/commands/Helix) — Create a spiral or spring-like curve.
- [Loop Offset Curve On Surface](/en/commands/loop-offset-curve-on-surface) — Continuously offset the curve on the surface, and continue with the next round of offset after each fitting and extension to the boundary.
- [MinBoundingRec](/en/commands/MinBoundingRec) — Computes the minimum enclosing rectangle of a geometric object.
- [OffsetCrv](/en/commands/OffsetCrv) — Offsets a curve on a specified plane.
- [OffsetCrvOnSrfThroughPt](/en/commands/OffsetCrvOnSrfThroughPt) — Offsets a curve on a surface and passes the result through specified points.
- [PolyCrv to Arc](/en/commands/polycrv-to-arc) — Convert polycurves to arcs or straight line segments.
- [PolylineMaxDistance](/en/commands/PolylineMaxDistance) — Finds the two furthest vertices in a polyline and creates a connection.
- [Text curve](/en/commands/text-curve) — Create text outline curves based on text content and font.

### Developer

- [Linked C#](/en/commands/linked-csharp) — Run trusted native C# source code and synchronize Grasshopper input and output after the file is saved.

### Display

- [2dTextToScreen](/en/commands/2dTextToScreen) — Displays 2D text in screen coordinates of the Rhino viewport, suitable for auxiliary annotation and previewing.
- [MaterialPlus](/en/commands/MaterialPlus) — Create a Rhino material with basic color and map settings.
- [Preview Materials](/en/commands/preview-materials) — Show input materials in Grasshopper preview.
- [TextDisplay](/en/commands/TextDisplay) — Display text labels in Rhino viewports.

### Light

- [AddPointLights](/en/commands/AddPointLights) — Batch add point lights to Rhino documents based on input points.
- [AddRectangularLights](/en/commands/AddRectangularLights) — Batch add rectangular lights to Rhino documents based on input geometry.
- [AddSpotLight](/en/commands/AddSpotLight) — Batch add spotlights to Rhino documents based on input position and orientation.

### Math

- [ClosestOddEvenNumber](/en/commands/ClosestOddEvenNumber) — Find the odd and even numbers that are closest to the target value.
- [Value Quantization](/en/commands/value-quantization) — Replaces values within the specified range with the nearest value in the custom target list, leaving the values outside the range unchanged.

### Mesh

- [CurveProjectToMesh](/en/commands/CurveProjectToMesh) — Projects a curve to the mesh in the specified direction.
- [MeshEdgeSelect](/en/commands/MeshEdgeSelect) — Filter mesh edges based on the angle between adjacent mesh faces.
- [MeshExplode](/en/commands/MeshExplode) — Split the mesh into independent parts based on angular tolerances.
- [MeshLoft](/en/commands/MeshLoft) — Generate a mesh from a set of polyline lofts.
- [MeshPipe](/en/commands/MeshPipe) — Generate meshed circular tubes along curves.
- [OffsetMesh](/en/commands/OffsetMesh) — Offsets the mesh along the vertex normal direction.
- [SplitMeshWithProjectedPolylines](/en/commands/SplitMeshWithProjectedPolylines) — Split the mesh using polylines projected onto the mesh.
- [Tween Mesh](/en/commands/tween-mesh) — Interpolate corresponding vertices between two topologically compatible meshes to generate a transition mesh.

### Points

- [PointGroup](/en/commands/PointGroup) — Divide points into groups based on the distance between them.
- [Sequential Closest Projection](/en/commands/sequential-closest-projection) — The starting point is projected to the nearest point of the curve list in sequence, and the projection can be continued after moving along the tangential direction of the current curve at fixed intervals.

### SubD

- [CreaseVertex](/en/commands/CreaseVertex) — Sets the specified SubD vertex to an acute vertex.
- [SubDToBrep](/en/commands/SubDToBrep) — Convert SubD object to NURBS Brep.

### Surface

- [ExtendSrf](/en/commands/ExtendSrf) — Extends the surface in the specified direction.
- [OffsetBrep](/en/commands/OffsetBrep) — Offset Breps or polysurfaces and produce solid results.
- [ShrinkTrimmedSrf](/en/commands/ShrinkTrimmedSrf) — Shrinks the underlying surface of the trimmed surface to the trimming boundary.
- [SplitBrepByCrvs](/en/commands/SplitBrepByCrvs) — Split the Brep using curves lying on the surface.
- [Tessellate NURBS](/en/commands/tessellate-nurbs) — Generate parametric pavement panels on NURBS single or polysurface surfaces.
- [Tween Surface](/en/commands/tween-surface) — Reconstruct a NURBS transition surface between two surfaces by interpolating corresponding sample points.
- [Unroller](/en/commands/Unroller) — Unfold single or polysurfaces and output the corresponding unfolded geometry.

### Text

- [FilterTextAndNumbers](/en/commands/FilterTextAndNumbers) — Filter and separate text content from digital content.
- [FontTable](/en/commands/FontTable) — Read the list of available fonts and distinguish between Chinese and Western fonts.

### TextureMapping

- [ApplyBoxMapping](/en/commands/ApplyBoxMapping) — Applies a box texture map to the object.
- [ApplyPlanarMapping](/en/commands/ApplyPlanarMapping) — Applies a flat texture map to the object.
- [SurfaceMapping](/en/commands/SurfaceMapping) — Applies a surface texture map to the object.

### Util

- [CanvasTransparent](/en/commands/CanvasTransparent) — Adjust the transparency of the Grasshopper canvas background.
- [ChangeGui](/en/commands/ChangeGui) — Modify the display settings of the Grasshopper interface.
- [CloseAllGHDocuments](/en/commands/CloseAllGHDocuments) — Closes all documents open in the current Grasshopper session.
- [CloseGH](/en/commands/CloseGH) — Close the Grasshopper window.
- [Component Labels](/en/commands/component-labels) — Displays floating name labels next to Grasshopper components and supports exception configuration.
- [DeletePlaceholder](/en/commands/DeletePlaceholder) — Remove placeholder components from Grasshopper documents.
- [NamedView](/en/commands/NamedView) — Reads named views in the current Rhino document.
- [ObjectsExport](/en/commands/ObjectsExport) — Exports the specified objects to the selected file format.
- [RhinoRandomSelect](/en/commands/RhinoRandomSelect) — Randomly selects Rhino document objects according to a specified proportion.
- [RhinoViewCaptureToFile](/en/commands/RhinoViewCaptureToFile) — Batch capture Rhino named views and save to file.
- [Rich Graph Mapper](/en/commands/rich-graph-mapper) — Provides editable enhanced numerical mapping curves.
- [ViewCaptureToFile](/en/commands/ViewCaptureToFile) — Captures the current Rhino viewport from Grasshopper and saves it to a specified path.

