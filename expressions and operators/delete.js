const person = {
    name: "Isadora",
    age:29,
    adress: {
        street: "Rua Zé Pellim",
        number: 644
    }
}

delete person.adress.street

console.log(person)

delete person.adress

console.log(person)

//operação, operador unário.