import getDate from './timestamp';

export default class Audio {
  constructor() {
    this.control = document.querySelector('.text-control');
    this.messages = document.querySelector('.message__list');
    this.controllerAudio = null;
    this.timer = null;
  }

  createAudioPost(geopos, blob) {
    const li = document.createElement('li');
    li.classList.add('message__item');
    const time = document.createElement('time');
    time.classList.add('timestamp');
    time.textContent = getDate();
    const box = document.createElement('div');
    box.classList.add('message__box');
    const audio = document.createElement('audio');
    audio.classList.add('message__content');
    audio.src = blob;
    audio.controls = true;
    const geoLoq = document.createElement('div');
    geoLoq.classList.add('message__geo');
    geoLoq.textContent = geopos;
    box.append(audio);
    box.append(geoLoq);
    li.append(time);
    li.append(box);
    this.messages.prepend(li);
  }

  createAudioController() {
    const div = document.createElement('div');
    div.classList.add('audio-control', 'text-control_container');
    const ready = document.createElement('button');
    ready.classList.add('ready-btn', 'btn');
    ready.textContent = '✔';
    ready.title = 'Готово';
    const cancel = document.createElement('button');
    cancel.classList.add('btn-cancel', 'btn');
    cancel.textContent = 'X';
    cancel.title = 'Отмена';
    const timer = document.createElement('span');
    timer.classList.add('timer');
    timer.textContent = '00:00';
    div.append(ready);
    div.append(timer);
    div.append(cancel);
    this.controllerAudio = div;
    this.timer = timer;
    this.control.replaceWith(div);
  }

  remoteAudioController() {
    this.controllerAudio.replaceWith(this.control);
  }
}
