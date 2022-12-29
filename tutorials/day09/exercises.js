const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]

countries.forEach(country => console.log(country))
console.log("\n")
names.forEach(name => console.log(name))
console.log("\n")
numbers.forEach(num => console.log(num))
console.log("\n")

let countriesUpper = countries.map(country => country.toUpperCase())
console.log(countriesUpper)
let countriesSize = countries.map(country => country.length)
console.log(countriesSize)
let numsSquared = numbers.map(num => num ** 2)
console.log(numsSquared)
let namesUpper = names.map(name => name.length)
console.log(namesUpper)
console.log("\n")

let countriesWithoutLand = countries.filter((country) =>
    !country.toUpperCase().includes("LAND")
)
console.log(countriesWithoutLand)

let countriesStartingWithD = countries.filter((country) =>
    country.toUpperCase().startsWith('D')
)
console.log(countriesStartingWithD)

let aaaaaaaaaaaaaa = (arr) => {
    let sum = 0
    arr.map(product => sum += parseInt(product.price))
    return sum
}
console.log(aaaaaaaaaaaaaa(products))