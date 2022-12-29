const user = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt: '08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt: '08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt: '08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt: '08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt: '08/01/2020 10:00 AM',
        isLoggedIn: false
    }
];

const products = [
    {
        _id: 'eedfcf',
        name: 'mobile phone',
        description: 'Huawei Honor',
        price: 200,
        ratings: [
            { userId: 'fg12cy', rate: 5 },
            { userId: 'zwf8md', rate: 4.5 }
        ],
        likes: []
    },
    {
        _id: 'aegfal',
        name: 'Laptop',
        description: 'MacPro: System Darwin',
        price: 2500,
        ratings: [],
        likes: ['fg12cy']
    },
    {
        _id: 'hedfcg',
        name: 'TV',
        description: 'Smart TV:Procaster',
        price: 400,
        ratings: [{ userId: 'fg12cy', rate: 5 }],
        likes: ['fg12cy']
    }
]

/*
const personAccount = {
    firstName,
    lastName,
    incomes,
    expenses,
    totalIncome: function(){
        let sum = 0
        for(let accIncome of personAccount[incomes])
            sum += accIncome
        return sum
    },
    totalExpense: function () {
        let sum = 0
        for (let accIncome of personAccount[expenses])
            sum += accIncome
        return sum
    }, 
    accountInfo: function () {

    }, 
    addIncome: function () {

    }, 
    addExpense: function () {

    }, 
    accountBalance: function () {

    }
}
*/

let signIn = (_id, _email) => {
    for(let i = 0; i < user.length; i++) {
        if ((Object.values(user[i]))[0] == _id){
            return "Account with this ID already exists."
        }
    }
    for (let i = 0; i < user.length; i++) {
        if ((Object.values(user[i]))[2] == _email) {
            return "An account is already registered with this email."
        }
    }
}

let rateProduct = (product ,_id, rating) => {
    for(let i = 0; i < products.length; i++){
        if ((Object.values(products[i]))[0] === product){
            (Object.values(products[i]))[4].push({userId: _id, rate: rating})
            return `Product '${product}' has been successfully rated.`
        }
    }
}

console.log(signIn("eefamrd", "martha@martha.com"))

console.log(rateProduct('aegfal', 'ghderc', 3))

