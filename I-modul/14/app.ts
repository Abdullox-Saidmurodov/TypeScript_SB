// // // function logger(text: string): void {
// // //     console.log(text)
// // // }

// // // logger('Hellooooooooo')

// // let unusable: void

// // unusable = undefined

// function logger(text: string, callback: (message: string) => void) {
//     console.log('Logged: ' + text)
// }

// logger('Hello', message => {
//     console.log(message)
// })

interface Calc {
    a: number
    b?: number // = b: number | undefined
}

// function calc({ a, b = 2 }: Calc) { // b - optional bol'lganligi uchun, b = 2 default qiymat berib qo'yilgan
//     return data.a + data.b
// }

function calc(data: Calc) {
    if(!data.b) {
        return data.a
    }
    return data.a + data.b
}

const result = calc({ a: 1 }) // , b: 2
console.log(result)