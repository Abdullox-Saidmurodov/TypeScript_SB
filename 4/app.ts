function getName(firstName: string, lastName: string):string {
    return `Hello ${firstName} ${lastName}}`
}

const person1 = getName('Samar', 'Badriddinov')
console.log(person1)

const person = {
    firstName: 'Samar',
    lastName: 'Badriddinov',
    city: 'Tashkent',
}