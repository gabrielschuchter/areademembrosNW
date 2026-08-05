import './validate-templates.mjs';
import './validate-locales.mjs';
import fs from 'node:fs'; import path from 'node:path'; import {ROOT,readJson,fail,pass} from './lib.mjs';
const manifest=readJson('data/kiwify-files.json').files;
for(const [folder,files] of Object.entries(manifest)) for(const file of files){ const p=path.join(ROOT,'kiwify/current',folder,file); if(!fs.existsSync(p)) fail(`Arquivo esperado ausente: ${p}`); }
const css=fs.readFileSync(path.join(ROOT,'kiwify/current/assets/global.css'),'utf8');
const firstNonImport=css.split(/\n/).findIndex(l=>l.trim() && !l.trim().startsWith('/*') && !l.trim().startsWith('*') && !l.trim().startsWith('@import'));
const lateImport=css.split(/\n/).findIndex((l,i)=>i>firstNonImport && l.trim().startsWith('@import'));
if(lateImport>=0) console.warn(`⚠ baseline global.css possui @import tardio na linha ${lateImport+1} (defeito conhecido)`);
if(/\ntarget=\"_blank\"/.test('')){} // reserved for generated checks
if(!process.exitCode) pass('Manifesto de arquivos completo');
if(process.exitCode){ console.error('\nValidação falhou. Consulte docs/12-auditoria-atual.md.'); process.exit(process.exitCode); }
console.log('\nValidação concluída.');
