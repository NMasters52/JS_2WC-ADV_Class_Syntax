class Vehicle {
    constructor(make, model, year) {
        this.make = make,
        this.model = model,
        this.year = year,
        this._mileage = 0
    }

    //make a setter
    set mileage(newMileage) {
       if (newMileage >= 0) {
        this._mileage = newMileage;
       } else {
        console.error('Mileage must be greater than 0');
       }
    }

    //make a getter
    get mileage(){
        return this._mileage;
    }

    //set a static method

    runs() {
        console.log('This vehicle is running');
    }

    brakes() {
        console.log('this vehicle is stopping');
    }

    speed(mph) {
        console.log(`this vehicle is traveling at ${mph}mph`);
    }
}

//make a new class instance that extends car with super