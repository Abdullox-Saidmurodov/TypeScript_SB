// // // // // type ID = string | number

// // // // // let userId: ID

// // // // // userId = 1
// // // // // userId = '2daw'

// // // // // let productId: ID

// // // // // productId = 123
// // // // // productId = 'abc'


// // // // type Person = {
// // // //     firsName: string
// // // //     lastName: string
// // // //     age: number
// // // //     skills: string[]
// // // // }
// // // import { Person } from "./app.types"

// // // const user1: Person = {
// // //     firsName: 'John',
// // //     lastName: 'Doe',
// // //     age: 30,
// // //     skills: ['JavaScript', 'TypeSctript', 'React'],
// // // }

// // // const user2: Person = {
// // //     firsName: 'Jane',
// // //     lastName: 'Doe',
// // //     age: 25,
// // //     skills: ['Angular', 'Vue', 'React'],
// // // }

// // // console.log(user1)
// // // console.log(user2)


// // type Logger = (message: string) => string

// // const log: Logger = message => {
// //     return message.toUpperCase()
// // }

// // console.log(log('Hello, world:'))

// type Person = {
//     firstName: string
//     lastName: string
// }

// type Employee = {
//     company: string
//     role: string
// }

// type CompanyWorker = Person & Employee

// let worker1: CompanyWorker = {
//     firstName: 'John',
//     lastName: 'Doe',
//     company: 'Google',
//     role: 'Software Engineer',
// }

// let employee1: Employee = {
//     company: 'Google',
//     role: 'Software Engineer',
// }

// let person1: Person = {
//     firstName: 'John',
//     lastName: 'Doe',
// }


type Person = {
    firstName: string
    lastName: string
}

type PersonList = Person[]

let persons: PersonList = [
    {
        firstName: 'John',
        lastName: 'Doe'
    },
    {
        firstName: 'Jane',
        lastName: 'Doe'
    },
]