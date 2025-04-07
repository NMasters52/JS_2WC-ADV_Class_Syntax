class Disc {
    constructor(speed, weight, name) {
        this.speed = speed,
        this.weight = weight,
        this.name = name
    }

        get speed() {
         return this._speed;   
        }

        set speed(newSpeed) {
            if (newSpeed > 0 && typeof newSpeed === 'number') {
              this._speed = newSpeed;
            } else {
             console.error('speed must be a positive number larger than 0.') 
            }
        }
}

class Driver extends Disc {
    constructor(speed, weight, name, stability, plastic) {
        super(speed, weight, name);
        this.stability = stability,
        this.plastic = plastic;
    }

}

const destroyer = new Disc(12, 175, 'destroyer');
console.log(destroyer.speed);

const starDestroyer = new Driver(12, 175,'destroyer', 'over', 'star');
starDestroyer.weight = 15;
console.log(starDestroyer.weight);