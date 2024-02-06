function Computer() {
  let list = ["rock", "paper", "scissor"];
  let index = Math.floor(Math.random() * list.length);
  return list[index];
}
let computer_choice = Computer();
let player_choice = prompt("enter your choice");
player_choice.toLowerCase();

if (player_choice == computer_choice) alert("hakom 5wet");
else if (player_choice == "rock") {
  if (computer_choice == "paper")
    alert(`the ${computer_choice} beats the ${player_choice}`);
  else alert(`the ${player_choice} beats the ${computer_choice} `);
} else if (player_choice == "paper") {
  if (computer_choice == "scissor")
    alert(`the ${computer_choice} beats the ${player_choice}`);
  else alert(`the ${player_choice} beats the ${computer_choice} `);
} else if (player_choice == "scissor") {
  if (computer_choice == "rock")
    alert(`the ${computer_choice} beats the ${player_choice}`);
  else alert(`the ${player_choice} beats the ${computer_choice} `);
} else console.log("chbik t5oj");
