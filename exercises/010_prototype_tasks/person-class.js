/*
    TASK 1
      - Write a Person Constructor that initializes `name` and `age` from arguments.
      - All instances of Person should initialize with an empty `stomach` array.
      - Give instances of Person the ability to `.eat("someFood")`:
          + When eating an edible, it should be pushed into the `stomach`.
          + The `eat` method should have no effect if there are 10 items in the `stomach`.
      - Give instances of Person the ability to `.poop()`:
          + When an instance poops, its `stomach` should empty.
      - Give instances of Person a method `.toString()`:
          + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.stomach = [];
    }
    
    eat(food) {
        if (this.stomach.length < 10 ) {
            this.stomach.push(food);
        }
        return this.stomach;
    }

    poop() {
        return this.stomach.splice(0, this.stomach.length);
    };

    toString() {
        return `${this.name}, ${this.age}`;
    }
}

const mary = new Person('Mary', 23);
const peter = new Person('Peter', 32);

console.log(mary.toString(), peter.toString());

/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/

class Baby extends Person {
    constructor(name, age, favoriteToy) {
        super(name, age);
        this.toy = favoriteToy;
        console.log(this);
    }
    play() {
        return `${this.name} is playing with ${this.toy}`;
    }
}

const babyBob = new Baby('Bob', 2, 'a teddy bear');
const babyAnn = new Baby('Annie', 1.5, 'a car');

console.log(babyBob.play());
console.log(babyAnn.play());
console.log(babyBob.toString());
