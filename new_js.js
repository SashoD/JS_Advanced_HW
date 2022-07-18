class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`I'm ${this.name}, ${this.age} years old.`);
  }
}

class Developer extends Person {
  constructor(name, age, skills) {
    // call the parent constructor:
    super(name, age);
    this.skills = skills;
  }

  greet() {
    // call the parent greet() method
    super.greet();
    console.log(`My skills are: ${this.skills.join()}`);
  }
}

class Manager extends Person {
  constructor(name, age, managed) {
    // call the parent constructor:
    super(name, age);
    this.managed = managed;
    this.greet = function () {
      var developer = "";
      for (let i = 0; i < managed.length; i++) {
        developer = developer + managed[i].name + " ";
      }
      //   console.log(
      //     `Hi, I'm ${this.name} and I'm ${this.age} years old I managed ${developer} `
      //   );
    };
  }

  greet() {
    // call the parent greet() method
    super.greet();
    console.log(
      `Hi, I'm ${this.name} and I'm ${this.age} years old I managed ${developer} `
    );
  }
}

// Developer instances
let maria = new Developer("Maria Popova", 23, ["Python", "Machine Learning"]);
let pesho = new Developer("Petar Petrov", 19, [
  "JavaScript",
  "Angular",
  "React",
  "Vue",
]);

// Manager instances
let gates = new Manager("Bill Gates", 43, [maria, pesho]);

/* ----------------------------- Use the objects ---------------------------- */
maria.greet();
pesho.greet();
gates.greet();
