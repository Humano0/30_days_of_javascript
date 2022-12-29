const numbers = [1, 2, 3, 4]
for(let i = 0; i < numbers.length; i++){
    numbers[i] = numbers[i] ** 3
}
console.log(numbers)

let sum = 0
for(let num of numbers){
    sum += num
}
console.log(sum)
