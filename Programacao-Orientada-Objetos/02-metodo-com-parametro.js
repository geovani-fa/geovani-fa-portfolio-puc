//Aula 01 - Objeto método com parametro
var pessoa = {
    nome: "Valentina",
    idade: "60",
    saudar: function(nomeColega){
        console.log("Olá "+nomeColega);
    }
};

pessoa.saudar("Joana");