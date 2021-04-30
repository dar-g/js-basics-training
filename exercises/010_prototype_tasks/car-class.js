/*
    TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

class Car {
    constructor(model, milesPerGallon) {
        this.model = model;
        this.milesPerGallon = milesPerGallon;
        this.tank = 0;
        this.odometer = 0;
    }
    
    fill(gallons) {
        return this.tank += gallons;
    };

    drive(distance) {
        this.odometer += distance;
        this.tank -= (distance / this.milesPerGallon);

        if (this.tank < 0) {
            return `I ran out of fuel at ${this.odometer} miles!`;
        } else {
            return `I have drived ${this.odometer} km and fuel residue is ${this.tank} gallons`;
        }
    }
}

const honda = new Car('Honda civic', 10);
const citroen = new Car('Citroen Spacetourer', 12);

honda.fill(5);
citroen.fill(7);

console.log(honda.model, honda.milesPerGallon, honda.tank, honda.odometer);
console.log(honda.drive(60));
console.log(citroen.model, citroen.milesPerGallon, citroen.tank, citroen.odometer);
console.log(citroen.drive(80));


