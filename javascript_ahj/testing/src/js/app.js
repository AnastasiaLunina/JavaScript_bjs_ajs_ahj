import Swal from 'sweetalert2';

import checkCard from './checkCard';
import validateCard from './validateCard';

const resetButton = document.querySelector('.reset-button');
const input = document.querySelector('.form-input-field');
const result = document.querySelector('.result');
const form = document.querySelector('#form');
const cards = document.querySelectorAll('.card');

function checkCreditCard() {
  if (typeof document !== 'undefined') {
    input.addEventListener('input', () => {
      const type = checkCard(input.value);

      if (type && validateCard(input.value)) {
        document.querySelector(type).style.opacity = 1;
      }
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      result.textContent = '';
      if (input.value === '') {
        Swal.fire('Please enter a credit card number');
      } else {
        // eslint-disable-next-line
        validateCard(input.value) ? result.textContent = 'Valid' : result.textContent = 'Not valid';
        resetButton.style.display = 'block';
      }
    });
  }
}

function reset() {
  form.reset();
  result.textContent = '';
  // eslint-disable-next-line
  cards.forEach(card => card.style.opacity = 0.3);
  resetButton.style.display = 'none';
}

resetButton.addEventListener('click', reset);

checkCreditCard();
