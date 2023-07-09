const trybeBankCustomers = ['Oliva', 'Nat', 'Gus'];

function addCustomers(customers, newCustomers) {
  for (let index = 0; index < newCustomers.length; index += 1) {
    if (typeof newCustomers[index] === 'string') {
      customers.push(newCustomers[index]);
      console.log(customers);
    } else {
      return 'Todos os valores precisam ser strings.';
    }
  }
return trybeBankCustomers;
};

console.log(addCustomers(trybeBankCustomers, ['Carolina', 'Adamastor'])); // [ 'Oliva', 'Nat', 'Gus', 'Carolina', 'Adamastor' ]
console.log(addCustomers(trybeBankCustomers, ['Miranda', 78])); // Todos os valores precisam ser strings.
console.log(addCustomers('Julio', 'Steffany'));