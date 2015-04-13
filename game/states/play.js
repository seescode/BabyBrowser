
  'use strict';
  function Play() {}
  Play.prototype = {
    create: function() {
		var me = this;

    var getRandomCharacter = function() {
      var array = ['A', 'B', 'C', 'D', 'E']
      var index = me.rnd.integerInRange(0, 4);

      return array[index];
    };

		//  A simple background for our game
		this.add.sprite(0, 0, 'sky');

		this.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;

		this.input.keyboard.onDownCallback = function(e) {
			//TODO instead of outputting A have it output random japanese characters
			me.add.text(
        me.rnd.integerInRange(0, 750),
        me.rnd.integerInRange(0, 550),
        getRandomCharacter(),
        { fontSize: '32px', fill: '#000' }
      );

			if (!me.scale.isFullScreen)
			{
				me.scale.startFullScreen(true);
			}
		}

    },
    update: function() {

    },
    clickListener: function() {
      //this.game.state.start('gameover');
    }
  };



  module.exports = Play;
