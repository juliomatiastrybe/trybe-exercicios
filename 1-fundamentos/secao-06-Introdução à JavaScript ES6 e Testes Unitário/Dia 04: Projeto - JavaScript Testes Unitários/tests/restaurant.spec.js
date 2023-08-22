const createMenu = require('../src/restaurant');
 
describe('10 - Implemente a função `createMenu`, bem como seus casos de teste', () => {
  it('Verifica se a função `createMenu` tem o comportamento esperado', () => {
    // Escreva todos os testes aqui.
    const menu = createMenu({ food: {}, drinks: {} });

    const passedMenu = { food: {}, drinks: {} };

    const passedMenu2 = { food: { coxinha: 3.90, sanduiche: 9.90 },
    drinks: { agua: 3.90, cerveja: 6.90 } };

    // verifica se a função createMenu() retorna um objeto que possui a chave fetchMenu
    expect(Object.keys(menu)).toContain('fetchMenu');

    // verifica se o valor da chave fetchMenu do objeto retornado pela função createMenu() é uma função
    expect(typeof menu.fetchMenu).toEqual('function');

    // verifica se o objeto retornado pela função createMenu({ food: {}, drinks: {} }).fetchMenu() retorna um objeto cujas chaves são somente food e drinks.
    const keysMenu = Object.keys(menu.fetchMenu());
    expect(keysMenu).toEqual(['food', 'drinks']);
    expect(keysMenu).not.toEqual(['food', 'drinks', 'reserv']);

    // verifica se o menu passado pra função createMenu() é idêntico ao menu recuperado pela função createMenu({ food: {}, drinks: {} }).fetchMenu().
    const recoverMenu = menu.fetchMenu();
    expect(passedMenu).toEqual(recoverMenu);

    // verifica se a propriedade consumption do objeto retornado pela função createMenu({ food: {}, drinks: {} }), após a criação do menu, retorna um array vazio.
    expect(menu.consumption).toEqual([]);

    // verifica se o parâmetro passado do order, caso não conste no objeto passado como parâmetro para createMenu (nem em food ou drinks) retorne "Item indisponível".
    const menu2 = createMenu(passedMenu2);
    expect(menu2.order('mistão')).toBe('Item indisponível');

    // verifica se o parâmetro passado do order, caso não conste no objeto passado como parâmetro para createMenu (nem em food ou drinks) não alterar a chave consumption.
    expect(menu2.consumption).toEqual([]);

    // verifica se caso o valor do parêmtro do order exista no objeto passado como parâmetro para createMenu o item deve ser adicionado ao array consumption.
    menu2.order('sanduiche');
    expect(menu2.consumption).toContain('sanduiche');

    // verifica se, ao adicionar três pedidos em sequência, dentre bebidas e comidas, o array consumption contém os itens pedidos.
    menu2.order('coxinha');
    menu2.order('cerveja');
    expect(menu2.consumption).toContain('sanduiche', 'coxinha', 'cerveja');

    // verifica se a função order aceita que pedidos repetidos sejam acrescidos a consumption.
    menu2.order('coxinha')
    expect(menu2.consumption).toContain('sanduiche', 'coxinha', 'cerveja', 'coxinha');

    // verifica que, ao chamar a função pay() que será uma propriedade do objeto retornado pela função createMenu.
    expect(Object.keys(menu)).toContain('pay');

    // Verifica se propriedade pay tem como valor uma função.
    expect(typeof menu.pay).toEqual('function');

    // verifica se a função pay () retornar a soma dos preços de tudo que foi pedido, conforme registrado em consumption.
    const totalPay = (9.90 + 3.90 + 6.90 + 3.90) * 1.10;
    expect(menu2.pay()).toBe(totalPay);

  });
});
