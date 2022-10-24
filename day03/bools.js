let isG = 4 < 3
let isGG = ""
let isGGG = 0

console.log(isG)
console.log(Boolean(isGG))
console.log(Boolean(isGGG))

let dummy
console.log(dummy)

dummy = null
console.log(dummy)

let num = 3
let nummy = "3"

console.log(num == nummy)  // checks only the values
console.log(num === nummy) // checks data type as well as the values

console.log(undefined == null)
console.log(undefined === null)

let isRaining = false

isRaining ? console.log("Raining"): console.log("Not Raining")

//alert("hello world!")

//let number = prompt("Hello", "Minazuki")
//console.log(number)

//let agree = confirm("Are you ready?")
//console.log(agree)

const now = new Date()
console.log(now.getFullYear())

console.log(now.getMonth() + 1)

console.log(now.getDay() + 1)

console.log(now.getHours() > 12 ? `${now.getHours() % 12} pm`: `now.getHours() am`)

console.log(now.getMinutes())

console.log(now.getSeconds())

console.log(now.getTime()) // returns seconds since January 1 1970

console.log(now.getTime() == Date.now())

/*
let base = prompt("Enter base;")
let height = prompt("Enter height;")
alert(`The area of the triangle is: ${base * height}`)
*/

var tomorrow = ('0' + now.getDate()).slice(-2) + "/" + ('0' + (now.getMonth() + 1)).slice(-2) + "/" + now.getFullYear();
console.log(tomorrow)