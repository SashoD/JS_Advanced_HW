// // create 'Car' constructor
// var Car = function(manufacturer, speed){
//     this.manufacturer = manufacturer || undefined;
//     this.speed= speed || 100;
//   }
//   Car.prototype= {
//     drive: function(){
//       if (this.wings >= 2){
//         console.log(`Flying wiht ${this.speed} km/h`);
//       }else{
//         console.log(`Driving wiht ${this.speed} km/h`);
//       }
//     }
//   }

//   // create 'Ford' constructor
//   var Ford = function( speed){
//     var manufacturer = 'Ford';
//     // use the parent constructor
//     Car.apply(this, [manufacturer, speed]);
//   }
//   // set the prototype chain
//   Ford.prototype.__proto__ = Car.prototype;

//   // create 'ford' object
//   var ford = new Ford(200);

//   // create 'theFordOfPesho' object
//   var theFordOfPesho = new Ford(300);
//   theFordOfPesho.wings = 2;

//   ford.drive();
//   theFordOfPesho.drive();

var car = {
  manufacturer: undefined,
  speed: 100,
  drive: function () {
    if (this.wings >= 2) {
      console.log(`Flying wiht ${this.speed} km/h`);
    } else {
      console.log(`Driving wiht ${this.speed} km/h`);
    }
  },
};

// create the 'ford' object
var ford = {
  // make 'ford' to inherit from 'car'
  __proto__: car,
  manufacturer: "Ford",
  speed: 200,
};

// create 'theFordOfPesho' object
var theFordOfPesho = {
  // make 'theFordOfPesho' to inherit from 'ford'
  __proto__: ford,
  wings: 2,
  speed: 300,
};

ford.drive();
theFordOfPesho.drive();
//   Prototypal Inheritance of Object Literals using '__proto__' - notes
//   Be careful when using __proto__
//   Prototype_mutation on MDN
//   Do not use __proto__ outside of object literals!
//   Prototypal Inheritance of Object Literals using '__proto__' - diagram

//   Reference
//   Reference
//   More on __proto__, [[prototype]] and prototype
