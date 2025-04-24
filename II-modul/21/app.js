"use strict";
// class Car {
//     name: string
//     year: Date
//     isCar: Boolean
//     constructor(name: string = 'Unknown', year: Date = new Date()) {
//         this.name = name
//         this.year = year
//         this.isCar = true
//     }
// }
// const toyota = new Car('Toyota', new Date('2001-11-01'))
// console.log(toyota)
// toyota.name = 'Toyota Corolla'
// console.log(toyota)
// // const chevrolet = new Car('Chevrolet', new Date('2005-11-01'))
// const chevrolet = new Car()
// console.log(chevrolet)
// chevrolet.name = 'Chevrolet'
// chevrolet.year = new Date('2005-01-01')
// console.log(chevrolet)
class Car {
    constructor(nameOrData, year) {
        if (typeof nameOrData === 'string') {
            this.name = nameOrData;
            this.year = year;
        }
        else if (typeof nameOrData === 'object') {
            this.name = nameOrData.name;
            this.year = nameOrData.year;
        }
    }
}
const toyota = new Car('Toyota', new Date('2001-11-01'));
console.log(toyota);
const chevrolet = new Car({
    name: 'Chevrolet',
    year: new Date('2001-11-01'),
});
console.log(chevrolet);
