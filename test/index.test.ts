import { expect, test } from 'vitest';
import { vid } from '../src';

test('vid calls', () => {
  expect(vid()).length(32);
  expect(vid({ length: 12 })).length(12);
  expect(vid({ length: 12, prefix: 'test' })).length(16);
  expect(vid({ prefix: 'test' })).length(36);

  expect(vid({ length: 1, characters: 'A' })).length(1);
  expect(vid({ length: 3, characters: 'A' })).toBe('AAA');
});

test('vid instance', () => {
  const generateId = vid.create({ length: 10, prefix: 'test' });
  const id = generateId();
  expect(id.indexOf('test')).toBe(0);
  expect(id).length(14);
});
