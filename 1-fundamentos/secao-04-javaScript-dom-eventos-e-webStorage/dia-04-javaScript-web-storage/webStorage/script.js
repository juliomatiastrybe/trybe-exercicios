const button = document.getElementById('add-button');
const input = document.getElementById('phrases-input');
const list = document.getElementById('phrases-list');

// essa função ela insere a frase digitada no input na ul em forma de (li).

const insertPhraseInDOM = () => {

  const phrasesList = JSON.parse(localStorage.getItem('phrases'));
  console.log(phrasesList);
  // A phrasesList vai pegar o array com a frase digitada no input, da função 
  const listLength = phrasesList.length - 1;
  // listLength vai receber o array e pegar o seu tamanho através do length e
  // através do '- 1' vai pegar a posição em que a frase localizada no array phrasesList.
  const phraseText = phrasesList[listLength];
  // phraseText vai receber a frase digitada no input como string, através do array e sua posição
  // capturadas no phrasesList = array e listLength =  posição.
  const phrase = document.createElement('li');
  // phrase vai ser um variavel que irá receber a criação da 'li' da 'ul'= list.
  phrase.innerText = phraseText;
  // depois de a frase ser capturada no phraseText, ela é inserida na phrase.
  list.appendChild(phrase);
  // É feito a adição da phrase, na list 'ul', adicionando a phrase com filho de list
}
// essa função vai recuperar as o array de criado na initialRendering,array vazio.
// e vai adicionar a nova frase ao localStorage, que foi inputada através do evento do butão.
const addPhraseToLocalStorage = () => {
  const oldList = JSON.parse(localStorage.getItem('phrases'));
  // vai capturar o array vazio, cria no initialRendering
  const phraseText = input.value;
  // vai colocar a fraze que foi digitada no input, em um variável.
  oldList.push(phraseText);
  // e vai 'joga' através do push a frase inputada(phraseText), no array(oldList) recuperado do localStorage.
  localStorage.setItem('phrases', JSON.stringify(oldList));
  // agora ele vai adionar a chave = phrases, com valor tranformado em string, do array(oldList)
  insertPhraseInDOM();
  // chamando a função insertPhraseInDOM
}

// função é inicializado ao abrir a página.
const initialRendering = () => {
    // se ao iniciar a pagina o a chave que esta no localStorage for = a null;
    // ou seja não existir.
  if (localStorage.getItem('phrases') === null) {
    // ele vai cria chave 'phrases' passando um array como valor no localStorage.
    localStorage.setItem('phrases', JSON.stringify([]));
    // se a a chave 'phrases' já existir no localStorage a funão vai entra no else
  } else {
    // ele vai criar uma li, para ul, adionando a frase digitada no input a ela.
    // phrasesList vai trazer um array vazio, coforme foi criado no if.
    const phrasesList = JSON.parse(localStorage.getItem('phrases'));
    // listLength vai receber o array e pegar o seu tamanho através do length e
    // através do '- 1' vai pegar a posição em que a frase localizada no array phrasesList.
    const listLength = phrasesList.length - 1;
    // vai fazer um for para pecorrer o array das frases que foram digitadas.
    for (let index = 0; index <= listLength; index += 1) {
        // para cada frase digitada, cria uma li adicionando o texto da frase guadarda no array.
      const listElement = document.createElement('li');
      listElement.innerText = phrasesList[index];
      // vai adicionar a frase que esta na li, na ul.
      list.appendChild(listElement);
    }
  }
}

// adicona um evento de click no butão 'Adiona frase' chamando a fução addPhraseToLocalStorage.
button.addEventListener('click', addPhraseToLocalStorage);

// vai fazer com que assim que a página for carregada chame a função initialRendering.
window.onload = () => initialRendering();


// const button = document.getElementById('add-button');
// const input = document.getElementById('phrases-input');
// const list = document.getElementById('phrases-list');

// const insertPhraseInDOM = () => {
//   const phrasesList = JSON.parse(sessionStorage.getItem('phrases'));
//   const listLength = phrasesList.length - 1;
//   const phraseText = phrasesList[listLength];
//   const phrase = document.createElement('li');
//   phrase.innerText = phraseText;
//   list.appendChild(phrase);
// }

// const addPhraseToSessionStorage = () => {
//   if (sessionStorage.getItem('phrases') === null) {
//     sessionStorage.setItem('phrases', JSON.stringify([]));
//   }
//   const oldList = JSON.parse(sessionStorage.getItem('phrases'));
//   const phraseText = input.value;
//   oldList.push(phraseText);
//   sessionStorage.setItem('phrases', JSON.stringify(oldList));
//   insertPhraseInDOM();
// }

// button.addEventListener('click', addPhraseToSessionStorage);