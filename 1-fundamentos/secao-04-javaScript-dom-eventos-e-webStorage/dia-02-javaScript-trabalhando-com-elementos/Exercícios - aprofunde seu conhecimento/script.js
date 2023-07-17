// 1 - Adicione a tag h1 com o texto TrybeTrip - Agência de Viagens como filho da tag body;
const body = document.getElementsByTagName('body')[0];

const h1 = document.createElement('h1');
h1.innerHTML = 'TrybeTrip - Agência de Viagens'

body.appendChild(h1);

// 2 -Adicione a tag main com a classe main-content como filho da tag body

const main = document.createElement('main');
main.className = 'main-content';

body.appendChild(main);

// 3 - Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;

const sectionMain = document.createElement('section');
main.className = 'center-content';

body.appendChild(sectionMain);

// 4 - Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;

const pSection = document.createElement('p');
pSection.innerText = 'Você vai viajar com com a melhor companhia Aéria';

sectionMain.appendChild(pSection);