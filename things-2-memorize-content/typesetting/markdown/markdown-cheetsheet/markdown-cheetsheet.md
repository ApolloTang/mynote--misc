## Markdown cheetsheet

NOTE: This article is modified after:
[Link To Original](https://github.com/mike-works/vscode-fundamentals/blob/master/docs/1_using/markdown.md),
[Link to Clone](https://github.com/ApolloTang/vscode-fundamentals/blob/master/docs/1_using/markdown.md)


### Images

#### Markdown images

```md
![VS Code](./imgs/vscode.png)
```

*Result*

![VS Code](./imgs/vscode.png)

#### HTML markdown image [`<img>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img)

```html
<img src="./imgs/vscode.png" height=50 align=right vspace=20/>
<img src="./imgs/vscode.png" height=100/>
```

*Result*
<img src="./imgs/vscode.png" height=50 align=right vspace=20/>
<img src="./imgs/vscode.png" height=100/>

Note that GitHub actually does not render the html as you specified, instead it creates html as follow:

```html
<p>
  <a href="./imgs/myimage.jpg">
    <!--image-->
  </a>
</p>
```



### Alignment

The `align` attribute can be used on a variety of HTML tags

```html
<p align=right>right ⮕</p>
<p align=center>⬅ center ⮕</p>
<p align=left>⬅ left</p>
```

*Result:*
<p align=right>right ⮕</p>
<p align=center>⬅ center ⮕</p>
<p align=left>⬅ left</p>

**Trick:** If you wrap multiple inline elements in a `<p>` tag, it's possible to do some interesting things with vertical `align` attribute values

```html
<p>
  <img src="./imgs/vscode.png" height=50 align=top />
  <img src="./imgs/vscode.png" height=50 align=bottom />
  <img src="./imgs/vscode.png" height=100/>
</p>
```

*Result:*
<p>
  <img src="./imgs/vscode.png" height=50 align=top />
  <img src="./imgs/vscode.png" height=50 align=bottom />
  <img src="./imgs/vscode.png" height=100/>
</p>


### Lists

#### Unordered Lists

```md
* ⏩ [Emmet](./emmet.md)
* 🎛 [Refactoring](./refactoring.md)
* ✅ [Type-Checking](./type-checking.md)
* 🐞 [Debugging](./debugging.md)
```

*Results*
* ⏩ [Emmet](./emmet.md)
* 🎛 [Refactoring](./refactoring.md)
* ✅ [Type-Checking](./type-checking.md)
* 🐞 [Debugging](./debugging.md)

#### Ordered Lists

Note that order list does not alway renderer consistently

```md
1. first
1. second
1. third
```
*Result:*
1. first
1. second
1. third

#### Nested Lists:

 Note that nested list does not alway renderer consistently


```md
* one
* two
  * three
    * four
```
*Result:*
 * one
 * two
   * three
     * four


```md
1. first
a. AAA
a. BBB
b. nnn
b. nnn
1. second
  2. XXX
  2. YYY
1. third
```
*Result:*
1. first
a. AAA
a. BBB
b. nnn
b. nnn
1. second
  2. XXX
  2. YYY
1. third

but, you can use HTML:

```html
<ol type='A' >
  <li> first </li>
  <li> second </li>
  <li> third</li>
  <ol type='a' >
    <li> fourth </li>
    <ol type='i' >
      <li> fifth </li>
    </ol>
  </ol>
</ol>
```
*Result:*

<ol type='A' >
  <li> first </li>
  <li> second </li>
  <li> third</li>
  <ol type='a' >
    <li> fourth </li>
    <ol type='i' >
      <li> fifth </li>
    </ol>
  </ol>
</ol>


#### Description Lists (`<dl>`)
[MDN document](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl)

```html
<dl>
  <dt>Images</dt>
  <dd>.jpg, .gif, .png</dd>
  <dt>Styles</dt>
  <dd>.css</dd>
  <dt>Scripts</dt>
  <dd>.js</dd>
  <dt>Documents</dt>
  <dd>.html</dd>
</dl>
```

*Result:*
<dl>
  <dt>Images</dt>
  <dd>.jpg, .gif, .png</dd>
  <dt>Styles</dt>
  <dd>.css</dd>
  <dt>Scripts</dt>
  <dd>.js</dd>
  <dt>Documents</dt>
  <dd>.html</dd>
</dl>


### Collapsibale with details/summary

[MDN document](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details)

````html
<details>
  <summary>Click me To uncollapse</summary>

  ```ts
    let Hello : string = 'World';
  ```
</details>
````

Result:

<details>
  <summary>Click me To uncollapse</summary>

  ```ts
    let Hello : string = 'World';
  ```
</details>





### Table

```md
| Item      | Price | Qty |
|-----------|-------|-----|
| 🍇 Grapes | $2.99 | 3   |
| 🍐 Pears  | $4.15 | 1   |
| 🍋 Lemons | $0.99 | 2   |
```

*Result:*

| Item      | Price | Quantity |
|-----------|-------|----------|
| 🍇 Grapes | $2.99 | 3        |
| 🍐 Pears  | $4.15 | 1        |
| 🍋 Lemons | $0.99 | 2        |

