import {readJson,flatten,fail,pass} from './lib.mjs';
for(const suffix of ['default','schema']){
  const langs=['pt','en','es']; const sets={};
  for(const lang of langs){ try{sets[lang]=new Set(flatten(readJson(`kiwify/current/locales/${lang}.${suffix}.json`)))}catch(e){fail(`${lang}.${suffix}.json inválido: ${e.message}`)} }
  if(Object.keys(sets).length!==3) continue;
  const union=new Set([...sets.pt,...sets.en,...sets.es]);
  for(const lang of langs){ const missing=[...union].filter(k=>!sets[lang].has(k)); if(missing.length) fail(`${lang}.${suffix}: chaves ausentes: ${missing.join(', ')}`); }
  if(!process.exitCode) pass(`Locales ${suffix}: paridade de chaves`);
}
