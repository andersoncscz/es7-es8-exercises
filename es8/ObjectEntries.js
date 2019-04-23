/*
    ES8 - Object.entries(): returns an array of arrays, like: 

    [ [ 'name', 'Anderson' ], [ 'lastName', 'Cruz' ], [ 'age', 29 ] ]

    So, we can iterate it.
*/
const person = {
    name: 'Anderson',
    lastName: 'Cruz',
    age: 29
}

console.log(Object.entries(person))
console.log('Object.entries()\n')
console.log('Iterating in each Key - Value: \n')
// a: property, b: value
for (const [a, b] of Object.entries(person)) {
    console.log(`${a}: ${b}`)
}

//Let's see how easy is now if we want to create a map of an object.
const map = new Map(Object.entries(person));
console.log('Map: ', map)

//This case below return an empty array. if we have a Symbol as Key, it's not going to work, it can't enumerable a Symbol.
console.log(Object.entries({[Symbol()]: 123}))