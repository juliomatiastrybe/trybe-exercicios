//Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra, como a palavra “banana” para “ananab”. Utilize a string abaixo como exemplo. Depois, troque-a por outras para verificar se seu algoritmo está funcionando corretamente.
let word = 'tryber';
let reverseWord = ''
//let lastLetter = ''
// reverseWord = word.split('').reverse().join('');
// console.log(reverseWord);
// método com split, reverse e join.

for (let index = word.length - 1; index >= 0; index -= 1) {
    reverseWord += word[index]
}
//lastLetter +=  word[word.length-1]; 
// uma maneira de pegar a ultima letra do array word.

console.log(reverseWord);