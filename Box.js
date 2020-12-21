class Box {
    constructor(x,y) {

      var options = {
          restitution:0.2,
          friction:1.0,
          density:1.0
      }
      this.body = Bodies.rectangle(x, y, 20, 100, options);      
      World.add(world, this.body);
      this.width = 20;
      this.height = 100;
    }

    display(){
      var pos = this.body.position;
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      fill("red");
      rect(0, 0, this.width, this.height);
      pop();
    }
  
  }