const Car = require('../models/car');
const Bike = require('../models/bike');
const Truck = require('../models/truck');
const vehicles = require('../data/vehicleData');

// Add vehicle
exports.addVehicle = (req, res) => {
    const { id, brand, model, type } = req.body;

    let newVehicle;

    if (type === 'car') {
        newVehicle = new Car(id, brand, model);
    } else if (type === 'bike') {
        newVehicle = new Bike(id, brand, model);
    } else if (type === 'truck') {
        newVehicle = new Truck(id, brand, model);
    } else {
        return res.status(400).json({ message: 'Invalid vehicle type' });
    }

    vehicles.push(newVehicle);

    res.json({
        message: 'Vehicle added successfully',
        data: newVehicle
    });
};

// Get all vehicles
exports.getVehicles = (req, res) => {
    res.json(vehicles);
};

// Get single vehicle
exports.getVehicleById = (req, res) => {
    const id = req.params.id;

    const vehicle = vehicles.find(v => v.id == id);

    if (!vehicle) {
        return res.status(404).json({ message: 'Vehicle not found' });
    }

    res.json(vehicle);
};

// Delete vehicle
exports.deleteVehicle = (req, res) => {
    const id = req.params.id;

    const index = vehicles.findIndex(v => v.id == id);

    if (index === -1) {
        return res.status(404).json({ message: 'Vehicle not found' });
    }

    vehicles.splice(index, 1);

    res.json({ message: 'Vehicle deleted successfully' });
};