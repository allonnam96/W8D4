Function.prototype.inherits = function(SuperClass) {
  const Subclass = this;

  function Surrogate() {}
  Surrogate.prototype = SuperClass.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
};

function MovingObject() {

}

MovingObject.prototype.move = function () {
  console.log("Moving at speed");
};

function Ship() {
}

Ship.inherits(MovingObject);

Ship.prototype.fly = function() {
    console.log('I cant fly')
}
// function Asteroid() {

// }

// Asteroid.inherits(MovingObject);

Ship.prototype.move()
Ship.prototype.fly()

MovingObject.prototype.move()
MovingObject.prototype.fly()
