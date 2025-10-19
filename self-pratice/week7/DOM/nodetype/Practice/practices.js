const el = document.getElementById("drink")
const allDrinks = el.children

let teaDrink = allDrinks[1]
console.log(teaDrink.textContent)

console.log(teaDrink.previousElementSibling.textContent)
console.log(teaDrink.nextElementSibling.textContent)
console.log(teaDrink.parentElement)
 