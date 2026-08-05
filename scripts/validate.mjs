import fs from 'node:fs';
import path from 'node:path';
import './validate-templates.mjs';
import './validate-locales.mjs';
import { ROOT, TARGET, readJson, fail, pass } from './lib.mjs';

const manifest = readJson('data/kiwify-files.json').files;

for (const [folder, files] of Object.entries(manifest)) {
  for (const file of files) {
    const targetPath = path.join(ROOT, TARGET, folder, file);
    if (!fs.existsSync(targetPath)) {
      fail(`Arquivo esperado ausente: ${targetPath}`);
    }
  }
}

const sectionsDirectory = path.join(ROOT, TARGET, 'sections');
for (const filename of fs.readdirSync(sectionsDirectory).filter((name) => name.endsWith('.liquid'))) {
  const content = fs.readFileSync(path.join(sectionsDirectory, filename), 'utf8');
  const match = content.match(/{% schema %}\s*([\s\S]*?)\s*{% endschema %}/);

  if (!match) {
    fail(`${filename}: bloco schema ausente`);
    continue;
  }

  try {
    JSON.parse(match[1]);
  } catch (error) {
    fail(`${filename}: schema JSON inválido (${error.message})`);
  }
}

const cssPath = path.join(ROOT, TARGET, 'assets', 'global.css');
const css = fs.readFileSync(cssPath, 'utf8');
const lines = css.split(/\n/);
const firstRule = lines.findIndex((line) => {
  const trimmed = line.trim();
  return trimmed &&
    !trimmed.startsWith('/*') &&
    !trimmed.startsWith('*') &&
    !trimmed.startsWith('@import');
});
const lateImport = lines.findIndex(
  (line, index) => index > firstRule && line.trim().startsWith('@import')
);

if (lateImport >= 0) {
  fail(`global.css possui @import tardio na linha ${lateImport + 1}`);
} else {
  pass('global.css sem @import tardio');
}

const allLiquid = [
  ...fs.readdirSync(path.join(ROOT, TARGET, 'sections')).map((name) => path.join(ROOT, TARGET, 'sections', name)),
  ...fs.readdirSync(path.join(ROOT, TARGET, 'snippets')).map((name) => path.join(ROOT, TARGET, 'snippets', name))
]
  .filter((file) => file.endsWith('.liquid'))
  .map((file) => fs.readFileSync(file, 'utf8'))
  .join('\n');

const unsafeBlankLinks = [...allLiquid.matchAll(/target="_blank"/g)].length;
const safeBlankLinks = [...allLiquid.matchAll(/target="_blank"[^>]*rel="noopener noreferrer"/g)].length;

if (unsafeBlankLinks !== safeBlankLinks) {
  fail(`Links externos inseguros: ${unsafeBlankLinks - safeBlankLinks}`);
} else {
  pass('Links externos protegidos');
}

if (!process.exitCode) {
  pass(`Manifesto completo em ${TARGET}`);
}

if (process.exitCode) {
  console.error('\nValidação falhou. Corrija os erros antes de publicar.');
  process.exit(process.exitCode);
}

console.log(`\nValidação concluída para ${TARGET}.`);
