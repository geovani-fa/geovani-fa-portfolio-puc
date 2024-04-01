var a = []
a[0] = Math.random()
a[1] = Math.random()
a[9] = Math.random()
console.log(a.length)
//Primeiro for (in) - mostra somente os valores efetivamente usados no vetor a
console.log(" -for .. in- ")
console.log(" -=-=-=-=- ")
for(let val in a)
    console.log(" ---> "+val)
console.log(" -=-=-=-=- \n")
//Segundo for
console.log(" -for .. of- ")
console.log(" -=-=-=-=- ")
for(let val of a)
    console.log(" ---> "+val)
console.log(" -=-=-=-=- \n")
//Terceiro for
console.log(" -for (;;))- ")
console.log(" -=-=-=-=- ")
for (let i = 0; i < a.length; i++)
    console.log(" -->"+i+": "+a[i])
    
