
var expect = chai.expect;
describe('Rect', function() {

  describe('constructor', function() {

    it('Should become all zero if an argument is undefined', function(done) {
      var rect = new Rect();
      expect(rect.left).to.equal(0);
      expect(rect.right).to.equal(0);
      expect(rect.width).to.equal(0);
      expect(rect.top).to.equal(0);
      expect(rect.bottom).to.equal(0);
      expect(rect.height).to.equal(0);
      done();
    });

    it('Should become all zero if an argument is empty', function(done) {
      var rect = new Rect({});
      expect(rect.left).to.equal(0);
      expect(rect.right).to.equal(0);
      expect(rect.width).to.equal(0);
      expect(rect.top).to.equal(0);
      expect(rect.bottom).to.equal(0);
      expect(rect.height).to.equal(0);
      done();
    });

    it('Should set .left to zero if an argument does not have .left',
    function(done) {
      var rect = new Rect({ right: 30, top: 10, bottom: 15 });
      expect(rect.left).to.equal(0);
      expect(rect.right).to.equal(30);
      expect(rect.width).to.equal(30);
      expect(rect.top).to.equal(10);
      expect(rect.bottom).to.equal(15);
      expect(rect.height).to.equal(5);
      done();
    });

    it('Should set .top to zero if an argument does not have .top',
    function(done) {
      var rect = new Rect({ right: 30, left: 10, bottom: 15 });
      expect(rect.left).to.equal(10);
      expect(rect.right).to.equal(30);
      expect(rect.width).to.equal(20);
      expect(rect.top).to.equal(0);
      expect(rect.bottom).to.equal(15);
      expect(rect.height).to.equal(15);
      done();
    });

    it('Should calculate .right if an argument does not have .right',
    function(done) {
      var rect = new Rect({ left: 20, top: 10, bottom: 15, width: 50 });
      expect(rect.left).to.equal(20);
      expect(rect.right).to.equal(70);
      expect(rect.width).to.equal(50);
      expect(rect.top).to.equal(10);
      expect(rect.bottom).to.equal(15);
      expect(rect.height).to.equal(5);
      done();
    });

    it('Should calculate .bottom if an argument does not have .bottom',
    function(done) {
      var rect = new Rect({ left: 20, top: 10, right: 45, height: 30 });
      expect(rect.left).to.equal(20);
      expect(rect.right).to.equal(45);
      expect(rect.width).to.equal(25);
      expect(rect.top).to.equal(10);
      expect(rect.bottom).to.equal(40);
      expect(rect.height).to.equal(30);
      done();
    });

    it('Should set .right to .left if an argument does not have .rigth and' +
    '\n\t.width', function(done) {
      var rect = new Rect({ left: 20, top: 10, bottom: 35 });
      expect(rect.left).to.equal(20);
      expect(rect.right).to.equal(20);
      expect(rect.width).to.equal(0);
      expect(rect.top).to.equal(10);
      expect(rect.bottom).to.equal(35);
      expect(rect.height).to.equal(25);
      done();
    });

    it('Should set .bottom to .top if an argument does not have .bottom and' +
    '\n\t.height', function(done) {
      var rect = new Rect({ left: 20, top: 10, right: 35 });
      expect(rect.left).to.equal(20);
      expect(rect.right).to.equal(35);
      expect(rect.width).to.equal(15);
      expect(rect.top).to.equal(10);
      expect(rect.bottom).to.equal(10);
      expect(rect.height).to.equal(0);
      done();
    });

    it('Should set .left to zero if an argument have .left which is not ' +
    'a number', function(done) {
      var rect = new Rect({ left: 'abc', right: 30, top: 10, bottom: 15 });
      expect(rect.left).to.equal(0);
      expect(rect.right).to.equal(30);
      expect(rect.width).to.equal(30);
      expect(rect.top).to.equal(10);
      expect(rect.bottom).to.equal(15);
      expect(rect.height).to.equal(5);
      done();
    });

    it('Should set .top to zero if an argument have .top which is not ' +
    'a number', function(done) {
      var rect = new Rect({ top: 'abc', right: 30, left: 10, bottom: 15 });
      expect(rect.left).to.equal(10);
      expect(rect.right).to.equal(30);
      expect(rect.width).to.equal(20);
      expect(rect.top).to.equal(0);
      expect(rect.bottom).to.equal(15);
      expect(rect.height).to.equal(15);
      done();
    });

    it('Should calculate .right if an argument have .right which is not ' +
    'a number', function(done) {
      var rect = new Rect({ left: 20, top: 10, right: 'abc', bottom: 15,
        width: 50 });
      expect(rect.left).to.equal(20);
      expect(rect.right).to.equal(70);
      expect(rect.width).to.equal(50);
      expect(rect.top).to.equal(10);
      expect(rect.bottom).to.equal(15);
      expect(rect.height).to.equal(5);
      done();
    });

    it('Should calc. .bottom if an argument have .bottom which is not a ' +
    'number', function(done) {
      var rect = new Rect({ left: 20, top: 10, right: 45, bottom: 'abc',
        height: 30 });
      expect(rect.left).to.equal(20);
      expect(rect.right).to.equal(45);
      expect(rect.width).to.equal(25);
      expect(rect.top).to.equal(10);
      expect(rect.bottom).to.equal(40);
      expect(rect.height).to.equal(30);
      done();
    });

    it('Should set .width to zero if an argument have .width and .right ' +
    'which\n\tboth are not numbers', function(done) {
      var rect = new Rect({ left: 20, top: 10, bottom: 35, right: 'abc',
        width: 'def' });
      expect(rect.left).to.equal(20);
      expect(rect.right).to.equal(20);
      expect(rect.width).to.equal(0);
      expect(rect.top).to.equal(10);
      expect(rect.bottom).to.equal(35);
      expect(rect.height).to.equal(25);
      done();
    });

    it('Should set .height to zero if an argument have .height and .bottom ' +
    'which\n\tboth are not numbers', function(done) {
      var rect = new Rect({ left: 20, top: 10, right: 35, bottom: 'abc',
        height: 'def' });
      expect(rect.left).to.equal(20);
      expect(rect.right).to.equal(35);
      expect(rect.width).to.equal(15);
      expect(rect.top).to.equal(10);
      expect(rect.bottom).to.equal(10);
      expect(rect.height).to.equal(0);
      done();
    });
  });

  describe('setter', function() {

    it('Should calculate .right if .left is setted', function(done) {
      var rect = Rect({ left: 100, right: 300 });
      expect(rect.left).to.equal(100);
      expect(rect.right).to.equal(300);
      expect(rect.width).to.equal(200);
      rect.left = 50;
      expect(rect.left).to.equal(50);
      expect(rect.right).to.equal(250);
      expect(rect.width).to.equal(200);
      rect.left = -50;
      expect(rect.left).to.equal(-50);
      expect(rect.right).to.equal(150);
      expect(rect.width).to.equal(200);
      done();
    });

    it('Should calculate .width if .right is setted', function(done) {
      var rect = Rect({ left: 100, right: 300 });
      expect(rect.left).to.equal(100);
      expect(rect.right).to.equal(300);
      expect(rect.width).to.equal(200);
      rect.right = 250;
      expect(rect.left).to.equal(100);
      expect(rect.right).to.equal(250);
      expect(rect.width).to.equal(150);
      rect.right = -50;
      expect(rect.left).to.equal(100);
      expect(rect.right).to.equal(-50);
      expect(rect.width).to.equal(-150);
      done();
    });

    it('Should calculate .right if .width is setted', function(done) {
      var rect = Rect({ left: 100, right: 300 });
      expect(rect.left).to.equal(100);
      expect(rect.right).to.equal(300);
      expect(rect.width).to.equal(200);
      rect.width = 150;
      expect(rect.left).to.equal(100);
      expect(rect.right).to.equal(250);
      expect(rect.width).to.equal(150);
      rect.width = -250;
      expect(rect.left).to.equal(100);
      expect(rect.right).to.equal(-150);
      expect(rect.width).to.equal(-250);
      done();
    });

    it('Should calculate .bottom if .top is setted', function(done) {
      var rect = Rect({ top: 100, bottom: 300 });
      expect(rect.top).to.equal(100);
      expect(rect.bottom).to.equal(300);
      expect(rect.height).to.equal(200);
      rect.top = 50;
      expect(rect.top).to.equal(50);
      expect(rect.bottom).to.equal(250);
      expect(rect.height).to.equal(200);
      rect.top = -50;
      expect(rect.top).to.equal(-50);
      expect(rect.bottom).to.equal(150);
      expect(rect.height).to.equal(200);
      done();
    });

    it('Should calculate .height if .bottom is setted', function(done) {
      var rect = Rect({ top: 100, bottom: 300 });
      expect(rect.top).to.equal(100);
      expect(rect.bottom).to.equal(300);
      expect(rect.height).to.equal(200);
      rect.bottom = 250;
      expect(rect.top).to.equal(100);
      expect(rect.bottom).to.equal(250);
      expect(rect.height).to.equal(150);
      rect.bottom = -50;
      expect(rect.top).to.equal(100);
      expect(rect.bottom).to.equal(-50);
      expect(rect.height).to.equal(-150);
      done();
    });

    it('Should calculate .bottom if .height is setted', function(done) {
      var rect = Rect({ top: 100, bottom: 300 });
      expect(rect.top).to.equal(100);
      expect(rect.bottom).to.equal(300);
      expect(rect.height).to.equal(200);
      rect.height = 150;
      expect(rect.top).to.equal(100);
      expect(rect.bottom).to.equal(250);
      expect(rect.height).to.equal(150);
      rect.height = -250;
      expect(rect.top).to.equal(100);
      expect(rect.bottom).to.equal(-150);
      expect(rect.height).to.equal(-250);
      done();
    });
  });
});
