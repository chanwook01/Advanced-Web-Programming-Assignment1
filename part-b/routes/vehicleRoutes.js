const express = require('express');
const router = express.Router();
const vehicleController = require('../controllers/vehicleController');

router.post('/vehicles', vehicleController.addVehicle);
router.get('/vehicles', vehicleController.getVehicles);
router.get('/vehicles/:id', vehicleController.getVehicleById);
router.delete('/vehicles/:id', vehicleController.deleteVehicle);

module.exports = router;