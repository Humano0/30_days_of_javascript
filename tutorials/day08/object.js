const person = {}

const rectangle = {
    length: 20,
    width: 20
}
console.log(rectangle)

const person1 = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    city: 'Helsinki',
    address: {
        street: 'Heitamienkatu 16',
        pobox: 2002,
        city: 'Helsinki'
    },
    skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Node',
        'MongoDB',
        'Python',
        'D3.js'
    ],
    isMarried: true,
    getFullName: function () {
        return `${this.firstName} ${this.lastName}`
    },
    'phone number': '+3584545454545'
}
console.log(person1)
console.log(person1.firstName)
console.log(person1['firstName'])
console.log(person1.getFullName())



person1.nationality = 'Ethiopian'
person1.country = 'Finland'
person1.title = 'teacher'
person1.skills.push('Meteor')
person1.skills.push('SasS')
person1.isMarried = true

person1.getPersonInfo = function () {
    let skillsWithoutLastSkill = this.skills.splice(0, this.skills.length - 1).join(', ')
    let lastSkill = this.skills.splice(this.skills.length - 1)

    let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`
    let fullName = this.getFullName()
    let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`
    return statement
}
console.log(person1)
console.log(person1.getPersonInfo())

const copyPerson = Object.assign({}, person1)
console.log(copyPerson, '\n', copyPerson === person1, '\n', copyPerson.address, '\n', copyPerson.isMarried)

const keys = Object.keys(copyPerson)
console.log(keys)
const address = Object.keys(copyPerson.address)
console.log(address)

const values = Object.values(copyPerson)
console.log(values)

const entries = Object.entries(copyPerson)
console.log(entries)

console.log(copyPerson.hasOwnProperty('name'))
console.log(copyPerson.hasOwnProperty('score'))