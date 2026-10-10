import {readFileSync,readdirSync,existsSync} from 'node:fs';
import {join,relative} from 'node:path';
import assert from 'node:assert/strict';
const root='dist',config=JSON.parse(readFileSync('site.config.json','utf8'));
const walk=d=>readdirSync(d,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(join(d,e.name)):[join(d,e.name)]);
const html=walk(root).filter(p=>p.endsWith('.html'));
const expected=config.navigation.filter(x=>x.enabled).map(x=>({name:x.label,href:config.base+x.id+'/'}));
const xml=readFileSync(join(root,'sitemap.xml'),'utf8'),rss=readFileSync(join(root,'rss.xml'),'utf8');
const drafts=walk('src/content/articles').filter(p=>p.endsWith('.md')).filter(p=>/^draft:\s*true\s*$/m.test(readFileSync(p,'utf8'))).map(p=>({slug:p.split('/').pop().replace(/\.md$/,''),title:readFileSync(p,'utf8').match(/^title:\s*(.+)$/m)[1]}));
const pages=[];
for(const path of html){const text=readFileSync(path,'utf8');const nav=text.match(/<nav[^>]*id="primary-navigation"[^>]*>([\s\S]*?)<\/nav>/)?.[1];assert(nav,path+' shared nav');const links=[...nav.matchAll(/<a\b[^>]*href="([^"]+)"[^>]*>(.*?)<\/a>/g)].map(m=>({name:m[2].replace(/<[^>]*>/g,'').trim(),href:m[1]}));assert.deepEqual(links,expected,path+' navigation');assert.equal((text.match(/<h1\b/g)||[]).length,1);assert(text.includes('noindex,nofollow'));
for(const d of drafts){assert(!text.includes(d.title),path+' draft title');assert(!text.includes('/articles/'+d.slug+'/'),path+' draft link');}
for(const m of text.matchAll(/(?:href|src)="(\/[^"#?]*)(?:[?#][^"]*)?"/g)){const p=m[1];if(p.endsWith('/'))assert(existsSync(join(root,p,'index.html')),path+' broken '+p);else assert(existsSync(join(root,p)),path+' missing '+p);}
pages.push(relative(root,path));}
for(const d of drafts){assert(!existsSync(join(root,'articles',d.slug,'index.html')),'draft URL emitted');assert(!xml.includes(d.slug));assert(!rss.includes(d.slug));}
assert(xml.includes('/toolbox/'),'toolbox sitemap');assert(xml.includes('/review-notes/'),'review-notes sitemap');assert(existsSync(join(root,'toolbox/index.html')));
console.log(JSON.stringify({pages,nav:expected,drafts:drafts.map(x=>x.slug),assertions:'passed'},null,2));
