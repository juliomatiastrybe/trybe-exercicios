// # Exercício 2
// Dado um array de números, crie uma função que retorne um novo array 
// com as raízes quadradas dos números. 
// No entanto, se um número for negativo, 
// a função deve substituí-lo por NaN (Não é um Número).

const numbers = [4, 9, -1, 16, -5, 25];

const squareRootNumbers = numbers.map((number) => {
    if(number < 0) {
        number = NaN;
    } else {
        number = Math.sqrt(number);
    }
    return number
})
console.log(squareRootNumbers);