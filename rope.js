class Rope{
    constructor(bodyA,pointB){
        //this.offsetX=offsetX
        //this.offsetY=offsetY
        var options={
            bodyA:bodyA,
            pointB:pointB,
            lenght:100,
            stiffness:0.04
        }
        this.pointB = pointB;
        this.body = Constraint.create(options);
        World.add(world,this.body);
    }
    display(){
        var pointA = this.body.bodyA.position;
        var pointB=this.pointB;
        
        strokeWeight(4);
        //var anchor1X = pointA.x
        //var anchor1Y = pointA.y

        //var anchor2X = pointB.x+this.offsetX;
        //var anchor2Y = pointB.y+this.offsetY;
        
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}