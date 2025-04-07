class Disc {
    constructor(speed, weight, name, type) {
        this.speed = speed
        this.weight = weight,
        this.name = name,
        this.type = type
        }

        get speed() {
         console.log(this.speed);
         return this.speed;   
        }

        set speed(speed) {
            if (speed < 0) {
                console.error('speed must be greater than 0')
            } else {
                console.log(this.speed);
                return this.speed = speed;
            }
        }
}

class Driver extends Disc {
    constructor(speed, weight, name, stability, plastic) {
        super(speed, weight, name);
        this.stability = stability,
        this.plastic = plastic;
    }

    speed(){
        console.log(`${super.speed} this is the new speed ${speed}`);
        return this.speed = speed;
    }
}

const destroyer = new Driver(12, 175, 'destroyer','overstable', 'star');
destroyer.speed = 11;