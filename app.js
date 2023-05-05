class Vehicle {
    constructor(make,model,year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    honk() {
        return "Beep";
    }

    toString(){
        return `the vehicle is a ${this.make} ${this.model} from ${this.year}.`
    }
}

class Motorcycle extends Vehicle {
    constructor(make,model,year) {
        super(make,model,year);
        this.numWheels = 2;
    }

    revEngine() {
        return "VROOM";
    }
}

class Garage {
    constructor(capacity) {
        this.vehicles = [];
        this.capacity = capacity;
    }

    add(newVehicle) {
        if (!(newVehicle instanceof Vehicle))
        {
            return "only vehicles allowed here";
        }
        if (this.vehicles.length >= this.capacity) {
            return "no spots available";
        }
        this.vehicles.push(newVehicle);
        return "Vehicle added";
    }
}