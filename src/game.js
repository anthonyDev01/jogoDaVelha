let tabuleiro = ["", "", "", "", "", "", "", "", ""];
let playerTime = 0;
let symbols = ["o", "x"];
let gameOver = false;
let vsCPU = false;
let moves = 0;
let rest = false;
let wins = [0, 0];
let winState = [
  //horizontal
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  //vertical
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  //diagonal
  [0, 4, 8],
  [2, 4, 6],
];

//o parametro da funçao vai ser o id de um dos quadrados
function handleMove(position) {
  if (gameOver) {
    return;
  }
  //esse if trata para nao poder subistituir um simbolo que ja foi colocado
  if (tabuleiro[position] == "") {
    tabuleiro[position] = symbols[playerTime]; //essa linha coloca um dos simbolos no array
    moves++
    gameOver = isWin();

    //esse trecho faz a troca de jogador apenas se o game over for false
    if (gameOver == false) {
      playerTime = playerTime == 0 ? 1 : 0;
    }
  }
  return gameOver;
}

function isWin() {
  for (let i = 0; i < winState.length; i++) {
    let seq = winState[i];

    let pos1 = seq[0];
    let pos2 = seq[1];
    let pos3 = seq[2];

    if (
      tabuleiro[pos1] == tabuleiro[pos2] &&
      tabuleiro[pos1] == tabuleiro[pos3] &&
      tabuleiro[pos1] != ""
    ) {
      return true;
    }
  }
  return false;
}

function restart() {
  rest = true;
  tabuleiro = ["", "", "", "", "", "", "", "", ""];
  playerTime = 0;
  symbols = ["o", "x"];
  gameOver = false;
  moves = 0;

  let squares = document.querySelectorAll(".square");
  squares.forEach((squares) => {
    squares.innerHTML = `<div class="empty"</div>`;
  });
}
