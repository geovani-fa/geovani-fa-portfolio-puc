//Aula 01 - Primeira forma: criando objeto de forma literal
var Pessoa = {
    nome: ['Fulano', 'de Tal'],
    anoDeNascimento: 1990,
    profissao: 'Estudante',
    calculaIdade: function() {
        return new Date().getFullYear() - this.anoDeNascimento;
    }
}
//Conceito - Encapsulamento
const empregado = {
    salarioFixo: 5000,
    valorHorasExtras: 100,
    horasExtras: 20,
    calculaSalario: function() {
        return this.salarioFixo + (this.horasExtras * this.valorHorasExtras);
    }
}

console.log(empregado.calculaSalario());