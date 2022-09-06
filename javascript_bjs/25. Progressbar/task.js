const progress = document.querySelector("#progress");
const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const xhr = new XMLHttpRequest();

  xhr.upload.addEventListener("progress", (e) => {
    if(xhr.readyState !== xhr.DONE && xhr.status === 200) {
        progress.value = (e.loaded / e.total);
    }
  });

  xhr.open("POST", "https://netology-slow-rest.herokuapp.com/upload.php");
  const formData = new FormData(form);
  xhr.send(formData);
});


