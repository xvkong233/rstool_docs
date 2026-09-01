"""Add a new commands.json entry for the Export Mesh Alembic (Mesh ABC) GH component.

Inserts:
1. New data[] entry between EventOperation and GetCamera (alphabetical position).
2. New details["Export Mesh Alembic"] block with full params/flow/output/notes/illustrations.
3. New illustration (the screenshot showing the component tooltip + runtime warnings).
"""
import json, re, sys, pathlib

p = pathlib.Path(r'D:/GitHub/rstool_docs/scripts/rstool/commands.json')
src = p.read_text(encoding='utf-8')

# -----------------------------------------------------------------
# 1. Insert into data[] array: between EventOperation (idx 204) and GetCamera (idx 205)
# -----------------------------------------------------------------
# Find the closing brace of EventOperation in data[]
m_event = re.search(
    r'\{\s*"cat": "GH组件",\s*"sub": "Animation",\s*"name": "EventOperation".*?\n\s*\},',
    src, re.DOTALL)
assert m_event, 'EventOperation data block not found'
event_end = m_event.end()
print(f'EventOperation data block ends at char {event_end}')

new_data_entry = (
    '\n  {\n'
    '   "cat": "GH组件",\n'
    '   "sub": "Animation",\n'
    '   "name": "Export Mesh Alembic",\n'
    '   "zh": "Export Mesh Alembic",\n'
    '   "desc": "将按列表顺序排列的网格帧导出为支持拓扑变化的 Alembic 动画文件。"\n'
    '  },'
)
src = src[:event_end] + new_data_entry + src[event_end:]
data_inserted_at = event_end
print(f'inserted data entry at char {event_end}, +{len(new_data_entry)} chars')

# -----------------------------------------------------------------
# 2. Insert into details dict: "Export Mesh Alembic" key
# -----------------------------------------------------------------
# Find the EventOperation details block end
m_evt_det = re.search(r'  "EventOperation": \{', src)
assert m_evt_det, 'EventOperation details key not found'
evt_det_start = m_evt_det.start()

# details block ends at the next "\n  }," that closes the EventOperation object
end_evt_det_idx = src.find('\n  },', evt_det_start)
assert end_evt_det_idx != -1, 'EventOperation details end not found'
evt_det_end = end_evt_det_idx + len('\n  },')

alt1 = 'Export Mesh Alembic 运算器在 Grasshopper 画布上的图标与提示（含运行告警状态）'
cap1 = (
    '图 1：Export Mesh Alembic（Mesh ABC）运算器在 Grasshopper 画布上的状态。'
    '组件位于 RSTool / Animation 分组下，浅橘色图标，左侧输入端口依次为：'
    'F（Frames 网格帧列表）、P（File Path 目标 .abc 路径）、E（Export 触发，False→True 上升沿）、'
    'C（Cancel 取消，True 上升沿）、FPS（帧率，默认 30）、S（Start Frame 起始帧）、'
    'A（Up Axis 0=Z-Up/1=Y-Up）、X（Scale 缩放）、O（Overwrite 覆盖）、N（Object Name 内部名）；'
    '右侧输出端口为：S（Success）、P（Path/Progress 复用 P 名）、F（Frames Written）、M（Message）。'
    '悬停 tooltip（中英双语）：将按列表顺序排列的网格帧导出为支持拓扑变化的 Alembic 动画文件。'
    '本图组件正处于 Ready / 就绪 状态但显示 This component did not run because it lacked required data.'
    'Two runtime warnings.——说明输入尚未完整连接；一旦 Frames 与 File Path 接入并 Export 触发一次上升沿，后台 MeshRay 导出即开始。'
)

assert '"' not in alt1 and '"' not in cap1, 'quote guard failed'
print('quote guard passed: no halfwidth double quotes')

ill_block = (
    '\n   "illustrations": ['
    '\n    {'
    '\n     "src": "assets/Export Mesh Alembic/image1.jpg",'
    f'\n     "alt": "{alt1}",'
    f'\n     "caption": "{cap1}"'
    '\n    }'
    '\n   ],'
)

flow_block = (
    '  "Export Mesh Alembic": {\n'
    '   "icon": "assets/gh-icons/ExportMeshAlembic_24.png",\n'
    '   "license": true,\n'
    '   "help": null,\n'
    '   "style": "gh",\n'
    '   "flow": [\n'
    '    "在 Grasshopper 画布中，从 RSTool 标签的「Animation」分组下找到 Export Mesh Alembic 组件并拖入",\n'
    '    "按参数表连接各输入端口：Frames 网格帧列表、File Path 目标 .abc 路径、Export 触发、Cancel 取消、FPS 帧率、Start Frame 起始帧、Up Axis 坐标轴、Scale 缩放、Overwrite 覆盖、Object Name 内部名称",\n'
    '    "Export 仅在 False→True 上升沿时启动一次后台导出；Cancel 在 True 上升沿时取消正在执行的导出并清理临时 .abc.tmp 文件",\n'
    '    "导出采用临时文件 + 原子替换：先写 .rstool.<guid>.tmp 再原子替换到目标路径，避免半成品污染",\n'
    '    "每次画布求解时刷新输出端口 Success / File Path / Progress / Frames Written / Message（其中 Path 与 Progress 复用 P 名）"\n'
    '   ],\n'
    '   "params": [\n'
    '    {\n'
    '     "zh": "网格帧列表", "en": "Frames", "type": "Mesh", "def": "空",\n'
    '     "range": "Mesh 列表", "note": "按列表顺序排列的网格帧，每个网格对应 Alembic 一帧；拓扑可变"\n'
    '    },\n'
    '    {\n'
    '     "zh": "输出路径", "en": "File Path", "type": "Text", "def": "",\n'
    '     "range": ".abc 绝对路径或相对 GH 文件目录的相对路径",\n'
    '     "note": "扩展名必须为 .abc；空扩展名自动补 .abc；GH 文件未保存时相对路径不可用，须使用绝对路径"\n'
    '    },\n'
    '    {\n'
    '     "zh": "导出触发", "en": "Export", "type": "Bool", "def": "false",\n'
    '     "range": "True / False",\n'
    '     "note": "仅在 False→True 上升沿启动一次；已有任务运行则本次触发被忽略并提示 warning"\n'
    '    },\n'
    '    {\n'
    '     "zh": "取消导出", "en": "Cancel", "type": "Bool", "def": "false",\n'
    '     "range": "True / False",\n'
    '     "note": "True 上升沿取消正在执行的导出并清理临时 .rstool.<guid>.tmp 文件"\n'
    '    },\n'
    '    {\n'
    '     "zh": "帧率", "en": "FPS", "type": "Number", "def": "30",\n'
    '     "range": "有限正数",\n'
    '     "note": "动画帧率；必须是有限正数，非法值直接报错\"\n'
    '    },\n'
    '    {\n'
    '     "zh": "起始帧", "en": "Start Frame", "type": "Integer", "def": "0",\n'
    '     "range": "整数",\n'
    '     "note": "Alembic 首个样本对应的起始帧号"\n'
    '    },\n'
    '    {\n'
    '     "zh": "向上轴", "en": "Up Axis", "type": "Integer", "def": "0",\n'
    '     "range": "0 = Z-Up（Rhino 默认）/ 1 = Y-Up（绕 X 轴旋转）",\n'
    '     "note": "控制导出坐标系方向；常见用法是把 Rhino 模型导出到 Maya/Houdini 时取 1"\n'
    '    },\n'
    '    {\n'
    '     "zh": "缩放", "en": "Scale", "type": "Number", "def": "1.0",\n'
    '     "range": "有限正数",\n'
    '     "note": "坐标缩放系数；法线不缩放"\n'
    '    },\n'
    '    {\n'
    '     "zh": "允许覆盖", "en": "Overwrite", "type": "Bool", "def": "false",\n'
    '     "range": "True / False",\n'
    '     "note": "目标 .abc 已存在时；true = 原子替换，false = 拒绝并报错\"\n'
    '    },\n'
    '    {\n'
    '     "zh": "对象名", "en": "Object Name", "type": "Text", "def": "MeshAnimation",\n'
    '     "range": "任意文本",\n'
    '     "note": "Alembic 内部网格名称；非法字符自动替换为下划线\"\n'
    '    }\n'
    '   ],\n'
    '   "output": "Success（最近一次是否成功）/ File Path（实际绝对路径）/ Progress（0~1，Path 与 Progress 复用 P 名）/ Frames Written（已写入帧数）/ Message（中英双语状态、警告或错误信息）",\n'
    + '   "notes": "通过 MeshRay 并行计算导出；采用临时文件 + 原子替换避免半成品；Export / Cancel 均为上升沿触发，互不冲突；网格拓扑可变化（topology-change support）。\\n\\n所属 GH 分组：RSTool / Animation"\n'
    '  },\n'
)

# Insert details block right after EventOperation's closing `},`
src = src[:evt_det_end] + flow_block + src[evt_det_end:]
print(f'inserted details block at char {evt_det_end}, +{len(flow_block)} chars')

# But the details block already starts with `  "Export Mesh Alembic": {` and ends with `  },`
# The `},` at the end of flow_block is the closing of Export Mesh Alembic details block, so the next
# block (GetCamera) starts naturally.

# -----------------------------------------------------------------
# 3. Now insert the illustrations block into the Export Mesh Alembic details
# -----------------------------------------------------------------
# Find the Export Mesh Alembic details block now
m_ema = re.search(r'  "Export Mesh Alembic": \{', src)
assert m_ema, 'Export Mesh Alembic details block not found'
ema_start = m_ema.start()
ema_end_idx = src.find('\n  },', ema_start)
assert ema_end_idx != -1, 'Export Mesh Alembic details end not found'
ema_block_end = ema_end_idx + len('\n  },')
ema_block = src[ema_start:ema_block_end]

# Find the "output" line, insert illustrations after it (before notes)
out_m = re.search(r'^(   "output": ".*",)$', ema_block, re.MULTILINE)
assert out_m, 'output line not found in new block'
output_line = out_m.group(1)
new_ema_block = ema_block.replace(output_line, output_line + ill_block, 1)
assert new_ema_block != ema_block
src = src[:ema_start] + new_ema_block + src[ema_block_end:]
print(f'inserted illustrations block +{len(ill_block)} chars')

# -----------------------------------------------------------------
# Validate
# -----------------------------------------------------------------
json.loads(src)
print('json ok')

# Self-test: parse the new entry
d = json.loads(src)
ema_data = [x for x in d['data'] if x['name'] == 'Export Mesh Alembic']
assert len(ema_data) == 1, f'expected 1 data entry, got {len(ema_data)}'
print('data entry ok:', ema_data[0])
ema_det = d['details']['Export Mesh Alembic']
assert ema_det['style'] == 'gh'
assert ema_det['icon'] == 'assets/gh-icons/ExportMeshAlembic_24.png'
assert len(ema_det['params']) == 10
assert len(ema_det['illustrations']) == 1
print(f'details ok: {len(ema_det["params"])} params, {len(ema_det["illustrations"])} illustrations, '
      f'{len(ema_det["flow"])} flow steps')

# Verify alphabetical ordering in data array: find indices
names = [x['name'] for x in d['data']]
i_evt = names.index('EventOperation')
i_ema = names.index('Export Mesh Alembic')
i_get = names.index('GetCamera')
assert i_evt < i_ema < i_get, f'order broken: evt={i_evt} ema={i_ema} get={i_get}'
print(f'order ok: EventOperation[{i_evt}] < Export Mesh Alembic[{i_ema}] < GetCamera[{i_get}]')

p.write_text(src, encoding='utf-8')
print('written, total +', len(new_data_entry) + len(flow_block) + len(ill_block), 'chars')