const trybeBankCustomers = ['Oliva', 'Nat', 'Gus'];
const pirilanposCustomers = ['Noel', 'Carol', 'Angelo', 'Kissyla']
//chama a função e mostra o array por ela com msg de saudação.
// function greetCustomer(customer) {
//   return `Olá, ${customer}. Essa é sua conta do TrybeBank.`;
// };

// console.log(greetCustomer(trybeBankCustomers)); // Olá, Oliva,Nat,Gus. Essa é sua conta do TrybeBank.

// para motrar de forma individual

function greetCustomer(customer) {
  for (let index = 0; index < customer.length; index += 1) {
    console.log(`Olá, ${customer[index]}. Essa é sua conta do TrybeBank.`);
  }
};

greetCustomer(trybeBankCustomers);


//função para pesquisar se tem se o nome requerido tem dentro do array.

function findElement(array, element){
  return array.incluides(element);
}
console.log(findElement(trybeBankCustomers, 'Guss'));
console.log(findElement(pirilanposCustomers, 'Carol'));