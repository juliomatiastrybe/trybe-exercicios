const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    expect(typeof productDetails).toBe('function');

    // Teste se o retorno da função é um array.
    expect(productDetails('Macarrão','Feijão')).toBeInstanceOf(Array);

    // Teste se o array retornado pela função contém dois itens dentro.
    expect(productDetails('Macarrão','Feijão')).toHaveLength(2);

    // Teste se os dois itens dentro do array retornado pela função são objetos.
    const products = productDetails('Macarrão', 'Feijão');
    for (let index = 0; index < products.length; index += 1) {
      expect(typeof products[index]).toBe('object');
    };

    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    const products2 = productDetails('produto1', 'produto2')
    expect(products2[0]).not.toBe(products2[1]);
    expect(products2[1]).not.toBe(products2[0]);

    // Teste se os dois productIds terminam com 123.
    const products3 = productDetails('Xablau', 'Xablinha');
    for (let index = 0; index < products3.length; index += 1) {
      expect(products3[index].details.productId).toMatch(/123/);
    };

  });
});
