// // // // let id: string | number

// // // // id = 10
// // // // id = '12jknv3432'

// // // function printId(id: string | number): void {
// // //     console.log(`The ID is ${id}`)
// // // }

// // // printId(101)
// // // printId('dsa31')

// // // Type narrowing - Turni tekshirish
// // function getVal(value: string | number): string | number {
// //     if(typeof value === 'string') {
// //         return value.toUpperCase()
// //     } else if(typeof value === 'number') {
// //         return value.toFixed(2)
// //     }
// //     return `Unknown type: ${value}`
// // }

// // console.log(getVal('hello'))
// // console.log(getVal(123.456))

// function logError(error: string | string[]) {
//     if(Array.isArray(error)) {
//         error.forEach(e => console.error(e));
//     } else {
//         console.error(error)
//     }
// }

// logError('This is an error')
// logError(['Error 1', 'Error 2'])

function logError(error: { message: string } | { error: string }) {
    if('message' in error) {
        console.log('Message', error.message)
    } else {
        console.log('Error', error.error)
    }
}

logError({ message: 'Hello' })
logError({ error: 'Hello' })