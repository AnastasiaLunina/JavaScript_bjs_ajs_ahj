// jshint esversion:8

const possibleSettings = {
  theme: ['dark', 'light', 'gray'],
  music: ['trance', 'pop', 'rock', 'chillout', 'off'],
  difficulty: ['easy', 'normal', 'hard', 'nightmare'],
};

export default class Settings {
  constructor() {
    this.defaultSettings = new Map();
    Object.keys(possibleSettings).forEach((key) => {
      this.defaultSettings.set(key, possibleSettings[key][0]);
    });

    this.userSettings = new Map([
      ['theme', 'light'],
      ['music', 'chillout'],
      ['difficulty', 'easy'],
    ]);
  }

  get settings() {
    return new Map([this.defaultSettings, ...this.userSettings]);
  }
}
