const basket = [
    'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
    'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
    'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
    'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
    'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
    'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
    'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
    'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
    'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
    'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
    'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
    'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
    'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
    'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
    'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
    'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
    'Banana', 'Pera', 'Abacate', 'Uva',
  ];
  const objectFruit = (array) => {

    const result = {};
    
    // Loop que irá contar quantas vezes cada fruta aparece no array basket
    for (let index = 0; index < array.length; index += 1) {
      let fruit = array[index];
      // Se a propriedade com o nome da fruta ainda não existir, então ela será criada com o valor 1. Caso ela já exista, vamos incrementar o valor.
      if (!result[fruit]) {
        // console.log(!result[fruit]);
        result[fruit] = 1;
        // console.log(result);
      } else {
        result[fruit] += 1;
      }
    };
    console.log(result);
    // result.Melancia = 20; para alterar um resultado dentro do objeto.
    // console.log(result);
    return result;
  }
// Função 'icreaseS' acresceta letra "S" quando a fruta tiver um valor acima de 1.
// depois junta tudo no array "newArray", e retorna o seu resultado com o formato desejado de impressão, com o console.log.
  const increaseS = (array) => {

    // a constante resultObejectFrit recebe o resultado da função obejctFruit, com o paramentro: array basket.
    const resultObjectFruit = objectFruit(array);
    // Convertemos o objeto resultObejctFruit em um array
    const entries = Object.entries(resultObjectFruit);

    // Criação de um novo array para receber as conversão das palavras das frutas
    //para as que tem mais de um valor.
    let newArray = [];

    // Loop que irá verificar se o número de frutas é maior ou não do que 1. Caso seja maior, adicionamos a letra "s".
    for (let index = 0; index < entries.length; index += 1) {
      if (entries[index][1] > 1) {
        newArray.push(`${entries[index][1]} ${entries[index][0]}s`);
      } else {
        newArray.push(`${entries[index][1]} ${entries[index][0]}`);
      }
    };

    // a variável joinNewArray irá receber o newArray e juntar seus elementos, dando uma virgula e espaço.
    let joinNewArray = newArray.join(', ');

    // A variável resultIncreasesS vai receber uma string com o resultado da variável joinNewArray.
    let resultIncreaseS = `Sua cesta possui: ${joinNewArray}.`;

    // console.log(newArray);
    // console.log(newArray.join(', '));

    // a função increaseS irá retorna quando chamada o resultado resultIncreaseS
    return resultIncreaseS;
  }
  // Exibimos a string juntando os valores do array "newArray" com uma vírgula e um espaço em branco.
  console.log(increaseS(basket));