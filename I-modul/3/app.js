"use strict";
// function logger() {
//     console.log('Logging...')
// }
//logger()
// function getName(firstName: string, lastName: string) {
//     console.log(`Hello ${firstName} ${lastName}}`)
// }
// getName('Samar', 'Badriddinov')
// // any = xohlagan turdagi ma'lumot qabul qiladi
// function getName(firstName: string, lastName: string):string {
//     return `Hello ${firstName} ${lastName}}`
// }
// const person1 = getName('Samar', 'Badriddinov')
// console.log(person1)
function getName(firstName, lastName) {
    return `Hello ${firstName} ${lastName}}`;
}
const checkAdult = (age) => {
    if (age >= 18) {
        return true;
    }
    else {
        return false;
    }
};
const person1 = getName('Samar', 'Badriddinov');
console.log(person1);
const isAdult = checkAdult(20);
console.log(isAdult);
