//Aula 02 - Criação de objetos via construtores
function Pessoa(){
    this.nome = ['Fulano','De Tal'],
    this.anoNascimento = 1990,
    this.profissao = 'Estudante',
    this.calculaIdade = function(){
        return new Date().getFullYear() - this.anoNascimento;
    }
}
const pessoa = new Pessoa();
console.log(pessoa);

//Com parametros:
function PessoaParam(nome, anoNascimento, profissao){
    this.nome = nome,
    this.anoNascimento = anoNascimento,
    this.profissao = profissao,
    this.calculaIdade = function(){
        return new Date().getFullYear() - this.anoNascimento;
    }
}
const pessoa1 = new PessoaParam(['Ciclano','De Tal'],1980,'Professor');
console.log(pessoa1);

//Construtor Object()
const pessoa2 = new Object();

pessoa2.nome = ['Beltrano','De Tal'];
pessoa2.anoNascimento = 2000;
pessoa2.profissao = 'Estudante';
pessoa2.calculaIdade = function(){
    return new Date().getFullYear() - this.anoNascimento;
}

console.log(pessoa2);
//Todo objeto em Javascript possui o atributo constructor
console.log(pessoa2.constructor);