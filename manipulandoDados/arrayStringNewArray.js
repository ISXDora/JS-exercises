let phrase = "Eu quero viver o amor!"
//Remove a string desejada nesse caso, será o espaço em branco.
let myArray = phrase.split(" ")
//O método .join transforma um array em string e usa como argumento um separador que pode ser definido entre aspas.
//Caso seja passado sem argumentos ele insere uma vírgula para cada item do array.
let newPhrase = myArray.join("|")


console.log(phrase) // ---> Frase inteira ainda
//Cada texto ficará separado pelo item removido, então cada palavra será uma posição do array com o split.
console.log(myArray)
console.log(newPhrase) //Após inserção de novo caracter através do .join






//O método .join já serve para inserir.