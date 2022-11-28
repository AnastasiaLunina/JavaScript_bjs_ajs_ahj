/* eslint-disable no-param-reassign */
/* eslint-disable no-use-before-define */
/* eslint-disable no-shadow */

const button = document.querySelector('.popover-button');

button.addEventListener('click', togglePopover);

function createPopover() {
  const div = document.createElement('div');
  div.classList.add('popover');

  const header = document.createElement('h3');
  header.textContent = 'Popover title';

  const text = document.createElement('p');
  text.textContent = 'And here is some amazing content. It is very engaging. Right?';

  div.append(header, text);

  document.querySelector('.main-container').append(div);

  positionPopover(div);
}

function togglePopover() {
  const popover = document.querySelector('.popover');
  if (popover) {
    popover.remove();
  } else {
    createPopover();
  }
}

function positionPopover(element) {
  const coordinates = button.getBoundingClientRect();
  element.style.left = `${coordinates.left + coordinates.width / 2 - element.offsetWidth / 2}px`;
  element.style.top = `${coordinates.top - coordinates.height - element.offsetHeight / 1.8}px`;
}
