// Aula 02 - Classes
class Pessoa{
    constructor(nome,anoNascimento,profissao){
        this.nome = nome;
        this.anoNascimento = anoNascimento;
        this.profissao = profissao;
    }
    calculaIdade(){
        return new Date().getFullYear() - anoNascimento;
    };
    saudar(){
        return console.log('Olá');
    };
};

const pessoa = new Pessoa('Fulano',1990,'Estudante');
console.log(pessoa);

//Herança
class Estudante extends Pessoa{
    constructor(nome,anoNascimento,matricula){
        super(nome,anoNascimento,'Estudante');
        this.matricula = matricula;
    };
    //Polimorfismo
    saudar(){
        super.saudar(); 
        console.log('colega!');
    }
};

const estudante = new Estudante('Ciclano',2000,1001);
console.log(estudante);
//Polimorfismo
estudante.saudar();

class Professor extends Pessoa{
    constructor(nome,anoNascimento,titulacao){
        super(nome,anoNascimento,'Professor');
        this.titulacao = titulacao;
    }
}

const professor = new Professor('Beltrano',1975,'Doutor');
console.log(professor);

//Exemplo de método estático
class ValidaCPF{
    static TAM_CPF = 11;
    static validar(tamanhoCpf){
        if(tamanhoCpf == this.TAM_CPF){
            console.log("CPF válido!");
        }else{
            console.log("CPF inválido!");
        }
    };
};
ValidaCPF.validar("12345678911".length);