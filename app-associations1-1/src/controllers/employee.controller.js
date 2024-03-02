const { employeeService, addressService } = require('../services');

// src/services/employee.service.js

const getAll = async (_req, res) => {
    const employees = await employeeService.getAll();
    return res.status(200).json(employees);
};

const getById = async (req, res) => {
    try {
      const { id } = req.params;
      const employee = await employeeService.getById(id);
  
      if (!employee) {
        return res.status(404).json({ message: 'Pessoa colaboradora não encontrada' });
      }
  
      if (req.query.includeAddresses === 'true') {
        const addresses = await addressService.getAllByEmployeeId(id);
        return res.status(200).json({ employee, addresses });
      }
  
      return res.status(200).json(employee);
    } catch (e) {
      console.log(e);
      res.status(500).json({ message: 'Ocorreu um erro' });
    };
  }

module.exports = {
  getAll,
  getById
};