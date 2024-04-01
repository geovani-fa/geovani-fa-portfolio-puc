import { CarroComPlaca } from "./06a-carroComPlaca.mjs";

export class Locadora{
    #_carros
    constructor(){
        this.#_carros = []
    }
    adicionaCarro(umCarro){
        this.#_carros.push(umCarro);
        console.log(this.#_carros.length)
    }
    consultaCarros(){
        this.#_carros.forEach((carro) => console.log("Carro placa ("+carro.placa+"); tq:"+carro.tanque))
    }
    abasteceCarro(i, qtde){
        if(i>=0 && i<this.#_carros.length)
            this.#_carros[i].tanque=qtde;
    }
}