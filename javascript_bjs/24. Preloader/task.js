const loader = document.querySelector('#loader');
const items = document.querySelector('.item');

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com', true);
xhr.responseType = 'json';
xhr.send(); 

// console.log(xhr);

xhr.addEventListener('load', getCurrencyRate);

function getCurrencyRate() {
    if (xhr.readyState === xhr.DONE && xhr.status === 200) {
      const currency = xhr.response.response.Valute;
      
      for(let i in currency) {
        const charCode = currency[i].CharCode;
        const value = currency[i].Value;
  
        items.insertAdjacentHTML('afterend',
        `<div class="item">
           <div class="item__code">${charCode}</div>
           <div class="item__value">${value}</div>
           <div class="item__currency">руб.</div>
         </div>`
        );
      }
      loader.style.display = 'none';
    }
  }