// task №1

const counter = { name: 'Alex', age: 18 };
const counter2 = new Object({ name: 'Alex' });

function Counter(name, age) {
  this.name = name;
  this.age = age;
}
const counter3 = new Counter('John', 25);

const counter4 = Object.create(
  {},
  {
    name: { enumerable: true, value: 'test' },
  },
);

const counter5 = Object.assign({ name: 'Alex' });

// task #2

const counterCopy = { ...counter };
const counterCopy1 = Object.assign({}, counter);
const counterCopy2 = JSON.parse(JSON.stringify(counter));

//task #3
function makeCounter() {}
const makeCounter1 = function () {};
const makeCounter2 = () => {};
class MakeCounter {
  constructor() {
    this.count = 0;
  }

  increment() {
    this.count++;
    console.log(this.count);
  }
}

function Counter() {
  this.makeCounter = function () {};
}
const countNumbers = new Counter();
