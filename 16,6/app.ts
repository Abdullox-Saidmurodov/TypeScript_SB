// function throwError(message: string): never {
//     throw new Error(message)
// }

// async function fetchData() {
//     try {
//         // Promise.reject(new Error('Xatolik yuz berdi')).then(() => {
    
//         // })
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         if(!response.ok) {
//             throwError('An error occured')
//         }
//         const data = await response.json()
//         console.log(data)
//     } catch (error) {
//         throwError('Failed to fetch data')
//     }
// }

// fetchData()

function infiniteLoop(): never {
    while (true) {
        console.log('Hello')
    }
}