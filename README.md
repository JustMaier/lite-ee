lite-ee
==================

An ultralite es6 event emitter with on, once, off, and emit

```
npm i --save lite-ee
```

- `on('event', (...args) => {}) => this`
- `once('event', (...args) => {}) => this`
- `off('event'[, handler]) => this`
- `emit('event', ...args) => void` 

### Mixin

Need to add event emitting, but already extending another class? Use the handy mixin! All the same functionality without needing to extend LiteEventEmitter.

```js
import mixin from 'lite-ee/mixin';
// OR const mixin = require('lite-ee/mixin');

class MyClass extends mixin(TheirClass) {
    // Then do everything like you normally would, except now you also have event emitters!
}
```