//Find an element in array has never been so easy, let's see how it works with includes:
const numbers = [1,2,3,4,5,6,7,8,9];
//Just do it :D
console.log('ES7 - Includes: ', numbers.includes(2))






// ********************************************* Other Methods *********************************************
//Traditional way to find a number in array
function hasNumber(number, numbers) {
    
    for (let i = 0; i < numbers.length; i++) {
        if(numbers[i] === number)
            return true;
    }
    return false;
}
console.log('Old way 1: ', hasNumber(2, numbers))






//Traditional way 2, since we don't have a NaN array and passed a NaN number. Let's see.
function hasNumberIndexOf(number, numbers) {
    return numbers.indexOf(number) != -1;
}
console.log('Old way 2: ', hasNumberIndexOf(2, numbers))
console.log('Old way 2 NaN: ', hasNumberIndexOf(NaN, [NaN])) //It should return true, but returns false.






//Comparing with ES6 using for...of
const hasNumberForOf = (number, numbers) => {
    for (const currentNumber of numbers) {
        if (currentNumber === number)
            return true;
    }
    return false;
}
console.log('ES6 - for...of: ', hasNumberForOf(2, numbers))






//Comparing using some:
//Returns true if exists at least one
const hasNumberSome = (number, numbers) => {
    return numbers.some(currentNumber => currentNumber === number);
}
console.log('ES6 - some(): ', hasNumberSome(2, numbers))






//Comparing using find:
//Returns the element found, according to the argument used
const hasNumberFind = (number, numbers) => {
    return numbers.find(currentNumber => currentNumber === number) ? true : false;
}
console.log('ES6 - find(): ', hasNumberFind(2, numbers))