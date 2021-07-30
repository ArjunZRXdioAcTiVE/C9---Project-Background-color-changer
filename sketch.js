
function setup() {
  createCanvas(400,400);
}

function draw() {
  background("Black");

  if (background ("Black")){
    fill ("White");
    textSize (10);
  
    stroke ("red");
    strokeWeight (4);

    text ("Press any of the 'Arrow' Keys to change the background", 5, 200);
    text ("(The background will only change until you're pressing one of the keys)", 5, 230);

    backgroundFunctions (); 
  }
}

function backgroundFunctions (){
  if (keyIsDown(DOWN_ARROW)){
    background ("Yellow");
  }

  if (keyIsDown(UP_ARROW)){
    background ("Blue");
  }

  if (keyIsDown (LEFT_ARROW)) {
    background ("Green")
  }

  if (keyIsDown (RIGHT_ARROW)){
    background ("Red");
  }
}