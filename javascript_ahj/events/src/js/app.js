import Board from './board';
import Character from './character';
import Game from './game';

const board = new Board();
const character = new Character();
const game = new Game(board, character);

game.start();
