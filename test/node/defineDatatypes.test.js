'use strict';

var defineDatatypes = require('../../src/defineDatatypes');
var chai = require('chai');
var expect = chai.expect;

var xslet = {};
defineDatatypes(xslet);

describe('xslet.datatype', function() {

  describe('.Rect', function() {

    it ('Should be able to create and operate a Rect instance',
    function(done) {
      var rect = xslet.datatype.Rect({
        left: 10,
        top: 20,
        width: 300,
        height: 200,
      });
      expect(rect.left).to.equal(10);
      expect(rect.right).to.equal(310);
      expect(rect.width).to.equal(300);
      expect(rect.top).to.equal(20);
      expect(rect.bottom).to.equal(220);
      expect(rect.height).to.equal(200);

      rect.left = 60;
      rect.top = 30;
      expect(rect.left).to.equal(60);
      expect(rect.right).to.equal(360);
      expect(rect.width).to.equal(300);
      expect(rect.top).to.equal(30);
      expect(rect.bottom).to.equal(230);
      expect(rect.height).to.equal(200);
      done();
    });

  });

});
