const topPart = document.getElementById("top-part");
const powerButton = document.getElementById("power-button");

powerButton.addEventListener("click", () => {
    topPart.classList.toggle("color-change");
});