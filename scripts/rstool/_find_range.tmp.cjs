const fs = require('fs');
const t = fs.readFileSync('scripts/rstool/commands.json', 'utf8');
const needle = '"cat": "铺装表皮"';
let pos = 0;
const out = [];
while ((pos = t.indexOf(needle, pos)) !== -1) {
  let start = t.lastIndexOf('   {', pos);
  if (start === -1) start = t.lastIndexOf('  {', pos);
  if (start === -1) start = t.lastIndexOf('{', pos);
  let depth = 0;
  let i = start;
  while (i < t.length) {
    const c = t[i];
    if (c === '{') depth++;
    else if (c === '}') { depth--; if (depth === 0) { i++; break; } }
    i++;
  }
  let end = i;
  while (end < t.length && (t[end] === ' ' || t[end] === '\n' || t[end] === '\r' || t[end] === ',')) end++;
  const block = t.slice(start, i);
  const nm = (block.match(/"name":\s*"([^"]+)"/) || [,'?'])[1];
  out.push({ start, end: i, delimEnd: end, name: nm });
}
console.log(JSON.stringify(out, null, 2));
