// var cats = [];

// for (let i = 1; i < 3; i++) {
//     (function (j) {
//         cats[j] = function () {
//             console.log(`CAT ${j} is ready`);
//         }
//     })(i)

// };

// cats[1]();
// cats[2]();
// cats[3]();

// function catMaker(i) {
//     return function () {
//         console.log(`CAT ${i} is ready`);
//     }
// };

// for (let i = 0; i < 3; i++) {
//     cats[i] = catMaker(i);

// };

// cats[0]();
// cats[1]();
// cats[2]();

// var colors = ["red", "green", "blue"];
// var box = document.querySelector('.box');

// function changeBG(color) {
//     box.style.background = color;
// }

// for (var i = 0; i < colors.length; i++) {
//     setTimeout(function () {
//         console.log(`i:${i}`);
//         changeBG(colors[i]);ñ
//     }, 1000 * i)
// }

function power(base, exponent) {
    if (exponent == 0)
        return 1;
    else
        return base * power(base, exponent - 1);
}

console.log(power(2, 10));