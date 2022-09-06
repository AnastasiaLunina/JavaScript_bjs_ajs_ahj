const tooltipsArray = Array.from(document.querySelectorAll(".has-tooltip"));

tooltipsArray.forEach((tooltip) => {
    let html = `<div class='tooltip'>${tooltip.getAttribute("title")}</div>`;
    let getTooltip = tooltip.insertAdjacentHTML('afterend', html);

  tooltip.addEventListener("click", (event) => {
    event.preventDefault();

    getTooltip = tooltip.nextSibling;
    getTooltip.classList.toggle("tooltip_active");

    const position = tooltip.getBoundingClientRect();
    getTooltip.style.left = `${position.left}px`;
    getTooltip.style.top = `${position.bottom}px`;
  });
});