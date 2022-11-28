/* eslint-disable class-methods-use-this */
export default class Collapse {
  init() {
    const buttonCollapse = document.querySelector('.collapse-button');
    const containerCollapse = document.querySelector('.collapse-container');

    buttonCollapse.addEventListener('click', () => {
      containerCollapse.classList.toggle('active');
    });
  }
}
