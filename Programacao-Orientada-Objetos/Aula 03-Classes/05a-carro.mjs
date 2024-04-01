//Exemplo - Carro
export class Carro{
    #_tanque
    #_capacidadeTanque
    constructor(valor){
        this.#_tanque = 0;
        this.#_capacidadeTanque = valor;
    }
    get tanque(){
        return this.#_tanque;
    }
    get capacidade(){
        return this.#_capacidadeTanque;
    }
    set tanque(qtde){
        if(qtde >= 0)
            if(qtde+this.#_tanque > this.#_capacidadeTanque)
                this.#_tanque = this.#_capacidadeTanque;
            else
                this.#_tanque += qtde;
    }
}