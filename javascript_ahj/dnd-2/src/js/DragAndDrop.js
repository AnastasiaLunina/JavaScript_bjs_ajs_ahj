export default class DragAndDrop {
  constructor() {
    this.drag = null;
    this.drop = null;
    this.shiftX = null;
    this.shiftY = null;
    this.elementAfter = null;
    this.container = null;
    this.placeholder = null;
  }

  init() {
    this.container = document.querySelector('.container');
    this.container.addEventListener('mousedown', this.dragDown);
    this.container.addEventListener('mousemove', this.dragMove);
    this.container.addEventListener('mouseup', this.dragUp);
    this.container.addEventListener('mouseleave', this.dragLeave);
  }

  dragDown(e) {
    if (!e.target.closest('.item') || e.target.classList.contains('cancel')) {
      return;
    }

    e.preventDefault();
    this.drag = e.target.closest('.item');
    this.drop = this.drag.cloneNode(true);

    this.shiftX = e.clientX - this.drag.getBoundingClientRect().left;
    this.shiftY = e.clientY - this.drag.getBoundingClientRect().top;

    this.drop.style.width = `${this.drag.offsetWidth}px`;
    this.drop.classList.add('dragged');
    document.querySelector('.container').appendChild(this.drop);
    this.drop.style.left = `${e.pageX - this.shiftX}px`;
    this.drop.style.top = `${e.pageY - this.shiftY}px`;
    this.drag.style.opacity = 0;

    this.placeholder = document.createElement('li');
    this.placeholder.classList.add('empty');
    this.placeholder.style.height = `${this.drag.offsetHeight}px`;
  }

  dragMove(e) {
    e.preventDefault();
    if (!this.drag) {
      return;
    }

    this.drop.classList.add('hidden');
    this.elementAfter = document.elementFromPoint(e.clientX, e.clientY);
    this.drop.classList.remove('hidden');

    this.drop.style.left = `${e.pageX - this.shiftX}px`;
    this.drop.style.top = `${e.pageY - this.shiftY}px`;

    if (this.elementAfter.closest('.column')) {
      const parent = this.elementAfter.closest('.column').querySelector('ul');

      if (!parent.hasChildNodes()) {
        parent.append(this.placeholder);
      } else if (this.elementAfter.closest('.add-card')) {
        parent.append(this.placeholder);
      } else if (this.elementAfter.closest('h1')) {
        parent.prepend(this.placeholder);
      } else if (this.elementAfter.closest('.item')) {
        parent.insertBefore(this.placeholder, this.elementAfter.closest('.item'));
      }
    }
  }

  dragUp(e) {
    e.preventDefault();
    if (!this.drag) {
      return;
    }

    if (!this.elementAfter.closest('.column')) {
      document.querySelector('.container').removeChild(this.drop);
      document.querySelector('.empty').remove();
      this.drag.style.opacity = 1;
      this.drop = null;
      this.drag = null;
      return;
    }

    const parentElement = this.elementAfter.closest('.column').querySelector('ul');

    if (this.elementAfter.closest('h1')) {
      parentElement.prepend(this.drop);
    } else if (this.elementAfter.closest('.add-card')) {
      parentElement.append(this.drop);
    } else {
      parentElement.insertBefore(this.drop, this.elementAfter.closest('li'));
    }

    if (document.querySelector('.empty')) {
      document.querySelector('.empty').remove();
    }

    this.drop.classList.remove('dragged');
    this.drop.style = '100%';
    this.drag.remove();
    this.drag = null;
    this.drop = null;
  }

  dragLeave() {
    if (!this.drag) {
      return;
    }

    document.querySelector('.container').removeChild(this.drop);
    document.querySelector('.empty').remove();
    this.drag.style.opacity = 100;
    this.drop = null;
    this.drag = null;
  }
}
