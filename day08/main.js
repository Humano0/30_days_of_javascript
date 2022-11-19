a = 'JavaScript'
b = 10

let c = 666

function letsLearnScope() {
    console.log("Start => ", a, b) // JavaScript 10, accessible
    let value = false
    // block scope
    if (true) {
        // we can access from the function and outside the function but 
        // variables declared inside the if will not be accessed outside the if block
        a = 'Python'
        let b = 20
        let c = 30
        let d = 40
        value = !value
        console.log("If block => ", a, b, c, value) // Python 20 30 true
    }
    // we can not access c because c's scope is only the if block
    console.log("ENDIF => ", a, b, value) // JavaScript 10 true
}
letsLearnScope()
