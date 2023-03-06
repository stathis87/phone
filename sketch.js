let sound1, sound2, sound3, sound4, sound5, sound6, sound7, sound8, sound9;
let selectedNumber = '';
let buttonStates = [false, false, false, false, false, false, false, false, false];

// Sound preload
function preload() {
  soundFormats('mp3', 'm4a');
  sound1 = loadSound('sounds/sound1.m4a');
  sound2 = loadSound('sounds/sound2.m4a');
  sound3 = loadSound('sounds/sound3.m4a');
  sound4 = loadSound('sounds/sound4.m4a');
  sound5 = loadSound('sounds/sound5.m4a');
  sound6 = loadSound('sounds/sound6.m4a');
  sound7 = loadSound('sounds/sound7.m4a');
  sound8 = loadSound('sounds/sound8.m4a');
  sound9 = loadSound('sounds/sound9.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(32);
  textAlign(CENTER, CENTER);
  selectedNumber = '';
}

function draw() {
  background(0);

  // Draw the selected number at the top of the keyboard
  fill(255);
  text(selectedNumber, width / 2, 50);

  // Draw 9 buttons
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      let x = (i + 1) * width / 4;
      let y = (j + 1) * height / 4 + 50;
      let buttonIndex = i + j * 3 + 1;
      if (
        mouseX > x - 50 &&
        mouseX < x + 50 &&
        mouseY > y - 50 &&
        mouseY < y + 50
      ) {
        if (mouseIsPressed) {
          playSound(buttonIndex);
          selectedNumber = buttonIndex.toString();
          for (let k = 0; k < buttonStates.length; k++) {
            buttonStates[k] = false;
          }
          buttonStates[buttonIndex - 1] = true;
        } else if (buttonStates[buttonIndex - 1]) {
          // If the mouse is not pressed but the button was previously pressed, keep the button color in grey state
          fill(0);
        } else {
          // If the mouse is not pressed and the button was not previously pressed, set the button color to gray
          fill(200);
        }
      } else {
        // If the mouse is not over the button, set the button color to gray
        fill(0);
      }
      if (buttonStates[buttonIndex - 1]) {
        fill(100);
      }
      rect(x - 50, y - 50, 100, 100);
      fill(255);
      text(buttonIndex, x, y);
    }
  }
}

function playSound(buttonIndex) {
  // Stop all other sounds
  sound1.stop();
  sound2.stop();
  sound3.stop();
  sound4.stop();
  sound5.stop();
  sound6.stop();
  sound7.stop();
  sound8.stop();
  sound9.stop();

  // Play the sound corresponding to the button index
  switch (buttonIndex) {
    case 1:
      sound1.play();
      break;
    case 2:
      sound2.play();
    case 3:
      sound3.play();
      break;
    case 4:
      sound4.play();
      break;
    case 5:
      sound5.play();
      break;
    case 6:
      sound6.play();
      break;
    case 7:
      sound7.play();
      break;
    case 8:
      sound8.play();
      break;
    case 9:
      sound9.play();
      break;
  }

// // Set the state of all buttons to false except for the current button
//   for (let i = 0; i < buttonStates.length; i++) {
//     buttonStates[i] = false;
//   }
//   buttonStates[buttonIndex - 1] = true;

//   // Set a timer to reset the button state to false after the sound finishes playing
//   let currentSound = eval("sound" + buttonIndex); // Get the current sound object
//   setTimeout(function () {
//     buttonStates[buttonIndex - 1] = false;
//   }, currentSound.duration() * 1000);

  // Set the state of all buttons to false except for the current button
  for (let i = 0; i < buttonStates.length; i++) {
    buttonStates[i] = false;
  }
  buttonStates[buttonIndex - 1] = true;

  // Set a timer to reset the button state to false and selectedNumber to empty after the sound finishes playing
  let currentSound = eval("sound" + buttonIndex); // Get the current sound object
  setTimeout(function () {
    buttonStates[buttonIndex - 1] = false;
    selectedNumber = ""; // Reset the selected number
  }, currentSound.duration() * 1000);
}


/* fullscreen() must be called in a touch or
 * mouse event to work!
 */
function mousePressed () {
  let fs = fullscreen();
  if (!fs) {
    fullscreen(true);
  }
  return false;
}

/* full screening will change the size of the canvas */
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

/* prevents the mobile browser from processing some default
 * touch events, like swiping left for "back" or scrolling
 * the page.
 */
function touchMoved(){
  return false;
}

function touchEnded(){
  return false;
}