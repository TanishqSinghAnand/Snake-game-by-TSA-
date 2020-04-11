var snake ; 
var rez = 10 ;
var food;
var w ;
var h ;
function setup(){
  createCanvas(400,400);
  w = floor(width /  rez);
  h = floor(height / rez);
  frameRate(5);
  snake = new Snake() ;
  foodLocation();

  
  }
  function foodLocation(){

    var x = floor(random(w)) ;
    var y = floor(random(h)) ; 
    food = createVector(x,y);

  }

  function keyPressed(){
    if(keyCode === RIGHT_ARROW){
      snake.setDir(1,0);
    }else if(keyCode === LEFT_ARROW){
      snake.setDir(-1,0);
    }else if(keyCode === UP_ARROW){
      snake.setDir(0,-1);
    }else if(keyCode === DOWN_ARROW){
      snake.setDir(0,1)
    }
  }
  function draw(){
    scale(rez);
    background(220);
    snake.update();
    if(snake.RIP()){
      background(255,0,0);
      noLoop();

    } else{
      fill(255,0,0);
      noStroke();
      rect(food.x , food.y ,  1 , 1);
    
    snake.display();
    }
    if(snake.eat(food)){
      foodLocation();
    }

    
  }