let play_board = ["", "", "", "", "", "", "", "", ""];

const player = "X";
const computer = "O";

const board_container = document.querySelector(".play-area");

const render_board = () => {

  board_container.innerHTML = "";

  play_board.forEach((e, i) => {

    board_container.innerHTML += `<div id="block_${i}" class="block" onclick="addPlayerMove(${i})">${play_board[i]}</div>`;

    if (e == player || e == computer) {

      document.querySelector(`#block_${i}`).classList.add("occupied");

    }

  });

};

const addPlayerMove = e => {
    if (play_board[e] == "") {
      play_board[e] = player;
      render_board();
      addComputerMove();
    }
};

const addComputerMove = () => {
do {
    selected = Math.floor(Math.random() * 9);
} while (play_board[selected] != "");
play_board[selected] = computer;
render_board();
};
  

render_board();