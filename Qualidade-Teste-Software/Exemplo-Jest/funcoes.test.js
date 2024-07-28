const axios = require("axios");
const funcoes = require('./funcoes');

test('2 + 2 devera ser 4', () => {
    expect( funcoes.somaDoisValores(2,2) )
    .toBe(4);
});

test('Devera ser null', () => {
    expect( funcoes.sempreNulo() )
    .toBeNull();
});

test('Codigo 100 deve ser valido', () => {
    expect( funcoes.codigoValido(100) )
    .toBeTruthy();
});

test('Codigo 101 deve ser valido', () => {
    expect( funcoes.codigoValido(101) )
    .toBeTruthy();
});

test('Codigo -1 deve ser invalido', () => {
    expect( funcoes.codigoValido(-1) )
    .toBeFalsy();
});

//Test first 
test('Deve inverter uma string Java->avaJ', () => {
    expect( funcoes.inverteString('Java') )
    .toEqual('avaJ');
})

const casosInversaoString = [['DANIEL', 'LEINAD'], ['ANA','ANA'],['Jest','tseJ']];
describe('Inversao de Strings', () => {
    test.each(casosInversaoString)(
        'inversao de %p -> %p',
        (original, inversaoEsperada) => {
            const resultado = funcoes.inverteString(original);
            expect(resultado).toEqual(inversaoEsperada);
        }
    )
})

test('[Promise] Deve carregar o primeiro usuario -> Leanne Graham', () => {
    expect.assertions(1); //chamada assync
    return funcoes.buscaUsuario1().then(dados => {
        expect(dados.name).toEqual('Leanne Graham')
    })
});

test('[AsyncAwait] Deve carregar o primeiro usuario -> Leanne Graham', async () => {
    expect.assertions(1); //chamada assync
    const dados = await funcoes.buscaUsuario1();
    expect(dados.name).toEqual('Leanne Graham');
});