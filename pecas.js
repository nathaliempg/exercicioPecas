// pesquisa o peso da peça para cadastrar
let pesoPeca = 150
console.log("peso da peça: 150 gr")
if(pesoPeca > 100){    
    console.log("peso maior que 100 gr. Peça pode ser cadastrada.")
    console.log("___________________________________________________________")
} else{
    console.log("peso menor que 100 gr. Peça não pode ser cadastrada.")
    console.log("___________________________________________________________")
}

// pesquisa o número de peças para cadastrar
let numPeca = 10
console.log("número de peças: 10")
if(numPeca < 10){    
    console.log("número de peças menor que 10. Peça pode ser cadastrada.")
    console.log("___________________________________________________________")
} else if(numPeca = 10){
    console.log("número de peças igual a 10. Peça não pode ser cadastrada.")
    console.log("___________________________________________________________")
} else {
    console.log("número de peças maior que 10. Peça não pode ser cadastrada.")
    console.log("___________________________________________________________")
}

//pesquisa comprimento do nome da peça para cadastrar
let nomePeca = "freio de disco"
console.log("comprimento do nome da peça: ", nomePeca.length)
if(nomePeca.length > 3){
    console.log("comprimento do nome da peça é maior que 3 caracteres. Peça pode ser cadastrada.")
    console.log("_____________________________________________________________________________________")
} else if(nomePeca.length = 3){
    console.log("comprimento do nome da peça é igual a 3 caracteres. Peça pode ser cadastrada.")
    console.log("_____________________________________________________________________________________")
} else{
    console.log("comprimento do nome da peça é menor que 3 caracteres. Peça não pode ser cadastrada.")
    console.log("_________________________________________________________________________________")
}