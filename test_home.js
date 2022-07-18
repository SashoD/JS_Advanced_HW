let devFactory = function (name, salary) { 
    let objDev = {};
    objDev.name = name;
    let _salary = salary;

    objDev.getSalary = function () {
        return _salary
    };

    objDev.setSalary = function (newSalary) {
        _salary = newSalary
    };
    objDev.increaseSalary = function (incrValue, pass) {
        if (pass === 'abracadabra'){
            objDev.setSalary(_salary + incrValue);
        }
    }
    return objDev;
}

let dev1 = devFactory('Peter', 1000);
let dev2 = devFactory('Maria', 1200);

console.log(`${dev1.name} salary is ${dev1.getSalary()}`);
console.log(`${dev2.name} salary is ${dev2.getSalary()}`);

dev1.increaseSalary(500, 'abracadabra');
dev2.increaseSalary(100, '123');

console.log(`${dev1.name} salary after promotion is ${dev1.getSalary()}`);
console.log(`${dev2.name} salary after promotion is ${dev2.getSalary()}`);