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

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.stomach = [];
}

Person.prototype.eat = function(food) {
    if (this.stomach.length < 10 ) {
        this.stomach.push(food);
    }
    return this.stomach;
};

Person.prototype.poop = function() {
    return this.stomach.splice(0, this.stomach.length);
};

Person.prototype.toString = function() {
    return `${this.name}, ${this.age}`;
}

const mary = new Person('Mary', 23);
const peter = new Person('Peter', 32);

console.log(mary.eat('apple'));
console.log(mary.eat('orange'));
console.log(mary.eat('peach'));
console.log(mary.eat('cake'));
console.log(mary.eat('pizza'));
console.log(mary.eat('mussles'));
console.log(mary.eat('tuna'));
console.log(mary.eat('ice cream'));
console.log(mary.eat('hot dog'));
console.log(mary.eat('cherry'));
console.log(mary.eat('pickles'));
console.log('Peter\'s stomach: ', peter.stomach);
console.log(mary.poop());
console.log('Mary\'s stomach: ', mary.stomach);
console.log(mary.toString(), peter.toString());


/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/

function Baby(name, age, favoriteToy) {
    Person.call(this, name, age);
    this.toy = favoriteToy;
}

Baby.prototype = Object.create(Person.prototype);

Baby.prototype.play = function() {
    return `${this.name} is playing with ${this.toy}`;
}

const babyBob = new Baby('Bob', 2, 'a teddy bear');
const babyAnn = new Baby('Annie', 1.5, 'a car');

console.log(Baby.prototype.constructor);
console.log(babyBob.play());
console.log(babyAnn.play());
console.log(babyBob.toString());
