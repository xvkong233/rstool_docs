# rsFitArcChain · Tangent arc fitting

> Module: Geometry / Curves

[← Back to command index](/en/commands/)

**Function**: Curves fitted using tangent (same-direction G1 continuous) arc/linear chains. The original curves are retained and a new fitting curve is added.

**Run**: Enter `rsFitArcChain` in the Rhino command line (opens a settings window).

**Workflow**:

1. Command line input rsFitArcChain
2. Select the curve to be fitted (multiple selections possible)
3. Select the fitting mode in the Eto window
4. Set the number of segments/segment length range/maximum deviation parameters
5. Click "Update Preview" to see a live preview (error green-yellow-red coloring)
6. Click "Generate" to write a tangent arc chain

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| fitting mode | Mode | list | Specify the number of segments (By segment count) | Specify the number of segments/specify the segment length range/specify the maximum deviation | 0=BySegmentCount,1=ByLengthRange,2=ByMaximumDeviation |
| Number of segments per curve | SegmentCount | integer | 6 | 2-64 (the lower bound of the closed curve is 3) | Only the "specified number of segments" mode takes effect; constant DefaultSegmentCount=6 |
| Minimum segment length | MinimumSegmentLength | double | max(model absolute tolerance*10, average length/20) | 0.000001-1000000000.0 | Only the "specify segment length range" mode takes effect; the default is estimated by the average length of the selected curve |
| longest segment length | MaximumSegmentLength | double | max(shortest segment length, average length/6) | 0.000001-1000000000.0 | Only the "specify segment length range" mode takes effect; the default is estimated by the average length |
| Maximum deviation from target | TargetMaximumDeviation | double | max(model absolute tolerance*5, average length/100) | 0.000001-1000000000.0 | Only the "specify maximum deviation" mode takes effect; the default is estimated by the average length |

**Notes**: Segment length-dependent default values are dynamically calculated with the selected curve average length and subject to the document's absolute tolerance; length-dependent NumericStepper precision is 4 decimal places.
