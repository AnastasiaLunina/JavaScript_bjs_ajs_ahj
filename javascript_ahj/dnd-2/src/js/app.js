import State from './Storage';
import Cards from './Cards';
import DragDrop from './DragAndDrop';

const state = new State(localStorage);
const cards = new Cards();
const dragAndDrop = new DragDrop();

cards.bindToDOM(document.querySelector('.container'));

dragAndDrop.init();
cards.init();

window.addEventListener('unload', () => {
  state.save(cards.createObject());
});

const loader = state.load();
cards.showLoad(loader);
