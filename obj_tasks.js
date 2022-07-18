// var student = {
//     name: "David Rayy",
//     sclass: "VI",
//     rollno: 12
// };

// function _keys(obj) {
//     if (!isObject(obj)) return [];
//     if (Object.keys) return Object.keys(obj);
//     var keys = [];
//     for (var key in obj) if (_.has(obj, key)) keys.push(key);
//     return keys;
// }
// function isObject(obj) {
//     var type = typeof obj;
//     return type === 'function' || type === 'object' && !!obj;
// }
// console.log(_keys({ red: "#FF0000", green: "#00FF00", white: "#FFFFFF" }));

// const cat = {
//     name: 'Bertie',
//     breed: 'Cymric',
//     color: 'white',
//     greeting: function () {
//         console.log('Meow!');
//     }
// }
// catName = cat.name;
// console.log(catName);
// cat.greeting();
// catColor = cat.color;
// catColor = 'black';
// console.log(catColor);

function BandMaker(name, nationality, genre, members) {
    let obj = {};
    obj.name = name;
    obj.nationality = nationality;
    obj.genre = genre;
    obj.members = members;
    obj.GetBand = function GetBand() {
        console.log(`Band: ${this.name} ${this.genre} ${this.nationality} Members: ${this.members.vocal} ${this.members.Piano}`);
    }

    return obj;
};

let band1 = BandMaker('linkin park', 'USA', 'new metal', { vocal: 'Chester Bennington', Piano: 'Mike Shinoda' })
band1.GetBand();






// Don't edit the code below here

// let para1 = document.createElement('p');
// let para2 = document.createElement('p');

// para1.textContent = `The cat's name is ${catName}.`;
// para2.textContent = `The cat's color is ${cat.color}.`;

// section.appendChild(para1);
// section.appendChild(para2);
