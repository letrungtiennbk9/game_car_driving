document.addEventListener('DOMContentLoaded',function(){
(function(globalScope){



var car = function(game){
  this.game = game;

  
  this.x = 100;
  this.y = 100;
  this.w = 100;
  this.h = 200;
  this.angle = 0;
  this.speed = 3;

  this.img = null;
  this.loaded = false;
  
  var self = this;

  this.init = function(){
    this.img = new Image();
    this.img.onload = function(){
      self.loaded = true;
      console.log('image loaded');
    };
    this.img.src = 'car.png';
  };

  this.draw = function(){
    if(this.loaded){
      this.update();
      this.game.context.save();
      this.game.context.translate(this.x + this.w/2, this.y + this.h/2);
      this.game.context.rotate(this.angle * Math.PI / 180);
      this.game.context.drawImage(this.img, this.w/-2, this.h/-2, this.w, this.h);
      this.game.context.restore();
    }
  };

  this.update = function(){
    if(this.game.leftKeyPressed == true){
      this.angle-=1;
    }
    else if(this.game.rightKeyPressed == true){
      this.angle+=1;
    }

    if(this.game.upKeyPressed == true){
      self.goForward();
      
    }
    else if(this.game.downKeyPressed == true){
      self.goBackward();
    }
  };

  this.goForward = function(){
    var speedX = this.speed * Math.sin(this.angle * Math.PI / 180);
    var speedY = this.speed * Math.cos(this.angle * Math.PI / 180);
    this.x += speedX;
    this.y -= speedY;
  };

  this.goBackward = function(){
    var speedX = this.speed * Math.sin(this.angle * Math.PI / 180);
    var speedY = this.speed * Math.cos(this.angle * Math.PI / 180);
    this.x -= speedX;
    this.y += speedY;
  };
};



globalScope.car = car;
})(window);
});