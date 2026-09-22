import http from 'node:http';
import { existsSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
const root = fileURLToPath(new URL('../', import.meta.url));
const themes = [
  ['studio', 'Studio', 'The current design, preserved as a baseline.', false],
  ['flow', 'Flow', 'Photos and website previews woven into each project.', true],
  ['mosaic', 'Mosaic', 'A new palette and more varied card compositions.', true],
  ['journal', 'Journal', 'An open, editorial direction with fewer enclosing cards.', true],
];
const assets = new Map([
  ['/avatar.jpg', ['avatar.jpg', 'image/jpeg']],
  ...['triangul8-store','crusoe-williston-team','crusoe-williston-visit','tally-desktop','tally-mobile','bankrewards-home'].map(name => [`/images/${name}.jpg`, [`images/${name}.jpg`, 'image/jpeg']]),
  ...['noncents-team', 'noncents-events', 'triangul8-game', 'cledge-booth'].map(name => [`/images/${name}.png`, [`images/${name}.png`, 'image/png']]),
]);
const previewPath = key => `${root}/variants/${key}.html`;
function comparison() {
  const cards = themes.filter(([key]) => existsSync(previewPath(key))).map(([key,name,description,isNew]) => `<section><div class="label"><div><h2>${name}<span class="badge">${isNew ? 'Astra exploration' : 'Baseline'}</span></h2><p>${description}</p></div><div class="links"><a href="/${key}/home" target="_blank" rel="noopener">Open full size ↗</a><a href="/${key}/home#projects" target="_blank" rel="noopener">Jump to projects ↗</a></div></div><iframe loading="lazy" title="${name} preview" src="/${key}/home"></iframe></section>`).join('');
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Bryan Lim — Studio explorations</title><style>
    *{box-sizing:border-box}body{margin:0;background:#f3f4f1;color:#233b34;font:16px/1.5 system-ui,sans-serif}header{padding:28px;background:#fff;border-bottom:1px solid #d5ddd7}h1{margin:0 0 8px;font-size:28px;letter-spacing:-.04em}p{margin:4px 0;color:#53665d}a{color:#245f4c}a:focus-visible{outline:3px solid #245f4c;outline-offset:4px}main{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:22px;padding:24px}section{background:#fff;border:1px solid #d5ddd7;border-radius:14px;overflow:hidden}.label{padding:18px;display:flex;justify-content:space-between;align-items:center;gap:12px}h2{font-size:20px;margin:0}.label p{font-size:13px;max-width:38ch}.badge{display:inline-block;font-size:10px;font-weight:600;background:#e6eee8;color:#355747;padding:4px 8px;border-radius:99px;vertical-align:middle;margin-left:10px}.links{display:grid;gap:5px;flex-shrink:0;font-size:13px}iframe{width:100%;height:700px;border:0;border-top:1px solid #d5ddd7;display:block;background:#fff}@media(max-width:900px){main{grid-template-columns:1fr;padding:12px}.label{flex-wrap:wrap}}@media(prefers-color-scheme:dark){body{background:#14201c;color:#e6eee8}header,section{background:#1b2c24}p{color:#b2c2b8}a{color:#b5dcc7}header,section,iframe{border-color:#3a4e42}.badge{background:#344e40;color:#d6e9dd}}
    </style></head><body><header><h1>Design explorations</h1><p><a href="http://127.0.0.1:4321/" target="_blank" rel="noopener">Open the main site — Journal ↗</a></p><p>Compare the current design with three new Astra explorations. Each uses the same content and real project images.</p><p>Scroll inside a preview, or open it full size to compare layouts and dark mode.</p></header><main>${cards}</main></body></html>`;
}
http.createServer((req,res) => {
  const url = new URL(req.url,'http://127.0.0.1:4322');
  const asset = assets.get(url.pathname);
  if(asset){res.writeHead(200,{'Content-Type':asset[1]});res.end(readFileSync(`${root}/public/${asset[0]}`));return;}
  const [,key,page] = url.pathname.split('/');
  const theme = themes.find(theme => theme[0] === key);
  if(theme && page === 'projects') {res.writeHead(302,{Location:`/${key}/home#projects`});res.end();return;}
  const html = url.pathname === '/' ? comparison() : theme && page === 'home' && existsSync(previewPath(key)) ? readFileSync(previewPath(key),'utf8') : null;
  res.writeHead(html ? 200 : 404,{'Content-Type':'text/html; charset=utf-8','Cache-Control':'no-store'});
  res.end(html ?? 'Preview not found');
}).listen(4322,'127.0.0.1',()=>console.log('Studio comparison: http://127.0.0.1:4322/'));
