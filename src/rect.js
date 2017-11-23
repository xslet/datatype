'use strict';

var isFiniteNumber = require('@fav/type.is-finite-number');

function Rect(obj) {
  var top, left, right, bottom;

  if (!obj) {
    top = left = right = bottom = 0;
  } else {
    var h;
    if (obj.top != null) {
      top = isFiniteNumber(obj.top) ? obj.top : 0;
      if (obj.bottom != null) {
        bottom = isFiniteNumber(obj.bottom) ? obj.bottom : 0;
      } else {
        h = isFiniteNumber(obj.height) ? obj.height : 0;
        bottom = top + h;
      }
    } else if (obj.bottom != null) {
      bottom = isFiniteNumber(obj.bottom) ? obj.bottom : 0;
      h = isFiniteNumber(obj.height) ? obj.height : 0;
      top = bottom - h;
    } else if (obj.height != null) {
      bottom = isFiniteNumber(obj.height) ? obj.height : 0;
      top = 0;
    } else {
      top = bottom = 0;
    }

    var w;
    if (obj.left != null) {
      left = isFiniteNumber(obj.left) ? obj.left : 0;
      if (obj.right != null) {
        right = isFiniteNumber(obj.right) ? obj.right : 0;
      } else {
        w = isFiniteNumber(obj.width) ? obj.width : 0;
        right = left + w;
      }
    } else if (obj.right != null) {
      right = isFiniteNumber(obj.right) ? obj.right : 0;
      w = isFiniteNumber(obj.width) ? obj.width : 0;
      left = right - w;
    } else if (obj.width != null) {
      right = isFiniteNumber(obj.width) ? obj.width : 0;
      left = 0;
    } else {
      left = right = 0;
    }
  }

  Object.defineProperties(this, {
    top: {
      enumerable: true,
      get: function() {
        return top;
      },
      set: function(v) {
        if (isFiniteNumber(v)) {
          top = v;
        }
      },
    },
    left: {
      enumerable: true,
      get: function() {
        return left;
      },
      set: function(v) {
        if (isFiniteNumber(v)) {
          left = v;
        }
      },
    },
    right: {
      enumerable: true,
      get: function() {
        return right;
      },
      set: function(v) {
        if (isFiniteNumber(v)) {
          right = v;
        }
      },
    },
    bottom: {
      enumerable: true,
      get: function() {
        return bottom;
      },
      set: function(v) {
        if (isFiniteNumber(v)) {
          bottom = v;
        }
      },
    },
    width: {
      enumerable: true,
      get: function() {
        return right - left;
      },
      set: function(v) {
        if (isFiniteNumber(v)) {
          right = left + v;
        }
      },
    },
    height: {
      enumerable: true,
      get: function() {
        return bottom - top;
      },
      set: function(v) {
        if (isFiniteNumber(v)) {
          bottom = top + v;
        }
      },
    },
  });
}

Object.defineProperties(Rect.prototype, {
  inspect: {
    enumerable: true,
    writable: true,
    configurable: true,
    value: function() {
      return contentString(this);
    },
  },
  toString: {
    enumerable: true,
    writable: true,
    configurable: true,
    value: function() {
      return contentString(this);
    },
  },
  normalize: {
    enumerable: true,
    value: function() {
      var x;
      if (this.left > this.right) {
        x = this.left;
        this.left = this.right;
        this.right = x;
      }
      if (this.top > this.bottom) {
        x = this.top;
        this.top = this.bottom;
        this.bottom = x;
      }
    },
  },
  moveTo: {
    enumerable: true,
    value: function(x, y) {
      var w = this.right - this.left;
      var h = this.bottom - this.top;
      this.left = x;
      this.right = x + w;
      this.top = y;
      this.bottom = y + h;
    },
  },

  moveBy: {
    enumerable: true,
    value: function(dx, dy) {
      this.left += dx;
      this.right += dx;
      this.top += dy;
      this.bottom += dy;
    },
  },

  resizeTo: {
    enumerable: true,
    value: function(w, h) {
      this.right = this.left + w;
      this.bottom = this.top + h;
    },
  },

  resizeBy: {
    enumerable: true,
    value: function(dw, dh) {
      this.right += dw;
      this.bottom += dh;
    },
  },

  intersect: {
    enumerable: true,
    value: function(rect) {
      if (typeof rect !== 'object' || !rect) {
        return false;
      }

      var l0 = Math.min(this.left, this.right);
      var r0 = Math.max(this.left, this.right);
      var t0 = Math.min(this.top, this.bottom);
      var b0 = Math.max(this.top, this.bottom);

      var l1 = Math.min(rect.left, rect.right);
      var r1 = Math.max(rect.left, rect.right);
      var t1 = Math.min(rect.top, rect.bottom);
      var b1 = Math.max(rect.top, rect.bottom);

      return (l0 <= r1 && l1 <= r0 && t0 <= b1 && t1 <= b0);
    },
  },

  contains: {
    enumerable: true,
    value: function(rect) {
      if (typeof rect !== 'object' || !rect) {
        return false;
      }

      if ((this.left <= rect.x) && (rect.x <= this.right) &&
          (this.top <= rect.y) && (rect.y <= this.bottom)) {
        return true;
      }

      if ((this.left <= rect.left) && (rect.right <= this.right) &&
          (this.top <= rect.top) && (rect.top <= this.bottom)) {
        return true;
      }

      return false;
    },
  },

});

function contentString(rect) {
  return '{ left: ' + rect.left +
         ', top: ' + rect.top +
         ', right: ' + rect.right +
         ', bottom: ' + rect.bottom +
         ', width: ' + rect.width +
         ', height: ' + rect.height + ' }';
}

module.exports = Rect;
