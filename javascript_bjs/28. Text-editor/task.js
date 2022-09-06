const textEditor = document.getElementById("editor");
const btnReset = document.getElementById("reset");

textEditor.addEventListener("input", getUserInput);
btnReset.addEventListener("click", reset);

textEditor.value = localStorage.getItem("text");

function getUserInput() {
  localStorage.setItem("text", textEditor.value);
}

function reset() {
    localStorage.removeItem('text');
    textEditor.value = "";
}


