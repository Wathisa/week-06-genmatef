class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  speak() {
    console.log(`${this.name} is speaking.`);
  }

  eat() {
    console.log(`${this.name} is eating.`);
  }
}

module.exports = Person;
