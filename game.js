document.addEventListener('DOMContentLoaded',function(){
(function(globalScope){




var game = function(){
  this.canvas=null;
  this.context = null;
  this.car = null;

  this.leftKeyPressed = false;
  this.rightKeyPressed = false;
  this.upKeyPressed = false;
  this.downKeyPressed = false;

  this.init=function(w, h){
    this.canvas = document.createElement('canvas');
    this.canvas.width = w;
    this.canvas.height = h;
    document.body.appendChild(this.canvas);
    this.context = this.canvas.getContext('2d');
    this.car = new car(this);
    this.car.init();
  };

  var self = this;

  this.clearScreen = function(){
    this.context.fillStyle = '#ffffff';
    this.context.fillRect(0,0,this.canvas.width, this.canvas.height);
    //console.log('cleared');
  };

  this.draw = function(){     //Draw every objects of the game
    this.car.draw();
    //console.log('drew');
  };

  this.update = function(){   //Update every objects of the game
    self.clearScreen();
    self.draw();
    //console.log("updated");
  };

  document.addEventListener('keydown',function(event){
    if(event.keyCode == 38){
      self.upKeyPressed = true;
    }
    if(event.keyCode == 37){
      self.leftKeyPressed = true;
    }
    if(event.keyCode == 39){
      self.rightKeyPressed = true;
    }
    if(event.keyCode == 40){
      self.downKeyPressed = true;
    }
  });

  document.addEventListener('keyup',function(event){
    if(event.keyCode == 38){
      self.upKeyPressed = false;
    }
    if(event.keyCode == 37){
      self.leftKeyPressed = false;
    }
    if(event.keyCode == 39){
      self.rightKeyPressed = false;
    }
    if(event.keyCode == 40){
      self.downKeyPressed = false;
    }
  });

  setInterval(this.update,20);
};

var theGame = new game();
theGame.init(1300,700);




globalScope.theGame = theGame;
})(window);
});