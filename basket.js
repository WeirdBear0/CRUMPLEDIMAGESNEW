class Basket{  
  constructor(){
      var options = {
          isStatic:true,
          
      }
      this.body = Bodies.rectangle(1000,450,200,20, options);
       this.body1 = Bodies.rectangle(900,450,20,200, options);
        this.body2 = Bodies.rectangle(1100,450,20,200, options);
      this.width = 200;
      this.height = 200;
      this.x =1000;
      this.y =540;
      this.image = loadImage("dustbingreen.png")



      
      World.add(world, this.body);
            
      World.add(world, this.body1);
      
      World.add(world, this.body2);

    }
    display(){

      push();
            imageMode(CENTER);
            fill("yellow");
            image(this.image,this.body.position.x, this.body.position.y,this.width, this.height);
      pop();



    }
  }