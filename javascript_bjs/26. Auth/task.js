const signin = document.querySelector('#signin');
const form = document.querySelector('#signin__form');
const btnSignin = document.querySelector('#signin__btn');
const welcome = document.querySelector('#welcome');
const userId = document.querySelector('#user_id');
const btnSignout = document.querySelector('#signout__btn');

btnSignin.addEventListener('click', signInUser);
btnSignout.addEventListener('click', signOutUser);

function welcomeUser(id) {
  signin.classList.remove('signin_active');
  welcome.classList.add('welcome_active');
  btnSignout.style.display = 'block';
  userId.textContent = id;
}

function saveUser() {
    if (localStorage.id) {
    welcomeUser(localStorage.id);
    }   
}
saveUser();

function signInUser(event) {
  event.preventDefault();

  const xhr = new XMLHttpRequest();
  const formData = new FormData(form);

  xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
  xhr.responseType = 'json';
  xhr.send(formData);

  xhr.addEventListener('load', sendForm);

  function sendForm() {
        // console.log(xhr.response);
      if (xhr.response.success) {
        localStorage.setItem('id', xhr.response.user_id);

        welcomeUser(localStorage.id);

      } else {
        alert('Wrong username or password');
      form.reset();
    }
  }
}

function signOutUser(event) {
  event.preventDefault();
  localStorage.removeItem('id');
  welcome.classList.remove('welcome_active');
  signin.classList.add('signin_active');
}



