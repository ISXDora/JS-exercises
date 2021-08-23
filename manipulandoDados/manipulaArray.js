let techs = ['html','css','js']

//Adicionar item ao fim do array 

console.log(techs.push('node.js'))
console.log(techs)


//Adicionar item no inicio do array 

console.log(techs.unshift("sql"))
console.log(techs)

//remover dp final do array 

//techs.pop()
console.log(techs)

//removendo do inicio do array 

//techs.shift()
console.log(techs)

//pegar somente alguns elementos do array 
//console.log(techs.splice()) // Recebe as posições em 2 argumentos.. o primeiro é onde inicia, o segundo é onde termina.

//Removendo 1 ou mais posições do array

techs.splice(1,1)
console.log(techs)


let index = techs.indexOf('css')

console.log(index)

techs.splice(index, 1)
console.log(techs)