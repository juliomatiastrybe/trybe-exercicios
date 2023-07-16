// Crie um irmão para elementoOndeVoceEsta.
const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
// console.log(elementoOndeVoceEsta);

const pai = elementoOndeVoceEsta.parentNode;
// console.log(pai);

let novoIrmao = document.createElement('section');
novoIrmao.id = 'novoFilhoIrmaoCriado';
// console.log(novoIrmao);
pai.appendChild(novoIrmao);

// Crie um filho para elementoOndeVoceEsta.
let newFilhoelementoOndeVoceEsta = document.createElement('section');
newFilhoelementoOndeVoceEsta.id =  'NovoFilho';

elementoOndeVoceEsta.appendChild(newFilhoelementoOndeVoceEsta);

// Crie um filho para primeiroFilhoDoFilho.
 
const primeiroFilhoDoFilho = elementoOndeVoceEsta.firstElementChild;
// console.log(primeiroFilhoDoFilho);
const novoFilhoDoFilhoDofilho = document.createElement('section');
novoFilhoDoFilhoDofilho.id = 'novoFilhoDoFilhoDoFilho'
console.log(novoFilhoDoFilhoDofilho);

primeiroFilhoDoFilho.appendChild(novoFilhoDoFilhoDofilho)

// A partir desse filho criado, acesse terceiroFilho.

let terceiroFilho = novoFilhoDoFilhoDofilho.parentElement.parentElement.nextElementSibling;
console.log(terceiroFilho);

