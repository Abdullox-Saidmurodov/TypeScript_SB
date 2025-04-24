"use strict";
class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}
const toyota = new Car('Toyota', new Date('2001-11-01'));
console.log(toyota);
toyota.name = 'Toyota Corolla';
console.log(toyota);
