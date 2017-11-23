'use strict';

var chai = require('chai');
var expect = chai.expect;

var Rect = require('../src').Rect;

describe('Rect', function() {

  describe('constructor', function() {
    it('Should create a Rect when no arguments', function() {
      var rect = new Rect();
      expect(rect.top).to.equal(0);
      expect(rect.left).to.equal(0);
      expect(rect.right).to.equal(0);
      expect(rect.bottom).to.equal(0);
      expect(rect.width).to.equal(0);
      expect(rect.height).to.equal(0);
    });

    it('Should create a Rect when top and left are specified', function() {
      var rect = new Rect({ top: 10, left: 20 });
      expect(rect.top).to.equal(10);
      expect(rect.left).to.equal(20);
      expect(rect.right).to.equal(20);
      expect(rect.bottom).to.equal(10);
      expect(rect.width).to.equal(0);
      expect(rect.height).to.equal(0);
    });

    it('Should create a Rect when right and bottom are specified', function() {
      var rect = new Rect({ right: 30, bottom: 40 });
      expect(rect.top).to.equal(40);
      expect(rect.left).to.equal(30);
      expect(rect.right).to.equal(30);
      expect(rect.bottom).to.equal(40);
      expect(rect.width).to.equal(0);
      expect(rect.height).to.equal(0);
    });

    it('Should create a Rect when width and height are specified', function() {
      var rect = new Rect({ width: 50, height: 60 });
      expect(rect.top).to.equal(0);
      expect(rect.left).to.equal(0);
      expect(rect.right).to.equal(50);
      expect(rect.bottom).to.equal(60);
      expect(rect.width).to.equal(50);
      expect(rect.height).to.equal(60);
    });

    it('Should create a Rect when top, left, width and height are specified',
    function() {
      var rect = new Rect({ top: 10, left: 20, width: 100, height: 120 });
      expect(rect.top).to.equal(10);
      expect(rect.left).to.equal(20);
      expect(rect.right).to.equal(120);
      expect(rect.bottom).to.equal(130);
      expect(rect.width).to.equal(100);
      expect(rect.height).to.equal(120);
    });

    it('Should create a Rect when right, bottom, width and height are ' +
    'specified', function() {
      var rect = new Rect({ right: 130, bottom: 140, width: 60, height: 80 });
      expect(rect.top).to.equal(60);
      expect(rect.left).to.equal(70);
      expect(rect.right).to.equal(130);
      expect(rect.bottom).to.equal(140);
      expect(rect.width).to.equal(60);
      expect(rect.height).to.equal(80);
    });

    it('Should create a Rect when top, left, right and bottom are specified',
    function() {
      var rect = new Rect({ top: 5, left: 10, right: 120, bottom: 130 });
      expect(rect.top).to.equal(5);
      expect(rect.left).to.equal(10);
      expect(rect.right).to.equal(120);
      expect(rect.bottom).to.equal(130);
      expect(rect.width).to.equal(110);
      expect(rect.height).to.equal(125);
    });

    it('Should create a Rect with top, left, right and bottom \n\t' +
    'when all props are specified', function() {
      var rect = new Rect({
        top: 5, left: 10, right: 120, bottom: 130, width: 50, height: 20,
      });
      expect(rect.top).to.equal(5);
      expect(rect.left).to.equal(10);
      expect(rect.right).to.equal(120);
      expect(rect.bottom).to.equal(130);
      expect(rect.width).to.equal(110);
      expect(rect.height).to.equal(125);
    });

    it('Should set zero when arguments are illegal', function() {
      var rect = new Rect({ top: NaN, left: {}, width: 10, height: 20 });
      expect(rect.top).to.equal(0);
      expect(rect.left).to.equal(0);
      expect(rect.right).to.equal(10);
      expect(rect.bottom).to.equal(20);
      expect(rect.width).to.equal(10);
      expect(rect.height).to.equal(20);
    });

    it('Should set zero when arguments are illegal', function() {
      var rect = new Rect({ top: 10, left: 20, width: NaN, height: {} });
      expect(rect.top).to.equal(10);
      expect(rect.left).to.equal(20);
      expect(rect.right).to.equal(20);
      expect(rect.bottom).to.equal(10);
      expect(rect.width).to.equal(0);
      expect(rect.height).to.equal(0);
    });

    it('Should set zero when arguments are illegal', function() {
      var rect = new Rect({ right: [], bottom: '12', width: 10, height: 20 });
      expect(rect.top).to.equal(-20);
      expect(rect.left).to.equal(-10);
      expect(rect.right).to.equal(0);
      expect(rect.bottom).to.equal(0);
      expect(rect.width).to.equal(10);
      expect(rect.height).to.equal(20);
    });

    it('Should set zero when arguments are illegal', function() {
      var rect = new Rect({ right: 10, bottom: 20, width: NaN, height: {} });
      expect(rect.top).to.equal(20);
      expect(rect.left).to.equal(10);
      expect(rect.right).to.equal(10);
      expect(rect.bottom).to.equal(20);
      expect(rect.width).to.equal(0);
      expect(rect.height).to.equal(0);
    });

    it('Should set zero when arguments are illegal', function() {
      var rect = new Rect({ top: 10, left: 20, right: true, bottom: '' });
      expect(rect.top).to.equal(10);
      expect(rect.left).to.equal(20);
      expect(rect.right).to.equal(0);
      expect(rect.bottom).to.equal(0);
      expect(rect.width).to.equal(-20);
      expect(rect.height).to.equal(-10);
    });

    it('Should set zero when arguments are illegal', function() {
      var rect = new Rect({ width: Infinity, height: 'ABC' });
      expect(rect.top).to.equal(0);
      expect(rect.left).to.equal(0);
      expect(rect.right).to.equal(0);
      expect(rect.bottom).to.equal(0);
      expect(rect.width).to.equal(0);
      expect(rect.height).to.equal(0);
    });
  });

  describe('normalize', function() {
    it('Should swap left and right if left > right', function() {
      var rect = new Rect({ left: 30, right: 10 });
      rect.normalize();
      expect(rect.left).to.equal(10);
      expect(rect.right).to.equal(30);
      expect(rect.width).to.equal(20);
    });

    it('Should not swap left and right if left <= right', function() {
      var rect = new Rect({ left: 10, right: 30 });
      rect.normalize();
      expect(rect.left).to.equal(10);
      expect(rect.right).to.equal(30);
      expect(rect.width).to.equal(20);

      rect = new Rect({ left: 30, right: 30 });
      rect.normalize();
      expect(rect.left).to.equal(30);
      expect(rect.right).to.equal(30);
      expect(rect.width).to.equal(0);
    });

    it('Should swap top and bottom if top > bottom', function() {
      var rect = new Rect({ top: 30, bottom: 10 });
      rect.normalize();
      expect(rect.top).to.equal(10);
      expect(rect.bottom).to.equal(30);
      expect(rect.height).to.equal(20);
    });

    it('Should not swap top and bottom if top <= bottom', function() {
      var rect = new Rect({ top: 10, bottom: 30 });
      rect.normalize();
      expect(rect.top).to.equal(10);
      expect(rect.bottom).to.equal(30);
      expect(rect.height).to.equal(20);

      rect = new Rect({ top: 10, bottom: 10 });
      rect.normalize();
      expect(rect.top).to.equal(10);
      expect(rect.bottom).to.equal(10);
      expect(rect.height).to.equal(0);
    });
  });

  describe('setter', function() {
    it('Should set left', function() {
      var rect = new Rect({ left: 10, right: 20, top: 30, bottom: 40 });
      rect.left = -15;
      expect(rect.left).to.equal(-15);
      expect(rect.right).to.equal(20);
      expect(rect.top).to.equal(30);
      expect(rect.bottom).to.equal(40);
      expect(rect.width).to.equal(35);
      expect(rect.height).to.equal(10);
    });

    it('Should set right', function() {
      var rect = new Rect({ left: 10, right: 20, top: 30, bottom: 40 });
      rect.right = 100;
      expect(rect.left).to.equal(10);
      expect(rect.right).to.equal(100);
      expect(rect.top).to.equal(30);
      expect(rect.bottom).to.equal(40);
      expect(rect.width).to.equal(90);
      expect(rect.height).to.equal(10);
    });

    it('Should set top', function() {
      var rect = new Rect({ left: 10, right: 20, top: 30, bottom: 40 });
      rect.top = 80;
      expect(rect.left).to.equal(10);
      expect(rect.right).to.equal(20);
      expect(rect.top).to.equal(80);
      expect(rect.bottom).to.equal(40);
      expect(rect.width).to.equal(10);
      expect(rect.height).to.equal(-40);
    });

    it('Should set bottom', function() {
      var rect = new Rect({ left: 10, right: 20, top: 30, bottom: 40 });
      rect.bottom = 100;
      expect(rect.left).to.equal(10);
      expect(rect.right).to.equal(20);
      expect(rect.top).to.equal(30);
      expect(rect.bottom).to.equal(100);
      expect(rect.width).to.equal(10);
      expect(rect.height).to.equal(70);
    });

    it('Should set width', function() {
      var rect = new Rect({ left: 10, right: 20, top: 30, bottom: 40 });
      rect.width = 100;
      expect(rect.left).to.equal(10);
      expect(rect.right).to.equal(110);
      expect(rect.top).to.equal(30);
      expect(rect.bottom).to.equal(40);
      expect(rect.width).to.equal(100);
      expect(rect.height).to.equal(10);
    });

    it('Should set height', function() {
      var rect = new Rect({ left: 10, right: 20, top: 30, bottom: 40 });
      rect.height = 100;
      expect(rect.left).to.equal(10);
      expect(rect.right).to.equal(20);
      expect(rect.top).to.equal(30);
      expect(rect.bottom).to.equal(130);
      expect(rect.width).to.equal(10);
      expect(rect.height).to.equal(100);
    });

    it('Should ignore when value is illegal', function() {
      var rect = new Rect({ left: 10, right: 20, top: 30, bottom: 40 });
      rect.left = NaN;
      expect(rect.left).to.equal(10);
      expect(rect.right).to.equal(20);
      expect(rect.top).to.equal(30);
      expect(rect.bottom).to.equal(40);
      expect(rect.width).to.equal(10);
      expect(rect.height).to.equal(10);

      rect.right = {};
      expect(rect.left).to.equal(10);
      expect(rect.right).to.equal(20);
      expect(rect.top).to.equal(30);
      expect(rect.bottom).to.equal(40);
      expect(rect.width).to.equal(10);
      expect(rect.height).to.equal(10);

      rect.top = []; 
      expect(rect.left).to.equal(10);
      expect(rect.right).to.equal(20);
      expect(rect.top).to.equal(30);
      expect(rect.bottom).to.equal(40);
      expect(rect.width).to.equal(10);
      expect(rect.height).to.equal(10);

      rect.bottom = 'abc'; 
      expect(rect.left).to.equal(10);
      expect(rect.right).to.equal(20);
      expect(rect.top).to.equal(30);
      expect(rect.bottom).to.equal(40);
      expect(rect.width).to.equal(10);
      expect(rect.height).to.equal(10);

      rect.width = true;
      expect(rect.left).to.equal(10);
      expect(rect.right).to.equal(20);
      expect(rect.top).to.equal(30);
      expect(rect.bottom).to.equal(40);
      expect(rect.width).to.equal(10);
      expect(rect.height).to.equal(10);

      rect.height = false;
      expect(rect.left).to.equal(10);
      expect(rect.right).to.equal(20);
      expect(rect.top).to.equal(30);
      expect(rect.bottom).to.equal(40);
      expect(rect.width).to.equal(10);
      expect(rect.height).to.equal(10);
    });
  });

  describe('moveTo', function() {
    it('Should move a rect by top-left positions', function() {
      var rect = new Rect({ left: 10, top: 20, right: 100, bottom: 200 });
      rect.moveTo(50, 40);
      expect(rect.left).to.equal(50);
      expect(rect.right).to.equal(140);
      expect(rect.top).to.equal(40);
      expect(rect.bottom).to.equal(220);
      expect(rect.width).to.equal(90);
      expect(rect.height).to.equal(180);
    });
  });

  describe('moveBy', function() {
    it('Should move a rect by delta', function() {
      var rect = new Rect({ left: 10, top: 20, right: 100, bottom: 200 });
      rect.moveBy(50, 40);
      expect(rect.left).to.equal(60);
      expect(rect.right).to.equal(150);
      expect(rect.top).to.equal(60);
      expect(rect.bottom).to.equal(240);
      expect(rect.width).to.equal(90);
      expect(rect.height).to.equal(180);
    });
  });

  describe('resizeTo', function() {
    it('Should resize a rect by size', function() {
      var rect = new Rect({ left: 10, top: 20, right: 100, bottom: 200 });
      rect.resizeTo(200, 300);
      expect(rect.left).to.equal(10);
      expect(rect.top).to.equal(20);
      expect(rect.right).to.equal(210);
      expect(rect.bottom).to.equal(320);
      expect(rect.width).to.equal(200);
      expect(rect.height).to.equal(300);
    });
  });

  describe('resizeBy', function() {
    it('Should resize a rect by delta', function() {
      var rect = new Rect({ left: 10, top: 20, right: 100, bottom: 200 });
      rect.resizeBy(200, 300);
      expect(rect.left).to.equal(10);
      expect(rect.top).to.equal(20);
      expect(rect.right).to.equal(300);
      expect(rect.bottom).to.equal(500);
      expect(rect.width).to.equal(290);
      expect(rect.height).to.equal(480);
    });
  });

  describe('interect', function() {
    it('Should return true when two rects are intersect', function() {
      var rect0 = new Rect({ left: 10, top: 20, right: 30, bottom: 40 });
      var rect1 = new Rect({ left: 20, top: 10, right: 40, bottom: 50 });
      expect(rect0.intersect(rect1)).to.be.true;
      expect(rect1.intersect(rect0)).to.be.true;
      expect(rect0.intersect(rect0)).to.be.true;
      expect(rect1.intersect(rect1)).to.be.true;
    });

    it('Should return false when two rects are not intersect', function() {
      var rect0 = new Rect({ left: 10, top: 20, right: 30, bottom: 40 });
      var rect1 = new Rect({ left: 31, top: 10, right: 40, bottom: 50 });
      var rect2 = new Rect({ left: 20, top: 41, right: 40, bottom: 50 });
      expect(rect0.intersect(rect1)).to.be.false;
      expect(rect1.intersect(rect0)).to.be.false;
      expect(rect0.intersect(rect2)).to.be.false;
      expect(rect2.intersect(rect0)).to.be.false;
    });

    it('Should return true when two rects are intersect only their corners',
    function() {
      var rect0 = new Rect({ left: 10, top: 20, right: 30, bottom: 40 });
      var rect1 = new Rect({ left: 30, top: 40, right: 40, bottom: 50 });
      expect(rect0.intersect(rect1)).to.be.true;
      expect(rect1.intersect(rect0)).to.be.true;
    });

    it('Should return false when illegal argument', function() {
      var rect = new Rect({ left: 10, top: 20, right: 30, bottom: 40 });
      expect(rect.intersect(undefined)).to.be.false;
      expect(rect.intersect(null)).to.be.false;
      expect(rect.intersect(true)).to.be.false;
      expect(rect.intersect(false)).to.be.false;
      expect(rect.intersect(0)).to.be.false;
      expect(rect.intersect(123)).to.be.false;
      expect(rect.intersect('')).to.be.false;
      expect(rect.intersect('abc')).to.be.false;
      expect(rect.intersect([])).to.be.false;
      expect(rect.intersect({})).to.be.false;

      var rect0 = new Rect();
      expect(rect0.intersect({})).to.be.false;
    });
  });

  describe('contains', function() {
    it('Should return true when a rect contains a point', function() {
      var rect = new Rect({ left: 10, top: 20, right: 30, bottom: 40 });
      expect(rect.contains({ x: 20, y: 30 })).to.be.true;
    });

    it('Should return true when a point is on a cornor of a rect', function() {
      var rect = new Rect({ left: 10, top: 20, right: 30, bottom: 40 });
      expect(rect.contains({ x: 10, y: 20 })).to.be.true;
      expect(rect.contains({ x: 10, y: 40 })).to.be.true;
      expect(rect.contains({ x: 30, y: 20 })).to.be.true;
      expect(rect.contains({ x: 30, y: 40 })).to.be.true;
    });

    it('Should return false when a rect does not contains a point',
    function() {
      var rect = new Rect({ left: 10, top: 20, right: 30, bottom: 40 });
      expect(rect.contains({ x: 9, y: 30 })).to.be.false;
      expect(rect.contains({ x: 31, y: 30 })).to.be.false;
      expect(rect.contains({ x: 20, y: 19 })).to.be.false;
      expect(rect.contains({ x: 20, y: 41 })).to.be.false;
    });

    it('Should return true when a rect contains another rect', function() {
      var rect0 = new Rect({ left: 10, top: 20, right: 30, bottom: 40 });
      var rect1 = new Rect({ left: 11, top: 21, right: 29, bottom: 39 });
      expect(rect0.contains(rect1)).to.be.true;
      expect(rect0.contains(rect0)).to.be.true;
      expect(rect1.contains(rect1)).to.be.true;
    });

    it('Should return false when a rect does not contains another rect',
    function() {
      var rect0 = new Rect({ left: 10, top: 20, right: 30, bottom: 40 });
      var rect1 = new Rect({ left: 11, top: 21, right: 29, bottom: 39 });
      expect(rect1.contains(rect0)).to.be.false;
    });

    it('Should return false when illegal argument', function() {
      var rect = new Rect({ left: 10, top: 20, right: 30, bottom: 40 });
      expect(rect.contains(undefined)).to.be.false;
      expect(rect.contains(null)).to.be.false;
      expect(rect.contains(true)).to.be.false;
      expect(rect.contains(false)).to.be.false;
      expect(rect.contains(0)).to.be.false;
      expect(rect.contains(123)).to.be.false;
      expect(rect.contains('')).to.be.false;
      expect(rect.contains('abc')).to.be.false;
      expect(rect.contains([])).to.be.false;
      expect(rect.contains({})).to.be.false;

      var rect0 = new Rect();
      expect(rect0.contains({})).to.be.false;
    });
  });

  describe('inspect', function() {
    it('Should return property values by `.inspect` function', function() {
      var rect = new Rect();
      expect(rect.inspect()).to.equal(
        '{ left: 0, top: 0, right: 0, bottom: 0, width: 0, height: 0 }');

      rect.width = 100;
      expect(rect.inspect()).to.equal(
        '{ left: 0, top: 0, right: 100, bottom: 0, width: 100, height: 0 }');

      rect.height = 50;
      expect(rect.inspect()).to.equal(
        '{ left: 0, top: 0, right: 100, bottom: 50, width: 100, height: 50 }');

      rect.moveTo(5, 8);
      expect(rect.inspect()).to.equal(
        '{ left: 5, top: 8, right: 105, bottom: 58, width: 100, height: 50 }');
    });
  });

  describe('toString', function() {
    it('Should return property values by `.toString` function', function() {
      var rect = new Rect();
      expect(rect.toString()).to.equal(
        '{ left: 0, top: 0, right: 0, bottom: 0, width: 0, height: 0 }');

      rect.width = 100;
      expect(rect.toString()).to.equal(
        '{ left: 0, top: 0, right: 100, bottom: 0, width: 100, height: 0 }');

      rect.height = 50;
      expect(rect.toString()).to.equal(
        '{ left: 0, top: 0, right: 100, bottom: 50, width: 100, height: 50 }');

      rect.moveTo(5, 8);
      expect(rect.toString()).to.equal(
        '{ left: 5, top: 8, right: 105, bottom: 58, width: 100, height: 50 }');
    });
  });
});
