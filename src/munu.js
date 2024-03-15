function hideSelection() {
  let buttonPlayer = document.getElementById("modePlayer");
  let modes = document.getElementById("chooseMode");
  let tabuleiro = document.getElementById("tabuleiro");
  let logo = document.getElementById("logo");
  let restart = document.getElementById("restart");
  let scoreboard = document.getElementById("containerPlayer")

  if (buttonPlayer.style.display != "none") {
    modes.style.display = "none";
    logo.style.display = "none";
    tabuleiro.style.display = "block";
    restart.style.display = "block"
    scoreboard.style.display = "flex"
  }
}


