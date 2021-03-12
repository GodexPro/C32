class Bird{
  constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':2,
          'density':2
      }
      this.body = Bodies.rectangle(x, y, 50,50, options);
      this.width = 50;
      this.height = 50;
      this.image = loadImage("sprites/bird.png");
      this.smokeimg = loadImage("sprites/smoke.png");
      this.tragectory = []; 
      
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      if(this.body.velocity.x>10 && this.body.position.x>200){
        
      
      var position = [this.body.position.x,this.body.position.y];
      this.tragectory.push(position);
      }
      for(var i =0;i<this.tragectory.length;i++){
       
        image(this.smokeimg,this.tragectory[i][0],this.tragectory[i][1]);
        
      }
      
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
}
