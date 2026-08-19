# rsConvertA2DToNormalCurves · 二维转普通线条

> 模块：二维建筑 / 其他二维

[← 返回命令目录](/commands/)

**功能**：将所选 A2D 墙体/门窗对象转为普通 Rhino 曲线（清除 RSTool 元数据，删除墙体 hatch）

**调用**：在 Rhino 命令行输入 `rsConvertA2DToNormalCurves`（命令行交互）

**交互流程**：

1. 命令行输入 rsConvertA2DToNormalCurves
2. 选择要转换的二维墙体/门窗（曲线/填充，可框选多选）
3. 自动将其转为普通 Rhino 曲线并移除 A2D 元数据（删除墙体填充）

**参数**：

> 此命令无命令行数值参数，相关设置在窗口中调整。

**备注**：无参数；转换后失去 A2D 智能关联
