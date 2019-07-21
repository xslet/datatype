# [@xslet/datatype][repo-url] v0.1 - API document

----

## APIs

### <u>Rect</u>

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

----

[repo-url]: https://github.com/xslet/datatype/
[io-image]: http://img.shields.io/badge/HP-github.io-ffbbbb.svg
[io-url]: https://xslet.github.io/datatype/
[npm-image]: http://img.shields.io/badge/npm-v0.2.0-blue.svg
[npm-url]: https://www.npmjs.org/package/@xslet/datatype/
[mit-image]: https://img.shields.io/badge/license-MIT-green.svg
[mit-url]: https://opensource.org/licenses/MIT
[coverage-image]: https://coveralls.io/repos/github/xslet/datatype/badge.svg?branch=master
[coverage-url]: https://coveralls.io/github/xslet/datatype?branch=master
