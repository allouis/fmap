# fmap

Super simple fmap function, that takes a function and a functor and calls the functor fmap method, passing the function.

```javascript
var fmap = require('fmap');

function add2(a) {
    return a + 2;
}

fmap(add2)(Maybe(3)); //=> Just(5);
fmap(add2)(Maybe(null)); //=> Nothing();

```
