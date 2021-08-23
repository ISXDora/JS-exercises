function Person(name){
    this.name = name
    this.walk = function(){
        return this.name + " está andando"
    }
}

const isadora = new Person("Isadora")
console.log(isadora.walk())