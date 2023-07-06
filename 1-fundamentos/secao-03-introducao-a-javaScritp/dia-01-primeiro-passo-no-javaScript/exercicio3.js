//Utilize if/else para escrever um código que retorne o maior de três números. Defina, no começo do seu código, três variáveis com os valores que serão comparados.
let n1= 11
let n2 = 14
let n3 = 12

if (n1 > n2 && n1 > n3){
    console.log(`Entre ${n1}, ${n2} e ${n3}, o maior é ${n1}!`);
} else if (n2 > n3){
    console.log(`Entre ${n1}, ${n2} e ${n3}, o maior é ${n2}!`);
} else{
    console.log(`Entre ${n1}, ${n2} e ${n3}, o maior é ${n3}!`);
}