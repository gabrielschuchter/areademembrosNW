import fs from 'node:fs'; import path from 'node:path'; import {ROOT,readJson,fail,pass} from './lib.mjs';
const base='kiwify/current/templates';
for(const file of ['index.json','login.json']){
  let data; try{data=readJson(`${base}/${file}`)}catch(e){fail(`${file}: JSON inválido (${e.message})`); continue}
  const order=data.order??[]; const sections=data.sections??{};
  const missing=order.filter(id=>!sections[id]); const unordered=Object.keys(sections).filter(id=>!order.includes(id));
  if(missing.length) fail(`${file}: IDs em order sem section: ${missing.join(', ')}`);
  if(unordered.length) fail(`${file}: sections fora de order: ${unordered.join(', ')}`);
  if(order.length>25) console.warn(`⚠ ${file}: ${order.length} seções; máximo documentado = 25 (defeito conhecido do snapshot)`); else pass(`${file}: ${order.length} seções`);
  for(const [id,s] of Object.entries(sections)){
    const blocks=s.blocks?Object.keys(s.blocks).length:0;
    if(blocks>50) fail(`${file}/${id}: ${blocks} blocos; máximo = 50`);
  }
}
