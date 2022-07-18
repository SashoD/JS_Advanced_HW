// function foo() {
//     console.log(this);
// };

// let obj = {id:1}

// foo.apply('this');

function Constructor(id) {
    this.id = id;
    this.helloCounter = 0;

    function _sayHello(){
        this.helloCounter++;
    };

    this._sayHello = function () {
        _sayHello.apply(this);
        console.log(`Said Hello ${this.helloCounter} times`);
    }
}

var obj1 = new Constructor(1);
obj1._sayHello();
obj1._sayHello();