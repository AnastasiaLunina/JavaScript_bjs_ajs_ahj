/* eslint-disable class-methods-use-this */
export default class Chat {
  init() {
    const chatForm = document.querySelector('.chat-form');
    const chatClose = document.querySelector('.chat-close');
    const chatCta = document.querySelector('.chat-cta');

    chatCta.addEventListener('click', () => {
      chatForm.classList.remove('hidden');
      chatCta.classList.add('hidden');
      chatForm.style.transition = 'opacity 1000ms';
    });

    chatClose.addEventListener('click', () => {
      chatCta.classList.remove('hidden');
      chatForm.classList.add('hidden');
    });
  }
}
