"use strict";
// // // // Null - Qiymat yo'q, qo'lda o'zimiz berishimiz kerak
// // // // Underfined - O'zgaruvchiga qiymat berilmagan
// // // let x
// // // console.log(x)
// // let x: null = null
// // console.log(x)
// function logger(msg: string | null) {
//     if(msg !== null) {
//         console.log(msg.toUpperCase())
//     } else {
//         console.log('No message provided')
//     }
// }
// logger('Hello, World!')
// logger(null)
// let username: string | null = null
let username;
// Nullish coalescing operator
let showUsername = username !== null && username !== void 0 ? username : 'Guest';
console.log(showUsername);
