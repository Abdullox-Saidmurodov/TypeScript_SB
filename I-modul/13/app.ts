// // // // // interface Person {
// // // // //     firstName: string
// // // // //     lastName: string
// // // // // }

// // // // // interface Person {
// // // // //     age: number
// // // // // }

// // // // // type ID = string | number

// // // // // let persons: Person[] = [
// // // // //     {
// // // // //         firstName: 'John',
// // // // //         lastName: 'Doe',
// // // // //         age: 30,
// // // // //     },
// // // // //     {
// // // // //         firstName: 'Jane',
// // // // //         lastName: 'Doe',
// // // // //         age: 25,
// // // // //     },
// // // // // ]

// // // // // console.log(persons)


// // // // interface Person {
// // // //     firstName: string
// // // //     lastName: string
// // // // }

// // // // interface Employee {
// // // //     company: string
// // // //     role: string
// // // // }

// // // // interface WorkerPerson extends Person, Employee {
// // // //     age: number
// // // // }

// // // // let persons: WorkerPerson[] = [
// // // //     {
// // // //         firstName: 'John',
// // // //         lastName: 'Doe',
// // // //         age: 30,
// // // //         company: 'Google',
// // // //         role: 'Software Engineer',
// // // //     },
// // // //     {
// // // //         firstName: 'Jane',
// // // //         lastName: 'Doe',
// // // //         age: 25,
// // // //         company: 'Facebook',
// // // //         role: 'Software Engineer',
// // // //     },
// // // // ]

// // // // console.log(persons)


// // // // Optional
// // // interface Person {
// // //     firstName: string
// // //     lastName: string
// // //     age?: number
// // // }

// // // let persons: Person[] = [
// // //     {
// // //         firstName: 'John',
// // //         lastName: 'Doe',
// // //         age: 30,
// // //     },
// // //     {
// // //         firstName: 'Jane',
// // //         lastName: 'Doe',
// // //     },
// // // ]

// // // console.log(persons)



// // interface Person {
// //     readonly firstName: string
// //     readonly lastName: string
// //     role: string
// // }

// // let person: Person = {
// //     firstName: 'John',
// //     lastName: 'Doe',
// //     role: 'Admin',
// // }

// // console.log(person)


// interface Person {
//     readonly firstName: string
//     readonly lastName: string
//     role: string

//     logger: (message: string) => void
// }

// type Logger = (message: string) => void

// let person: Person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     role: 'Admin',
//     logger: (message: string) => {
//         console.log(message)
//     }
// }

// person.role = 'User'

// console.log(person.logger('Hello world'))

interface Person {
    [key: string]: string | number
}

const person: Person = {
    name: 'John',
    age: 30,
}

