const express = require('express');
const xml = require('fs').readFileSync('wscalc1.wsdl', 'utf8');
const soap = require('soap');
const app = express();
const PORT = 8001;


var myservice = {
    ws: {
        calc: {
            somar : function(args) {
                var n = 1*args.a + 1*args.b;
                return { sumres : n };
            },

            multiplicar : function(args) {
                var n = args.a * args.b;
                return { mulres : n };
            }
        }
    }
};

app.listen(PORT, function(){
    soap.listen(app, '/wscalc1', myservice, xml, function(){
        console.log('Server initialized' + PORT);
    });
});