class Back extends Base {
    constructor(x, y, 1200,) {
     super(x, y)
      this.image = loadImage("sprites/bird.png");
    };
    display(){
      var pos = this.body.position;
      pos.x = mouseX;
      pos.y = mouseY;
     super.display();
    }; 
  };
  