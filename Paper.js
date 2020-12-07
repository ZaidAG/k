class Paper{
    constructer(x,y,width,height){
      var options={
          isStatic:false,
          resititution:0.3,
          friction:0.5,
          density:1.2
      }
    this.body = Bodies. circle(x, y,this.radius,this.height, options);
    this.radius=radius;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    pop();
  }
};