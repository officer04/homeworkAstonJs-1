//task №1
/*
Сортировка пузырьком;
Сортировка выбором;
Циклическая сортировка;
Быстрая сортировка;
*/

// task №2
function Person(name) {
  this.name = name;
}

function AnotherPerson(name) {
  this.name = name;
}

const person = new Person('Alex');
const anotherPerson = new AnotherPerson('Bob');
Object.setPrototypeOf(anotherPerson, person);

Person.prototype.logInfo = function () {
  console.log(`Привет ${this.name}`);
};

person.logInfo();
anotherPerson.logInfo();

// task 3

class SuperPerson {
  constructor(name) {
    this.name = name;
  }

  set changeName(name) {
    this.name = name;
  }

  get printName() {
    return this.name;
  }
}

class SuperPerson2 extends SuperPerson {
  constructor(name) {
    super(name);
  }
}

const persons = new SuperPerson('Bob');
const persons1 = new SuperPerson2('Alex');

