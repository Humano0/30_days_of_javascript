const callback = (n) => {
    return n ** 2
}

// function that takes other function as a callback
function cube(callback, n) {
    return callback(n) * n
}

console.log(cube(callback, 3))

const higherOrder = n => {
    const doSomething = m => {
        const doWhatEver = t => {
            return 2 * n + 3 * m + t
        }
        return doWhatEver
    }
    return doSomething
}
console.log(higherOrder(2)(3)(10))


const numbers = [1, 2, 3, 4, 5]
const sumArray = arr => {
    let sum = 0
    const callback = function (element) {
        sum += element
    }
    arr.forEach(callback)
    return sum

}
console.log(sumArray(numbers))



const sumay = arra => {
    let sum = 0
    arra.forEach(function(element){
        sum += element
    })
    return sum
}
console.log(sumay(numbers))




function sayHello() {
    console.log('Hello')
}
setInterval(sayHello, 1000)

function sayWhat() {
    console.log('What')
}
setTimeout(sayWhat, 2000)

const forEacher = (arr) => {
    /*
    arr.forEach(function(element, index, array){
        console.log(`${index}, ${element}, ${array}`)
    })
    */
    arr.forEach((index, element, array) => {
        console.log(`${index}, ${element}, ${array}`)
    })
}
forEacher(numbers)


let sum = 0;
const numberr = [1, 2, 3, 4, 5];
numberr.forEach(num => sum += num)
console.log(sum)


const xxx = [1, 2, 3, 4, 5]
const numbersSquare = xxx.map((num) => num * num)
console.log(numbersSquare)


const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
]
const countriesToUpperCase = countries.map(
    (country) => country.toUpperCase().slice(3)
)
console.log(countriesToUpperCase)

const countriesContainingLand = countries.filter(
    (country) => country.includes('land')
)
console.log(countriesContainingLand)

const countriesEndsByia = countries.filter(
    (country) => country.endsWith('ia')
)
console.log(countriesEndsByia)

const countriesHaveFiveLetters = countries.filter(
    (country) => country.length === 5
)
console.log(countriesHaveFiveLetters)



const scores = [
    { name: 'Asabeneh', score: 95 },
    { name: 'Lidiya', score: 98 },
    { name: 'Mathias', score: 80 },
    { name: 'Elias', score: 50 },
    { name: 'Martha', score: 85 },
    { name: 'John', score: 100 },
]
const scoresGreaterEighty = scores.filter((score) => score.score > 80)
console.log(scoresGreaterEighty)


const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const areAllStr = names.every((name) => typeof name === 'string') // Are all strings?
console.log(areAllStr)


const ages = [24, 22, 25, 32, 35, 18]
const age = ages.find((age) => age < 20)
console.log(age)



const score = scores.find((user) => user.score > 80)
console.log(score)
const result = names.findIndex((name) => name.length > 7)
console.log(result)

console.log(ages.sort())
console.log(ages)


const wokge = [9.81, 3.14, 100, 37]
console.log(wokge.sort())

wokge.sort(function(a, b) {
    return a - b
})
console.log(wokge)

wokge.sort(function (a, b) {
    return b - a
})
console.log(wokge)


const nomads = [
    { name: 'Asabeneh', age: 150 },
    { name: 'Brook', age: 50 },
    { name: 'Eyob', age: 100 },
    { name: 'Elias', age: 22 },
]
nomads.sort((a, b) => {
    if (a.name < b.name) return -1
    if (a.name > b.name) return 1
    return 0
})
console.log(nomads) // sorted ascending