console.log(countries)

let arr = Array()
let ar = []

arr = countries
ar = arr
console.log(arr.length)

const arra = [
    'Asabeneh',
    250,
    true,
    { country: 'Finland', city: 'Helsinki' },
    { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] }
]
console.log(arra[3].city)

let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
const companies = companiesString.split(',')
console.log(companies)

const eightEmptyValues = Array(8) 
console.log(eightEmptyValues)
arr = eightEmptyValues.fill(0)
console.log(arr)
arr = arr.concat(eightEmptyValues)
console.log(arr)

arr.unshift(9999)
console.log(arr)
arr.reverse()
console.log(arr)
arr.shift()
console.log(arr)
