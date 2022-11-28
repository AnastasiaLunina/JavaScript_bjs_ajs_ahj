import swal from 'sweetalert';

export default class Game {
  constructor(board, character) {
    this.board = board;
    this.boardSize = 4;
    this.character = character;
    this.activeCharacter = null;

    this.goblinHit = 0;
    this.missedHit = 0;
    this.win = 5;
    this.lost = 5;
    this.cells = document.querySelectorAll('.cell');
    this.listeners = [];
  }

  start() {
    this.redrawBoard();
    this.board.addEventListener('click', this.onBoardClick.bind(this));
    this.play();
  }

  redrawBoard() {
    this.board = this.board.getBoard(this.boardSize);
    const body = document.querySelector('body');
    const container = document.createElement('div');

    container.classList.add('container');
    container.innerHTML = '<h1>Hit This Goblin</h1>';
    this.statistic = this.statisticContainer();
    container.appendChild(this.statistic);
    container.appendChild(this.board);
    body.insertBefore(container, body.firstChild);
    this.cells = [...this.board.children];
  }

  statisticContainer() {
    this.mainStatisticContainer = document.createElement('div');
    this.mainStatisticContainer.classList.add('status');
    this.mainStatisticContainer.innerHTML = 'Dead goblins: <span id="dead">0</span><br>Missed goblins: <span id="lost">0</span>';
    return this.mainStatisticContainer;
  }

  generatePosition() {
    const position = Math.floor(Math.random() * this.boardSize ** 2);
    if (position === this.position) {
      this.generatePosition();
      return;
    }
    this.deletedCharacter();
    this.position = position;
    this.addCharacter();
  }

  deletedCharacter() {
    if (this.activeCharacter === null) {
      return;
    }
    this.cells[this.position].firstChild.remove();
  }

  addCharacter() {
    this.activeCharacter = this.character.getCharacter();
    this.cells[this.position].appendChild(this.activeCharacter);
  }

  onBoardClick(e) {
    e.preventDefault();
    this.goblinHit = document.querySelector('#dead');
    this.missedHit = document.querySelector('#lost');
    this.listeners.forEach((callback) => callback(e.target));

    if (e.target.classList.contains('goblin')) {
      // eslint-disable-next-line
      this.goblinHit.textContent++;
      e.target.classList.remove('goblin');
    } else {
      // eslint-disable-next-line
      this.missedHit.textContent++;
    }

    if (this.goblinHit.textContent >= this.win) {
      swal({
        title: 'You won!',
        text: 'You are the champion',
        icon: 'https://images.unsplash.com/photo-1509909756405-be0199881695?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
        imageWidth: 200,
        imageHeight: 100,
        imageAlt: 'Custom image',
      });
      this.newGame();
    } else if (this.missedHit.textContent >= this.lost) {
      swal({
        title: 'You lost!',
        text: 'Try again',
        icon: 'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1017&q=80',
        imageWidth: 200,
        imageHeight: 100,
        imageAlt: 'Custom image',
      });
      this.newGame();
    }
  }

  newGame() {
    this.missedHit.textContent = 0;
    this.goblinHit.textContent = 0;
  }

  play() {
    setInterval(() => {
      this.generatePosition();
    }, 1000);
  }
}
