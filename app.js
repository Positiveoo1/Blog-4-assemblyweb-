document.getElementById('stopButton').onclick = illuminateRed;
document.getElementById('slowButton').onclick = illuminateYellow;
document.getElementById('goButton').onclick = goButton;

function illuminateRed() {
  clearLights();
  document.getElementById('stopLight').style.backgroundColor = "red";
}

function illuminateYellow() {
  clearLights();
  document.getElementById('slowLight').style.backgroundColor = "yellow";
}

function goButton() {
  clearLights();
  document.getElementById('goLight').style.backgroundColor = "green";
}

function clearLights() {
  document.getElementById('stopLight').style.backgroundColor = "black";
  document.getElementById('slowLight').style.backgroundColor = "black";
  document.getElementById('goLight').style.backgroundColor = "black";
}

function runTrafficLightSequence() {
  illuminateRed();
  setTimeout(() => {
    illuminateYellow();
    setTimeout(() => {
      goButton();
      setTimeout(() => {
        runTrafficLightSequence(); // Loop the sequence
      }, 3000); // Green light duration
    }, 2000); // Yellow light duration
  }, 5000); // Red light duration
}

runTrafficLightSequence();