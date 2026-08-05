import path from 'node:path';
import { TARGET, readJson, flatten, fail, pass } from './lib.mjs';

for (const suffix of ['default', 'schema']) {
  const languages = ['pt', 'en', 'es'];
  const sets = {};

  for (const language of languages) {
    try {
      sets[language] = new Set(
        flatten(readJson(path.posix.join(TARGET, 'locales', `${language}.${suffix}.json`)))
      );
    } catch (error) {
      fail(`${language}.${suffix}.json inválido: ${error.message}`);
    }
  }

  if (Object.keys(sets).length !== 3) {
    continue;
  }

  const union = new Set([...sets.pt, ...sets.en, ...sets.es]);

  for (const language of languages) {
    const missing = [...union].filter((key) => !sets[language].has(key));
    if (missing.length) {
      fail(`${language}.${suffix}: chaves ausentes: ${missing.join(', ')}`);
    }
  }

  if (!process.exitCode) {
    pass(`Locales ${suffix}: paridade de chaves`);
  }
}
