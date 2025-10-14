const buttons = document.getElementsByTagName("button")
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", () => {
    const box = document.getElementById("box")
    const color = button.dataset.color;
    box.style.backgroundColor = color
   })
})