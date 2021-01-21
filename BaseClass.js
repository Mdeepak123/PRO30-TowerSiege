class BaseClass {
    constructor(x, y,width,height) {
      var options = {
        'restitution':0.7,
        "density":0.5
      };
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("base.png")
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(3);
      stroke('blue')
      fill('red')
      imageMode(CENTER)
      image(this.image,0, 0, this.width, this.height);
      pop();
    };
  };