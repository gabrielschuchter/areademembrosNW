import fs from 'node:fs';
import path from 'node:path';
export const ROOT = path.resolve(process.cwd());
export function readJson(rel){ return JSON.parse(fs.readFileSync(path.join(ROOT, rel),'utf8').replace(/^\uFEFF/,'')); }
export function flatten(value,prefix=''){
  if(value===null || typeof value!=='object' || Array.isArray(value)) return [prefix];
  return Object.entries(value).flatMap(([k,v])=>flatten(v,prefix?`${prefix}.${k}`:k));
}
export function fail(message){ console.error(`✗ ${message}`); process.exitCode=1; }
export function pass(message){ console.log(`✓ ${message}`); }
