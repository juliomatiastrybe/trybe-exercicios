// const trybeBankCustomers = ['Oliva', 'Nat', 'Gus'];

// function addCustomers(customers, newCustomers) {
//   for (let index = 0; index < newCustomers.length; index += 1) {
//     if (typeof newCustomers[index] === 'string') {
//       customers.push(newCustomers[index]);
//       console.log(customers);
//     } else {
//       return 'Todos os valores precisam ser strings.';
//     }
//   }
// return trybeBankCustomers;
// };

// console.log(addCustomers(trybeBankCustomers, ['Carolina', 'Adamastor'])); // [ 'Oliva', 'Nat', 'Gus', 'Carolina', 'Adamastor' ]
// console.log(addCustomers(trybeBankCustomers, ['Miranda', 78])); // Todos os valores precisam ser strings.
// console.log(addCustomers('Julio', 'Steffany'));

// const playlist = []

// function addMusics(artistName, musicName, musicTime){
//   let playlistObject = {artist:artistName, music:musicName, time:musicTime}
//     playlist.push(playlistObject);
//   return playlist;
// }
// const menu = require('./mcDonalds');

// const moreExpensive = (data, category) => {
//   let objectHighestPrice;
//   let highestPrice = 0;
//   // if (data.hasOwnProperty(category)) {
//   //   const categoryData = data[category]
//   for (let index = 0; index < data[category].length; index += 1) {
//     const object = data[category][index];
//     if (object.price > highestPrice) {
//       highestPrice = object.price;
//       objectHighestPrice = object;
//     }
//   }
//   if (objectHighestPrice) {
//     return `O produto mais caro é: ${objectHighestPrice.name}, que custa: R$${objectHighestPrice.price.toFixed(2)}.`;
//   }
// };
// console.log(moreExpensive(menu, 'sandwiches'));

// const player = {
//   name: 'Marta',
//   lastName: 'Silva',
//   age: 34,
//   medals: { golden: 2, silver: 3 },
//   bestInTheWord: [2006, 2007, 2008, 2009, 2010, 2018],
// }
// const playerName = () => { 
//   const achievements = `A jogadora ${player.name} ${player.lastName} foi eleita a melhor do mundo por ${player['bestInTheWord'].length} vezes`;
//   const mensagem = `A jogadora ${player.name} ${player.lastName} tem ${player.age} anos de idade`;
//   return `${achievements + '\n' + mensagem}`;
// }
// console.log(playerName());
const getSmallestIndex = (array) => {
  let smallesIndex = 0;
  for (index = 0; index < array.length; index += 1) {
    if (array[index] < array[smallesIndex]) {
      smallesIndex = index;
    }
  }
  return smallesIndex;
};
console.log(getSmallestIndex([2, -10, 6, 7, 10, 0, -3]));