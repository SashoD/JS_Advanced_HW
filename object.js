// let studentArr = ['Pesho','Petrov']

// var student1 = {
//     firstName : 'Pesho',
//     secondName : 'Petrov',


// }

// var apple = {
//     color: 'red',
//     price: [23.5, 22, 25],
//     calcMinPrice: function () {
//         return Math.min(...this.price);
//     },
//     calcMaxPrice: function () {
//         return Math.max(...this.price);
//     }
// };

// console.log('apple object', apple);
// console.log('apple min price', apple.calcMinPrice());

// var student1 = {
//     firstname: 'Pesho',
//     secondName: 'Petrov',
//     addres: {
//         'country': 'BG',
//         'city': 'Sofia'
//     },
//     greet: function () {
//         console.log(`Hello I'm ${this.firstname} ${this.secondName}. I'm from ${this.addres.city}`);
//     }
// };

// student1.greet();

// function StudentMaker(firstName, secondName, address) {
//     let obj = {};

//     obj.firstName = firstName;
//     obj.secondName = secondName;
//     obj.address = address;
//     obj.greet = function () {
//         console.log(`Hello I'm ${this.firstName} ${this.secondName}. I'm from ${this.address}`);
//     }
//     return obj;
// };

// let student1 = StudentMaker('Pesho', 'Petrov', 'Sofia')
// student1.greet();

// function PlayerMaker(firstName, secondName, club) {
//     let obj = {};
//     obj.firstName = firstName;
//     obj.secondName = secondName;
//     obj.club = club;
//     obj.greet = function () {
//         console.log(`Hello I'm ${this.firstName} ${this.secondName}. I'm from ${this.club}`);
//     }
//     return obj;
// };

// let player1 = PlayerMaker('Cristiano', 'Ronaldo', 'Man. United');
// player1.greet()

// function PlayerCreator(firstName, lastName, position, goals) {
//     let obj = {};

//     obj.firstName = firstName;
//     obj.lastName = lastName;
//     obj.position = position;
//     obj.goals = goals;

//     obj.msg = function () {
//         console.log(`Player Name: ${this.firstName} ${this.lastName}, Position: ${this.position}, Goals: ${this.goals}`);
//     }

//     return obj;
// };

// let player1 = PlayerCreator('Cristiano', 'Ronaldo', 'FW', '10')
// let player2 = PlayerCreator('Raul', 'Gonsales', 'FW', '6')

// player1.msg();
// player2.msg();

// function studentFactory(firstName, secondName, address) {
//     return {
//         firstName: firstName,
//         secondName: secondName,
//         address: address,
//         greet: function () {
//             console.log(`Hello I'm ${this.firstName} ${this.secondName}. I'm from ${this.address.country} and my home city is ${this.address.town}`);
//         }
//     }
// }

// let student1 = studentFactory('Pesho', 'Petrov', { country: 'BG', town: 'Sofia' })
// let student2 = studentFactory('Maria', 'Petrova', { country: 'UK', town: 'London' });

// student1.greet();
// student2.greet();

function studentFactory(firstName, secondName, address) {
    let obj = {};

    let _firstName;

    obj.setName = function (newName) {
        console.log('Log that the name is changed')
        _firstName = newName;
    }

    obj.getName = function () {
        return _firstName;
    }

    // obj.firstName = firstName;
    obj.setName(firstName)
    obj.secondName = secondName;
    obj.address = address;
    obj.greet = function () {
        console.log(`Hello I'm ${this.getName()} ${this.secondName}. I'm from ${this.address}`);
    }

    return obj;
}


let student1 = studentFactory('Pesho', 'Petrov', { country: 'BG', town: 'Sofia' })
let student2 = studentFactory('Maria', 'Petrova', { country: 'UK', town: 'London' });

student1.greet();
student2.greet();

student1.setName('Petar');
console.dir(student1);

console.log(student1.getName());