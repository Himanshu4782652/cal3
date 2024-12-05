const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const calculatorRoutes = require('./routes/calculator');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/api', calculatorRoutes);

module.exports = app;
