function potencia(base, expoente=2){
    let result = 1;
    for (let cont = 0; cont < expoente; cont++) {
        result *= base;
    }
    return result;
}
console.log(potencia());
console.log(potencia(4));
console.log(potencia(2,6));
console.log(potencia(2,6,18)); //Terceiro parametro é ignorado