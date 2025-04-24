// enum Status {
//     SUCCESS,
//     ERROR,
// }

// function getStatus(status: Status): 'success' | 'error' {
//     if(status === Status.SUCCESS) {
//         return 'success'
//     }
//     return 'error'
// }

// console.log(getStatus(Status.SUCCESS))
// console.log(getStatus(Status.ERROR))


type Status = 'success' | 'error'

function getStatus(status: Status): Status {
    if(status === 'success') {
        return 'success'
    }
    return 'error'
}

console.log(getStatus('success'))
console.log(getStatus('error'))

// Literal type - turli turdagi qiymatlarni qabul qilishi mumkin
// Union type - faqat aniq belgilangan qiymatlarni qabul qilishi mumkin