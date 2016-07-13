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

  describe('check WebGame', function () {
    it('test WebGame', function () {
      WebGame.should.be.a('object');
    });
  });

  describe('check WebGame.Boot', function () {
    it('test WebGame.Boot', function () {
      WebGame.Boot.should.be.a('function');
    });
    it('test WebGame.Boot.prototype.preload', function () {
      WebGame.Boot.prototype.preload.should.be.a('function');
    });
    it('test WebGame.Boot.prototype.create', function () {
      WebGame.Boot.prototype.create.should.be.a('function');
    });
  });

  describe('check WebGame.Preloader', function () {
    it('test WebGame.Preloader', function () {
      WebGame.Preloader.should.be.a('function');
    });
    it('test WebGame.Preloader.prototype.preload', function () {
      WebGame.Preloader.prototype.preload.should.be.a('function');
    });
    it('test WebGame.Preloader.prototype.create', function () {
      WebGame.Preloader.prototype.create.should.be.a('function');
    });
    it('test WebGame.Preloader.prototype.update', function () {
      WebGame.Preloader.prototype.update.should.be.a('function');
    });
  });

  describe('check WebGame.StartMenu', function () {
    it('test WebGame.StartMenu', function () {
      WebGame.StartMenu.should.be.a('function');
    });
    it('test WebGame.StartMenu.prototype.create', function () {
      WebGame.StartMenu.prototype.create.should.be.a('function');
    });
    it('test WebGame.StartMenu.prototype.startGame', function () {
      WebGame.StartMenu.prototype.startGame.should.be.a('function');
    });
  });

  describe('check WebGame.Game', function () {
    it('test WebGame.Game', function () {
      WebGame.Game.should.be.a('function');
    });
    it('test WebGame.Game.prototype.preload', function () {
      WebGame.Game.prototype.preload.should.be.a('function');
    });
    it('test WebGame.Game.prototype.create', function () {
      WebGame.Game.prototype.create.should.be.a('function');
    });
    it('test WebGame.Game.prototype.createBackground', function () {
      WebGame.Game.prototype.createBackground.should.be.a('function');
    });
    it('test WebGame.Game.prototype.createEmitter', function () {
      WebGame.Game.prototype.createEmitter.should.be.a('function');
    });
    it('test WebGame.Game.prototype.createCoins', function () {
      WebGame.Game.prototype.createCoins.should.be.a('function');
    });
    it('test WebGame.Game.prototype.addCoin', function () {
      WebGame.Game.prototype.addCoin.should.be.a('function');
    });
    it('test WebGame.Game.prototype.createEnemies', function () {
      WebGame.Game.prototype.createEnemies.should.be.a('function');
    });
    it('test WebGame.Game.prototype.addEnemy', function () {
      WebGame.Game.prototype.addEnemy.should.be.a('function');
    });
    it('test WebGame.Game.prototype.createMap', function () {
      WebGame.Game.prototype.createMap.should.be.a('function');
    });
    it('test WebGame.Game.prototype.createMusic', function () {
      WebGame.Game.prototype.createMusic.should.be.a('function');
    });
    it('test WebGame.Game.prototype.createPlayer', function () {
      WebGame.Game.prototype.createPlayer.should.be.a('function');
    });
    it('test WebGame.Game.prototype.jump', function () {
      WebGame.Game.prototype.jump.should.be.a('function');
    });
    it('test WebGame.Game.prototype.getCoin', function () {
      WebGame.Game.prototype.getCoin.should.be.a('function');
    });
    it('test WebGame.Game.prototype.update', function () {
      WebGame.Game.prototype.update.should.be.a('function');
    });
    it('test WebGame.Game.prototype.lose', function () {
      WebGame.Game.prototype.lose.should.be.a('function');
    });
    it('test WebGame.Game.prototype.win', function () {
      WebGame.Game.prototype.win.should.be.a('function');
    });
    it('test WebGame.Game.prototype.gameOver', function () {
      WebGame.Game.prototype.gameOver.should.be.a('function');
    });
    it('test WebGame.Game.prototype.stageClear', function () {
      WebGame.Game.prototype.stageClear.should.be.a('function');
    });
  });

  describe('check WebGame.GameOver', function () {
    it('test WebGame.GameOver', function () {
      WebGame.GameOver.should.be.a('function');
    });
    it('test WebGame.GameOver.prototype.create', function () {
      WebGame.GameOver.prototype.create.should.be.a('function');
    });
    it('test WebGame.GameOver.prototype.startGame', function () {
      WebGame.GameOver.prototype.startGame.should.be.a('function');
    });
    it('test WebGame.GameOver.prototype.backToMenu', function () {
      WebGame.GameOver.prototype.backToMenu.should.be.a('function');
    });
  });

  describe('check WebGame.GameWin', function () {
    it('test WebGame.GameWin', function () {
      WebGame.GameWin.should.be.a('function');
    });
    it('test WebGame.GameWin.prototype.create', function () {
      WebGame.GameWin.prototype.create.should.be.a('function');
    });
    it('test WebGame.GameWin.prototype.startGame', function () {
      WebGame.GameWin.prototype.startGame.should.be.a('function');
    });
    it('test WebGame.GameWin.prototype.backToMenu', function () {
      WebGame.GameWin.prototype.backToMenu.should.be.a('function');
    });
  });
})();
