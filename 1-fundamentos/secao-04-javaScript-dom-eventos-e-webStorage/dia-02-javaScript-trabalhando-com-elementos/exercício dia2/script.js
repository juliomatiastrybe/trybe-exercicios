// Acesse o elemento where-are-you.
const whereAreYou = document.getElementById('where-are-you');
 console.log(whereAreYou);
//Acesse parent a partir de where-are-you e adicione uma color a ele.
const parent = whereAreYou.parentElement;
parent.style.color = 'green';
console.log(parent);
// Acesse o first-child-of-child e adicione um texto a ele
const firstChildOfChild = whereAreYou.firstElementChild;
firstChildOfChild.innerText = 'First child of child';
console.log(firstChildOfChild);
// Acesse o first-child a partir de parent.
const firstChild = parent.firstElementChild;
console.log(firstChild);
// Acesse o first-child a partir de where-are-you.
const previousBrotherWhereAreYou = whereAreYou.previousElementSibling;
console.log(previousBrotherWhereAreYou);
// Acesse o texto Attention! a partir de where-are-you.
const textAtterion = whereAreYou.nextSibling;
console.log(textAtterion);
// Acesse o third-child a partir de where-are-you.
const thirdChild = whereAreYou.nextElementSibling;
console.log(thirdChild);
//Acesse o third-child a partir de parent.
const thirdChildParent = parent.lastElementChild.previousElementSibling;
console.log(thirdChildParent);