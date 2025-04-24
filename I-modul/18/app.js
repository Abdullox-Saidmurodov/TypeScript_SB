"use strict";
// // // // // Type Casting (Type Assertion) (Turi bilan ishlash)
// // // // let message: unknown = 'Hello World'
// // // // // Angle bracket syntax
// // // // let strLength1: number = (<string>message).length
// // // // console.log(strLength1)
// // // // // as syntax
// // // // let strLength2: number = (message as string).length
// // // // console.log(strLength2)
// // // // // Type guards (Turi bilan tekshirish)
// // // // function(message: string | number) {
// // // //     if(typeof message === 'string') {
// // // //         return message.toUpperCase()
// // // //     } else {
// // // //         return message
// // // //     }
// // // // }
// // // class Dog {
// // //     bark() {
// // //         console.log('Woof')
// // //     }
// // // }
// // // class Cat {
// // //     meow() {
// // //         console.log('Meow')
// // //     }
// // // }
// // // function makeSound(animal: Dog | Cat) {
// // //     if(animal instanceof Dog) {
// // //         animal.bark()
// // //     } else {
// // //         animal.meow()
// // //     }
// // // }
// // // makeSound(new Dog())
// // // makeSound(new Cat())
// // type Car = { speed: number }
// // type Plane = { altitude: number }
// // function getInfo(vehicle: Car | Plane) {
// //     if('speed' in vehicle) {
// //         console.log(`Speed: ${vehicle.speed} km/h`)
// //     } else {
// //         console.log(`Altitude: ${vehicle.altitude} meters`)
// //     }
// // }
// // getInfo({ speed: 100 })
// // getInfo({ altitude: 10000 })
// // Asserts (tasdiqlash)
// // Type assertion
// let value: unknown = 'Hello world'
// let length = (value as string).length
function throwError(message) {
    throw new Error(message);
}
function isNumber(value) {
    if (typeof value !== 'number') {
        throwError('Value is not a number');
    }
}
const age = '20';
isNumber(age);
console.log(age + 10);
