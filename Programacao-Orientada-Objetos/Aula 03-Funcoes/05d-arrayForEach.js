array = [4,5,6,7,8,9,10]

array.forEach((nro) => console.log(nro+" -> "+(nro%2==0?"par":"ímpar")))

nroDivisiores = (item) => {
    let nDiv = 0;
    for (let divisor = 0; divisor <= item; divisor++) {
        if((item%divisor) == 0)
            nDiv++;
    }
    return nDiv;
}

array.forEach((nro) => console.log(nro+`-> nDivisores de 1 até ${nro} =`+ nroDivisiores(nro)))