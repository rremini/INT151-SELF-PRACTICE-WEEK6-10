const html = document.documentElement
const firstNode = document.firstChild
const firstElementChildeNode = document.firstElementChild
const lastNode = document.lastChild
const firstElement = document.firstElement
const lastElementChideNode = document.lastElementChideNode

if (html.nodeType === Node.ELEMENT_NODE) {
    alert("Node is an element.")
}

if (firstNode.nodeType === Node.ATTRIBUTE_NODE) {
    alert("Node is an attribute.")
}

if (lastNode.nodeType === Node.TEXT_NODE) {
    alert("Node is an text node.")
}

if (lastElementChideNode.nodeType === Node.DOCUMENT_NODE) {
    alert("Node is an docuemnt node.")
}

console.log(html1)
console.log(firstNode)
console.log(firstElementChildeNode)
console.log(lastNode)
console.log(lastElementChideNode)

// query div element with id "example"
const divElement1 = docuemnt.getElementById("exampleElement")

const divChildNodes = divElement.ChildNodes 
console.log(`length: ${divElement.childnodes.length}`)
divChildNodes.forEach((child) => {
    console.log(child.nodeName)
    console.log(child.nodeType)
    console.log(child.nodeValue)
})

// div Element
const divChildren = divElement.children // return HTMLCollention
console.log(`length: ${divElement.children.length}`)
Array.from(divChildren).forEach((child) => {
    console.log(child.nodeName)
    console.log(child.nodeType)
    console.log(child.nodeValue)
})

const addId = document.getElementById("subject")
const addP = document.createElement("p")
addId.appendChild(addP)

const divElement = document.getElementById("subject")
const pElement = document.createElement("p")

// const pText=docuemnt.creatTextNode('INT151')
pElement.appendChild(pText)

divElement.appendChild(pText)

// pElement.textContent = "INT141"

// Create text node then 3. append to <p> child
const pText = document.createTextNode("INT141")
pElement.appendChild(ptext)

// Append <p> with text node to div element
divElement.appendChild(pElement)

// ง่ายมาก เพราะสั้นกระชับ
pElement.setAttribute("id", "INT141-2")

console.log(pElement.getAttribute("id")) // int141
console.log(pElement.attributes[0]) // id="INT141"
console.log(pElement.attributes[0].ownerElement) // <p id="int141">

const pAttributes = pElement.attributes
for(let i = 0; i < pAttributes.length; i++) {
    const name = pAttributes[i].name
    const value = pAttributes[i].value
    if (pAttributes[i].name === "id") console.log(name, value)
}

const divElement3 = document.createElement("p")
