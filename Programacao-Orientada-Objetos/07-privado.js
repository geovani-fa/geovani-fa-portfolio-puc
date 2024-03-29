// Aula 02 - Atributos e métodos privados, via variáveis locais.
function PessoaPrivate(){
    let nome = ['Fulano','De Tal'];
    let anoNascimento = 1990;
    let profissao = 'Estudante';
    this.calculaIdade = function(){
        return new Date().getFullYear() - anoNascimento;
    }
}
const pessoa = new PessoaPrivate();
console.log(pessoa);

//Identificadores pré-fixados
class Pessoa{
    constructor(nome,anoNascimento,profissao){
        this.nome = nome;
        this.anoNascimento = anoNascimento;
        this.profissao = profissao;
    }
    calculaIdade(){
        return new Date().getFullYear() - this.anoNascimento;
    };
    saudar(){
        return console.log('Olá');
    };
}

class Estudante extends Pessoa{
    #matricula;
    notas = [];
    constructor(nome, anoNascimento, matricula){
        super(nome, anoNascimento, 'Estudante');
        this.#matricula = matricula;
        //this.#saudar();  --> para privar o método
    };
    //#saudar()
    saudar(){
        super.saudar();
        console.log("colegas!");
    };
    //Métodos de atribuição
    getMatricula(){
        return "Sua matricula é: " + this.#matricula;
    };
    setMatricula(valor){
        this.#matricula = valor;
    };
}

const estudante = new Estudante("Ciclano",2000,10001);
console.log(estudante);
console.log(estudante.getMatricula());
estudante.setMatricula(10002);
console.log(estudante.getMatricula());

//Associação
class Nota{
    #grau
    constructor(disciplina, grau){
        this.disciplina = disciplina;
        this.#grau = grau;
    }
    getGrau(){
        return this.#grau;
    };
    setGrau(valor){
        if(valor < 0 || valor > 10){
            throw new Error();
        }
        this.#grau = valor;
    };
}

const novoEstudante = new Estudante("Beltrano", 2001, 10003);
novoEstudante.notas = [new Nota ("OO",10), new Nota ("Fundamentos",9), new Nota ("Cálculo",8)];
console.log(novoEstudante.notas);
//Para acessar o grau, usa-se o get()
console.log(novoEstudante.notas[0].getGrau());