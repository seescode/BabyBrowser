
  'use strict';
  function Play() {}
  Play.prototype = {
    create: function() {
		var me = this;

    var chars = "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z";
    var charArray = chars.split(',');

    var getRandomCharacter = function() {
      var index = me.rnd.integerInRange(0, charArray.length - 1);
      return charArray[index];
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
