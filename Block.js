class Block {
  constructor(x,y,width,height) {
    var options = {
        restitution:0.5,
        density:0.3,
        friction:1
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    this.Visibility = 255;
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    var spd = this.body.speed;
    //console.log(spd);

    if(spd<10){
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("red");
      fill("black");
      rect(0, 0, this.width, this.height);
      pop();
    }
    else{
      World.remove(world, this.body);
      
      push();
      this.Visibility = this.Visibility-5;
      tint(255,this.Visibility);
      //rect(pos.x,pos.y,this.width,this.height);
      pop();
      
    }
  }
};