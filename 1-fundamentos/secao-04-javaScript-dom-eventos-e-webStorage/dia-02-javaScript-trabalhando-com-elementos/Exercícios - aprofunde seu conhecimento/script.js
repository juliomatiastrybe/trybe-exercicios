// 1 - Adicione a tag h1 com o texto TrybeTrip - Agência de Viagens como filho da tag body;
const body = document.getElementsByTagName('body')[0];

const h1 = document.createElement('h1');
h1.innerHTML = 'TrybeTrip - Agência de Viagens'

body.appendChild(h1);

