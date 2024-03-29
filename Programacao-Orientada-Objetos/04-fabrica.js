//Aula 02 - Criando objetos via fábricas (funções que craim e retornam objetos)
function criaPessoa(){
    return {
        nome: ['Fulano','De Tal'],
        anoNascimento: 1990,
        profissao: 'Estudante',
        calculaIdade: function(){
            return new Date().getFullYear() - this.anoNascimento;
        }
    }
}

const pessoa = criaPessoa();
console.log(pessoa);

//Passando atributos por parametro para criação
function criaPessoaParam(nome, anoNascimento, profissao){
    return {
        nome,
        anoNascimento,
        profissao,
        calculaIdade: function(){
            return new Date().getFullYear() - this.anoNascimento;
        }
    }
}

const pessoa1 = criaPessoaParam('Ciclano',1980,'Professor');
console.log(pessoa1);