(function () {
  'use strict';

  describe('check Phaser', function () {
    it('fail only when Phaser framework do not exist', function () {
      Phaser.should.be.a('object');
    });
  });

  describe('check Physics', function () {
    it('pass if physics engine function well', function () {
      Phaser.Physics.should.be.a('function');
    });
  });
  
})();
