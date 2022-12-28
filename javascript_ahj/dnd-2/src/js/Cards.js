/* eslint-disable class-methods-use-this */
export default class Cards {
  constructor() {
    this.container = null;
    this.list = null;
    this.listItems = null;
  }

  init() {
    this.listenerAddCard();
    this.container.addEventListener('click', this.itemRemove);
  }

  bindToDOM(container) {
    this.container = container;
    this.list = this.container.querySelectorAll('ul');
    this.listItems = this.container.querySelectorAll('.item');
  }

  itemRemove(e) {
    if (e.target.classList.contains('cancel') && e.target.closest('li')) {
      e.target.closest('li').remove();
    }
  }

  listenerAddCard() {
    const addCard = this.container.querySelectorAll('.add-card');

    addCard.forEach((elem) => {
      elem.addEventListener('click', (e) => {
        const div = this.createTextarea();
        e.target.replaceWith(div);

        div.addEventListener('click', (event) => {
          if (event.target.classList.contains('cancel')) {
            div.replaceWith(elem);
          }

          if (event.target.classList.contains('add') && div.querySelector('.textarea').value !== '') {
            const li = this.addNewCard(div.querySelector('.textarea').value);
            const ul = event.target.closest('.column').querySelector('ul');
            ul.append(li);
            div.replaceWith(elem);
            this.listItems = this.container.querySelectorAll('.item');
          }
        });
      });
    });
  }

  showLoad(loader) {
    this.list.forEach((e) => {
      e.innerHTML = '';
    });

    Object.entries(loader).forEach(([key, value]) => {
      value.forEach((text) => {
        this.container.querySelector(`[data-category="${key}"]`).insertAdjacentElement('beforeend', this.addNewCard(text));
      });
    });
  }

  createObject() {
    const object = { todo: [], inprogress: [], done: [] };
    this.list.forEach((e) => {
      e.querySelectorAll('li span').forEach((el, i) => {
        object[e.getAttribute('data-category')][i] = el.textContent;
      });
    });

    return object;
  }

  createTextarea() {
    const div = document.createElement('div');
    div.classList.add('textarea__container');
    div.innerHTML = `
          <textarea class="textarea" placeholder="Please type here..."></textarea>
          <button class="add btn">Add Card</button>
          <button class="cancel btn">&#215</button>
        `;
    return div;
  }

  addNewCard(text) {
    const li = document.createElement('li');
    li.classList.add('item');
    li.insertAdjacentHTML('beforeend', `<span>${text}</span><button class="cancel btn">&#215</button>`);

    return li;
  }
}
