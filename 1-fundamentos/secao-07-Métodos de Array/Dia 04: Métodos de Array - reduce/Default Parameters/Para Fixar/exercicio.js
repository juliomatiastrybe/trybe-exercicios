// Para Fixar
// Escreva uma função chamada multiply que multiplique dois números passados como argumentos. 
// Atribua como default o valor 1, caso não seja passado nenhum valor como segundo parâmetro.

const multiply = (num1, num2 = 1) => {
    return num1 * num2;
}
console.log(multiply(3));