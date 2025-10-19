document.addEventListener("DOMContentLoaded", () => {
    const keyInput = document.getElementById("keyInput")
    const keyLog = document.getElementById("keyLog")

    keyInput.addEventListener("keydown", (e) => {
        const key = e.key 
        const p = document.createElement("p")

         if (key === "Enter") {
            p.style.color = "blue"
            p.textContent = "You pressed: Enter"
        } else {
            p.style.color = "black"
            p.textContent = `You pressed: ${key}`
        }
    })
    keyLog.appendChild(p)
})

