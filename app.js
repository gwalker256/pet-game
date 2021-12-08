class bunny {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    birthday(){
        this.age++
    }
}

let sherlock = new bunny ("Sherlock", 4)
let watson = new bunny ("Watson", 6)
let enola = new bunny ("Enola", 2)
let mycroft = new bunny ("Mycroft", 5)

console.log(sherlock)
console.log(watson)
console.log(enola)
console.log(mycroft)