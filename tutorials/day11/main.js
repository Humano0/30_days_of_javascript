const numbers = ['allah', 2, 3]
let [numOne, numTwo, numThree] = numbers
console.log(numOne, numTwo, numThree)

const fullstack = [
    ['HTML', 'CSS', 'Javascript'],
    ['Node', 'MongoDB', 'Express']
]
const [frontend, backend] = fullstack
console.log(frontend)
console.log(backend)

const[, secondFrontend,] = frontend
const[, , thirdBackend] = backend
console.log(secondFrontend)
console.log(thirdBackend)

const names = [undefined, 'Brook', 'David']
let [
  firstPerson = '-------',
  secondPerson,
  thirdPerson,
  fourthPerson = '-------'
] = names
console.log(firstPerson)
console.log(secondPerson, thirdPerson)
console.log(fourthPerson)

let [
    firstShit = 'lol',
    ...rest
] = names
console.log(firstShit)
console.log(rest)

const countries = [['Finland', 'Helsinki'],
                   ['Sweden', 'Stockholm'],
                   ['Norway', 'Oslo']]
for(const [country, city] of countries) {
    console.log(country, city)
}
/*
for(const [country, city, lol] of countries) {
    console.log(country, city)
}
*/
const rectangle = {
    width: 20,
    height: 10,
    area: 200
  }
let{width: w, height:h, area:a, perimeter:p = 60} = rectangle
console.log(w, h, a, p)

const calculateArea = rectangle => {
    return rectangle.width * rectangle.height
}
const calculateAreaDestructing = ({width, height}) => {
    return width * height
}
console.log(calculateArea(rectangle))
console.log(calculateAreaDestructing(rectangle))



const todoList = [
    {
      task:'Prepare JS Test',
      time:'4/1/2020 8:30',
      completed:true
    },
    {
      task:'Give JS Test',
      time:'4/1/2020 10:00',
      completed:false
    },
    {
      task:'Assess Test Result',
      time:'4/1/2020 1:00',
      completed:false
    }
]

for (const {task, time, completed} of todoList){
    console.log(task, time, completed)
}

const evens = [0, 2, 4, 6, 8]
const odds = [1, 3, 5, 7, 9]
const wholeNumbers = new Set([...odds, ...evens])
console.log(wholeNumbers)

const user = {
    name:'Asabeneh',
    title:'Programmer',
    country:'Finland',
    city:'Helsinki'
}
const copiedUser = {...user, title:'lol'}
console.log(copiedUser)

const sumAllNums = (...args) => {
  let sum = 0
  for(num of args){
    sum += num
  }
  return sum
}
console.log(sumAllNums(1, 2, 3, 1))