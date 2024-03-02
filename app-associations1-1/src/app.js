const express = require('express');
require('express-async-errors');
const { employeeRoute } = require('./routes');

const app = express();

app.use(express.json());
app.use('/employees', employeeRoute);

module.exports = app;