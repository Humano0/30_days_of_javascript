const companies = new Set();
console.log(companies);

const languages = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French',
  ]
console.log(languages)
const setOfLanguages = new Set(languages)
console.log(setOfLanguages)
setOfLanguages.add('swedish')
for(langs of setOfLanguages){
    console.log(langs)
}
for(langs of languages){
    setOfLanguages.delete(langs)
}
console.log(setOfLanguages)
console.log(setOfLanguages.has('english'))
console.log(setOfLanguages.has('swedish'))
setOfLanguages.clear()
console.log(setOfLanguages)
for(langs of languages){
    setOfLanguages.add(langs)
}
console.log(setOfLanguages)

const count = []
const langSet = new Set(languages)

for(const l of langSet){
    const filteredLang = languages.filter((lng) => lng === l)
    console.log(filteredLang)
    count.push({lang: l, count: filteredLang.length})
}
console.log(count)
console.log(count[0].lang.toLowerCase())

const numbers = [5, 2, 3 , 1, 3, 4, 1, 2, 6, 7, 4, 5]
const setOfNums = new Set(numbers)
console.log(setOfNums)

let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]
let c = [...a, ...b]
const B = new Set(b)
const C1 = new Set(c)
const C2 = new Set(a.filter((num) => B.has(num)))
console.log(C1)
console.log(C2)
//console.log(C1.filter((num) => num % 3 == 0))
