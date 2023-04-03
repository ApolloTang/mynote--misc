# html script tag



In the early day, Javascript only runs in the browser, and you load it with:

```html
<script type="text/javascript" src="some/path.js"></script>
```

The attribute `type="text/javascript"` is later dropped in HTML5 and we simply write:

```html
<script src="some/path.js"></script>
```

Script tag will will block HTML parser while loading javascript.

javascript loaded via script tag does not have their own scope.



Reference:

- https://jameshfisher.com/2020/09/25/javascript-modules-for-grumpy-developers-from-2005/



To Read:

- https://stackoverflow.com/questions/10681388/do-running-script-tags-block-other-script-tags-from-downloading

- https://web.dev/speed-script-loading/ 

- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script

  
