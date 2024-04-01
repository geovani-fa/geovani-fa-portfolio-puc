import { UmaClasse } from "./02a-umaClasse.mjs";

let umObjetoDeClasse = new UmaClasse("um valor");
let json = JSON.stringify(umObjetoDeClasse);
console.log(json);

//métodos não entran, somente as propriedades e valores