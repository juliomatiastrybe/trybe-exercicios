const route = require('express').Router();
const { booksController } = require('../controllers');

route.get('/', booksController.getAll);
route.get('/:id', booksController.getById);
route.post('/', booksController.create);
route.put('/:id', booksController.update);
route.delete('/:id', booksController.remove);

module.exports = route;