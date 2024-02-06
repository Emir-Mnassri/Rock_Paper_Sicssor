function Computer(Computer_choice) {
  let list = ["rock", "paper", "scissor"];
  let index = Math.floor(Math.random() * list.length);
  return (Computer_choice = list[index]);
}

function Player() {
  let player_choice = prompt("enter your choice");
  return player_choice.toLowerCase();
}
function Play_round(player_choice, computer_choice) {
  if (player_choice == "rock") {
    if (computer_choice == "paper") return false;
    else return true;
  } else if (player_choice == "paper") {
    if (computer_choice == "scissor") return false;
    else return true;
  } else if (player_choice == "scissor") {
    if (computer_choice == "rock") return false;
    else return true;
  }
}

function Play_game() {
  let player_score = 0,
    Computer_score = 0;
  for (i = 0; i < 5; i++) {
    let player_choice = Player(),
      computer_choice = Computer();
    if (player_choice == computer_choice) {
      alert("hakom 5wet");
      continue;
    }
    if (Play_round(player_choice, computer_choice)) {
      alert(`you win ${player_choice} beats ${computer_choice}`);
      player_score++;
    } else {
      alert(`you lose ${computer_choice} beats ${player_choice}`);
      Computer_score++;
    }
  }
  if (Computer_score > player_score) alert("the computer beats you");
  else if (player_score > Computer_score) alert("you have beaten the computer");
  else alert("hakom 5wet f score");
}

Play_game();
