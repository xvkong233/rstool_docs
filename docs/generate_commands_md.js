/**
 * RsTool 命令手册 Markdown 生成器
 * 从 docs/RsTool_Command_Reference.html 内嵌的 data(命令清单) + details(命令详情)
 * 自动渲染 docs/RsTool命令手册.md。结构：每个大类 (h2) + 该类下每个命令 (h3)，
 * 所有命令都附功能/调用/交互流程/参数/输出/备注等详解，对应文档站侧栏的二级菜单。
 *
 * 用法：node docs/generate_commands_md.js
 */
const fs = require('fs');
const path = require('path');

const SRC = path.join(__dirname, 'RsTool_Command_Reference.html');
const OUT = path.join(__dirname, 'RsTool命令手册.md');

const s = fs.readFileSync(SRC, 'utf8');

function extractLiteral(text, marker){
  const i = text.indexOf(marker);
  if(i<0) return null;
  let j = i + marker.length;
  while(j<text.length && /\s/.test(text[j])) j++;
  const opener = text[j];
  if(opener!=='[' && opener!=='{') return null;
  let depth=0, inStr=false, esc=false, k=j;
  while(k<text.length){
    const c=text[k];
    if(inStr){ if(esc) esc=false; else if(c==='\\') esc=true; else if(c==='"') inStr=false; }
    else { if(c==='"') inStr=true; else if(c==='['||c==='{') depth++; else if(c===']'||c==='}'){ depth--; if(depth===0) return text.slice(j,k+1); } }
    k++;
  }
  return null;
}

const data = eval('(' + extractLiteral(s, 'const data =') + ')');
const details = eval('(' + extractLiteral(s, 'const details =') + ')');

// 保持 data 顺序的 cat 排序
const catOrder = [];
const subOfCat = {};
data.forEach(it=>{
  const cat = it.cat || '未分类';
  const sub = it.sub || '';
  if(!catOrder.includes(cat)){ catOrder.push(cat); subOfCat[cat]=[]; }
  if(!subOfCat[cat].includes(sub)) subOfCat[cat].push(sub);
});

const esc = v => {
  // GFM 表格行（以 | 起且以 | 收）整行不转义 |，避免破坏表格分隔符
  let s = v==null ? '' : String(v);
  if (/^\s*\|.*\|\s*$/.test(s) && s.includes('|')) {
    return s.replace(/\n+/g,' ').trim();
  }
  return s.replace(/\|/g,'\\|').replace(/\n+/g,' ').trim();
};

const L = [];
L.push('# RsTool 命令完全手册');
L.push('');
L.push('> 本文档由代码自动生成，覆盖 RsTool 插件全部命令。数据提取自命令源码（C#），与 `RsTool_Command_Reference.html` / `.docx` / `.xlsx` 三版同源。');
L.push('');
L.push(`- 命令总数：**${data.length}** 条（${Object.keys(details).length} 个唯一命令，其中 \`rsMeshRelax\` 在「几何-网格」与「物理模拟」两处重复列出）`);
L.push(`- 大类：**${catOrder.length}** 个`);
L.push('- 每个命令均含功能、调用方式、交互流程、参数表、输出、备注等详解。');
L.push('');
L.push('---');
L.push('');

function renderCommand(it, d){
  const name = it.name;
  const zh = it.zh || name;
  const cat = it.cat || '未分类';
  const sub = it.sub || '';
  const lines = [];
  lines.push(`### ${name !== zh ? name + ' · ' + zh : name}`);
  lines.push('');
  lines.push(`> 模块：${cat}${sub ? ' / ' + sub : ''}`);
  lines.push('');

  // 运算器图标（GH 组件专属，相对 docs/ 目录）
  if (d.icon) {
    lines.push(`![图标](${esc(d.icon)})`);
    lines.push('');
  }

  // 功能：优先 details.output/help，兜底 data.desc
  const func = d.output || d.help || it.desc || '（暂无说明）';
  lines.push(`**功能**：${esc(func)}`);
  lines.push('');

  // 配图（illustrations 数组或 illustration 单对象，相对 docs/ 目录，markdown 单文件版也能引用）
  const illusList = Array.isArray(d.illustrations)
    ? d.illustrations
    : (d.illustration && d.illustration.src ? [d.illustration] : []);
  for (const il of illusList) {
    if (!il || !il.src) continue;
    const alt = esc(il.alt || it.zh || name);
    lines.push(`![${alt}](${esc(il.src)})`);
    if (il.caption) lines.push(`*${esc(il.caption)}*`);
    lines.push('');
  }

  // 调用方式：GH 运算器直接拖入画布使用，无需说明调用方法；其余命令写出调用方式
  if (d.style !== 'gh') {
    const callType = d.style==='form' ? '打开设置窗口' : '命令行交互';
    lines.push(`**调用**：在 Rhino 命令行输入 \`${name}\`（${callType}）`);
    lines.push('');
  }

  // 交互流程（流程详情里若有）
  const flowLabel = d.style==='gh' ? '使用步骤' : '交互流程';
  if (Array.isArray(d.flow) && d.flow.length) {
    lines.push(`**${flowLabel}**：`);
    lines.push('');
    d.flow.forEach((step, idx) => lines.push(`${idx+1}. ${esc(step)}`));
    lines.push('');
  }

  // 参数表
  lines.push('**参数**：');
  lines.push('');
  const params = Array.isArray(d.params) ? d.params : [];
  if (params.length) {
    lines.push('| 中文名 | 英文名 | 类型 | 默认值 | 范围 | 说明 |');
    lines.push('| --- | --- | --- | --- | --- | --- |');
    params.forEach(p => lines.push(`| ${esc(p.zh)} | ${esc(p.en)} | ${esc(p.type)} | ${esc(p.def)} | ${esc(p.range)} | ${esc(p.note)} |`));
  } else {
    if (d.style === 'gh') {
      lines.push('> 该运算器无参数输入；每次画布求解时自动执行。');
    } else {
      lines.push('> 此命令无命令行数值参数，相关设置在窗口中调整。');
    }
  }
  lines.push('');

  // 输出（如与功能重复则跳过）
  if (d.output && d.output !== func) {
    lines.push(`**输出**：${esc(d.output)}`);
    lines.push('');
  }

  // 备注（允许 \n\n 分段，notes 内的 markdown 表格行紧挨不被空行打断）
  const rawNotes = d.notes ? String(d.notes).replace(/\s+$/, '') : '';
  if (rawNotes) {
    // 只在双换行（空行）处分段，保留段内的单换行（表格行/列表等）
    const segs = rawNotes.split(/\n\n+/);
    if (segs.length) {
      lines.push(`**备注**：${esc(segs.shift())}`);
      lines.push('');
      while (segs.length) {
        const seg = String(segs.shift());
        // 段内可能含多行（表格/列表），按 \n 拆开逐行 push，保留行结构
        for (const ln of seg.split('\n')) lines.push(esc(ln));
        lines.push('');
      }
    }
  }

  // 嵌入视频（videos 数组，原生 HTML 输出 —— marked 会原样保留）
  if (Array.isArray(d.videos) && d.videos.length) {
    lines.push('**教学视频**：');
    lines.push('');
    for (const v of d.videos) {
      if (!v || !v.src) continue;
      const titleEsc = v.title ? esc(v.title) : (v.provider || '视频');
      lines.push(`<iframe class="rstool-video" src="${esc(v.src)}" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" loading="lazy" title="${titleEsc}"></iframe>`);
      if (v.title) lines.push(`*${esc(v.title)}*`);
      lines.push('');
    }
  }

  lines.push('---');
  lines.push('');
  return lines.join('\n');
}

catOrder.forEach(cat => {
  const items = data.filter(it => it.cat === cat);
  const subs = subOfCat[cat] ? subOfCat[cat].filter(Boolean) : [];
  L.push(`## ${cat}`);
  L.push('');
  L.push(`> 共 ${items.length} 个命令${subs.length ? ' · 子类：' + subs.join(' / ') : ''}`);
  L.push('');

  items.forEach(it => {
    const d = details[it.name] || {};
    L.push(renderCommand(it, d));
  });
});

L.push('## 附录：生成说明');
L.push('');
L.push('- 本手册由 `docs/RsTool_Command_Reference.html` 内嵌的 `data`（命令清单）与 `details`（命令详情）自动渲染。');
L.push('- 当插件命令源码更新后，重新生成 HTML 参考，再运行 `node docs/generate_commands_md.js` 即可同步。');
L.push(`- 生成时间：${new Date().toISOString().slice(0,10)}`);
L.push('');

fs.writeFileSync(OUT, L.join('\n'), 'utf8');
console.log('WROTE', OUT);
console.log('bytes:', fs.statSync(OUT).size);
console.log('cats:', catOrder.length, 'data:', data.length);

// 同时输出结构化数据（docs/index.html 多页路由用它按命令单独渲染）
const JSON_OUT = path.join(__dirname, 'commands.json');
fs.writeFileSync(JSON_OUT, JSON.stringify({ generated: new Date().toISOString(), data, details }, null, 1), 'utf8');
console.log('WROTE', JSON_OUT);
console.log('json bytes:', fs.statSync(JSON_OUT).size);

// 同时导出内联数据（commands.data.js），供 index.html 在 file:// 双击打开时回退使用
const DATA_OUT = path.join(__dirname, 'commands.data.js');
fs.writeFileSync(DATA_OUT, 'window.__RSTOOL_DB__ = ' + JSON.stringify({ generated: new Date().toISOString(), data, details }) + ';\n', 'utf8');
console.log('WROTE', DATA_OUT);
console.log('data.js bytes:', fs.statSync(DATA_OUT).size);