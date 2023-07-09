//Faça o mesmo algoritmo que antes, mas de modo que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:
//Agora, inverta o lado do triângulo. 
let number = 5;
let symbol = '*';
let inputLine = ''
let inputPosition = number - 1;


for (let lineIndex = 0; lineIndex < number; lineIndex += 1) {
//Esse primeiro for vai Definir o que vai ser impresso na primeira linha.
  for (let columnIndex = 0; columnIndex < number; columnIndex += 1) {
//esse outro o que irá nas colunas.
    if (columnIndex < inputPosition) {
      inputLine += ' ';
    } else{
      inputLine += symbol
    } 
  }
//No final da condição if e else, será impresso a com os espaço adicionando
// apenas "um" asteriscos.
  console.log(inputLine);
//vai imprimir espaços branco e uma asteriscos no final do segundo for.
  inputLine = '';
//para o primeiro for não atribuir novamente o que foi feito no segundo for
// colocamos que a entrada de linha irá receber apenas um espaço vazio.
  inputPosition -= 1;
//aqui diminuiremos a entrada de prosição para que o else possa ser execultado
//mais vezes por cada loop do primeiro for, cada loop completo, ele irá acrescentar
//mais astericos na linha impressa de cada coluna.
}