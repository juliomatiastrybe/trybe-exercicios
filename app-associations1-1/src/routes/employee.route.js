const route = require('express').Router();
const { employeeController } = require('../controllers');

route.get('/', employeeController.getAll);
route.get('/:id', employeeController.getById);

module.exports = route;