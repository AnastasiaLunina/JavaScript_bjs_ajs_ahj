/* eslint-disable class-methods-use-this */
import like from '../img/heart.png';

export default class Like {
  init() {
    const likeBtn = document.querySelector('.like-btn');
    const likeImg = document.querySelector('.like');

    likeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const random = Math.floor(Math.random() * 4) + 1;
      const likes = document.createElement('img');
      likes.src = like;
      likes.classList.add('like-img');
      likes.style.animationName = `heart${random}`;
      likeImg.appendChild(likes);
      likes.addEventListener('animationend', () => {
        likeImg.removeChild(likes);
      });
    });
  }
}
