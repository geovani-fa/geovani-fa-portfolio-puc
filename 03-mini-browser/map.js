var novoMapa = new Map();

class HistoryMap{
    // Inserindo regras de negócio da empresa
}
//Acesso dia 11/11/2023 as 23:30
novoMapa.set('11/11/2023 - 23:30',{title: 'Google', url:'https://google.com'});

var resultado = novoMapa;
console.log(resultado);

var novoMapa1 = new Map();

novoMapa1.set('11/11/2023 - 23:30',{title: 'Nome do Site'});
novoMapa1.set('11/11/2023 - 23:31',{title: 'Google'});


// Listando um registro específico, acessando direto no ponto da memória
var resultado1 = novoMapa1.get('11/11/2023 - 23:31');
console.log(resultado1);