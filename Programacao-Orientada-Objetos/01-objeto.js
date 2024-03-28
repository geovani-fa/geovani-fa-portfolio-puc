//Aula 01 - Criando objetos
var pessoa = {
    nome: "Valentina",
    idade: "60",
    saudar: function(){
        console.log("Olá");
    }
};
//Acesso via objeto.propriedade ou objeto.["propriedade"]
console.log("1 modo: "+pessoa.nome);
console.log("2 modo: "+pessoa["nome"]);

/**Atribuição: objeto.propriedade = algo 
 *             objeto["propriedade"] = algo
*/
pessoa.idade = 30;
console.log("1 modo: "+pessoa.idade);

pessoa["idade"] = 30;
console.log("2 modo: "+pessoa["idade"]);

//Acessando métodos
pessoa.saudar();