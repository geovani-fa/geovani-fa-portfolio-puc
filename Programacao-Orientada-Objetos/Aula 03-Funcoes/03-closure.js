//Memorização - Closure
function somaValores(x){
    return function(y){// funcao anonima
        return x + y;
    };
}
// var soma5 = recebe o comportamento da função atribuida
var soma5 = somaValores(5);
console.log(soma5(2));