class Ball {
    //coloque o constructor com o corpo em circle
 
    display() {
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipse(0, 0, this.width, this.height);
        pop();
      }
}
/*no options coloque:
        
        'frictionAir':0.005,
        'density':1,
*/