// const buttons = document.getElementsByTagName("button")
// Array.from(buttons).forEach((button) => {
//   button.addEventListener("click", () => {
//     //write code here.... (common code)
//     const getIdBox = document.getElementById("box")
//     getIdBox.classList.add("bordered") ? getIdBox.classList.remove("bordered") : getIdBox.classList.toggle("bordered")
//   })
// })

const getIdBox = document.getElementById("box")
const buttonAddBorder = document.getElementById("add")
buttonAddBorder.addEventListener("click", () => {
  //write your code here (separate code in each button)
      getIdBox.classList.add("bordered")
})
 
const buttonRemoveBorder = document.getElementById("remove")
buttonRemoveBorder.addEventListener("click", () => {
  //write your code here (separate code in each button)
    getIdBox.classList.remove("bordered")
})
 
const buttontoggleBorder = document.getElementById("toggle")
buttontoggleBorder.addEventListener("click", () => {
  //write your code here (separate code in each button)
     getIdBox.classList.toggle("bordered")
})
 