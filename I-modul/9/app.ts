enum Website {
    Youtube = 'YouTube',
    FaceBook = 'FaceBook',
    Instagram = 'Instagram',
    Twitter = 'Twitter',
}

let person: {
    id: number
    name: string
    isMarried: boolean
    username: string
    email: string[]
    address: {
        street: string
        suite: string
        city: string
        zipcode: string | number
        geo: [number, number]
    }
    phone: number
    website: Website
    company: {
        name: string
        catchPhrase: string
        bs: string
    }
} = {
    "id": 1,
    "name": "Leanne Graham",
    "isMarried": false,
    "username": "Bret",
    "email": ['Sincere@april.biz', 'info@sammi.ac'],
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": [-37.3159, 81.1496]
    },
    "phone": 1770736803156442,
    "website": Website.FaceBook,
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
}