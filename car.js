
function Car () {
	this.img = new Image();   // Create new img element
	this.img.onload = function(){
	  // execute drawImage statements here
	};
	this.img.src = 'car.png'; // Set source path

	// collision
	this.collisions = {
		top: new CollisionPoint(this, 0),
		right: new CollisionPoint(this, 90, 10),
		bottom: new CollisionPoint(this, 180),
		left: new CollisionPoint(this, 270, 10)
	};
}
Car.prototype = {
	x: 100,
	y: 100,
	code: 'player',
	acceleration: 1.1,
	rotationStep: 4,
	rotation: 115,
	speed: 10,
	speedDecay: 0.98,
	maxSpeed: 4,
	backSpeed: 1.1,


	isMoving: function (speed) {
		return !(this.speed > -0.4 && this.speed < 0.4);
	},
	getCenter: function(){
		return {
			x: this.x,
			y: this.y
		}
	},
	accelerate: function(){
		if (this.speed < this.maxSpeed){
			if (this.speed < 0){
				this.speed *= this.speedDecay;
			} else if (this.speed === 0){
				this.speed = 0.4;
			} else {
				this.speed *= this.acceleration;
			}
		}
	},
	decelerate: function(){
		if (Math.abs(this.speed) < this.maxSpeed){
			if (this.speed > 0){
				this.speed *= this.speedDecay;
			} else if (this.speed === 0){
				this.speed = -0.4;
			} else {
				this.speed *= this.backSpeed;
			}
		}
	},
	steerLeft: function(){
		if (this.isMoving()){
			this.rotation -= this.rotationStep * (this.speed/this.maxSpeed);
		}
	},
	steerRight: function(){
		if (this.isMoving()){
			this.rotation += this.rotationStep * (this.speed/this.maxSpeed);
		}
	}

};

