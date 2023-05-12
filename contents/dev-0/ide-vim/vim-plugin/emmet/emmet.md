# Emmet 

## Cheat sheet

  - [https://docs.emmet.io/cheatsheet-a5.pdf](https://docs.emmet.io/cheatsheet-a5.pdf)
  - [https://raw.githubusercontent.com/mattn/emmet-vim/master/TUTORIAL](https://raw.githubusercontent.com/mattn/emmet-vim/master/TUTORIAL)

## Tutorial

  - [https://flaviocopes.com/emmet/](https://flaviocopes.com/emmet/)

## Notes:
### HTML boiler-plate

```
html:5
      ^--put cursor here, then type <c-y>, (ctl-y then comma)
```
Instead of "html:5", you can simply use "!"


### Custom attributes

```
p[title="Hello world"]
                      ^--put cursor here, then type <c-y>, (ctl-y then comma) 
```

### Multiple attributes

```
p[foo="foo" bar="bar"]{paragraph}
```

```html
<p foo="foo" bar="bar">paragraph</p>
```

### Multiplying Text node

```emmet
.item{My $ text}*3
```
```html
<div class="item">My 1 text</div>
<div class="item">My 2 text</div>
<div class="item">My 3 text</div>
```

```