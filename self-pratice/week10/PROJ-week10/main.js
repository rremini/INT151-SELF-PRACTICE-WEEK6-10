const defaultColor = "#00000";
const fontColor = document.querySelector("#fontColor")
fontColor.value = defaultColor;
fontColor.addEventListener("input", updateColor)

function updateColor(event) {
  const p = document.querySelector("#preview");
  if (p) {
    p.style.color = event.target.value;
  }
}
