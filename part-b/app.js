const express = require('express');
const app = express();
const vehicleRoutes = require('./routes/vehicleRoutes');

app.use(express.json());
app.use('/api', vehicleRoutes);

module.exports = app;