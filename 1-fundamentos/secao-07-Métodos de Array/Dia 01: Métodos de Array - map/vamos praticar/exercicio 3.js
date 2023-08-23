const booksList = require('./listadelivros');

// # Exercício 3
// Implemente a função formatedBookNames que deve retornar 
// um array de strings no 
// formato: Nome do livro - Gênero - Nome da pessoa autora.

const formatedBookNames = (books) => {
    const arrayBooks = books.map((book) => [ book.name, book.genre, book.author.name ]);
    return arrayBooks;
};

// de forma resumida ficaria: 

// resumindo o return do books.map
// const formatedBookNames = (books) => {
//     const arrayBooks = books.map((book) => [ book.name, book.genre, book.author.name ]);
//     return arrayBooks;
// };

// resumindo o return da função formatBookNames e o return do books.map;
// const formatedBookNames = (books) => arrayBooks = books.map((book) => [ book.name, book.genre, book.author.name ]);

console.log(formatedBookNames(booksList.books));