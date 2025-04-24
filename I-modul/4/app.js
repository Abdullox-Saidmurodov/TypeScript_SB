"use strict";
const person = {
    firstName: 'Samar', // required
    lastName: 'Badriddinov', // required
    city: 'Tashkent',
    skills: {
        programming: 'JavaScript',
        design: 'FIgma',
    },
};
function getName(data) {
    return `Hello ${data.firstName} ${data.lastName}}`;
}
const person1 = getName(person);
console.log(person1);
