function Student(firstName, secondName, address) {
    console.log(this)
    // let obj = {};

    let _firstName;

    this.setName = function (newName) {
        console.log('Log that the name is changed')
        _firstName = newName;
    }

    this.getName = function () {
        return _firstName;
    }

    // this.firstName = firstName;
    this.setName(firstName)
    this.secondName = secondName;
    this.address = address;
    this.greet = function () {
        console.log(`Hello I'm ${this.getName()} ${this.secondName}. I'm from ${this.address}`);
    }

    // return obj;
};

let student1 = new Student('Pesho', 'Petrov', { country: 'BG', town: 'Sofia' });
student1.greet();