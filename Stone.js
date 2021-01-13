class Stone{
    constructor(x,y,width,height) {
      var options = {
        'isStatic': false,
        'restition': 0,  
        'friction': 1,
        'density': 1.2
      }
      this.body = Bodies.circle(x,y,20,options);
  
      this.image = loadImage("stone.png");
      World.add(world, this.body);
    }

    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      circle(0, 0,20);
      imageMode(CENTER);
      image(this.image,2,0,50,50);
      pop();
    }
}
