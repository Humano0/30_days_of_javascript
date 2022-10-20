let nums = [1, 2, 3]
nums[0] = 10
console.log(nums) // [10, 2, 3]

nums = [1, 2, 3]
let number = [1, 2, 3]
console.log(nums == number) // false

let userOne = {
    name: 'Asabeneh',
    role: 'teaching',
    country: 'Finland'
}
let userTwo = {
    name: 'Asabeneh',
    role: 'teaching',
    country: 'Finland'
}
console.log(userOne == userTwo) // false

let number1 = nums
console.log(nums == number)  // true

userOne = {
    name: 'eneh',
    role: 'teaching',
    country: 'Finland'
}
userTwo = userOne
console.log(userOne == userTwo)  // true