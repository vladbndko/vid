# vid

## Install

```bash
npm install @vladbndko/vid
```

## Usage
```ts
import { uniqueId, uuid4 } from '@vladbndko/vid';

uniqueId(); // EQ2ftdO4z7sJBio4T1TYV1SjVziEzN2U

uniqueId({ prefix: 'test_' }); // test_Aw677caa8WEgp8pDwEHP32b7WQPcEQhf

uniqueId({ length: 10 }); // nSGiLUj2P7

uniqueId({ characters: 'ABC', length: 3 }); // CBA

uuid4(); // c5b1058c-b851-4be5-a6af-8237f08debec
```
