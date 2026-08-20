const fs = require('fs');
const t = fs.readFileSync('scripts/rstool/commands.json', 'utf8');
const needle = '"cat": "铺装表皮"';
let pos = 0;
const out = [];
while ((pos = t.indexOf(needle, pos)) !== -1) {
  // walk back to the nearest '   {' or '  {'
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
  // walk over trailing whitespace and the comma
  let delimEnd = i;
  while (delimEnd < t.length && /[\s,]/u.test(t[delimEnd])) delimEnd++;
  const block = t.slice(start, i);
  const nm = (block.match(/"name":\s*"([^"]+)"/) || [,'?'])[1];
  out.push({ start, end: i, delimEnd, name: nm, len: i - start });
}
console.log('Found entries:', out.length);
console.log(JSON.stringify(out, null, 2));
// Also print each block
for (const r of out) {
  console.log('\n=== ' + r.name + ' (' + r.start + '..' + r.end + ' len=' + r.len + ') ===');
  console.log(t.slice(r.start, r.delimEnd));
}
