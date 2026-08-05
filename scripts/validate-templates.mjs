import path from 'node:path';
import { TARGET, readJson, fail, pass } from './lib.mjs';

const base = path.posix.join(TARGET, 'templates');

for (const file of ['index.json', 'login.json']) {
  let data;

  try {
    data = readJson(`${base}/${file}`);
  } catch (error) {
    fail(`${file}: JSON inválido (${error.message})`);
    continue;
  }

  const order = data.order ?? [];
  const sections = data.sections ?? {};
  const missing = order.filter((id) => !sections[id]);
  const unordered = Object.keys(sections).filter((id) => !order.includes(id));

  if (missing.length) {
    fail(`${file}: IDs em order sem section: ${missing.join(', ')}`);
  }

  if (unordered.length) {
    fail(`${file}: sections fora de order: ${unordered.join(', ')}`);
  }

  if (order.length > 25) {
    fail(`${file}: ${order.length} seções; máximo documentado = 25`);
  } else {
    pass(`${file}: ${order.length} seções`);
  }

  for (const [id, section] of Object.entries(sections)) {
    const blocks = section.blocks ? Object.keys(section.blocks).length : 0;
    if (blocks > 50) {
      fail(`${file}/${id}: ${blocks} blocos; máximo = 50`);
    }
  }
}
