class Boy {
  constructor(x, y) {
      var options = {
          'isStatic': true,
          'restitution': 0.5,
          'friction':1.0,
          'density':1.5
      }
      this.body = Bodies.rectangle(x, y, 20, 20, options);
      this.width = 20;
      this.height = 20;
      this.image = loadImage("boy.png");
      
      World.add(world, this.body);
  }
  display(){

      var pos =this.body.position;
      var angle = this.body.angle;
      
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      rect(0, 0, this.width, this.height);
      imageMode(CENTER);
      image(this.image,5,0,200,200);
      pop();
  }
}
  