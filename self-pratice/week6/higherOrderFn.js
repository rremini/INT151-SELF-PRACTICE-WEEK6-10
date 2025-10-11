let y = 100 // Global Variable
let sum = 5
sum = 2
function getScore(x) {
    let y = 10 // Local Variable ยิ่งใกล้ยิ่งเลือก
    // Global Function
    let mid = 40
    let final = 30
    function doSomething() {
        // y (Global)
        // sum (Global)
        // y (Local)
        // x (Local)
        // mid (Local)
        // final (Local)
        return console.log(`doSomething: ${y + sum + x + mid + final}`)
    }
    doSomething()
    return mid + final + x + y + sum
}

const score = getScore(1)
console.log(score)
// console.log(doSomething()) Cannot Access
// console.log(x, mid, final) Cannot Access

const z = 1
function makeAdder(x) {
    console.log(x)
    console.log(z)
    function doSomething (y) {
        return x + y + z
    }
    // return doSomething, return function
    // return doSomething(), return result of function
    return doSomething
}

const add5 = makeAdder(5)
const add10 = makeAdder(10)
console.log(add5(3)) // 3+5+1
console.log(add10(3))
console.log(typeof result)
