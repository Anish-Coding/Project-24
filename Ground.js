class Ground {
    constructor(x, y) {
      var options = {
          restitution:0.2,
          friction:1.0,
          density:1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);      
      World.add(world, this.body);
    }

    display(){
      /*var pos = this.body.position;
      pos.x = 20;
      pos.y = 10;
      var angle = this.body.angle;*/
      push();
      //translate(pos.x, pos.y);
      //rotate(angle);
      rectMode(CENTER);
      fill("red");
      rect(750, 660, 1500, 20);
      pop();
    }
  }
  