// 1.query an element node that has id "soup"
// 2.query an element nodes that have class "soup"
// 3.query any element nodes that have class "meat" 

const getSoupId = document.getElementById("soup");
const getMenuClass = document.querySelector("#soup");
const getMeatClass = document.querySelectorAll(".meat");

console.log(getSoupId); // <ul id="soup">
console.log(getMenuClass); // <ul id="soup">
console.log(getMeatClass); // NodeList [ul#soup]

// console.log(soupSelectorAllElement) //NodeList [ ul#soup ]
// console.log(soupSelectorAllElement.length) //1
// console.log(soupSelectorAllElement[0]) //<ul id="soup">
// soupSelectorAllElement.forEach((ele) => console.log(ele)) //<ul id="soup">
 
// 2. query an element nodes that have class "vegan"
const veganElements = document.querySelectorAll(".vegan")
// console.log(meatElement) // NodeList(4) [li.meat, li.meat, li.meat, li.meat]
// 4.
const firstVeganElement = document.querySelector(".meat")
console.log(firstVeganElement) // <li class ="vegan">
// 5.
const firstMeatElement = document.querySelector(".meat")
console.log(firstMeatElement) // <li class="meat">

const meatElements = document.querySelectorAll(".meat")
console.log(meatElements) //NodeList(4) [ li.meat, li.meat, li.meat, li.meat 

let beefSoupElement
meatElements.forEach((ele) => {
    if (ele.innerHTML === "Beef Soup") {
        beefSoupElement = ele
    }
    console.log(ele)
})

// traverse all children nodes of <ul id = "appetizer"> by using sibling relationship

/*
<ul id="appetizer">
    <li class="vegan">VegetableRolls</li>
    <li class="meat">ChickenWings</li>
    <li class="meat">TunaSandwich</li>
</ul>
*/

const getAppetizerId = document.getElementById("appetizer");
const siblingElement = getAppetizerId.nextElementSibling
console.log(siblingElement)

const firstUlElement = document.getElementById("appetizer") //<ul id="appetizer">
const firstLiElement = document.querySelector("ul#appetizer>li.vegan") //  <li class="vegan">Vegetable Rolls</li>
console.log(firstLiElement)


let currentNode = firstLiElement
while (currentNode != null) {
  console.log(currentNode)
  currentNode = currentNode.nextElementSibling
}

// Single Node - getElementById, querySelector
// Collection nodes (Array-like) (length, index) (NodeList[HTMLCollection]) -
// querySelectorAll, getElementsByName, getElementsByTagname, 

//getElementsByName - name attributes (NodeList)
const nameAttrElements = document.getElementsByName("fname")
console.log(nameAttrElements) //NodeList [ input#fname, input#fullname ]
//NodeList implements forEach, not other array function
nameAttrElements.forEach((ele) => console.log(ele))

//getElementsByTagName - tag name (HTMLCollection)
const liElements = document.getElementsByTagName("li")
console.log(liElements) //HTMLCollection { 0: li.vegan, 1: li.meat, 2: li.meat, 3: li.meat, 4: li.vegan, 5: li.meat, 6: li.vegan, length: 7 }
//HTMLCollection does not implement forEach, you must convert to array before you use array functions
// liElements.forEach((ele) => console.log(ele)) //error:liElements.forEach is not a function
//using Array.from to convert HTMLCollection to array
const liElementsArray = Array.from(liElements)
liElementsArray.forEach((ele) => console.log(ele))

//getElementsByClassName - class name (HTMLCollection)
const veganClassElements = document.getElementsByClassName("vegan")
console.log(veganClassElements) //HTMLCollection { 0: li.vegan, 1: li.vegan, 2: li.vegan, length: 3 }

//Single Node - getElementById, querySelector
//Collection nodes (Array-like (length, index) (NodeList|HTMLCollection)) - querySelectorAll, getElementsByName, getElementsByTagName, getElementsByClassName
 
const firstLiElement2 = document.querySelectorAll("#soup")


// ------------------------------------------------------
// 1. Find Parent Element
const ulParent = document.getElementsById("soup")
console.log(ulParent)

// 2. Get its children
const ulChildren = ulParent.children
let vegetElement = null

// 3. find element node that satifies condition "Vegetable Soup"
Array.from(ulChildren).forEach((liEle) => {
    if (liEle.textContent.trim()=== "Vegatable Soup") vegetElement = liEle
})

// Remove Element 3.
ulParent.removeChild(vegetElement)

// ----------------------------------------------------
// 1.Find Parent Element
const ulParent02 = document.getElementById("soup")
console.log(ulParent02)

// 2. Create New Element node
const newLiElement = document.createElement("li")
newLiElement.textContent = "Cabbage Soup"
newLiElement.setAttribute("class", "vegan")

// 3. Find Reference node
let beefElement = null
const liChildren = ulParent.children
Array.from(liChildren).forEach((ele) => {
  if (ele.textContent.trim() === "Beef Soup") beefElement = ele
})

// 4. Replace
ulParent.replaceChild(newLiElement, beefElement)

