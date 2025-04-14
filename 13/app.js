"use strict";
// // // // interface Person {
// // // //     firstName: string
// // // //     lastName: string
// // // // }
let person = {
    firstName: 'John',
    lastName: 'Doe',
    role: 'Admin',
    logger: (message) => {
        console.log(message);
    }
};
person.role = 'User';
console.log(person.logger('Hello world'));
