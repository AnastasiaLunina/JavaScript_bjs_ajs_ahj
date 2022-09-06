const popupLoad = document.querySelector(".modal");
const closeModal = document.querySelector(".modal__close_times");

window.addEventListener("load", showPopup);
closeModal.addEventListener("click", closePopup);

function showPopup() {
    if (!document.cookie.includes("modal=close")) {
    popupLoad.classList.add("modal_active");
    }
}

function closePopup() {
    popupLoad.classList.remove("modal_active");
    document.cookie = "modal=close";
}