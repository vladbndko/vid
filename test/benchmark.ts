import benchmark from 'benchmark';
import { nanoid } from 'nanoid';

import { vid } from '../src';

const suite = new benchmark.Suite();

suite
  .add('vid', () => {
    vid({ length: 12 });
  })
  .add('nanoid', () => {
    nanoid(12);
  })
  .on('cycle', function (event: benchmark.Event) {
    console.log(String(event.target));
  })
  .on('complete', function (this: benchmark.Suite) {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  })
  .run({ async: true });
