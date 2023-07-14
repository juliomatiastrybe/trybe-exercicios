const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (fullOrder) => {
  // Adicione abaixo as informações necessárias.
  let deliveryName = fullOrder.order.delivery.deliveryPerson
  let nameClient = fullOrder.name;
  let phoneNumber = fullOrder.phoneNumber;
  let street = fullOrder.address.street;
  let number = fullOrder.address.number;
  let apartment = fullOrder.address.apartment;
  // 1-Complete a função customerInfo() para que seu retorno seja: 'Olá, Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, Rua das Flores, Número: 389, AP: 701.'.
  console.log(`Olá, ${deliveryName}, entrega para: ${nameClient}, Telefone: ${phoneNumber}, ${street}, Número: ${number}, AP: ${apartment}.`);
};

console.log(customerInfo(order));

const orderModifier = (fullOrder) => {
  // Adicione abaixo as informações necessárias.
  fullOrder.name = 'Luiz Silva' // alterando nome do cliente. de 'Rafael Andrade' p/.
  let nameClient = fullOrder.name;
  fullOrder.payment.total = 50; // alterando o valor dentro do objeto payment.
  const pizzas = Object.keys(fullOrder.order.pizza).join(', ');
  const drinks = fullOrder.order.drinks.coke.type;
  let payment = fullOrder.payment.total.toFixed(2);
  console.log(payment);
  console.log(nameClient);
  console.log(pizzas);
  console.log(`Olá, ${nameClient}, o valor total de seu pedido de ${pizzas} e ${drinks} é R$ ${payment}.`);
}

console.log(orderModifier(order));