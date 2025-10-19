//localStorage
let counter = localStorage.getItem("count")
if (counter === null) localStorage.setItem("count", 1)
else localStorage.setItem("count", ++counter)
alert(counter)
localStorage.removeItem("count")
localStorage.clear()

// let counter = sessionStorage.getItem("count")
// if (counter === null) sessionStorage.setItem("count", 1)
// else sessionStorage.setItem("count", ++counter)
// alert(counter)
sessionStorage.removeItem("count")
sessionStorage.clear()
 