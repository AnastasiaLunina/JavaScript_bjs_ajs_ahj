const btn = Array.from(document.querySelectorAll('.dropdown'));

btn.forEach((item) => {

const dropdownValue = item.querySelector(".dropdown__value");
const dropdownListContainer = item.querySelector(".dropdown__list");
const dropdownItem = Array.from(item.querySelectorAll(".dropdown__item"));

dropdownValue.addEventListener("click", toggleClassActive);

function toggleClassActive() {
  dropdownListContainer.classList.toggle('dropdown__list_active');
}

for (let i = 0; i < dropdownItem.length; i++) {
  dropdownItem[i].addEventListener("click", dropdownMainFunc);
}

function dropdownMainFunc(event) {
    event.preventDefault();
    dropdownValue.textContent = event.target.textContent;
    dropdownListContainer.className = 'dropdown__list';
  }
});
