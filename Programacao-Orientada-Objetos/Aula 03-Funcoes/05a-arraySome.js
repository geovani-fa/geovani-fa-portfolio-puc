//Funções de alta ordem
array = [4,5,6,7,8,9,10]
regraImpar = (item) => item%2 != 0
console.log("Há algum número ímpar? "+ array.some(regraImpar))

regraPrimo = (item) => {
    let nDiv = 0;
    for (let divisor = 0; divisor <= item ; divisor++) {
        if((item%divisor) == 0)
            nDiv++;
    }
    if(nDiv == 2)
        return true
    else
        return false
}
console.log("Há algum número primo? "+array.some(regraPrimo))