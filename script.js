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


if(Name.substring(0,1) == "R"){
    console.log("o Nome começa com a letra R")
}else{
    console.log("o Nome não começa com a letra R")
}

//Exercicio Bonus, Resposta 5

let lastName = "Oliver" 


if((lastName.length > 6  ) || (lastName.substring(0,1) == "E")){
    console.log("tem mais de 6 letras ou seu nome começa com a letra E")
}else {
    console.log("não tem mais de 6 letras ou seu nome não começa com E")
}