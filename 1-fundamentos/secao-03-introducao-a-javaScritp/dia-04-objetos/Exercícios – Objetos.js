const reader = {
    name: 'Julia',
    lastName: 'Pessoa',
    age: 21,
    favoriteBooks: [
      {
        title: 'O Senhor dos Anéis - a Sociedade do Anel',
        author: 'J. R. R. Tolkien',
        publisher: 'Martins Fontes',
      },
    ],
  };
  const favoriteBook = (object) => {
    let name = object.name;
    let lastName = object.lastName;
    let favoriteBook = object.favoriteBooks[0].title;
    object.favoriteBooks.push({
        title: 'Harry Potter e o Prisioneiro de Azkaban',
        author: 'JK Rowling',
        publisher: 'Rocco',
    });
    // 2 - Adicione um novo livro favorito na chave favoriteBooks, que é um array de objetos. Atribua a essa chave um objeto que contenha as seguintes informações:

    let quantFavoriteBook = Object.entries(object.favoriteBooks); // vai pegar tanto a key e value e colocar dentro de array para ser exibido.
    console.log(`O livro favorito de ${name} ${lastName} se chama '${favoriteBook}'`);
    // 1 - Acesse as chaves name, lastName e title e exiba informações em um console.log() no seguinte formato: “O livro favorito de Julia Pessoa se chama ‘O Senhor dos Anéis - a Sociedade do Anel’.”.
    console.log(quantFavoriteBook);
    // mostra o novo objeto sendo colocado no array favoriteBooks
    console.log(`${name} tem ${quantFavoriteBook.length} livros favoritos.`);
    // 3 - Acesse as chaves name e favoriteBooks e faça um console.log() no seguinte formato:
  };
  console.log(favoriteBook(reader));