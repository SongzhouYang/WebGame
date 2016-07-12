window.onload = function () {
  var game = new Phaser.Game(20 * 70, 12 * 70, Phaser.CANVAS, 'gameContainer');

  game.state.add('Boot', WebGame.Boot);
  game.state.add('Preloader', WebGame.Preloader);
  game.state.add('StartMenu', WebGame.StartMenu);
  game.state.add('Game', WebGame.Game);
  game.state.add('GameOver', WebGame.GameOver);
  game.state.add('GameWin', WebGame.GameWin);

  game.state.start('Boot');
};
