"use strict";
// // class Person {
// //     name!: string
// //     constructor(name: string) {
// //         this.name = name
// //     }
// //     greeting() {
// //         console.log(`Hello, I'm a ${this.name}`)
// //     }
// // }
// // const user1 = new Person('Samar')
// // user1.greeting()
// // const user2 = new Person('John')
// // user2.greeting()
// class Person {
//     name!: string
//     constructor(name: string) {
//         this.name = name
//     }
//     greeting(age: number): string {
//         return `Hello ${this.name}, your age is ${age} `
//     }
// }
// const user1 = new Person('Samar')
// const data = user1.greeting(24)
// console.log(data)
// const user2 = new Person('John')
// console.log(user2.greeting(30))
var Provider;
(function (Provider) {
    Provider[Provider["Payme"] = 0] = "Payme";
    Provider[Provider["Click"] = 1] = "Click";
    Provider[Provider["Uzum"] = 2] = "Uzum";
})(Provider || (Provider = {}));
var Status;
(function (Status) {
    Status[Status["Pending"] = 0] = "Pending";
    Status[Status["Approved"] = 1] = "Approved";
    Status[Status["Rejected"] = 2] = "Rejected";
})(Status || (Status = {}));
class Payment {
    constructor(id) {
        this.id = id;
        this.status = Status.Pending;
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
    getLifeTime() {
        return (new Date().getTime() - this.createdAt.getTime());
    }
    rejectPayment() {
        if (this.status === Status.Approved) {
            throw new Error('Payment is already approved');
        }
        this.status = Status.Rejected;
        this.updatedAt = new Date();
    }
}
const payme = new Payment(Provider.Payme);
setTimeout(() => {
    payme.rejectPayment();
    console.log(payme);
    const duration = payme.getLifeTime();
    console.log(duration);
    console.log(payme);
}, 1000);
