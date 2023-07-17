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

const centerContent = document.createElement('section');
main.className = 'center-content';

main.appendChild(centerContent);

// 4 - Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;

const pSection = document.createElement('p');
pSection.innerText = 'Você vai viajar com com a melhor companhia Aéria';

centerContent.appendChild(pSection);

// 5 -Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;

const leftContent = document.createElement('section');
leftContent.className = 'left-content';

main.appendChild(leftContent);

// 6 - Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;

const rightContent = document.createElement('section');
rightContent.className = 'right-content';

main.appendChild(rightContent);

// 7 - Adicione uma imagem com src configurado para valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do section criado no passo 5;

const smallImage = document.createElement('img');
smallImage.src = 'https://picsum.photos/200';
smallImage.className = 'small-image';

leftContent.appendChild(smallImage);

// 8 - Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, e assim por diante. Essa lista deve ser filha do section criado no passo 6;
const ulRigthContent = document.createElement('ul');
rightContent.appendChild(ulRigthContent);
 
let listNumberInFull = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis', 'Sete', 'Oito', 'Nove', 'Dez' ];

for (let index = 0; index < listNumberInFull.length; index += 1) {
    let listNumber = listNumberInFull[index];

    let listItem = document.createElement('li');
    listItem.innerHTML = listNumber;
    ulRigthContent.appendChild(listItem);
};

//Adicione 3 tags h3, todas filhas do main criado no passo 2.
const h3firt = document.createElement('h3');
h3firt.innerText = 'Olá!'
const h3Second = document.createElement('h3');
h3Second.innerText = 'Olá!'
const h3Third = document.createElement('h3');
h3Third.innerText = 'Olá!'
main.appendChild(h3firt);
main.appendChild(h3Second);
main.appendChild(h3Third);

//Adicione a classe title na tag h1 criada;

const title = document.querySelector('h1');
title.className = 'title';

// title.appendChild(h1);

//Adicione a classe description nas 3 tags h3 criadas;

const h3 = document.querySelectorAll('h3');
for (let index = 0; index < h3.length; index += 1) {
    let itemH3 = h3[index]
    itemH3.className = 'description';
};
//Bônus
//Remova a section criada no passo 5 (aquela que possui a classe left-content) por meio da função .removeChild();

main.removeChild(leftContent);

//Centralize a section criada no passo 6 (aquela que possui a classe right-content).

rightContent.style.marginRight = 'auto';

//Troque a cor de fundo do elemento-pai da section criada no passo 3 (aquela que possui a classe center-content) para a cor verde;

main.style.backgroundColor = 'green'

//Remova os dois últimos elementos (nove e dez) da lista criada no passo 8.

const dez = ulRigthContent.lastElementChild;
ulRigthContent.removeChild(dez);
//poderia ser também:ulRigthContent.lastElementChild.remove();

const nove = ulRigthContent.lastElementChild;
ulRigthContent.removeChild(nove);
// poderia usar o 2x: ulRigthContent.lastElementChild.remove();