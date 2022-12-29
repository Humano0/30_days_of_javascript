let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$';
let desired_password_length = 25
let password = ""

for(let i = 0; i < desired_password_length; i++){
    let char = Math.floor(Math.random() * str.length + 1)
    password += str[char]
}
console.log(password)