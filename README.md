# vid

## Install

```bash
npm install @vladbndko/vid
```

## Usage
```ts
import { vid } from '@vladbndko/vid';

vid(); // VJddZKXA4WzDcvAaTxpndD9HlWgPi6wV

vid({ prefix: 'test' }); // testfhTtqilmyYtmF6ZMt1DpfiwZ78Ah4ynr

vid({ length: 10 }); // t9INktucGr

vid({ characters: 'ABC', length: 3 }); // CBA

// Create an instance
const createId = vid.create({ length: 20, prefix: 'test' });

createId(); // testF6ZMt1DpfiwZ78Ah4ynr
```
