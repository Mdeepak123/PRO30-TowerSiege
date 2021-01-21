class Rope{
    constructor(bodyA,pointB){
        var option = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.15,
            length: 10
        }
        this.pointB = pointB;
        this.rope = Constraint.create(option);
        World.add(world,this.rope);
    }

    throw(){
        this.rope.bodyA = null;
    }

    attach(body){
        this.rope.bodyA = body;
    }

    display(){

        if(this.rope.bodyA){

            var pointA = this.rope.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(3);
            stroke("red")
            line(pointA.x,pointA.y,pointB.x,pointB.y)
        }
    }

}