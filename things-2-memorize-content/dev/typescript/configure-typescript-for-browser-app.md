# tsconfig for application run in browser

```json
{
  "compilerOptions": {
    "target": "es2015",       /* Note 1 */
    "lib": [
      "DOM",                  /* Note 2 */
      "es2015"                /* Note 3 */
    ],
   /* ... */
  }
}
```

**Note 1:** `"target": "es2015"`

This mean the transpiler will ouput javascript of version ES6s. 

**Note 2:** `"lib": ["DOM"]`

Add `"DOM"` so that typescript understand Document Object Model.  Without it you will get error such as: 

```
TS2584: Cannot find name 'document'.
TS2584: Cannot find name 'console'.
...
```

**Note 3:** 

Add "es2015" (minimum) so that typescript understand Javascript ES6 version for Javascript. Without it you will get errror such as:  

```
TS2318: Cannot find global type 'Array'.
TS2318: Cannot find global type 'Boolean'.
TS2318: Cannot find global type 'CallableFunction'
TS2318: Cannot find global type 'Function'.
TS2318: Cannot find global type 'IArguments'.
TS2318: Cannot find global type 'NewableFunction'
TS2318: Cannot find global type 'Number'.
```



# Adding custom property to window object

```ts
declare global {
  interface Window {
    myDivElement: HTMLDivElement
  }
}

window.myDivElement = document.createElement('div')
```

Ref: [https://bobbyhadz.com/blog/typescript-property-does-not-exist-on-type-window](https://bobbyhadz.com/blog/typescript-property-does-not-exist-on-type-window)

---



