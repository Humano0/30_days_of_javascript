function adder(num1, num2){
    return num1 + num2
}

function sum_all_nums(){
    let sum = 0
    for(const element of arguments){
        sum += element
    }
    /*
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    */
    return sum
}

const sum = sumAll = (...args) => {
    let sum = 0
    for(const elements of args)
        sum += elements
    return sum
}

let numsquared = n => n * n
let numtimesnum = (n, m) => {return n * m}

let squaredNum = (function (n) { return n * n } ) (10)

function generateFullName(firstName = 'Asabeneh', lastName = 'Yetayeh') {
    let space = ' '
    let fullName = firstName + space + lastName
    return fullName
}

console.log(adder(15, 25))
console.log(sum_all_nums(5, 2, 3, 5, 10))
console.log(sum(5, 2, 3, 5))
console.log(squaredNum)
console.log(numsquared(2))
console.log(numtimesnum(5, 10))
console.log(generateFullName())
console.log(generateFullName('David', 'Smith'))