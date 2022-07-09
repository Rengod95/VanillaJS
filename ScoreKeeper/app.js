window.onload = function () {
  const p1Button = document.querySelector("#p1Button");
  const p2Button = document.querySelector("#p2Button");
  const p1Display = document.querySelector("#p1Display");
  const p2Display = document.querySelector("#p2Display");
  const reset = document.querySelector("#reset");
  const playTo = document.querySelector("#playTo");

  let p1Score = 0;
  let p2Score = 0;
  let isGameOver = false;
  let winningScore = 3;

  const p1ScoreHandler = function () {
    !isGameOver ? (p1Display.textContent = `${++p1Score}`) : undefined;
    p1Score === winningScore ? (isGameOver = true) : undefined;
  };
  const p2ScoreHandler = function () {
    !isGameOver ? (p2Display.textContent = `${++p2Score}`) : undefined;
    p2Score === winningScore ? (isGameOver = true) : undefined;
  };

  const resetHandler = function () {
    p1Score = 0;
    p2Score = 0;
    winningScore = 3;
    playTo.value = 3;
    isGameOver = false;
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
  };

  const selectHandler = function (e) {
    winningScore = parseInt(e.target.value);
    let tmpNode = document.createElement("div");
    tmpNode.innerHTML += `<span>Winning Score : ${winningScore}</span>`;
    this.appendChild(tmpNode);
  };

  p1Button.addEventListener("click", p1ScoreHandler);
  p2Button.addEventListener("click", p2ScoreHandler);
  reset.addEventListener("click", resetHandler);
  playTo.addEventListener("change", selectHandler);
};
