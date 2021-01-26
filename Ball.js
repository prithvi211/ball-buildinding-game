class Ball{

    constructor(x,y,radius){

        this.body= Bodies.circle(x,y,radius,{friction:0.5,density:2.5});
        World.add(world,this.body)
        this.radius=radius;
    }

    display(){

        push();
        fill("purple");
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle)
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius,this.radius);
        pop();

    }

}