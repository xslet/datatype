/*
 * Copyright (C) 2016 xslet project.
 * This software is released under the MIT license.
 */
/**
 * @class xslet.datatype.Rect
 * @classdesc Represents a rectangle.
 *   The instance of this class has properties of corner positions and size of
 *   a rectangle.
 *
 * @param obj {object} - An object which has all or any of properties of corner
 *   positions or size of a rectangle.
 */
function Rect(obj) {
  obj = obj || {};

  var left = validate(obj.left, 0),
      right = validate(obj.right, left),
      width = validate(obj.width, right - left),
      top = validate(obj.top, 0),
      bottom = validate(obj.bottom, top),
      height = validate(obj.height, bottom - top);

  var rect = {};

  /**
   * The left position of this rectangle.
   * If this value is changed, the `right` property is also changed but `width`
   * property is not changed..
   *
   * @var {number} left
   * @memberof xslet.datatype.Rect
   * @instance
   */
  Object.defineProperty(rect, 'left', {
    enumerable: true,
    get: function() {
      return left;
    },
    set: function(v) {
      left = validate(v, left);
    },
  });

  /**
   * The top position of this rectangle.
   * If this value is changed, the `bottom` property is also changed but
   * `height` is not changed.
   *
   * @var {number} top
   * @memberof xslet.datatype.Rect
   * @instance
   */
  Object.defineProperty(rect, 'top', {
    enumerable: true,
    get: function() {
      return top;
    },
    set: function(v) {
      top = validate(v, top);
    },
  });

  /**
   * The right position of this rectangle.
   * If this value is changed, the `width` property is also changed but `left`
   * property is not changed.
   *
   * @var {number} right
   * @memberof xslet.datatype.Rect
   * @instance
   */
  Object.defineProperty(rect, 'right', {
    enumerable: true,
    get: function() {
      return left + width;
    },
    set: function(v) {
      width = validate(v, left + width) - left;
    },
  });

  /**
   * The bottom position of this rectangle.
   * If this value is changed, the `height` property is also changed but `top`
   * property is not changed..
   *
   * @var {number} bottom
   * @memberof xslet.datatype.Rect
   * @instance
   */
  Object.defineProperty(rect, 'bottom', {
    enumerable: true,
    get: function() {
      return top + height;
    },
    set: function(v) {
      height = validate(v, top + height) - top;
    },
  });

  /**
   * Width of this rectangle.
   * If this value is changed, the 'right' property is also changed but `left`
   * property is not changed.
   *
   * @var {number} width
   * @memberof xslet.datatype.Rect
   * @instance
   */
  Object.defineProperty(rect, 'width', {
    enumerable: true,
    get: function() {
      return width;
    },
    set: function(v) {
      width = validate(v, width);
    },
  });

  /**
   * Height of this rectangle.
   * If this value is changed, the 'bottom' property is also changed but `top`
   * property is not changed.
   *
   * @var {number} height
   * @memberof xslet.datatype.Rect
   * @instance
   */
  Object.defineProperty(rect, 'height', {
    enumerable: true,
    get: function() {
      return height;
    },
    set: function(v) {
      height = validate(v, height);
    },
  });

  return rect;
}

function validate(value, defaultValue) {
  if (typeof value === 'number') {
    return value;
  }

  return defaultValue;
}
