import { UmaClasse } from "./02a-umaClasse.mjs";

let umaClasse = new UmaClasse("Primeiro atributo")

let {capturaPrimeiroAtributo: umAtributo, outroAtributo} = umaClasse;

console.log("Um Atributo: "+umAtributo) //resultado é o método, pois é privado
console.log("Outro Atributo: "+ outroAtributo)