export default class Board {
  constructor() {
    this.boardSize = 4;
    this.character = null;
  }

  drawBoard() {
    const board = document.createElement('div');
    board.classList.add('board');
    // eslint-disable-next-line
    for (let i = 0; i < this.boardSize ** 2; i++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      board.appendChild(cell);
    }
    this.board = board;
    return this.board;
  }

  getBoard() {
    this.drawBoard();
    return this.board;
  }
}
