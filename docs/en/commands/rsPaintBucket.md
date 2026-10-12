# rsPaintBucket · Paint Bucket

> Module: Organization & Selection / Material Tools

[← Back to command index](/en/commands/)

**Function**: Continuously assign a sampled existing material to clicked objects, including components inside nested blocks. Changes inside blocks affect all instances sharing the modified definition.

**Run**: Enter `rsPaintBucket` in the Rhino command line (command-line interaction).

**Workflow**:

1. Enter rsPaintBucket in the Rhino command line to start sampling. No preselection is needed.
2. Click an object with an assigned material. The command line shows the sampled material name and switches to painting.
3. Click target objects one after another to assign the same material. You can click components inside blocks without exploding them.
4. Choose Repick in the command line to sample a different material, then continue painting.
5. Press Enter or Esc to finish. Completed paint operations remain; use Rhino Undo to restore them.

**Parameters**:

| Display name | Parameter | Type | Default | Range | Description |
| --- | --- | --- | --- | --- | --- |
| Repick | Repick | command-line option | Available after sampling | Select the option | Return from painting to sampling, choose a new source object, and continue painting. |

**Notes**:

## Continuous material painting

Click a material source, then click objects to change their material without repeatedly opening the material panel. The viewport cursor and command-line prompt indicate sampling or painting, with the current material name. Surfaces, polysurfaces, extrusions, meshes, SubD, and blocks are supported. Click directly; window selection is not supported.

Sampling resolves the material at the clicked location, including materials assigned by layer, by object, inherited from a parent block, or assigned to a recognizable face. Default or unassigned materials cannot be sampled; the command prompts you to try another source.

## Painting scope for objects and blocks

Ordinary objects receive the material as a whole, rather than only on the clicked face. Targets switch to material by object. Existing face material overrides on Breps are cleared so the whole object uses the sampled material.

When clicking a block, the command traverses nested instances to find the component at that location and modifies its owning block definition. All instances sharing that definition change together, including instances nested inside other blocks. To change only one instance, first give it an independent block definition.

## Texture mapping, finishing, and undo

The command copies material assignment, not the source object's texture mapping or mapping dimensions. Textures use the target's existing mapping; adjust that mapping separately if scale or orientation is unsuitable.

Enter and Esc both end the painting session without reverting completed changes. Rhino Undo can restore the paint operations from the command together.

Locked or read-only objects, objects on locked layers, and linked or reference blocks cannot be painted. If painting fails, check the command-line message, object state, or sample the material again.
