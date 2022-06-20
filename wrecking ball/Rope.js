class Rope {

    //coloque o constructor igual ao slingshot
    //do angry Bird menos as imagens
    //no options deve receber essa alteração:
    //stiffness: 1.2,
    //length: 250
  
    attach(body) {
        this.rope.bodyA = body;
      }
    
      fly() {
        this.rope.bodyA = null;
      }
    
      display() {
        if (this.rope.bodyA) {
          var pointA = this.rope.bodyA.position;
          var pointB = this.pointB;
          push();
    
          stroke(48, 22, 8);
          strokeWeight(3);
    
          line(pointB.x, pointB.y, pointA.x, pointA.y);
    
          pop();
        }
      }
}
