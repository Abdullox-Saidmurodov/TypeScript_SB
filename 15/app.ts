// // // // any - istalgan tip
// // // // unknown - noaniq tip

// // function logger(value: unknown) {
// //     if(typeof value === 'string') {
// //         console.log(value.toUpperCase())
// //     } else if(typeof value === 'number') {
// //         console.log(value.toFixed(2))
// //     } else {
// //         console.log('Unknown type')
// //     }
// // }
// // // function logger(value: any) {
// // //     console.log(value.toUpperCase())
// // // }

// // logger('Hello')
// // logger(2.21312)
// // logger(true)


// let value: unknown = 'Hello World'
// let string: string = value as string // = <string>value
// console.log(string.toUpperCase())

let person: unknown = {
    name: 'John',
    age: 30,
}

interface Person {
    name: string
    age: number
}

if(typeof person === 'object') {
    const obj = person as { name: string; age: number }
    console.log(obj.name)
}