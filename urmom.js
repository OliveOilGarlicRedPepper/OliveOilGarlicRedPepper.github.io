

// HOME SCREEN
function homeScreen() {
  screen = 0;
  background(132, 141, 217);
  noStroke();

  //Game title
  fill(255);
  textSize(40);
  textAlign(CENTER, TOP);
  text("Me when videogame", width / 2, height / 2 - 150);

  //Play button
  playButton = new Sprite(width / 2, height / 2, 100, 50, 'k');
  playButton.color = color(106, 113, 173);
  playButton.textColor = "white";
  playButton.textSize = 20;
  playButton.text = "Play!";

  //Directions button
  directionsButton = new Sprite(width / 2, height / 2 + 50, 90, 30, 'k');
  directionsButton.color = color(106, 113, 173);
  directionsButton.textColor = "white";
  directionsButton.textSize = 15;
  directionsButton.text = "Directions";

}

function directionsScreen() {
  background(132, 141, 217);
  playButton.pos = { x: -200, y: -300 };
  directionsButton.pos = { x: -500, y: -400 };

  //Directions (description of game)
  fill(255);
  textSize(15);
  textAlign(CENTER, TOP);


  //Back button
  backButton = new Sprite(width / 2, height / 2 + 50, 125, 40, "k");
  backButton.color = color(106, 113, 173);
  backButton.textColor = "white";
  backButton.textSize = 15;
  backButton.text = "Back to Home";
}

function playScreenAssests() {
  background(94, 105, 189);
}