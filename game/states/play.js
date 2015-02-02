
  'use strict';
  function Play() {}
  Play.prototype = {
    create: function() {
    //  A simple background for our game
    this.add.sprite(0, 0, 'sky');
	  
		this.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
		
		this.input.keyboard.onDownCallback = function(e) {
			//TODO instead of outputting A have it output random japanese characters
			this.add.text(this.rnd.integerInRange(0, 750), this.rnd.integerInRange(0, 550), 'A', { fontSize: '32px', fill: '#000' });	
			
			if (!this.scale.isFullScreen)
			{
				this.scale.startFullScreen(true);	
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