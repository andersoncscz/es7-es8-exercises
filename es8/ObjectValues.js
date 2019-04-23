/*
    ES8 - Object.values(): returns only the properties values: 
*/
const person = {
    name: 'Anderson',
    lastName: 'Cruz',
    age: 29
}

//It retuns: [ 'Anderson', 'Cruz', 29 ]
console.log(Object.values(person))