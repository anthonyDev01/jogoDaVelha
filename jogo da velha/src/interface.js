let endScreen = document.getElementById("gameOver");
let playerWiner = document.getElementById("winer");

document.addEventListener("DOMContentLoaded", () => {
  let squares = document.querySelectorAll(".square"); //nessa linha pego todos os square do HTML

  //aqui vai varrer todos os quadrado e passar o evento para cada um deles
  squares.forEach((square) => {
    square.addEventListener("click", handleClick);
  });
});

function handleClick(event) {
  let square = event.target;
  var position = square.id; //essa linha pega o id do quadrado clicado

  if (handleMove(position)) {
    setTimeout(() => {
      winerPlayer();
    }, 300);
  } //essa linha vai colocar os simbolos no tabuleiro e alternar o jogador

  if (vsCPU) {
    setTimeout(() => {
      cpuMode();
    }, 150);
  }

  setTimeout(() => {
    draw()
  }, 300);

  updateSquare(position);
}

function updateSquare(position) {
  let square = document.getElementById(position.toString());
  let symbol = tabuleiro[position];
  square.innerHTML = `<div class="${symbol}"</div>`;
}

function winerPlayer() {
  if (isWin()) {
    switch (playerTime) {
      case 0:
        end(playerTime + 1);
        endScreen.style.display = "flex";

        wins[0]++;
        console.log(moves);
        scoreboard();
        break;

      case 1:
        end(playerTime + 1);
        endScreen.style.display = "flex";

        wins[1]++;
        scoreboard();
        break;
    }
  }
}

function draw() {
  if (moves >= 9 && gameOver == false) {
    playerWiner.innerText = `DEU VELHA`;
    endScreen.style.display = "flex";
  }
}

function scoreboard() {
  let j1 = document.getElementById("j1");
  let j2 = document.getElementById("j2");

  j1.innerText = wins[0];
  j2.innerText = wins[1];
}

function end(player) {
  playerWiner.innerText = `O JOGADOR ${player} VENCEU`;
  endScreen.style.display = "none";
}
