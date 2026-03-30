const Vehicle = require('./vehicle');

class Bike extends Vehicle {
    constructor(id, brand, model) {
        super(id, brand);
        this.model = model;
        this.type = 'bike';
    }
}

module.exports = Bike;