// System Dialogs
// const whom = prompt('What is your name?', "Typeing your name")
// const confirmYourname = confirm(`You are ${whom}`)
// confirmYourname ? alert(`Hello, ${whom}`) : alert(`Hello, guest`)


const dombutton = document.querySelector("div>button");
console.log(dombutton)

// 1. Annonymous handler function with bubble event flow (default)
dombutton.addEventListener("click", () => {
    alert("Button was Clicked")
})

// 2. Named funtion with bubble event flow (default)
function getTarget(event) {
    return `${event.target.nodeName} was fired!`
}

function getMassage(){
    const yourMessage = prompt("What is your message?", "Typing your message...")
    alert(yourMessage)
}

dombutton.addEventListener(
   "click", 
   (event) => {
    console.log(`event.target: ${event.target}`)
    console.log(`event.currentTarget: ${event.currentTarget}`)
    console.lpg(`event.eventPhase: ${event.eventPhase}`)
    console.lpg(`event.eventType: ${event.type}`)
    console.log(("Button was clicked"))
   },
   true
) 

const bodyElement = document.querySelector("body")
bodyElement.addEventListener (
    "click", 
    (event) => {
        console.log(`event.target: ${event.target}`)
        console.log(`event.currentTarget: ${event.currentTarget}`)
        console.lpg(`event.eventPhase: ${event.eventPhase}`)
        console.lpg(`event.eventType: ${event.type}`)
        console.log(("Button was clicked"))
    }
)

// const divElement = document.querySelector("div")
// divElement.addEventListener("click", )

dombutton.addEventListener("click", getTarget)
dombutton.addEventListener("click", getMassage)

// when click submit button, prevent default behavior and validate form data
const submitButton = document.querySelector("Input [type='submit']")
submitButton.addEventListener (
    "click", (e) => {
        e.preventDefault()
        const inputElements = document.querySelectorAll("input")

        inputElements.forEach((ele) => {
            const attr = ele.getAttribute("type")
            if (attr  === "" || attr  === null || typeof attr  === undefined) {
                alert("Name must be filled out!")
            }  return false
        })
    }
    
)

// function validateInput() {
//     const a = document.querySelector("Input [type='submit']")
//     if (a === "" || a === null || typeof a === undefined) {
//         alert("Name must be filled out!")
//     }
//     return false
// }


console.log(submitButton)

const info = document.getElementById('info')
// Window resize event
window.addEventListener('resize', () => {
info.textContent = `Window resized: ${window.innerWidth} x ${window.innerHeight}`
})
// Window scroll event
window.addEventListener('scroll', () => {
info.textContent = `Scrolled to Y: ${window.scrollY}`
})