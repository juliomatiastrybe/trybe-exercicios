// src/services/employee.service.js

const { Employee, Address } = require('../models');

const getAll = async () => {
  const users = await Employee.findAll({
    include: { model: Address, as: 'addresses' },
  });

  return users;
};

// const getById = async (id) => {
//   const user = await Employee.findByPk(id, {
//     // include: { model: Address, as: 'addresses' },
//     // atributo que não será retornado se passado como exclude
//     include: { model: Address, as: 'addresses', attributes: { exclude: ['number'] } },
//   });

//   return user;
// }

const getById = async (id) => {
  const employee = await Employee.findOne({
    where: { id },
  });
  return employee;
};

module.exports = { 
  getAll, 
  getById };