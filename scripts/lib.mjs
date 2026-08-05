import fs from 'node:fs';
import path from 'node:path';

export const ROOT = path.resolve(process.cwd());

const targetIndex = process.argv.indexOf('--target');
export const TARGET = targetIndex >= 0 && process.argv[targetIndex + 1]
  ? process.argv[targetIndex + 1]
  : 'kiwify/releases/1.0.0';

export function readJson(rel) {
  return JSON.parse(
    fs.readFileSync(path.join(ROOT, rel), 'utf8').replace(/^\uFEFF/, '')
  );
}

export function flatten(value, prefix = '') {
  if (value === null || typeof value !== 'object' || Array.isArray(value)) {
    return [prefix];
  }

  return Object.entries(value).flatMap(([key, nested]) =>
    flatten(nested, prefix ? `${prefix}.${key}` : key)
  );
}

export function fail(message) {
  console.error(`✗ ${message}`);
  process.exitCode = 1;
}

export function pass(message) {
  console.log(`✓ ${message}`);
}
