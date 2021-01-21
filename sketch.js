const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16;
var ground, ground1,ground2;
var poly;

function setup(){
    createCanvas(1000,1000);

    engine = Engine.create();
    world = engine.world;

    ground = new Ground(500,992,1200,10);
    ground1 = new Ground(525,700,200,10);
    ground2 = new Ground(750,300,200,10);

    poly = new Polygon(100,500);

    rope = new Rope(poly.body,{x:100, y:500});

    
    //g2
    //first level
    b1 = new Block(700,275,30,30);
    b2 = new Block(735,275,30,30);
    b3 = new Block(770,275,30,30);
    b4 = new Block(805,275,30,30);
    //second level
    b5 = new Block(715,240,30,30);
    b6 = new Block(750,240,30,30);
    b7 = new Block(785,240,30,30);
    //third
    b8 = new Block(730,205,30,30);
    b9 = new Block(765,205,30,30);
    //top
    b10 = new Block(748,180,30,30);
    
    //g1
    //first level
    b11 = new Block(470,680,30,30);
    b12= new Block(505,680,30,30);
    b13 = new Block(540,680,30,30);
    b14 = new Block(575,680,30,30);

    //second
    b15 = new Block(485,650,30,30);
    b16 = new Block(520,650,30,30);
    b17 = new Block(555,650,30,30);

    b18 = new Block(500,620,30,30);
    b19 = new Block(535,620,30,30);
    b20 = new Block(520,595,30,30);
    
}

function draw(){
    background("black");
    Engine.update(engine);

    stroke("white");
    textSize(20);
    fill("white");
    text("Drag the Hexagon and release it. Launch it at the blocks" ,200,50)
    ground.display();
    ground1.display();
    ground2.display();

    poly.display();

    rope.display();

    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display();
    b7.display();
    b8.display();
    b9.display();
    b10.display();

    b11.display();
    b12.display();
    b15.display();
    b16.display();
    b13.display();
    b14.display();
    b17.display();
    b18.display();
    b19.display();
    b20.display();
}

function mouseDragged(){
    Body.setPosition(poly.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    rope.throw();
}

function keyPressed(){

    if(keyCode === 32){
        rope.attach(poly.body);
    }
}