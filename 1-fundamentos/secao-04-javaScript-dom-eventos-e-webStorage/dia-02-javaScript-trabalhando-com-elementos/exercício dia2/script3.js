// Remova a tag h2, filha do elemento where-are-you.

const whereAreYou = document.getElementById('where-are-you');
// const filhoWhereAreYou = whereAreYou.firstElementChild; // uma outra maneira para remover o filho de whareAreYou.
whereAreYou.removeChild(whereAreYou.firstElementChild);
