const booksList = require('./listadelivros');
// # Exercício 4
// Implemente a função nameAndAge que deve retornar um array de objetos, cada objeto deve conter:

// A chave author, e o valor deve ser o nome da pessoa autora;
// A chave age, e o valor deve ser a idade da pessoa autora quando lançou o livro.

const nameAndAge = (booksList) => {
    const arrayBooks = booksList.map((book) => {
        const objectBookNameAge = {
            author: book.author.name,
            age: (book.releaseYear - book.author.birthYear) 
        };
        return objectBookNameAge;
    })
    return arrayBooks;
};

console.log(nameAndAge(booksList));
