const header = document.getElementById('header-container');
header.style.backgroundColor = 'rgb(0, 176, 105)';
header.style.color = 'white';

const divUrgenteImportante = document.getElementsByTagName('div')[0];
divUrgenteImportante.style.backgroundColor = 'rgb(255, 159, 132)';

const titleUrgerteImpotante = document.getElementsByTagName('h3')[0];
titleUrgerteImpotante.style.backgroundColor = 'rgb(165, 0, 243)';

const divNaoUrgenteImportante = document.querySelectorAll(
  '.no-emergency-tasks div'
)[0];
divNaoUrgenteImportante.style.backgroundColor = 'rgb(249, 219, 94)';

const titleNaoUrgenteImportante = document.querySelectorAll(
  '.no-emergency-tasks div h3'
)[0];
titleNaoUrgenteImportante.style.backgroundColor = 'rgb(35, 37, 37)';

const divUrgenteNaoImportante = document.getElementsByTagName('div')[1];
divUrgenteNaoImportante.style.backgroundColor = 'rgb(255, 159, 132)';

const titleUrgenteNaoImportante = document.getElementsByTagName('h3')[1];
titleUrgenteNaoImportante.style.backgroundColor = 'rgb(165, 0, 243)';

const divNaoUrgenteNaoImportante = document.querySelectorAll(
  '.no-emergency-tasks div'
)[1];
divNaoUrgenteNaoImportante.style.backgroundColor = 'rgb(249, 219, 94)';

const titleNaoUrgenteNaoImportante = document.querySelectorAll(
  '.no-emergency-tasks div h3'
)[1];
titleNaoUrgenteNaoImportante.style.backgroundColor = 'rgb(35, 37, 37)';

const selectionH3Urgentes = document.querySelectorAll(
  '.emergency-tasks div h3'
);

for (let index = 0; index < selectionH3Urgentes.length; index += 1) {
  selectionH3Urgentes[index].style.color = 'white';
}

const selectionH3NaoUrgentes = document.querySelectorAll(
  '.no-emergency-tasks div h3'
);
for (let index = 0; index < selectionH3NaoUrgentes.length; index += 1) {
  selectionH3NaoUrgentes[index].style.color = 'white';
}
console.log(selectionH3NaoUrgentes);

const footer = document.getElementById('footer-container');
footer.style.backgroundColor = 'rgb(0, 53, 51)';
footer.style.color = 'white';