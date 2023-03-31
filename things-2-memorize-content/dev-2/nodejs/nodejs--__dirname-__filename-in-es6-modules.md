# `__dirname` and `__filename` in es6-modules

`__dirname` and `__filename` is [not available](https://nodejs.org/docs/latest-v18.x/api/esm.html#difference) in es6 modules.  This is how you get arround:

```js
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
```

[Reference](https://stackoverflow.com/a/55944697/3136861)

Alternatively,

```js
import { URL } from 'url'; // in Browser, the URL in native accessible on window

const __filename = new URL('', import.meta.url).pathname;
// Will contain trailing slash
const __dirname = new URL('.', import.meta.url).pathname;
```
[Reference](https://stackoverflow.com/a/66651120/3136861)


