// jshint esversion:8
import json from './parser';
import read from './reader';
import GameSaving from './GameSaving';

export default class GameSavingLoader {
  // eslint-disable-next-line
  static async load() {
    try {
      const response = await read();
      const jsonObj = await json(response);
      return new GameSaving(JSON.parse(jsonObj));
    } catch (error) {
      console.log(error.message);
    }
  }
}
