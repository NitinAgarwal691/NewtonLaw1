class Rope{
    constructor(bodyA,bodyB,offsetx) {
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            offsetx:offsetx,
            stiffness:0.9,
            length:300
        }
        this.offsetx=offsetx;
        this.join= Constraint.create(options);    
        World.add(world,this.join);
    }
    display() {
       var posA=this.join.bodyA.position;
       var posB=this.join.bodyB.position;
       push();
       strokeWeight(6)
       stroke("green");
       line(posA.x,posA.y,posB.x+this.offsetx,posB.y);
       pop();
    }
   } 