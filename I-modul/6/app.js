"use strict";
// // // const person: [string, number] = ['SamarBadriddinov', 24]
// // // person.push('sammi')
// // // console.log(person)
// // // console.log(person[0])
// // // console.log(person[1])
// // // // console.log(person[2])
// // // Typles | union type
// // // let coordinates: [number, string | number] = [98, 'north']
// // let coordinates: [number, string | number] = [98, 12]
// // console.log('1', coordinates)
// // coordinates = [12, 'easth']
// // console.log('2', coordinates)
// // coordinates = [56, 33]
// // console.log('3', coordinates)
// function getInfo(): [string, number] {
//     return ['Hello', 36]
// }
// const logger = getInfo()
// console.log(logger[0])
// console.log(logger[1])
function getInfo() {
    return ['SamarBadriddinov', 36];
}
const logger = getInfo();
const [fullName, age] = logger;
console.log(fullName, age);
