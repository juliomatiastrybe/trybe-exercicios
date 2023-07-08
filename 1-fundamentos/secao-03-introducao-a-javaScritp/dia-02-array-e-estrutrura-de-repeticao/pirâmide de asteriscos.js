//Faça o mesmo algoritmo que antes, mas de modo que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:
let n = 5;
let symbol = '*';
let inputLine = '';

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  inputLine = inputLine + symbol;
  console.log(inputLine);
};
