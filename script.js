class Vehicle {

    static vehicleInventory = 0;
    static idLog = [];

    constructor(id, make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;

        if (Vehicle.idLog.includes(id)) {
            let newId = crypto.randomUUID()
            console.error(`ID ${id} is already in use. Assigned random ID: ${newId} instead.`);
            this._id = newId;
          } else {
            this._id = id;
          }

        Vehicle.vehicleInventory++;
        Vehicle.idLog.push(this._id);
    }
    
   set year(newYear){
    if (typeof newYear === 'number' && newYear >= 1990 ) {
        this._year = newYear;
    } else {
        console.error('Year must be positive number later than 1990')
    }
   }

   get year(){
    return this._year;
   }

   set id(passedId) {
    if (Vehicle.idLog.includes(passedId)){
        console.error('you need to input a valid ID. this one is taken') 
    } else {
        const oldIndex = Vehicle.idLog.indexOf(this._id);
        if(oldIndex !== -1) {
            Vehicle.idLog[oldIndex] = passedId;
        }
        this._id = passedId;
    }
   }


   turnOnVehicle(){
   return `${this.model} is running`;
}

drivingVehicle() {
    return `${this.model} is driving`;
   }

   stopVehicle(){
    return `This ${this.model} has stopped`;
   }
}

class Car extends Vehicle {
    constructor(doors, mileage, id, make, model, year) {
        super(id, make, model, year);
        this.doors = doors;
        this.mileage = mileage;
    }
}

class Motorcycle extends Vehicle {
    constructor(wheels, mileage, id, make, model, year) {
        super(id, make, model, year);
        this.wheels = wheels;
        this.mileage = mileage;
    }
}

const massarati = new Motorcycle(2, 13000, 1, 'moto', "massarti", 1990);
const tacoma = new Car(4, 13000, 3, "toyota", 'tacoma', 2018);

console.log(tacoma.turnOnVehicle());
console.log(tacoma.drivingVehicle());
console.log(tacoma.stopVehicle());
console.log(Vehicle.vehicleInventory);
console.log(Vehicle.idLog);