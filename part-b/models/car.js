const Vehicle = require('./vehicle');

class Car extends Vehicle {
    constructor(id, brand, model) {
        super(id, brand);
        this.model = model;
        this.type = 'car';
    }
}

module.exports = Car;