var soap = require('soap');
var url = 'http://www.dneonline.com/calculator.asmx?wsdl';

soap.createClient(url, function (err, client) {
    //console.log('Descrever o WSDL', client.describe().Calculator.CalculatorSoap) 
});

soap.createClient(url, function(err, client) {
    client.Add({intA: 2, intB: 3}, function (err, result) {
        if (err) return console.log(err);
        console.log("SOMA: ", result.AddResult);
    });

    client.Subtract({ intA: 2, intB:3}, function(err, result) {
        if(err) return console.log(err);
        console.log("SUBTRAÇÃO: ", result.SubtractResult);
    });

    client.Multiply({ intA: 2, intB:3}, function(err, result) {
        if(err) return console.log(err);
        console.log("MULTIPLICAÇÃO: ", result.MultiplyResult);
    });

    client.Divide({ intA: 20, intB:2}, function(err, result) {
        if(err) return console.log(err);
        console.log("DIVISÃO: ", result.DivideResult);
    });
});