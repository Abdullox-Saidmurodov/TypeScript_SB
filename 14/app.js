"use strict";
// // // function logger(text: string): void {
// // //     console.log(text)
// // // }
// function calc({ a, b = 2 }: Calc) { // b - optional bol'lganligi uchun, b = 2 default qiymat berib qo'yilgan
//     return data.a + data.b
// }
function calc(data) {
    if (!data.b) {
        return data.a;
    }
    return data.a + data.b;
}
const result = calc({ a: 1 }); // , b: 2
console.log(result);
