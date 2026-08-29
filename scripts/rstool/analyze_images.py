#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
rstool 文档配图客观分析工具。

用途：在为 commands.json 编写 illustration 的 alt / caption 之前，
用 Pillow 提取客观指标，避免凭空猜测图里有什么（模型读不了图时尤其有用）。

用法:
    python scripts/rstool/analyze_images.py docs/assets/<cmd>/image1.png [image2.png ...]

输出 8 项指标:
    avg_sat            平均饱和度 -> 判别灰度图 vs 彩色图
    lum_min/lum_max    0.5%/99.5% 分位亮度 -> 判别是否有纯黑/纯白
    dark(<64)          极暗像素占比 -> 判别是否有深黑 wireframe / 粗黑线
    darkgray(<140)     暗灰像素占比 -> 判别阴影深度/面密度（三角面密集时升高）
    top colors         主色调占比（64 量化桶）
    row_var/col_var    行/列亮度方差 -> 判别横向/纵向结构强度
    right30_col_var    右侧 30% 区域的列方差 -> 判别右侧是否有 UI 面板
    edge_h/edge_v      相邻像素差 >15 的占比 -> 判别网格线密度
    horiz_dark_rows    暗行条数 -> 粗略估计水平网格线数量
"""
import sys
from PIL import Image, ImageStat


def var(a):
    m = sum(a) / len(a)
    return sum((v - m) ** 2 for v in a) / len(a)


def analyze(path):
    im = Image.open(path).convert('RGB')
    W, H = im.size
    print(f"=== {path}  {W}x{H}")

    small = im.resize((min(W, 600), min(H, 600)))
    w, h = small.size
    px = small.load()

    sat = ImageStat.Stat(small.convert('HSV').split()[1]).mean[0]

    gray = small.convert('L')
    gp = gray.load()
    lums = [gp[x, y] for y in range(0, h, 2) for x in range(0, w, 2)]
    lums_s = sorted(lums)
    n = len(lums_s)
    lo, hi = lums_s[int(n * 0.005)], lums_s[int(n * 0.995)]
    print(f"  avg_sat={sat:.1f}  avg_lum={sum(lums)/n:.1f}  "
          f"lum_min={lo}  lum_max={hi}  range={hi-lo}")

    buckets = {}
    for y in range(0, h, 2):
        for x in range(0, w, 2):
            r, g, b = px[x, y]
            k = (r // 64 * 64, g // 64 * 64, b // 64 * 64)
            buckets[k] = buckets.get(k, 0) + 1
    tot = sum(buckets.values())
    top = sorted(buckets.items(), key=lambda kv: -kv[1])[:5]
    print("  top colors:", ", ".join(f"RGB{k}={v*100//tot}%" for k, v in top))

    dark = sum(1 for v in lums if v < 64)
    graydark = sum(1 for v in lums if v < 140)
    print(f"  dark(<64)={dark*100/n:.2f}%   darkgray(<140)={graydark*100/n:.2f}%")

    rows = [sum(gp[x, y] for x in range(0, w, 2)) / len(range(0, w, 2)) for y in range(0, h, 4)]
    cols = [sum(gp[x, y] for y in range(0, h, 2)) / len(range(0, h, 2)) for x in range(0, w, 4)]
    print(f"  row_var={var(rows):.0f}  col_var={var(cols):.0f}")

    x0 = int(w * 0.70)
    rcols = [sum(gp[x, y] for y in range(0, h, 2)) / len(range(0, h, 2)) for x in range(x0, w, 2)]
    print(f"  right30_col_var={var(rcols):.0f}  (full col_var={var(cols):.0f})")

    eh = ev = cnt = 0
    for y in range(1, h - 1, 2):
        for x in range(1, w - 1, 2):
            cnt += 1
            if abs(gp[x + 1, y] - gp[x - 1, y]) > 15:
                eh += 1
            if abs(gp[x, y + 1] - gp[x, y - 1]) > 15:
                ev += 1
    print(f"  edge_h={eh*100/cnt:.2f}%  edge_v={ev*100/cnt:.2f}%")

    lines, prev = 0, False
    for y in range(0, h):
        rowm = sum(gp[x, y] for x in range(0, w, 3)) / len(range(0, w, 3))
        cur = rowm < 150
        if cur and not prev:
            lines += 1
        prev = cur
    print(f"  horiz_dark_rows={lines}")
    print()


if __name__ == '__main__':
    for p in sys.argv[1:]:
        analyze(p)
