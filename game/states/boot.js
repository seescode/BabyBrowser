
'use strict';

function Boot() {
}

Boot.prototype = {
  preload: function() {	
	this.load.image('sky', 'assets/sky.png');
  },
  create: function() {	
    this.state.start('play');
  }
};

module.exports = Boot;
