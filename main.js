document.getElementById("btn").addEventListener("click", randomize);
document.getElementById("balls").addEventListener("click", randomize);

function randomize() {
  let randNum = Math.random();

  if (randNum < 0.1) {
    document.getElementById("answ").innerHTML = "no";
  } else if (randNum < 0.3) {
    document.getElementById("answ").innerHTML = "May be";
  } else if (randNum < 0.4) {
    document.getElementById("answ").innerHTML = "yes";
  } else if (randNum < 0.5) {
    document.getElementById("answ").innerHTML = "I am not sure";
  } else if (randNum < 0.6) {
    document.getElementById("answ").innerHTML = "perhaps no";
  } else if (randNum < 0.7) {
    document.getElementById("answ").innerHTML = "perhaps yes";
  } else if (randNum < 0.8) {
    document.getElementById("answ").innerHTML = "Give me a min";
  } else if (randNum < 0.9) {
    document.getElementById("answ").innerHTML = "Get out";
  } else {
    document.getElementById("answ").innerHTML = "I don't know";
  }
}
