//Promises - retornam a promessa de um objeto com o resultado no futuro.
const { resolve } = require("path")

const myFirstPromise = new Promise((resolve, reject) => {setTimeout(() => {resolve("Sucesso!");},200);});

let ifSucceed = (successMessage) => {console.log(`Finalizando! ${successMessage}`)};

myFirstPromise.then(ifSucceed);

console.log("Fim do programa.")