//Fatorial de N com e sem recursão.

function fatorial(n){
    if(n < 0)
        return;
    for (let i = n; i > 1; i--) {
        n = n * (i-1);
    }
    console.log('Resultado: '+n);
}

function fatorialRecursivo(n){
    if(n === 1 || n === 0)
        return 1;

    return n * fatorialRecursivo(n-1);  
    
}

fatorial(5)
console.log('Resultado com recursão: '+fatorialRecursivo(5));