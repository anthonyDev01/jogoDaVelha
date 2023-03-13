function cpuMode() {
  vsCPU = true;
  let numeberRandom = Math.floor(Math.random() * 9);
  let emptyElement = 0;

  for (let i of tabuleiro) {
    if (i == "") {
      emptyElement++;
    }

    while (tabuleiro[numeberRandom] != "" && emptyElement > 1) {
      numeberRandom = Math.floor(Math.random() * 9);
    }
  }

  if (playerTime == 1) {
    if (handleMove(numeberRandom)) {
      setTimeout(() => {
        winerPlayer(playerTime);
      }, 100);
    }

    handleMove(numeberRandom);
    updateSquare(numeberRandom);
  }
}
