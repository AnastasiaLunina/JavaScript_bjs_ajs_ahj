export default class Game {
  constructor(board, character) {
    this.board = board;
    this.boardSize = 4;
    this.character = character;
    this.activeCharacter = null;
  }

  start() {
    this.redrawBoard();
    this.play();
  }

  redrawBoard() {
    const board = this.board.getBoard(this.boardSize);
    const body = document.querySelector('body');
    const container = document.createElement('div');

    container.classList.add('container');
    container.appendChild(board);
    body.insertBefore(container, body.firstChild);
    this.cells = [...board.children];
  }

  generatePosition() {
    const position = Math.floor(Math.random() * this.boardSize ** 2);
    if (position === this.position) {
      this.generatePosition();
      return;
    }
    this.deletedChar();
    this.position = position;
    this.adventChar();
  }

  deletedChar() {
    if (this.activeCharacter === null) {
      return;
    }
    this.cells[this.position].firstChild.remove();
  }

  adventChar() {
    this.activeCharacter = this.character.getCharacter();
    this.cells[this.position].appendChild(this.activeCharacter);
  }

  play() {
    setInterval(() => {
      this.generatePosition();
    }, 800);
  }
}
