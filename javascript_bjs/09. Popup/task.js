const popupLoad = document.querySelector("#modal_main");
const wellDone = document.querySelector("#modal_success");
const doWell = document.querySelector(".show-success");
const closeModal = document.querySelectorAll(".modal__close_times");

function showPopup() {
    popupLoad.classList.add("modal_active");
  }

function closePopup() {
    for (let i = 0; i < closeModal.length; i++) {
    let eachClose = closeModal[i];

    let closeFunc = () => {
        wellDone.style.display = "none";
        popupLoad.style.display = "none";
    };

    eachClose.onclick = closeFunc;
    }
}

doWell.onclick  = function successOpen() {
    popupLoad.className = "modal";
    wellDone.className = "modal modal_active";
};

showPopup();
closePopup();