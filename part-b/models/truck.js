const Vehicle = require('./vehicle');

class Truck extends Vehicle {
    constructor(id, brand, model) {
        super(id, brand);
        this.model = model;
        this.type = 'truck';
    }
}

module.exports = Truck;