const { default: axios } = require("axios");

const funcoes = {
    somaDoisValores: (v1 ,v2) => v1 + v2,
    sempreNulo: () => null,
    codigoValido: function(cod){
        if(cod >= 100 && cod <= 999)
            return true;
        else
            return false;
    },
    inverteString: str => str.split('').reverse().join(''),
    buscaUsuario1: () => axios.get('https://jsonplaceholder.typicode.com/users/1')
        .then(res => res.data)
        .catch(err => 'Erro ao recuperar usuario')
}

module.exports = funcoes;