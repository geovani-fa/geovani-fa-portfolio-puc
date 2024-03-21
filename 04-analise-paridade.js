/* 
Aplicacao dos conceitos iniciais apresentados na aula
let, for if/else
*/
function analisaParidade(n){
    for (let i = 0; i <= n; i++) {
        if(i%2==0)
            console.log(i+': É PAR!');
        else
            console.log(i+': É ÍMPAR!')
    }
}

analisaParidade(10);