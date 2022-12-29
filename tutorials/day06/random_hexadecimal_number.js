let sss = '0123456789abcdef'
let num = []

for(let i = 0; i <= 6; i++){
    if(i == 0){
        num.push('#')
        continue
    }
    num.push(sss[Math.floor(Math.random() * sss.length + 1)])
}
console.log(num.join(''))