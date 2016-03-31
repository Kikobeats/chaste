# chaste

![Last version](https://img.shields.io/github/tag/Kikobeats/chaste.svg?style=flat-square)
[![Build Status](http://img.shields.io/travis/Kikobeats/chaste/master.svg?style=flat-square)](https://travis-ci.org/Kikobeats/chaste)
[![Dependency status](http://img.shields.io/david/Kikobeats/chaste.svg?style=flat-square)](https://david-dm.org/Kikobeats/chaste)
[![Dev Dependencies Status](http://img.shields.io/david/dev/Kikobeats/chaste.svg?style=flat-square)](https://david-dm.org/Kikobeats/chaste#info=devDependencies)
[![NPM Status](http://img.shields.io/npm/dm/chaste.svg?style=flat-square)](https://www.npmjs.org/package/chaste)
[![Donate](https://img.shields.io/badge/donate-paypal-blue.svg?style=flat-square)](https://paypal.me/Kikobeats)

> Utility for type casting & data conversion.

**Chaste** is a tiny library to handle type casting.

Basically you stablish the output type to convert your data, for example:

```js
var Chaste = require('chaste')
var chaste = Chaste(String)
```

Then whatever value that you provide as input returns a `String` type.

```js
chaste(12)
// => '12'
```

By default, it's support native types (Like, `Array`, `Object`, `Date`, `Buffer`).

Also you can provide a Function type like, for example:

```js
var chaste = Chaste(pad)
chaste('abc', 8, '_-').should.be.equal('_-abc_-_')
// => '_-abc_-_'
```

As you can see, rest param are supported!

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
var Chaste = require('chaste')
var chaste = Chaste(String)

chaste(12)
// => '12'
```

## API

### Chaste(type)

#### type

*Required*<br>
Type: `function`

Factory function to create output type.

Supported native types:

- `Array`
- `Object`
- `Error`
- `Buffer`
- `String`
- `Number`
- `Boolean`
- `Function`

Notes that you can provide your own factory function as well, but it needs to create instances without using `new` keyword.

## License

MIT © [Kiko Beats](http://kikobeats.com)
