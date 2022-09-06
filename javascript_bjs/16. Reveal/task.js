const revealArray = Array.from(document.querySelectorAll('.reveal'));

window.addEventListener('scroll', getReveals);

function isVisible(reveal) {
    const {top, bottom} = reveal.getBoundingClientRect();

    if (bottom < 0) {
        return false;
    }
    if (top > window.innerHeight) {
        return false;
    }
    return true;
}

function getReveals() {
  revealArray.forEach((reveal) => {
    if (isVisible(reveal)) {
      reveal.classList.add("reveal_active");
    } else {
      reveal.classList.remove("reveal_active");
    }
  });
}
