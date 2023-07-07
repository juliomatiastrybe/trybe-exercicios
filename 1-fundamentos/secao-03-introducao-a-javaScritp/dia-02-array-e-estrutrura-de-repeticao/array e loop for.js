//Percorra o array imprimindo todos os valores contidos nele com a função console.log().

// Some todos os valores contidos no array e imprima o resultado.

// Calcule e imprima a média aritmética dos valores contidos no array. A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.

// Com base no código que acabou de gerar, referente ao cálculo da média aritmética, faça com que: caso o valor final seja maior que 20, imprima a mensagem “O valor da média aritmética é maior que 20”; e, caso não seja maior que 20, imprima a mensagem “O valor da média aritmética é menor ou igual a 20”.

// Utilizando for, descubra o maior valor contido no array e imprima-o.

// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “Nenhum valor ímpar encontrado”

const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0
let bigger = numbers[0] // estou dizendo que o maior número é o primeiro array

 console.log(`Os numero contido em numbers é: ${numbers}`);
//imprime na tela o numeros do array.

for (let index = 0; index < numbers.length; index += 1) {
    const receiveIndex = sum
    sum = sum + numbers[index]
    console.log(`A soma de ${numbers[index]} + ${receiveIndex} = ${sum}`);
}
//irá somar o primeiro array pelo demais e mostrar na tela.

console.log(`A soma total dos números é = ${sum}`);
//mostra a soma total do array

const medium = sum / numbers.length
console.log(`A média aritmétrica dos números é: ${medium}`);
//mostra a média artmetrica do valor total da soma do array.

if (medium > 20){
    console.log('O valor da média aritmética é maior que 20');
}else{
    console.log('O valor da média aritmética é menor ou igual a 20');
}
//mostra uma codição se o valor da média for maior que e menor que 20

for (let indexBigger = 0; indexBigger < numbers.length; indexBigger += 1){
    if (numbers[indexBigger] > bigger){
      bigger = numbers[indexBigger]
    }
}
console.log(`O maior número é: ${bigger}`)
//mostra qual número do array é maior.

let count = 0;
for(let indexOdd = 0; indexOdd < numbers.length; indexOdd += 1){
    if (numbers[indexOdd]%2 !== 0){
        count +=1;
    }
}
console.log(`A quantidade de números ímpares: ${count}!`);
if (count == 0){
    count = 'Nenhum valor ímpar encontrado'
    console.log(count);
}
//vai mostrar a quantidade de números ìmpares que contem o array
//e se uma menssagem de erro caso não tenha.