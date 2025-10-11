const username = document.getElementById("username")
const submitButton = document.getElementById("submit")
const password = document.getElementById("password")
const confirmpass = document.getElementById("confirm-password")

submitButton.addEventListener (
    "click", (e) => {
        e.preventDefault()
            if (username  === "" || username  === null || typeof username  === undefined) {
                message.textContent = "Missing some Value, Please try again!"
                message.style.color = "red"
            }  

             if (password !== confirm-password) {
                message.textContent = "Password and Confirm do not match, check again!"
                message.style.color = "red"
            } 

            if (username  === "" || username  === null || typeof username  === undefined) {
                message.textContent = "Your data completed!"
                message.style.color = "green"
            } 
    }
    
)

// const fName = document.getElementById("fname")
// const lName = document.getElementById("lname")
// const message = document.getElementById("message")
// fName.addEventListener("blur", (e) => {
//   console.log(e.target.value)
//   if (e.target.value.trim().length === 0) {
//     message.style.color = "red"
//     message.textContent = "your firstname is empty"
//   }
// })
// lName.addEventListener("blur", (e) => {
//   console.log(e.target.value)
//   if (e.target.value.trim().length === 0) {
//     message.style.color = "red"
//     message.textContent = "your last name is empty"
//   }
// })