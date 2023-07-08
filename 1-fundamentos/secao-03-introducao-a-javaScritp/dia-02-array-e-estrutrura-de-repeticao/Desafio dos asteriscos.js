let number = 4
let symbol = '* '
let inputLine = ''
for (let index = 0; index < number; index += 1){
    
    for (let indexColumn = 0; indexColumn < number; indexColumn += 1){
        inputLine += symbol
    }
    inputLine += '\n'
}
console.log(inputLine);
// outra maneira de fazer.

// let n = 5;
// let symbol = '*';
// let inputLine = '';

// for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
//   inputLine = inputLine + symbol;
//   console.log(inputLine);
// };

// // for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
// //   console.log(inputLine);
// // };