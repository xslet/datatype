[@xslet/datatype][repo-url] [![Github.io][io-image]][io-url] [![NPM version][npm-image]][npm-url] [![MIT License][mit-image]][mit-url] [![Coverage Status][coverage-image]][coverage-url]
=================

Defines data types and utilities used in xslet packages.

Install
-------

### Install from npm

Executes following command to install this package from npm.

```sh
$ npm install --save @xslet/datatype
```

### Load this package in a browser

```js
<script src="xslet.datatype.min.js"></script>
```

Usage
-----

### Rect

```js
Rect rect = Rect({ left: 10, top: 20, width: 100, height: 50 })

console.log(rect)
// => { left: 10, top: 20, right: 90, bottom: 30, width: 100, height: 50 }

console.log(rect.right)
// => 110

rect.top = 30
rect.bottom = 200

console.log(rect)
// => { left: 10, top: 30, right: 90, bottom: 200, width: 100, height: 170 }
```

APIs
----

#### <u>Rect</u>

Represents a rectangle.

Each of `.right` and `.width` properties are calculated automatically with another properties and `.left`.
As well as each of `.bottom` and `.height` properties are calculated automatically with another properties and `.top`.

When `.left` and `.top` properties are changed, the rectangle is moved and `.width` and `.height` are not changed.

The unit of this value is not specified.
In xslet package, it would be determined by `xslet.window.unitOfSize`.

**Properties:**

* **.top** {number} - The top position of this rectangle.
* **.left** {number} - The left position of this rectangle.
* **.right** {number} - The right position of this rectangle.
* **.bottom** {number} - The bottom position of this rectangle.
* **.width** {number} - The width position of this rectangle.
* **.height** {number} - The height position of this rectangle.

**Constructor:**

* **Rect()**

    Creates a Rect object of which all properties is zero.

* **Rect(obj)**

    Creates a Rect object of which properties are corner positions or size of a rectangle. 

    **Parameters:**

    * **obj** {object}

        An object which supposed to have either or all following properties: `.left`, `.top`, `.right`, `.bottom`, `.width` and `.height`.
        If all `.left`, `.right` and `.width` properties are specified but `.width` is different from `.right - .left`, `.right` is changed to `.left + .width`. It is also same about `.top`, `.bottom` and `.height`.

Behavior checks on browsers
---------------------------

Show this page: [test/web/index.html](test/web/index.html).

License
-------

Copyright (C) 2016 Takayuki Sato

This program is free software under [MIT][mit-url] License.
See the file LICENSE in this distribution for more details.

[repo-url]: https://github.com/xslet/datatype/
[io-image]: http://img.shields.io/badge/HP-github.io-ffbbbb.svg
[io-url]: https://xslet.github.io/datatype/
[npm-image]: http://img.shields.io/badge/npm-v0.0.0-blue.svg
[npm-url]: https://www.npmjs.org/package/@xslet/datatype/
[mit-image]: https://img.shields.io/badge/license-MIT-green.svg
[mit-url]: https://opensource.org/licenses/MIT
[coverage-image]: https://coveralls.io/repos/github/xslet/datatype/badge.svg?branch=master
[coverage-url]: https://coveralls.io/github/xslet/datatype?branch=master
