# chaste

![Last version](https://img.shields.io/github/tag/Kikobeats/chaste.svg?style=flat-square)
[![Coverage Status](https://img.shields.io/coveralls/Kikobeats/chaste.svg?style=flat-square)](https://coveralls.io/github/Kikobeats/chaste)
[![NPM Status](http://img.shields.io/npm/dm/chaste.svg?style=flat-square)](https://www.npmjs.org/package/chaste)

> Utility for type casting & data conversion.

**Chaste** is a tiny library for handle type casting.

Basically you stablish the output type to convert your input data, for example:

```js
const Chaste = require('chaste')
const chaste = Chaste(String)
```

Now, when you provide a input value it always return the `String` casting version:

```js
chaste(12)
// => '12'
```

By default, it's support native types (like `Array`, `Object`, `Date` or `Error`).

Also you can provide a *function-type-like*, for example:

```js
const chaste = Chaste(pad)
chaste('abc', 8, '_-').should.be.equal('_-abc_-_')
// => '_-abc_-_'
```

As you can see, rest param are supported!

You can use it as little middleware to be sure about the value of something.

## Install

```bash
$ npm install chaste --save
```

If you want to use in the browser (powered by [Browserify](http://browserify.org/)):

```bash
$ bower install chaste --save
```

and later link in your HTML:

```html
<script src="bower_components/chaste/dist/chaste.js"></script>
```

## Usage

```js
const Chaste = require('chaste')
const chaste = Chaste(String)

chaste(12)
// => '12'
```

## API

### Chaste(type)

#### type

*Required*<br>
Type: `function`

Factory function to create output type.

Supported types:

- `Array` (Also `[]`)
- `Object` (Also `{}`)
- `Error`
- `Buffer`
- `String`
- `Number`
- `RegExp`
- `Boolean`
- `Function`

Notes that you can provide your own factory function as well, but it needs to create instances without using `new` keyword.

## License

MIT © [Kiko Beats](http://kikobeats.com)
