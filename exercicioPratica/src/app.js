const express = require('express');
const { booksRouter } = require('./routes');

const app = express();
app.use(express.json());

app.use('/books', booksRouter);

module.exports = app;