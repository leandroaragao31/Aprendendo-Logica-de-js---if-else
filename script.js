//Resposta 1
let age = 19

if(age > 18){
    console.log("Você é maior de idade,  pode passar")
}

//Resposta 2
let isHuman = true

if((age >18) && (isHuman)){
    console.log(true)
}

//Resposta 3

let month = "Julho"

if((month === "Janeiro" ) || (month === "Dezembro")){
    console.log("Você faz Aniversário em Janeiro ou Dezembro")
}else{
    console.log("Você não faz Aniversário em Janeiro ou Dezembro")
}

//Exercicio bonus, Resposta 4

let Name = "Reinaldo"
browserType = [0]

if(browserType.indexOf("R") ==  -1){
    console.log("Nome começa com a Letra R")
}else {
    console.log("Não começa com a Letra R")
}

//Exercicio Bonus, Resposta 5

let lastName = "Oliveira" 
browsertype =[0]

if((lastName.length > 6  ) || (browsertype.indexOF("E") == -1)){
    console.log("tem mais de 6 letras ou seu nome começa com a letra E")
}else {
    console.log("não tem mais de 6 letras ou seu nome não começa com E")
}