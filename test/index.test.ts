import { expect, test } from 'vitest';
import { uniqueId, uuid4 } from '../src';

test('uniqueId', () => {
  expect(uniqueId()).length(32);
  expect(uniqueId({ length: 10 })).length(10);
  expect(uniqueId({ prefix: 'test_' }).startsWith('test_')).toBeTruthy();
  expect(uniqueId({ characters: 'AAA', length: 4 })).toBe('AAAA');
});

test('uuid4', () => {
  for (let i = 0; i <= 100; ++i) {
    expect(uuid4()).toMatch(/^[\da-f]{8}-[\da-f]{4}-4[\da-f]{3}-[89ab][\da-f]{3}-[\da-f]{12}$/i);
  }
});
