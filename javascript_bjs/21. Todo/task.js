const toDoInput = document.querySelector('.tasks__input');
const toDoButton = document.querySelector('.tasks__add');
const toDoList = document.querySelector('.tasks__list');
const enter = 13;

toDoButton.addEventListener('click', (e) => {
    e.preventDefault();
    e.keyCode = enter;

    // creating elements
    const toDoListElement = document.createElement('div');
    toDoListElement.classList.add('task');

    toDoListElement.innerHTML += `
        <div class="task__title">${toDoInput.value}</div>
        <a href="#" class="task__remove">&times;</a>
`;

    // to prevent from adding an add empty field
    if (toDoInput.value.length === 0) {
        return false;
    }

    // adding an input item
    toDoList.appendChild(toDoListElement);

    // clear input field
    toDoInput.value = '';
});

// deleting  task
toDoList.addEventListener("click", e => {
    if (e.target.classList.contains("task__remove")) {
        e.target.parentElement.remove();
      }
});

