// jshint esversion:8
import json from './parser';
import read from './reader';
import GameSaving from './GameSaving';

export default class GameSavingLoader {
  static load() {
    return read()
      .then((response) => json(response))
      .then((response) => new GameSaving(JSON.parse(response)))
      .catch((error) => console.log(error.message));
  }
}
