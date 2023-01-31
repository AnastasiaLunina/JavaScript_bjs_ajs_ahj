import getDate from './timestamp';

export default class Text {
  constructor(text, geopos) {
    this.messages = document.querySelector('.message__list');
    this.text = text;
    this.geopos = geopos;
  }

  getPost() {
    const li = document.createElement('li');
    li.classList.add('message__item');
    const time = document.createElement('time');
    time.classList.add('timestamp');
    time.textContent = getDate();
    const box = document.createElement('div');
    box.classList.add('message__box');
    const content = document.createElement('div');
    content.classList.add('message__content');
    content.textContent = this.text;
    const geoLoq = document.createElement('div');
    geoLoq.classList.add('message__geo');
    geoLoq.textContent = this.geopos;
    box.append(content);
    box.append(geoLoq);
    li.append(time);
    li.append(box);
    this.messages.prepend(li);
  }
}
