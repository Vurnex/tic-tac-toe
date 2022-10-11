let play_board = ["", "", "", "", "", "", "", "", ""];
let board_full = false;

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

    if (!board_full && play_board[e] == "") {
        play_board[e] = player;
        game_loop();
        addComputerMove();
    }
};
  
const addComputerMove = () => {

    if (!board_full) {
      do {
        selected = Math.floor(Math.random() * 9);
      } while (play_board[selected] != "");
      play_board[selected] = computer;
      game_loop();
    }
};

const game_loop = () => {
    render_board();
    check_board_complete();
};

const check_board_complete = () => {
    let flag = true;
    play_board.forEach(element => {
      if (element != player && element != computer) {
        flag = false;
      }
    });
  
    board_full = flag;
};

render_board();