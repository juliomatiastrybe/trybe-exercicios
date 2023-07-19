const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');
const listLi = document.querySelectorAll('.container li');


// 1. Copie esse arquivo e edite apenas ele.
// 1.1. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

// porque foi aplicado uma estilização em css, que pegar a classe "tech" que 
// foi declarada na primira li da ul, colando o transform: translateY(-20px);

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando este for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como é possível fazer isso? Dica: Lembre-se do método `.classList.remove`.

const addClassTech = (event) => {
    for (let index = 0; index < listLi.length; index += 1) {
        listLi[index].classList.remove('tech');
    } 
    const clickedLi = event.target;
    clickedLi.classList.add('tech');
};
const clickedList = () => {
    for (let index = 0; index < listLi.length; index += 1) {
        listLi[index].addEventListener('click', addClassTech);
    } 
};
clickedList ();

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech'.

input.addEventListener('input', (event) => {
    const techElement = document.querySelector('.tech');
    techElement.innerText = event.target.value;
  });


// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy',
// redirecione para alguma página.
// 4.1. Que tal redirecionar para seu portfólio? Dica: Lembre-se dos métodos `window.location.replace` e `window.open`.

myWebpage.addEventListener('dblclick', (event) => {
    window.open('https://juliomatiastrybe.github.io/sd-035-project-lessons-learned/#projetos');
})

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo.

myWebpage.addEventListener('mouseover', (event) => {
    myWebpage.style.backgroundColor = 'green';
    myWebpage.style.width = 255 + 'px';
    myWebpage.style.paddingLeft = 5 + 'px';
    myWebpage.style.borderRadius = 20 + 'px';
})
myWebpage.addEventListener('mouseout', (event) => {
    myWebpage.style.backgroundColor = '';
    myWebpage.style.width = '';
    myWebpage.style.paddingLeft = '';
    myWebpage.style.borderRadius = '';
})

// Segue abaixo um exemplo de uso do event.target.


const resetText = (event) => {
  // O event é passado como um parâmetro para a função.
  const clickedLi = event.target;
  const liId = clickedLi.id;
  
  switch (liId) {
    case 'first-li':
      clickedLi.innerText = 'Aqui está a primeira tecnologia que mais gostei.';
      break;
    case 'second-li':
      clickedLi.innerText = 'Aqui está a segunda tecnologia que mais gostei.';
      break;
    case 'third-li':
      clickedLi.innerText = 'Aqui está a terceira tecnologia que mais gostei.';
      break;
    default:
      break;
  }
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}
for (let index = 0; index < listLi.length; index += 1) {
    listLi[index].addEventListener('dblclick', resetText);
}

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na função retornará o objeto 'firstLi'.