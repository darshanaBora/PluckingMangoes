class Mango {
    constructor(x, y) {
        var options = {
            'isStatic': true,
            'restitution':0,
            'friction':1
        }
        this.body = Bodies.circle(x, y, 20, options);
        this.image = loadImage("mango.png");
        
        World.add(world,this.body,this.image);
    }
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        circle(0, 0,20);
        imageMode(CENTER);
        image(this.image,10,0,50,50);
        pop();
    }
}